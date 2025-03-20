<script setup lang="ts">
import {computed} from "vue";
import router from "@/router";

interface Props {
  petId: string,
  petName: string,
  petAge: number,

}

const props = defineProps<Props>();

const petTag = computed(() => `${props.petName}, ${props.petAge} år`)

const goToPet = () => {
router.push(`/pets/${props.petId}`);
}

</script>

<template>
<div class="pet-card" @click="goToPet">
  <div class="pet-card__image-container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nqz5KC9GCO4n2eJyTz2tYyzMD09PWH69Bw&s" alt="">
  </div>
  <div>
    <p>{{ petTag }}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.pet-card {
  background-color: $tester;
  border: 1px solid red;

  &:hover {
    cursor: pointer;
  }
}
</style>
