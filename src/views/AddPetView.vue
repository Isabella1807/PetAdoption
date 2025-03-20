<script setup lang="ts">
import { usePetsStore } from "@/stores/pets.ts";
import { type Pet } from "@/types/pet.ts";
import {ref, type Ref} from "vue";

const petStore = usePetsStore();

const petType: Ref<Pet["type"]> = ref('');
const petName: Ref<Pet["name"]> = ref('');
const petAge: Ref<Pet["age"]> = ref(0);
const petDescription: Ref<Pet["description"]> = ref('');

const addPetData = () => {
  const petData: Partial<Pet> = {
    name: petName.value,
    type: petType.value,
    age: petAge.value,
    description: petDescription.value,
  }

  petStore.addPetsToDB(petData)

  petName.value = '';
  petType.value = '';
  petAge.value = 0;
  petDescription.value = '';
}
</script>

<template>
  <form @submit.prevent="">
    <label>Navn:</label>
    <input type="text" v-model="petName">

    <label>Type:</label>
    <select type="text" v-model="petType">
      <option value="dog">Hund</option>
      <option value="cat">Kat</option>
      <option value="rabbit">Kanin</option>
      <option value="guinea-pig">Marsvin</option>
      <option value="snake">Slange</option>
      <option value="bird">Fugl</option>
      <option value="other">Øvrige</option>
    </select>

    <label>Age:</label>
    <input type="number" v-model="petAge">

    <label>Description:</label>
    <input type="text" v-model="petDescription">

    <button @click="addPetData()">STOR KNAP</button>
  </form>
</template>

<style scoped>

</style>
