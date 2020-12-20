<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--轮播图-->
    <div id="lb">
      <div id="bj">
        <div v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </div>
      </div>
    </div>

    <!--热品推荐-->
    <home-tui-jian :recommends="recommends"></home-tui-jian>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";
  import HomeTuiJian from "./childComs/HomeTuiJian";
  export default {
    name: "home",
    components: {
      NavBar,
      HomeTuiJian
    },
    data (){
      return {
        banners: [],
        recommends: []
      }
    },
    //声明周期函数，创建完毕之后赶紧请求
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        //console.log(res);
        //保存数据  //不容类型的数据通过不同的变量保存
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      this.lb()
    },
    methods: {
      lb() {
        //document.getElementById("bj").width = (this.banners.length)*100 + 'vw'
      }
    }
  }
  //调用轮播

</script>

<style scoped>
  .home-nav{
    background-color: hotpink;
    color: #ffffff;
  }

  /*轮播*/
  #lb {
    width:100vw;
    overflow:hidden
  }
  #lb #bj {
    width:400vw
  }
  #lb a{
    float:left
  }
  #lb img{
    width:100vw;
  }
</style>