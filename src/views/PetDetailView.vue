<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed, type ComputedRef, ref} from "vue";
import {usePetsStore} from "@/stores/pets.ts";
import type {Pet} from "@/types/pet.ts";
import {formatDate} from "../utils/date.ts";

const route = useRoute();
const petStore = usePetsStore();

const petId = route.params.id as string;

const isLoading = ref(false);

const pet: ComputedRef<Pet | undefined> = computed(() => {
  return petStore.pets.find((pet) => petId === pet.id);
});

const updatePetStatus = () => {
  isLoading.value = true;
  petStore.updateAdoptedStatusById(petId, true).finally(() => {
    isLoading.value = false;
  });
}

const welcomeMessage = computed(() => {
  if (pet.value?.adopted) {
    return 'Jeg er adopteret'
  } else {
    return `Jeg hedder ${pet.value?.name}, ${pet.value?.age} år`
  }
});
</script>

<template>
  <div v-if="pet">
    <div class="petView">
      <div class="petContainer">
        <div class="petInfo">
          <h1>{{ welcomeMessage }}</h1>
          <p>{{ pet.description }}</p>
          <p>Oprettet: {{ formatDate(pet.createdAt) }}</p>
        </div>
        <div class="buttonContainer">
          <button v-if="!pet.adopted" :disabled="isLoading" @click="updatePetStatus" class="adoptButton">
            Adoptér
          </button>
        </div>

      </div>
      <div class="petImage">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nqz5KC9GCO4n2eJyTz2tYyzMD09PWH69Bw&s"
          alt="">
      </div>
    </div>
  </div>
  <div v-else>
    <h1>DYR er VÆK?</h1>
  </div>
</template>

<style scoped lang="scss">
.petView {
  display: flex;
   //border: solid 1px black;
  justify-content: center;
  width: 100%;
  height: 100%;

  .petContainer {
    //border: 1px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .petInfo {
      margin-right: 20px;
      //border: 1px solid red;
    }

    .buttonContainer {
      //border: 1px solid yellow;
      display: flex;
      justify-content: center;

      .adoptButton {
        font-size: 16px;
        padding: 15px 50px;
      }
    }

    .petImage {
      position: relative;
    }
  }
}

</style>
