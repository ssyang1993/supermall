<template>
  <div class="item_lb" @click="itemClick">
    <!--load判断图片是否加载完毕-->
    <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    <div>
      <p class="item_b">{{goodsItem.title}}</p>
      <!--价格-->
      <span class="price">{{goodsItem.price}}</span>
      <!--收藏-->
      <span class="collect">收藏 {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem:{
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        /*事件总线 类似 vuex*/
        this.$bus.$emit('itemImgLoad')
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
  }
</script>

<style scoped>
  .item_lb {
    width:50%;
    display: inline-block;
    padding:5px 0 0 10px;
    text-align:center
  }

  .item_lb img{
    width:100%;
    border-radius: 5px;
  }

  .item_b {
    white-space: nowrap;/*强制一行显示*/
    overflow:hidden;/*超出部分隐藏*/
    text-overflow: ellipsis;/*最后添加省略号*/

    margin:3px 0
  }

  .price {
    color: red;
    margin-right: 10px;
  }
</style>