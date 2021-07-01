<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
         :class="{active: index === currentIndex}" @click="tabItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
name: "TabControl",
  props:{
  titles:{
    type:Array,
    default(){
      return [];
    }
  }
  },
  data(){
  return {
    currentIndex:0
  }
  },
  methods:{
  tabItemClick(index){
    this.currentIndex = index;
    this.$emit('tabItemClick',index)
  }
  }
}
</script>

<style lang="less" scoped>
  .tab-control{
    display: flex;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
  }
  .active {
    color: var(--color-text);

    span {
      border-bottom: 2px solid var(--color-text);
      padding: 5px;
    }
  }
</style>
