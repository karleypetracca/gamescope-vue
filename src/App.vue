<template>
  <Navbar/>
  <Content/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Content from './components/Content.vue';

  export default {
    name: 'App',
    components: {
      Navbar,
      Content
    }
  }
</script>

<style>
  :root {
    --primary: rgb(49, 75, 122);
    --secondary: rgb(108, 117, 125);
    --light-text: rgb(255,255,255);
    --dark-text: rgb(33, 37, 41);
    --success: rgb(40, 167, 69);
    --fail: rgb(161, 12, 12);

    --default-padding: 0.5rem;
    --default-border-width: 2px;
    --default-border-radius: 4px;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    color: var(--dark-text);
    min-height: 100vh;
  }
</style>
