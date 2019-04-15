<template>
  <div class="newsinfo-container">
    <div class="news">
      <!-- 标题区 -->
      <h1 class="title">{{newsInfoList.title}}</h1>
      <!-- 副标题区 -->
      <p class="subtitle">
        <span>发表时间：{{newsInfoList.time}}</span>
        <span>点击：{{clicktime}}次</span>
      </p>
      <hr>
      <!-- 内容区 -->
      <div class="content" v-html="newsInfoList.content"></div>
    </div>
    <!-- 评论区 -->
    <comment-box></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui"
import Comment from "../subcomponent/comment.vue"

export default {
  data() {
    return {
      //   docid: this.$route.params.id,
      newsInfoList: {},
      clicktime: 0
    }
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      this.$http.get("http://api.wangshuwen.com/getNews").then(result => {
        if (result.body.code === 1) {
          this.newsInfoList = result.body.data[3]
        }
      })
      this.clicktime = parseInt(Math.random() * 1000 + 1)
    }
  },
  components: {
    "comment-box": Comment
  }
}
</script>

<style lang="scss" >
.newsinfo-container {
  background-color: #f8f8f8;
  padding: 0 4px;
  .news {
    background-color: white;
  }
  .title {
    font-size: 16px;
    color: #222;
    margin: 15px 0;
    text-align: center;
  }
  .subtitle {
    font-size: 13px;
    color: #999;
    display: flex;
    justify-content: space-between;
  }
  .content {
    p{
    color: #333;
    }
    img {
      width: 100%;
    }
  }
}
</style>

