import {debounce} from "@/common/untils"

//混入的内容,把两个组件相同的内容提取出来
export const itemListenerMinin = {
  mounted(){
    //防抖动
    const refresh = debounce(this.$refs.scroll.refresh)
    this.itemListener = ()=>{
      refresh()
    }
    this.$bus.$on('imageLoad',this.itemListener)
    /*console.log('我是混入中的内容');*/
  }
}
