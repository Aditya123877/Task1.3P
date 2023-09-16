<template>
    <div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>

    </div>
  </template>
  
  <script>
  export default {
    methods: {
      increment() {
        this.$emit("increment");
      },
      decrement() {
      this.$emit("decrement");
    }
    }
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  