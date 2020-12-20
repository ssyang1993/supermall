<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive">
        <slot name="item-png"></slot>
      </div>
      <div v-else>
        <slot name="item-png-pink"></slot>
      </div>
      <div :style="activeStyle">
        <slot name="item-text" ></slot>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabBaritem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        //isActive: true,
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item img {
    width:20px;
    height:20px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size:16px
  }
</style>
