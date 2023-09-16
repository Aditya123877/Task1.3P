<template>
    <div>
      <h2>Item List</h2>
      
      <!-- Display a list of items using v-for -->
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      
      <!-- Toggle the display of the list using v-if -->
      <button @click="toggleList">Toggle List</button>
      
      <!-- Input field with v-model to update a data property -->
      <input type="text" v-model="newItem" @keyup.enter="addItem" placeholder="Add a new item" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          // Add more items as needed
        ],
        showList: true,
        newItem: "",
      };
    },
    methods: {
      toggleList() {
        this.showList = !this.showList;
      },
      addItem() {
        if (this.newItem.trim() !== "") {
          this.items.push({ id: this.items.length + 1, name: this.newItem });
          this.newItem = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  