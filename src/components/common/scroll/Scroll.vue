<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type:Number,
        default: 0
      },
      //此值给有需要监听的地方加
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,

      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 2.监听滚动位置
      this.scroll.on('scroll', (position) => {
        //发射事件给首页，用于判断滑动了多少页面，以便于做top的隐藏显示处理
        this.$emit('scroll', position)
      })
      //3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        //发射事件
        this.$emit('pullingUp')
      })
      //返回顶部
      this.scroll.scrollTo(0, 0)
    },
    methods: {
      //防止数据来的太快，而bs对象还没加载 在这里做一个判断
      scrollTo(x, y,time = 500) {
        this.scroll && this.scroll.scrollTo(x, y ,time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
</style>