<template>
  <div>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index"
export default {
  name: "HomeSwiper",
  components:{
    SwiperItem,Swiper
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  },
  methods:{
    imageLoad() {
      if (!this.isLoad){
      this.$emit('swiperImageLoad')
        this.isLoad = true;
      }
    }
  }
}
</script>

<style scoped>

</style>
