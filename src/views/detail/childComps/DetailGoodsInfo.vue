<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !==0">
    <div class="info-text-wrap">
      <div class="text-top-style"></div>
      <div class="desc info-text-desc">{{detailInfo.desc}}</div>
      <div class="text-bot-style"></div>
    </div>
    <div class="detail-wrap" v-for="(item,index) in detailInfo.detailImage" :key="index">
      <div class="detail-key">{{item.key}}</div>
      <div class="detail-image" v-for="(item,index) in item.list" :key="index">
        <img :src="item" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailGoodsInfo",
  props:{
  detailInfo:{
    type:Object,
    default(){
      return {}
    }
  }
  },
  methods:{
  imageLoad(){
    this.$emit('imageLoad')
  }
  }
}
</script>

<style scoped>
  .text-top-style{
    width: 80px;
    height: 1px;
    background-color: darkgray;
    margin-left: 4px;
  }
  .text-top-style::before{
    position: absolute;
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    margin-top: -3.5px;
    left: 4px;
    background-color: #333;
  }
  .text-bot-style{
    width: 100%;
    height: 1px;
    background-color: darkgray;
    position: relative;
    margin: 10px 0;
    bottom: 0;
  }
  .text-bot-style::after{
    position: absolute;
    display: block;
    content: "";
    width: 5px;
    height: 5px;
    margin-top: -3.5px;
    right: 0;
    background-color: #333;
  }
  .info-text-desc{
    padding: 10px 4px;
  }
  .desc{
    font-size: 14px;
    padding-bottom: 6px;
    line-height: 20px;
    margin: 4px 0;
  }
  img{
    width: 100%;
  }
</style>
