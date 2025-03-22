<script setup lang="ts">
import {usePetsStore} from "@/stores/pets.ts";
import PetCard from "@/components/PetCard.vue";

const petsStore = usePetsStore();

</script>

<template>
  <h2>Dyr du kan adoptere</h2>
  <div class="petCardContainer">
    <PetCard v-for="pet in petsStore.pets" :key="pet.id" :petId="pet.id" :petName="pet.name" :petAge="pet.age" :petCreated="pet.createdAt" :petAdopted="pet.adopted"/>
  </div>
</template>

<style scoped>
.petCardContainer{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
