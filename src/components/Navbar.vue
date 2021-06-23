<template>
  <div id='navbar'>
    <nav>
      <img src='../assets/GameScope-logo-icon.png' />
      <p>Home</p>
      <p>Last game visited</p>
      <p>About</p>
    </nav>
    <div id='searchbar'>
      <input placeholder='Search for specific game'/>
      <Button text='Search'/>
    </div>
  </div>
</template>

<script>
  import { Button } from './partials/Button';

  export default {
    name: 'Navbar',
    components: {
      Button
    }
  }
</script>

<style scoped>
  #navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;
    background-color: var(--primary);
    color: var(--light-text);
    font-size: 1.2rem;
  }
  nav {
    display: flex;
    align-items: center;
    text-decoration: none;
    list-style: none;
    height: 100%;
  }
  nav > * {
    padding: var(--default-padding);
    margin: auto;
  }
  img {
    height: 100%;
  }
  #searchbar {
    display: flex;
    justify-content: right;
    align-items: center;
  }
  #searchbar > input {
    padding: var(--default-padding);
    font-size: 1rem;
    width: 15rem;
    border-style: none;
    border-radius: var(--default-border-radius);
    border-width: var(--default-border-width);
    color: var(--dark-text);
  }
  #searchbar > button {
    font-size: 1rem;
  }
</style>