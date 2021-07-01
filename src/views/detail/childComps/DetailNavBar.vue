<template>
  <nav-bar>
    <div slot="left" @click="backItem">
      <img src="../../../assets/images/back.png" class="back">
    </div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:index === currentIndex}"
           @click="itemClick(index)">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
name: "DetailNavBar",
  components:{
  NavBar
  },
  data(){
  return{
    titles: ['商品','参数','评论','推荐'],
    currentIndex:0,
  }
  },
  methods:{
  itemClick(index) {
    this.currentIndex = index;
    this.$emit('titleClick',index)
  },
    //详情页返回首页点击事件
    backItem(){
    this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 10px;
  }
  .active{
    color: var(--color-text);
  }
  .back{
    margin-top: 7px;
    margin-left: 3px;
  }
</style>
