<template>
  <div class="detail-shop" v-if="Object.keys(shop).length !==0">
    <div class="shop-info">
      <img :src="shop.shopLogo">
      <div>{{shop.name}}</div>
    </div>
    <div class="shop-other-info">
      <div class="shop-other-item shop-other-sell">
        <div>
          <p>{{shop.sell|saveNum}}</p>
          <p class="text">总销量</p>
        </div>
        <div>
          <p>{{shop.good}}</p>
          <p class="text">全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div v-for="(item,index) in shop.score" :key="index" class="shop-message">
          {{item.name}}&nbsp;
          <span class="score" :class="{active:item.isBetter}">{{item.score}}</span>
          <span class="score-bg" :class="{active1:item.isBetter}">{{item.isBetter? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>

  </div>
</template>

<script>
export default {
name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    saveNum(value){
      if(value<10000){
        return value
      }else{
        return (value/10000).toFixed(1)+'万'
      }
    }
  }
}
</script>

<style scoped>
  .shop-info {
    display: flex;
    font-size: 14px;
  }
  .shop-info>div{
    margin-top: 37px;
    padding-left: 8px;
  }
    img{
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-left: 10px;
      margin-top: 20px;
      vertical-align: middle;
    }
    .shop-other-info{
      font-size: 14px;
      display: flex;
    }
    .shop-other-sell{
      padding-left: 10px;
      padding-top: 25px;
      display: flex;
      border-right: 1px solid #ececec;
    }
    .shop-other-sell>div{
      flex: 1;
      text-align: center;
    }
    .shop-other-item{
      flex: 1;
    }
    .text{
      font-size: 8px;
    }
    .shop-other-right{
      padding-left: 40px;
    }
    .score{
      display: inline-block;
      padding-left: 12px;
      width: 50px;
      color: #42b983;
    }
    .score-bg{
      color: #FFFFFF;
      margin: 5px 8px;
      background-color: #42b983;
    }
    .active{
      color: #ef4562;
    }
    .active1{
      background-color: #ef4562;
    }
    .shop-message{
      margin: 6px 0;
    }
  .enter-shop-wrap {
    text-align: center;
  }
  .enter-shop {
    display: inline-block;
    background-color: #f2f2f2;
    font-size: 12px;
    padding: 6px 30px;
    border-radius: 100px;
    margin: 10px;
  }
</style>
