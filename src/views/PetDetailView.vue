<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref, type Ref} from "vue";
import {usePetsStore} from "@/stores/pets.ts";
import type {Pet} from "@/types/pet.ts";

const route = useRoute();
const petStore = usePetsStore();

const pet: Ref<Pet | null> = ref(null);

onMounted(async () => {
  pet.value = await petStore.getPetByIdFromDB(route.params.id as string);
  console.log(pet);
})

</script>

<template>
  <div v-if="pet">
    <h1>Jeg hedder {{ pet.name }}</h1>
    <p>{{ route.params.id }}</p>
  </div>
  <div v-else>
    <h1>DYR er VÆK?</h1>
  </div>
</template>

<style scoped>

</style>
