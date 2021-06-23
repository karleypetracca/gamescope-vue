<template>
  <header v-if='!gameSet'>
    <img src='../assets/GameScope-logo.png' />
    <em>Keep the release date in your crosshairs</em>
  </header>
  <main v-if='!gameSet'>
    <Dropdown defaultText='Year' items='yearList'/>
    <Dropdown defaultText='Month' items='monthList'/>
    <Dropdown defaultText='Platform' items='platformList'/>
    <p>List: {{yearList}}</p>
  </main>
  <p v-if='gameSet'>Game set {{ gameSet }} - show details! </p>
</template>

<script>
  import { Dropdown } from './partials/Dropdown.vue';
  import {
    yearList,
    monthList,
    platformList
  } from '../utilities/contentFilterSettings';

  let gameSet = '';

  export default {
    name: 'Content',
    components: {
      Dropdown
    }
  }
  console.log(gameSet);
  console.log(yearList);
  console.log(monthList);
  console.log(platformList);
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
  }
  header > * {
    font-size: 1.5rem;
  }
  img {
    max-width: 30rem;
  }
</style>
