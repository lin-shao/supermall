<template>
  <div v-if="Object.keys(goods).length !==0">
    <div class="title">{{goods.title}}</div>
    <div class="price-wrap">
      <div class="new-price">{{'￥'+goods.realPrice}}</div>
      <div class="old-price">{{goods.oldPrice}}</div>
      <div class="discount-desc">{{goods.discount}}</div>
    </div>
    <div class="other-info">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div class="columns">{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="serves-wrap">
      <div v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        {{goods.services[index-1].name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .title{
    margin: 10px 0;
    font-size: 14px;
    padding: 0 4px;
    line-height: 20px;

  }
  .price-wrap{
    display: flex;
  }
  .new-price{
    color: var(--color-high-text);
  }
  .old-price{
    font-size: 6px;
    text-decoration: line-through;
    padding-left: 6px;
    padding-top: 2px;
    color: darkgray;
  }
  .discount-desc{
    font-size: 6px;
    color: #fff;
    text-align: center;
    border-radius: 80px;
    padding: 2px 6px;
    background-color: var(--color-text);
  }
  .other-info{
    display: flex;
    color: #999;
    font-size: 12px;
    padding: 10px 4px;
    border-bottom: 1px solid #ededed;
    border-top: 1px solid #ededed;
    margin-top: 6px;
  }
  .other-info>div{
    flex: 1;
  }
  .columns{
    text-align: right;
  }
  .serves-wrap{
    font-size: 12px;
    color: #333;
    padding: 10px 4px;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid #ededed;
  }
    img{
    width: 12px;
    height: 12px;
      vertical-align: middle;
  }
</style>
