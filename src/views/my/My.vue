<template>
  <div>
    <nav-bar class="a"><div slot="center">购物车</div></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
name: "My",
  components:{
  NavBar
  }
}
</script>

<style scoped>
  .a{
    text-align: center;
    background-color: #ef4562;
  }
</style>
