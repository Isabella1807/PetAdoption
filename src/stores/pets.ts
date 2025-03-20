import {defineStore} from "pinia";
import {type Pet} from "../types/pet.ts";
import {type Ref, ref} from "vue";
import {collection, getDocs, addDoc, doc, getDoc} from 'firebase/firestore';
import {db} from "@/config/firebaseConfig.ts";


export const usePetsStore = defineStore('pets', () => {
  const pets: Ref<Pet[]> = ref([]);

  const getPetsFromDB = () => {
    getDocs(collection(db, 'pets')).then((data) => {
      pets.value = data.docs.map((item) => ({ id: item.id, ...item.data() } as Pet));
    });
  }

  const getPetByIdFromDB = (petId: Pet["id"]) => {
    getDoc(doc(db, 'pets', petId)).then((data) => {
      console.log(data.data());
    }).catch((err) => {
      console.log(err);
    })
  }

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
