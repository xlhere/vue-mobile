<template>
  <div class="photo-container">
    <!-- 顶部滑动条区域 -->
    <div class="mui-slider" id="slider">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control 
        mui-segmented-control-inverted"
        id="sliderSegmentedControl"
      >
        <div class="mui-scroll">
          <a :class="['mui-control-item',typeName.id==0 ? 'mui-active':'']" 
          v-for="(typeName, index) in typeNames" :key="index" 
          @click="getPhotoListByType(typeName.type)">
            {{typeName.title}}
         </a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <!-- <router-link v-for="(item, index) in newslist" :key="item.uniquekey" 
      :to="'/home/photoinfo/'+item.uniquekey"
      tag="li">
        <img v-lazy="item.thumbnail_pic_s">
        <div class="info">
          <div class="info-title">
            {{item.title}}
          </div>
        </div>
      </router-link> -->
      <a v-for="(item, index) in newslist" :key="item.uniquekey" 
      :href="item.url">
        <img v-lazy="item.thumbnail_pic_s">
        <div class="info">
          <div class="info-title">
            {{item.title}}
          </div>
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
//1.导入mui的js文件
import mui from "../../lib/mui/js/mui.js"
import {Toast} from 'mint-ui'


export default {
  data() {
    return {
      newslist: [],
      type: "top",
      typeNames:[
        {id:0,type:'top',title:"头条"},
        {id:1,type:'shehui',title:"社会"},
        {id:2,type:'guonei',title:"国内"},
        {id:3,type:'guoji',title:"国际"},
        {id:4,type:'yule',title:"娱乐"},
        {id:5,type:'tiyu',title:"体育"},
        {id:6,type:'junshi',title:"军事"},
        {id:7,type:'keji',title:"科技"},
        {id:8,type:'caijing',title:"财经"},
        {id:9,type:'shishang',title:"时尚"},
      ]
    }
  },

  created() {
     this.getPhotoListByType(this.type)
  },

  mounted() {
    //2.初始化滑动控件
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    })
  },

  methods: {
    getPhotoListByType(type) {
      this.$http({
        methods: "get",
        url: "http://toutiao-ali.juheapi.com/toutiao/index" +"?type="+type,
        headers: {
          Authorization: "APPCODE 1bfc7995599f473b8265ae9b8374e9d3"
        }
      }).then(result => {
        if (result.body.error_code === 0) {
          // console.log(result.body)
          this.newslist = result.body.result.data
          // console.log(this.newslist)
        }else{
          Toast("图片资源加载失败")
        }
      })
    }
  }
}

//  http://toutiao-ali.juheapi.com/toutiao/index
// 'http://toutiao-ali.juheapi.com/toutiao/index?type=type'
// 'Authorization:APPCODE 你自己的AppCode'
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-x;
}

.photo-list{
  list-style: none;
  padding: 10px 10px 0;
  margin: 0;
  a{
    display: block;
    position: relative;
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    img{
      width:   100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      position: absolute;
      color: white;
      bottom: 0;
      text-align: left;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 80px;
      width: 100%;
      padding: 5px;
      .info-title{
        font-size: 13px;
      }
    }
    
  }
}
</style>
