<template>
  <div class="detail-comment-info" v-if="Object.keys(commentInfo).length !==0">
    <div class="comment-title">
      <div>用户评论</div>
      <div>更多</div>
    </div>
      <div class="comment-user-info">
        <span><img :src="commentInfo.user.avatar" class="avatar"></span>
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-text">{{commentInfo.content}}</div>
      <div class="comment-goods-info">
        <span class="comment-time">{{commentInfo.created|showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="flex">
        <div class="comment-info-images" v-for="(item,index) in commentInfo.images" :key="index">
          <img :src="item">
        </div>
      </div>
  </div>
</template>
<script>
import {formatDate} from "@/common/untils";

export default {
name: "DetailCommentInfo",
  props:{
  commentInfo:{
    type:Object,
    default(){
      return {}
    }
  }
  },
  filters:{
    showDate(value){
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style scoped>
  .comment-title{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid#ececec;
    padding: 10px 4px;
  }
  .comment-user-info{
    padding: 10px 0;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 18px;
    vertical-align: middle;
  }
  .comment-text{
    line-height: 20px;
  }
  .comment-goods-info{
    color: #999;
    margin: 4px 0;
  }
  .comment-time{
    margin: 10px;
  }
  .comment-info-images>img{
    width: 60px;
    height: 60px;
    margin-right: 6px;
  }
</style>
