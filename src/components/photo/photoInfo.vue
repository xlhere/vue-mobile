<template>
  <div>
      <h4></h4>
      <p class="subtitle">
          <span class="time"></span>
          <span class="clicktime"></span>
      </p>
        <div v-for="(item, index) in newslist" :key="index">
            <a :href="item.url">he</a>
        </div>

    <!-- 评论区 -->
    <comment-box></comment-box>
  </div>
</template>

<script>
import Comment from "../subcomponent/comment.vue"

export default {
  data() {
    return {
      typeNames: [
        { id: 0, type: "top", title: "头条" },
        { id: 1, type: "shehui", title: "社会" },
        { id: 2, type: "guonei", title: "国内" },
        { id: 3, type: "guoji", title: "国际" },
        { id: 4, type: "yule", title: "娱乐" },
        { id: 5, type: "tiyu", title: "体育" },
        { id: 6, type: "junshi", title: "军事" },
        { id: 7, type: "keji", title: "科技" },
        { id: 8, type: "caijing", title: "财经" },
        { id: 9, type: "shishang", title: "时尚" }
      ],
      id: this.$route.params.id,
      newslist:'',
    }
  },

  created() {
      this.getPhotoListByType(this.typeNames[0].type)
  },
  methods: {
    getPhotoListByType(type) {
      this.$http({
        methods: "get",
        url: "http://toutiao-ali.juheapi.com/toutiao/index" + "?type=" + type,
        headers: {
          Authorization: "APPCODE 1bfc7995599f473b8265ae9b8374e9d3"
        }
      }).then(result => {
        if (result.body.error_code === 0) {
          this.newslist = result.body.result.data;
          console.log(this.id)
          console.log(this.newslist)
        } else {
          Toast("图片资源加载失败")
        }
      })
    }
  },
  components: {
    "comment-box": Comment
  }
}
</script>

<style>
</style>
