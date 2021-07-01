<template>
  <div>
    <cart-list-item :cart-list="cartList"></cart-list-item>

  </div>
</template>

<script>
import CartListItem from "@/views/cart/childComps/CartListItem";
export default {
name: "CartList",
  components:{
  CartListItem
  },
  computed:{
    cartList(){
      return this.$store.state.cartList
    }
  }
}
</script>

<style scoped>

</style>
