<template>
  <div id="home">
    <nav-bar class="nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" class="tab-control1" @tabItemClick="tabClick" ref="tabControl1" v-show="isShow"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @Scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabItemClick="tabClick" ref="tabControl"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick()" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabControl/TabControl";
import {getHomeMultiData,getHomeGoods} from "@/network/home";
import {itemListenerMinin} from "@/common/mixin";
// import {debounce} from '@/common/untils';
import HomeSwiper from "@/views/home/childComp/HomeSwiper";
import HomeRecommend from "@/views/home/childComp/HomeRecommend";
import FeatureView from "@/views/home/childComp/FeatureView";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

export default {
name: "Home",
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins:[itemListenerMinin],
  data(){
  return{
    banners:[],
    recommends:[],
    goods:{
     'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop',
    isShowBackTop:false,
    offsetTop:0,
    isShow:false,
    saveY:0,
    itemListener:null
  }
  },
  created() {
      this.getHomeMultiData();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

  },
  mounted() {

  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    console.log(this.saveY);
    this.$bus.$off('imageLoad',this.itemListener)
  },
  methods:{
    /*
    事件监听相关的方法
   */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      //得到滑动的y值，判断是否显示返回小图标
      this.isShowBackTop = (-position.y) > 1000;
      //tabControl的吸顶效果
      this.isShow = (-position.y)>554;
    },
    //加载更多页数据
    loadMore(){
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh();
    },
    //得到tabControl离顶部的距离（offsetTop）
    swiperImageLoad(){
     this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    /*
    网络请求相关的方法
     */
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        console.log(res)
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page +1;
      getHomeGoods(type,page).then(res =>{
         this.goods[type].list.push(...res.data.data.list);
         this.goods[type].page +=1;
         this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style scoped>
  #home{
    padding-top: 44px;
    position: relative;
    height: 100vh;
  }
  .nav{
    background-color: var(--color-high-text);
    text-align: center;
    color: white;
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
    background-color: #FFFFFF;
  }
  .tab-control1{
    /*position: relative;*/
  }
  .content{
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
