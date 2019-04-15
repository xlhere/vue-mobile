<template>
  <div class="cmt-container">
    <h1>发表内容</h1>
    <textarea maxlength="120" placeholder="请输入要吵吵的内容（最多吐槽120字" v-model="msg"></textarea>
    <mt-button size="large" type="primary" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
      <div :key="index" class="cmt-item" v-for="(item, index) in comments">
        <div class="cmt-item-left">
          <img :src="item.user.profile_image">
        </div>
        <div class="cmt-item-right">
          <div class="cmt-body">
            <div class="cmt-username">{{item.user.username}}</div>
            <div class="cmt-content">{{item.content}}</div>
            <div class="cmt-time">发表时间：{{item.ctime | dateFormat}}</div>
          </div>
        </div>
      </div>
    </div>
    <mt-button plain size="large" type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui"

export default {
  data() {
    return {
      comments: [],
      pageIndex:1,
      msg:""
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    getComments() {
      this.$http
        .get("https://www.apiopen.top/satinCommentApi?id=27610708&page="+this.pageIndex)
        .then(result => {
          if (result.body.code === 200) {
            // this.comments=result.body.data.normal.list;
            this.comments = this.comments.concat(result.body.data.normal.list)
          } else {
            Toast("获取评论失败")
          }
        })
    },
    getMore(){
      this.pageIndex++;
      this.getComments();
    },
    postComment(){
      if(this.msg.trim().length===0){
        return Toast("评论内容不能为空")
      }
      var cmt={
        user_name:"匿名用户",
        ctime:Date.now(),
        content:this.msg.trim(),
      };
    
      this.comments.unshift(cmt);
    }
  }
}
</script>

<style lang='scss' scoped>
.cmt-container {
  background-color: white;
  padding: 0 10px;

  h1 {
    font-size: 18px;
  }
  textarea {
    padding: 0;
    margin: 0;
    font-size: 14px;
    height: 80px;
  }
  
  .cmt-list{
    padding: 5px;
    .cmt-item{
      display: flex;
      border-bottom: 1px dashed #e5e5e5;
      .cmt-item-left{
        width: 30px;
        img{
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }

      .cmt-item-right{
        .cmt-body{
          .cmt-username{
            color: #d92227;
            font-size: 12px;
          }

          .cmt-content{
            color: #333;
            font-size: 14px;
          }
          .cmt-time{
            color:#7e7e7e;
            font-size: 12px;
          }
        }
      }
    }
  }

}
</style>
