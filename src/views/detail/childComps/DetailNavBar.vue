<template>
  <nav-bar>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles" class="title-item"
           :class="{active: index === currentIndex}"
      @clic="titleClick">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','评论','推荐','评论',],
        currentIndex: 0
      }
    },
    methods: {
      titleClick (index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }

  .title-item {
    flex: 1
  }

  .active {
    color: lightpink;
  }
</style>