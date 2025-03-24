import {defineStore} from "pinia";
import {type Pet} from "../types/pet.ts";
import {type Ref, ref} from "vue";
import {collection, getDocs, addDoc, doc, getDoc, orderBy, query, updateDoc} from 'firebase/firestore';
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
      resolve({id: petId, ...data.data()} as Pet);
    }).catch((err) => {
      reject(err);
    })
  })

  const addPetsToDB = ({name, type, age, description}: Partial<Pet>) => {
    addDoc(collection(db, 'pets'), {
      type,
      name,
      age,
      description,
      adopted: false,
      createdAt: Date.now(),
    }).then( async (data) => {
      const newPet = await getPetByIdFromDB(data.id);
      //Adds single
      pets.value.push(newPet)
    })
    //fetches ALL
    //getPetsFromDB();
  }

  const updateAdoptedStatusById = (petId: Pet["id"], status: Pet["adopted"]): Promise<void> => new Promise((resolve, reject) => {
    updateDoc(doc(db, 'pets', petId), {adopted: status}).then((data) => {

      const a = pets.value.findIndex((item) => item.id === petId);
      pets.value[a].adopted = status;

      resolve();
    }).catch((err) => {
      reject(err);
    })
  })

  return {
    pets,
    getPetsFromDB,
    addPetsToDB,
    getPetByIdFromDB,
    updateAdoptedStatusById
  }
});
