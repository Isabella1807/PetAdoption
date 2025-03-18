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
  <h1>App View</h1>
  <header>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
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
