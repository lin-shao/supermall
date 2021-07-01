<template>
  <div id="detail">
    <detail-nav-bar class="nav" @titleClick="tabClick" ref="nav"></detail-nav-bar>
    <scroll class="content" :pull-up-load="true" ref="scroll" :probe-type="3" @Scroll="contentScroll">
      <detail-swiper :top-images="topIamges"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="goodsImageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import {getDetail,Goods,Shop,Param,getRecommend} from "@/network/detail";
import {debounce} from "@/common/untils";
import store from "@/store";
import {itemListenerMinin} from "@/common/mixin";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

export default {
  name: "Detail",
  data(){
    return{
      iid:null,
      topIamges:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      offsetTopY:[],
      themeTopYs:null,
      currentIndex:0,
      isShowBackTop:false,
      store
    }
  },
  //混入的内容
  mixins:[itemListenerMinin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  methods:{
    goodsImageLoad(){
      this.$refs.scroll.refresh()
      this.themeTopYs()
    },
    tabClick(index){
      this.$refs.scroll.scrollTo(0,-this.offsetTopY[index],0)
    },
    contentScroll(position){
      const PositionY = -position.y
      let length = this.offsetTopY.length
      for(let i=0;i<length-1;i++){
        if(this.currentIndex !==i&&(PositionY>=this.offsetTopY[i]&&PositionY<this.offsetTopY[i+1])){
          this.currentIndex = i
          console.log(this.currentIndex);
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.isShowBackTop = (-position.y) > 1000;
    },
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    addToCart(){
      //1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topIamges[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      this.$store.commit('addList',product)
    }
  },
  mounted() {

  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res =>{
      console.log(res);
      //1.获取数据
      const data = res.data.result
      //2.取出轮播图数据
      this.topIamges = res.data.result.itemInfo.topImages
      //3.创建商品的对象
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo)
      //4.取出店铺的信息
      this.shop = new Shop(data.shopInfo)
      //5.取出详情的信息
      this.detailInfo = data.detailInfo
      //6.取出参数的信息
      this.paramInfo = new Param(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate !==0)
          this.commentInfo = data.rate.list[0]
      this.themeTopYs = debounce(() =>{
        this.offsetTopY = []
        this.offsetTopY.push(0)
        this.offsetTopY.push(this.$refs.params.$el.offsetTop)
        this.offsetTopY.push(this.$refs.comment.$el.offsetTop)
        this.offsetTopY.push(this.$refs.recommend.$el.offsetTop)
        this.offsetTopY.push(Number.MAX_VALUE)
      },500)
      // this.$nextTick(() =>{
      //   this.offsetTopY = []
      //   this.offsetTopY.push(0)
      //   this.offsetTopY.push(this.$refs.params.$el.offsetTop)
      //   this.offsetTopY.push(this.$refs.comment.$el.offsetTop)
      //   this.offsetTopY.push(this.$refs.recommend.$el.offsetTop)
      //
      //   console.log(this.offsetTopY);
      // })
    })

    getRecommend().then(res =>{
      console.log(res);
      this.recommends = res.data.data.list
    })
  },
  destroyed() {
    this.$bus.$off('imageLoad',this.itemListener)
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #FFFFFF;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px - 49px);
  }
  .nav{
    position: relative;
    z-index: 9;
    background-color: #FFFFFF;
  }
</style>
