<template>
  <div class="detail-param-info">
    <div v-for="(item,index) in paramInfo.rule" :key="index">
      <div v-for="(list,index1) in item" :key="'info'+index1" class="flex">
        <div v-for="(listItem,index2) in list" :key="'info1'+index2" class="rule-list">{{listItem}}</div>
      </div>
    </div>
    <div class="info-list" v-for="(item,index3) in paramInfo.info" :key="'info2'+index3">
      <div class="info-key">{{item.key}}</div>
      <div class="info-value">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailparamInfo",
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .rule-list{
    font-size: 12px;
    width: 20%;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .info-list{
    font-size: 13px;
    display: flex;
    padding: 10px 4px;
    border-bottom: 1px solid #ececec;
    line-height: 20px;
  }
  .info-key{
    width: 18%;
  }
</style>
