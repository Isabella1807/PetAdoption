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
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
</style>
