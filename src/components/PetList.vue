<script setup lang="ts">
import {usePetsStore} from "@/stores/pets.ts";
import PetCard from "@/components/PetCard.vue";

const petsStore = usePetsStore();

</script>

<template>
  <h2>Dyr du kan adoptere</h2>
  <div v-for="pet in petsStore.pets" :key="pet.id">
    <PetCard :petId="pet.id" :petName="pet.name" :petAge="pet.age" :petCreated="pet.createdAt" :petAdopted="pet.adopted"/>
  </div>


</template>

<style scoped>

</style>
