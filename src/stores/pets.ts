import {defineStore} from "pinia";
import {type Pet} from "../types/pet.ts";
import {type Ref, ref} from "vue";
import {collection, getDocs, addDoc, doc, getDoc, orderBy, query} from 'firebase/firestore';
import {db} from "@/config/firebaseConfig.ts";


export const usePetsStore = defineStore('pets', () => {
  const pets: Ref<Pet[]> = ref([]);

  const getPetsFromDB = () => {
    const q = query(collection(db, 'pets'), orderBy("createdAt"));

    getDocs(q).then((data) => {
      pets.value = data.docs.map((item) => ({ id: item.id, ...item.data() } as Pet));
    });
  }

  const getPetByIdFromDB = (petId: Pet["id"]): Promise<Pet> => new Promise((resolve, reject) => {
    getDoc(doc(db, 'pets', petId)).then((data) => {
      resolve(data.data() as Pet);
    }).catch((err) => {
      reject(err);
    })
  })

  const addPetsToDB = ({name, type, age, description}: Partial<Pet>) => {
    console.log(name, type, age, description);
    addDoc(collection(db, 'pets'), {
      type,
      name,
      age,
      description,
      adopted: false,
      createdAt: Date.now(),
    })
  }

  return {
    pets,
    getPetsFromDB,
    addPetsToDB,
    getPetByIdFromDB
  }
});
