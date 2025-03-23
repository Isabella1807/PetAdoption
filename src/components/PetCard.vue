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
  <div class="petCard" :class="{'adopted': petAdopted}" @click="goToPet">
    <div class="petContainer">
      <div class="petImageContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nqz5KC9GCO4n2eJyTz2tYyzMD09PWH69Bw&s"
          alt="">
      </div>
      <p v-if="petAdopted" class="adoptedTag">ADOPTERET</p>

    </div>
    <div class="petNameTag">
      <p class="tagText">{{ petTag }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.petCard {
  background-color: $tester;
  //max-width: 400px;
  width: 100%;
  border: 3px solid black;
  position: relative;


  &:hover {
    cursor: pointer;
  }

  .petContainer {
    .adoptedTag {
      position: absolute;
      color: #0dff2d;
      font-size: 24px;
      font-weight: bold;
    }

    .petImageContainer {
      width: 100%;
      height: 100%;
      aspect-ratio: 3/4;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .petNameTag {
    //border: 1px solid yellow;
    border: 3px solid black;
    border-radius: 20px;
    min-width: 50%;
    margin: auto;
    background-color: white;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);

    .tagText{
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }

  &.adopted {
    .petContainer {
      position: relative;

      .adoptedTag {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .petImageContainer {
        position: relative;

        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #9e9e9e;
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
