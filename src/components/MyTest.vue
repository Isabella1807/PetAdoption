<script setup lang="ts">
import {usePetsStore} from "@/stores/pets.ts";

const petsStore = usePetsStore();

</script>

<template>
  <h3>MINE DYR</h3>
  <!--  <div>
      {{ pets }}
    </div>-->
  <div v-for="pet in petsStore.pets" :key="pet.id">
    <h1>{{ pet }}</h1>
  </div>


</template>

<style scoped>

</style>
