<script setup lang="ts">
import { usePetsStore } from "@/stores/pets.ts";
import { Pet } from "@/types/pet.ts";
import {ref, Ref} from "vue";

const petStore = usePetsStore();

const petType: Pet["type"] = ref('');
const petName: Ref<Pet["name"]> = ref('');

</script>

<template>
  <form @submit.prevent="">
    <input type="text" v-model="petName">
    <button @click="petStore.addPetsToDB()">STOR KNAP</button>
  </form>
</template>

<style scoped>

</style>
