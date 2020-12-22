<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!--control 02-->
    <tab-control class="tab-control tab-control2" :titles = '["流行","新款","精选"]'
                 @tabClick="tabClick" ref="tabControl2" v-show="isTabFixed"></tab-control>

    <!--在这里传入:probe-type 是为了 只给需求监听的组件 进行监听-->
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="contentPull"
            @scroll="contentScroll">
        <!--轮播图-->
        <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>

        <!--热品推荐-->
        <home-tui-jian :recommends="recommends"></home-tui-jian>

        <!--毫无推荐-->
        <home-liu-xing></home-liu-xing>

        <!--control-->
        <tab-control class="tab-control" :titles = '["流行","新款","精选"]'
                     @tabClick="tabClick" ref="tabControl"></tab-control>

        <!--goodslist-->
        <goods-list :goods="goods[currentIndex].list"></goods-list>
    </scroll>

    <!--回到顶部--><!--通过native修饰符，监听组件的事件-->
    <to-top  @click.native="topClick" v-show="isShowTop"></to-top>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/tabControl"
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";/*滚动插件*/
  import ToTop from "components/content/ToTop/ToTop";
  import HomeSwiper from "./childComs/HomeSwiper";

  import {
    getHomeMultidata,
    getHomeGoods,
  } from "network/home";
  import {debounce} from "common/utils";

  import HomeTuiJian from "./childComs/HomeTuiJian";
  import HomeLiuXing from "./childComs/HomeLiuXing";



  export default {
    name: "home",
    components: {
      NavBar,
      HomeTuiJian,
      HomeLiuXing,
      TabControl,
      GoodsList,
      Scroll,
      ToTop,
      HomeSwiper,
    },
    data (){
      return {
        banners: [],
        recommends: [],
        //决定taboffsettop吸顶高度
        tabOffsetTop: 0,
        //决定taboffsettop是否有fixed属性
        isTabFixed: false,
        //存放用于control里的列表数据
        goods: {
          //之所以这里加引号，是因为下面可以用数组[]的方式引用
          'pop': {page: 0, list : []},
          'new': {page: 0, list : []},
          'sell': {page: 0 ,list: []}
        },
        //点击切换   //默认是pop
        currentIndex: 'pop',
        //该变量是切换 top 按钮用的
        isShowTop: true,
        //保存离开时的滑动高度
        saveY: 0
      }
    },
    //生命周期函数，创建完毕之后赶紧请求
    created() {
      //111.真正的函数写在methods下面了,在这里调用的时候需要加上this，否则调用的是上面导入的函数
      this.getHomeMultidata()
      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 监听图片是否加载完成的状态   有bug 暂时注释
      /*this.$bus.$on('itemImgLoad' ,() => {
        //重新刷新 ，等到图片加载完毕，从新计算可滑动区域高度
        this.$refs.scroll.scroll.refresh()
      })*/
    },
    destroyed() {
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      //重新刷新一次
      this.$refs.scroll.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y
    },
    methods: {
      /*事件监听相关*/
      tabClick(index) {
        /*电击切换*/
        switch (index){
          case 0:
            this.currentIndex = 'pop'
            break
          case 1:
            this.currentIndex = 'new'
            break
          case 2:
            this.currentIndex = 'sell'
        }
        this.$refs.tabControl2.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      topClick() {
        /*可以设置第三个参数，为返回顶部的动画时长*/
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        /*1.滑动一定高度显示回到顶部*/
        this.isShowTop = -position.y > 800

        /*2.决定tabConttrol是否吸顶(position：fixed)*/
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      contentPull() {
        /*上拉刷新相关*/
        this.getHomeGoods(this.currentIndex)
      },
      //获取录播图加载完毕的状态
      swiperImgLoad() {
        //高度赋值
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      /*网络请求相关*/
      //111.请求多个数据，在这里包装了一层，目前两个函数名一样
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          //保存数据  //不容类型的数据通过不同的变量保存
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      //222.请求数据列表
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          //console.log(res.data.list);
          //...的方式 类似数据结构，不懂的话可以用for循环的方式
          this.goods[type].list.push(...res.data.list)
          //页面也要+1
          this.goods[type].page += 1

          //告诉浏览器进行下一次下拉
          this.$refs.scroll.scroll.finishPullUp()
        })
      },
    }
  }

</script>

<style scoped>
  #home {

    height: 100vh;
    position: relative;
  }

  .home-nav{
    background-color: hotpink;
    color: #ffffff;
  }


  .tab-control {
    background-color: #fff;

  }

  .content {
    margin-top: 44px;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control2 {
    position: relative;
    z-index: 9
  }
</style>