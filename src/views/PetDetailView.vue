<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref, type Ref} from "vue";
import {usePetsStore} from "@/stores/pets.ts";
import type {Pet} from "@/types/pet.ts";
import {formatDate} from "../utils/date.ts";

const route = useRoute();
const petStore = usePetsStore();

const pet: Ref<Pet | null> = ref(null);
const petId = route.params.id as string;

onMounted(async () => {
  pet.value = await petStore.getPetByIdFromDB(petId);
  console.log(pet);
})

const updatePetStatus = () => {
  petStore.updateAdoptedStatusById(petId, true).then(() => {
    if (pet.value) {
      pet.value.adopted = true;
    }
  })
}


</script>

<template>
  <div v-if="pet">
    <div class="petView">
      <div>
        <div>
          <h1>Jeg hedder {{ pet.name }}, {{pet.age}} år</h1>
          <p>{{pet.description}}</p>
          <p>Oprettet: {{formatDate(pet.createdAt)}}</p>
        </div>

        <div>
          <button v-if="!pet.adopted" @click="updatePetStatus">
            Adoptér
          </button>
        </div>
      </div>
      <div class="petImage">
        <p v-if="pet.adopted" class="petAdoptedTag">ADOPTERET</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nqz5KC9GCO4n2eJyTz2tYyzMD09PWH69Bw&s" alt="">
      </div>
    </div>
  </div>
  <div v-else>
    <h1>DYR er VÆK?</h1>
  </div>
</template>

<style scoped>
.petView{
  display: flex;
  border: solid 1px black;
  .petImage{
    position: relative;
    .petAdoptedTag{
      position: absolute;
    }
  }

}
</style>
