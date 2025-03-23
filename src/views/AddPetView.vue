<script setup lang="ts">
import {usePetsStore} from "@/stores/pets.ts";
import {type Pet} from "@/types/pet.ts";
import {ref, type Ref} from "vue";

const petStore = usePetsStore();

const petType: Ref<Pet["type"]> = ref('');
const petName: Ref<Pet["name"]> = ref('');
const petAge: Ref<Pet["age"]> = ref(0);
const petDescription: Ref<Pet["description"]> = ref('');

const addPetData = () => {
  const petData: Partial<Pet> = {
    name: petName.value,
    type: petType.value,
    age: petAge.value,
    description: petDescription.value,
  }

  petStore.addPetsToDB(petData)

  petName.value = '';
  petType.value = '';
  petAge.value = 0;
  petDescription.value = '';
}
</script>

<template>
  <form @submit.prevent="" class="addPetForm">
    <div class="formRow">
      <label class="inputLabel">Navn:</label>
      <input type="text" v-model="petName" class="inputField">
    </div>
    <div class="formRow">
      <label class="inputLabel">Type:</label>
      <select type="text" v-model="petType" class="inputField">
        <option value="dog">Hund</option>
        <option value="cat">Kat</option>
        <option value="rabbit">Kanin</option>
        <option value="guinea-pig">Marsvin</option>
        <option value="snake">Slange</option>
        <option value="bird">Fugl</option>
        <option value="other">Øvrige</option>
      </select class="inputField">
    </div>
    <div class="formRow">
      <label class="inputLabel">Age:</label>
      <input type="number" v-model="petAge" class="inputField">
    </div>
    <div class="formRow">
      <label class="inputLabel">Description:</label>
      <input type="text" v-model="petDescription" class="inputField">
    </div>
    <button @click="addPetData()" class="addPetButton">Tilføj dyr</button>
  </form>
</template>

<style scoped lang="scss">
.addPetForm {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;

  .formRow {
    display: flex;
    flex-direction: column;
    //border: 1px solid green;
    margin-bottom: 20px;

    .inputLabel {
      font-size: 24px;
    }

    .inputField {
      font-size: 24px;
      padding: 20px 20px;
    }
  }

  .addPetButton {
    margin-top: 20px;
    padding: 20px 40px;
    font-size: 24px;
  }
}
</style>
