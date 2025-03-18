import {defineStore} from "pinia";
import {type Pet} from "../types/pet.ts";
import {type Ref, ref} from "vue";
import {collection, getDocs, addDoc, doc} from 'firebase/firestore';
import {db} from "@/config/firebaseConfig.ts";


export const usePetsStore = defineStore('pets', () => {
  const pets: Ref<Pet[]> = ref([]);

  const getPetsFromDB = () => {
    getDocs(collection(db, 'pets')).then((data) => {
      pets.value = data.docs.map((item) => ({ id: item.id, ...item.data() } as Pet));
    });
  }

  const addPetsToDB = ({name, type}: Partial<Pet>) => {
    addDoc(collection(db, 'pets'), {
      type: "TypeHejsa",
      name: "Navnwompwomp",
    })
  }

  return {
    pets,
    getPetsFromDB,
    addPetsToDB
  }
});
