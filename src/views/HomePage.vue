<template>
  <div>
    <h1>Home Page</h1>
    <p>This is the Home Page.</p>
    <slot></slot> <!-- A slot for dynamic content from the parent -->
  </div>
</template>



<style>
h1 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #555;
  margin-top: 10px;
}
</style>
  