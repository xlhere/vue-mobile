<template>
  <div>
    <ul class="mui-table-view" v-for="item in this.newsList" :key="item.docid">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/'+item.docid">
          <img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
          <div class="mui-media-body">
              <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>发表时间：{{item.ptime}}</span>
                <span>点击：{{item.tcount}}次</span>
            </p>
          </div>
        </router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>

import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      newsList:[]
    }
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList(){
      this.$http.get('https://www.apiopen.top/journalismApi')
      .then(result=>{
        if(result.body.code===200){
          console.log(result.body)
          this.newsList=(result.body.data.tech).concat(result.body.data.auto)
          console.log(this.newsList)
          this.newsList.forEach(news => {
              if(news.picInfo.length===0){
                news.picInfo=[{}];
                news.picInfo[0].url='http://cms-bucket.ws.126.net/2019/03/14/a06b87af45af48d2b8f7f3676ffe8813.jpeg'
              }
          });
        }else{
          Toast('获取新闻列表失败')
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
  li{
    h1{
      font-size: 14px;
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>

