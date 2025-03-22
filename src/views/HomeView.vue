<script setup lang="ts">

</script>

<template>
  <main>
    <div class="mainContainer">
      <h1>VELKOMMEN!</h1>
      <p>
        Her finder du din bedsteven
      </p>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-content: center;
  justify-content: center;

  .mainContainer {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 3rem;
    }
    p{
      font-size: 2rem;
    }
  }
}
</style>
