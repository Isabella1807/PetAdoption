<script setup lang="ts">
import { useRoute } from "vue-router";
import {onMounted} from "vue";
import {usePetsStore} from "@/stores/pets.ts";

const route = useRoute();
const petStore = usePetsStore();

onMounted(() => {
petStore.getPetByIdFromDB(route.params.id as string);
})
</script>

<template>
<h1>PET DETAUL VIEW</h1>
  <p>{{route.params.id}}</p>
</template>

<style scoped>

</style>
