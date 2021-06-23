<template>
  <select @change="itemSelected(e)">
    <option value=''>{{ defaultText }}</option>
    <option
      v-for='item in items'
      :key='item.id'
      :value='item.id'
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'Dropdown',
    props: [
      'defaultText',
      'items'
    ],
    methods: {
      itemSelected(e) {
        console.log('New option selected: ', e.target)
      }
    }
  }
</script>

<style scoped>
  select {
    padding: var(--default-padding);
    margin: var(--default-padding);
    background-color: var(--secondary);
    color: var(--light-text);
    border-style: none;
    border-radius: var(--default-border-radius);
    font-size: 1rem;
  }
  select:hover {
    cursor: pointer;
    background-color: var(--success);
    color: var(--light-text);
  }
</style>
