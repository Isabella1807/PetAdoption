<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {usePetsStore} from "@/stores/pets.ts";
import {onMounted} from "vue";

const petStore = usePetsStore();

onMounted(() => {
  petStore.getPetsFromDB()
})
</script>

<template>
  <header>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pets">Se alle dyr</RouterLink>
        <RouterLink to="/add">Tilføj dyr</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
.nav{
  display: flex;
  gap: 20px;
}
</style>
