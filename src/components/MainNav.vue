<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <header>
    <RouterLink to="/" class="logo">
      <h1 class="logo">PetAdopt</h1>
    </RouterLink>

    <nav class="nav">
      <RouterLink to="/" class="navItem">Hjem</RouterLink>
      <RouterLink to="/pets" class="navItem">Se alle dyr</RouterLink>
      <RouterLink to="/add" class="navItem">Tilføj dyr</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  -webkit-box-shadow: -1px -10px 19px 7px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px -10px 19px 7px rgba(0,0,0,0.75);
  box-shadow: -1px -10px 19px 7px rgba(0,0,0,0.75);
  margin-bottom: 2rem;

  .logo {
    color: black;
    text-decoration: none;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;

    .navItem {
      text-decoration: none;
      color: black;
      font-size: 1.6rem;
      margin-left: 1rem;

      &.router-link-active {
        color: blueviolet;
        text-decoration: underline;
      }
    }
  }
}

</style>
