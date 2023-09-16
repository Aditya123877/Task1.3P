<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <h1>Vue Project with Basic Concepts</h1>
    <p>Counter: {{ counter }}</p>
    
    <!-- CounterButton component -->
    <CounterButton @increment="incrementCounter" @decrement="decrementCounter" />
    
    <!-- ItemList component -->
    <ItemList />
    <!-- Router View to display Home or About page -->
    <router-view></router-view>
    
    <!-- Example of a table -->
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>John</td>
        <td>30</td>
      </tr>
      
      <tr>
        <td>Ray</td>
        <td>32</td></tr>
        <tr>
          <td>James</td>
          <td>19</td></tr> 
          <tr>
            <td>Robert</td>
            <td>45</td></tr>
    </table>
    
    <header>
      <router-link to="/">Home Page</router-link> |
      <router-link to="/about">About</router-link>
    </header>

    <!-- Router View to display Home or About page -->
    <router-view></router-view>
  </div>
</template>

<script>
import CounterButton from "./components/CounterButton.vue";
import ItemList from "./components/ItemList.vue";

export default {
  components: {
    CounterButton,
    ItemList, // Include the ItemList component
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
  },
};
</script>

<style scoped>
/* Import an external CSS file */
@import "@/assets/styles.css";

/* Additional scoped styles for App.vue */
#app {
  text-align: center;
  margin-top: 2rem;
}
/* Styles for the h1 element */
h1 {
  font-size: 24px;
  color: #333;
}

/* Styles for the p element */
p {
  font-size: 18px;
  color: #555;
  margin-top: 10px;
}

/* Styles for the table */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th, table td {
  padding: 8px 12px;
  border: 1px solid #ccc;
  text-align: left;
}
</style>

