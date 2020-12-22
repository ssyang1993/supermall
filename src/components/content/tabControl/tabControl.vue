<template>
  <!---->
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index == currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        //控制选中选项变红 加下划线的变量
        currentIndex: 0
      }
    },
    methods: {
      itemClick (index){
        this.currentIndex = index
        //向外传递数据 事件发射
        this.$emit("tabClick",index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display:flex;
    text-align:center;
    font-size: 18px;
    height: 40px;
    line-height: 40px
  }

  .tab-control div {
    flex: 1;
  }

  .active {
    color: lightpink;
  }

  .active span {
    padding:5px 3px;
    border-bottom: 3px solid lightpink
  }
</style>