<template>
  <div class="wrap">
   <ul>
     <li>hello1</li>
     <li>hello2</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList'
}
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  width: 327px;
  margin: 0 auto;
}
li {
  font-size: 24px;
  line-height: 60px;
}
</style>
