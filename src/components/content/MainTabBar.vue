<template>
  <tab-bar>
    <tab-baritem path="/home" activeColor="blue">
      <img slot="item-png" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-png-pink" src="~assets/img/tabbar/homep.png" alt="">
      <div slot="item-text">首页</div>
    </tab-baritem>
    <tab-baritem path="/my">
      <img slot="item-png" src="~assets/img/tabbar/my.png" alt="">
      <img slot="item-png-pink" src="~assets/img/tabbar/myp.png" alt="">
      <div slot="item-text">我的</div>
    </tab-baritem>
    <tab-baritem path="/car">
      <img slot="item-png" src="~assets/img/tabbar/car.png" alt="">
      <img slot="item-png-pink" src="~assets/img/tabbar/carp.png" alt="">
      <div slot="item-text">物流</div>
    </tab-baritem>
    <tab-baritem path="/sp">
      <img slot="item-png" src="~assets/img/tabbar/sp.png" alt="">
      <img slot="item-png-pink" src="~assets/img/tabbar/spp.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-baritem>
    <tab-baritem path="/lei">
      <img slot="item-png" src="~assets/img/tabbar/lei.png" alt="">
      <img slot="item-png-pink" src="~assets/img/tabbar/leip.png" alt="">
      <div slot="item-text">分类</div>
    </tab-baritem>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBaritem from "components/common/tabbar/TabBaritem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBaritem 
    }
  }
</script>

<style scoped>

</style>
