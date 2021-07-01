<template>
    <div class="cart">
      <nav-bar class="a"><div slot="center">购物车({{cartLength}})</div></nav-bar>
      <scroll class="content" :pull-up-load="true" ref="scroll">
        <cart-list></cart-list>
      </scroll>
      <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
import Scroll from "@/components/common/scroll/Scroll";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";
export default {
name: "Cart",
  components:{
  NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed:{
   cartLength(){
     return this.$store.state.cartList.length
   }
  },
  activated() {
  this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
 .a{
   background-color: var(--color-high-text);
   text-align: center;
   color: #FFFFFF;
   position: relative;
   top: 0;
   right: 0;
   left: 0;
   z-index: 10;
 }
 .content{
   height: calc(100% - 49px - 44px - 40px);
 }
</style>
