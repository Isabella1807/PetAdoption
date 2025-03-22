<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import {usePetsStore} from "@/stores/pets.ts";
import {onMounted} from "vue";
import MainNav from "@/components/MainNav.vue";

const petStore = usePetsStore();

onMounted(() => {
  petStore.getPetsFromDB()
})
</script>

<template>
  <MainNav/>
  <RouterView/>
</template>

<style scoped>
</style>
