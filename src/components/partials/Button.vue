<template>
  <button @click='submit'>
    {{ text }}
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: ['text'],
    methods: {
      submit(e) {
        console.log('Button was clicked: ', e)
      }
    }
  }
</script>

<style scoped>
  button {
    padding: var(--default-padding);
    margin: var(--default-padding);
    background-color: var(--primary);
    color: var(--light-text);
    border-color: var(--success);
    border-style: solid;
    border-radius: var(--default-border-radius);
    border-width: var(--default-border-width);
  }
  button:hover {
    cursor: pointer;
    background-color: var(--success);
    color: var(--light-text);
  }
</style>
