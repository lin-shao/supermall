<template>
  <div class="detail-swiper">
    <swiper class="image">
      <swiper-item  v-for="(item,index) in topImages" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
  name: "DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    SwiperItem,
    Swiper
  }
}
</script>

<style scoped>
  .image{
    height: 300px;
    overflow: hidden;
  }
</style>
