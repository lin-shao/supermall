<template>
<div class="bottom-bar">
    <div class="bottom-bar-item">
      <p><img src="../../../assets/images/detail/icon02.png"></p>
      <p>店铺</p>
    </div>
    <div class="bottom-bar-item">
      <p><img src="../../../assets/images/detail/icon01.png"></p>
      <p>客服</p>
    </div>
    <div class="bottom-bar-item">
      <p><img src="../../../assets/images/detail/icon03.png"></p>
      <p>收藏</p>
    </div>
    <div class="btn cart-btn" @click="addCart">加入购物车</div>
    <div class="btn buy-btn">购买</div>
</div>
</template>

<script>
export default {
name: "DetailBottomBar",
  methods:{
  addCart(){
    this.$emit('addToCart')
  }
  }
}
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 49px;
    position: relative;
    background-color: #FFFFFF;
  }
  .bottom-bar-item{
    width: 16%;
    font-size: 12px;
    color: #333;
    text-align: center;
  }
  img{
    width: 22px;
    height: 22px;
    margin: 4px 0;
    vertical-align: middle;
  }
  .btn{
    width: 26%;
    font-size: 13px;
    line-height: 49px;
    text-align: center;
  }
  .cart-btn{
    background-color: #F9CD0B;
    line-height: 49px;
  }
  .buy-btn{
    color: #FFFFFF;
    background-color: var(--color-high-text);
  }
</style>
