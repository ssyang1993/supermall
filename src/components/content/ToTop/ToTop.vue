<template>
  <div class="to-top">
    <h1>top</h1>
  </div>
</template>

<script>
  export default {
    name: "ToTop",
    methods: {

    }
  }
</script>

<style scoped>
  h1 {
    background-color: #ddd;
    display: inline-block;
    text-align: center;
    width:55px;
    height:55px;
    line-height: 50px;
    border-radius: 50%;
    position: fixed;
    right:10px;
    bottom: 60px;
  }
</style>