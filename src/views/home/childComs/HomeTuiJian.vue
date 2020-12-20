<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeTuiJian",
    props: {
      recommends:{
        type: Array,
        default (){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    margin:20px 0
  }
  .recommend img{
    width:80%;
    margin-bottom: 10px;
  }
  .recommend>div{
    flex:1
  }
</style>