<template>
  <div class="recommend-wrap">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" class="recommend-img">
        </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .recommend-wrap{
    display: flex;
    padding: 10px 0 20px;
    font-size: 14px;
    border-bottom: 10px solid #ededed;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-img{
    width: 75px;
    height: 75px;
    margin-bottom: 10px;
  }
</style>
