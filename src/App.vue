<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  width: 100%;
  /* height: 100vh; */
  background-color: #6f9436;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
