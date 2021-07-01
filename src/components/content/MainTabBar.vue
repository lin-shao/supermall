<template>
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <img src="~assets/images/tabbar/icon01.png"></template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/icon01_active.png">
        </template>
        <template #item-text>
          <div>主页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <template #item-icon>
          <img src="~assets/images/tabbar/icon02.png"></template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/icon02_active.png">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template #item-icon>
          <img src="~assets/images/tabbar/icon03.png"></template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/icon03_active.png">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <template #item-icon>
          <img src="~assets/images/tabbar/icon04.png"></template>
        <template #item-icon-active>
          <img src="~assets/images/tabbar/icon04_active.png">
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
