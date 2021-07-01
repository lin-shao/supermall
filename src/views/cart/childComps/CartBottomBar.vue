<template>
  <div class="bottom-bar">
    <div><input type="checkbox" class="check" :class="{active:isCheckAll}" @click="checkClick"><label>全选</label></div>
    <div>合计：{{totalPrice}}</div>
    <div>去结算{{checkLength}}</div>
  </div>
</template>

<script>
export default {
  name: "CartBottomBar",
  computed:{
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item =>{
        return item.checked
      }).reduce((preValue,item) =>{
        return preValue + item.price*item.count
      },0).toFixed(2)
    },
    checkLength(){
      return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')'
    },
    isCheckAll(){
      if(this.$store.state.cartList.length === 0) return false
      return !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  methods:{
    checkClick(){
      if(this.isCheckAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    display: flex;
    height: 40px;
    background-color: #eee;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
  }
  .check{
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 1px solid #999999;
    overflow: hidden;
    vertical-align: middle;
    margin-right: 5px;
  }
  .check:checked{
    border: 1px solid var(--color-high-text);
    background: url("../../../assets/images/detail/check_active.png") no-repeat center;
    background-size: cover;
  }
  .active{
    border: 1px solid var(--color-high-text);
    background: url("../../../assets/images/detail/check_active.png") no-repeat center;
    background-size: cover;
  }
</style>
