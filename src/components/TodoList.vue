<template>
  <div class="wrap">
   <ul class="primary">
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

<style lang="scss">
@import '@/styles/variables.scss';
.wrap {
  .primary {
    background-color: $accent-blue;
  }
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
