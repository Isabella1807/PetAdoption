<script setup lang="ts">
import {usePetsStore} from "@/stores/pets.ts";
import PetCard from "@/components/PetCard.vue";

const petsStore = usePetsStore();

</script>

<template>
  <h2>Dyr du kan adoptere</h2>
  <div class="abc">
    <div class="petCardsContainer">
      <PetCard v-for="pet in petsStore.pets" :key="pet.id" :petId="pet.id" :petName="pet.name"
               :petAge="pet.age" :petCreated="pet.createdAt" :petAdopted="pet.adopted"/>
    </div>
  </div>
</template>

<style scoped>
h2{
  text-align: center;
  margin-bottom: 2rem;
}

.abc {
  width: 100%;
  display: flex;
  justify-content: center;

  .petCardsContainer {
    display: grid;
    width: 75%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
}

</style>
