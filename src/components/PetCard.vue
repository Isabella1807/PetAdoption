<script setup lang="ts">
import {computed} from "vue";
import router from "@/router";
import {formatDate} from "@/utils/date.ts";

interface Props {
  petId: string,
  petName: string,
  petAge: number,
  petCreated: number,
  petAdopted: boolean,
}

const props = defineProps<Props>();

const petTag = computed(() => `${props.petName}, ${props.petAge} år`)

const goToPet = () => {
  router.push(`/pets/${props.petId}`);
}

const date = formatDate(props.petCreated);

</script>

<template>
  <div class="pet-card" @click="goToPet">
    <div class="pet-card__image-container">
      <div>
        <p v-if="petAdopted">ADOPTERET</p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nqz5KC9GCO4n2eJyTz2tYyzMD09PWH69Bw&s"
          alt="">
      </div>

      <p>{{ date }}</p>
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
