import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photo/photoList.vue'
import PhotoInfo from './components/photo/photoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'


var router = new VueRouter({
    routes:[
       {path:'/',redirect:'/home'},
       {path:'/home',component:HomeContainer},
       {path:'/member',component:MemberContainer},
       {path:'/shopcar',component:ShopCarContainer},
       {path:'/search',component:SearchContainer},
       {path:'/home/newslist',component:NewsList},
       {path:'/home/newsinfo/:id',component:NewsInfo},
       {path:'/home/photolist',component:PhotoList},
       {path:'/home/photoinfo/:id',component:PhotoInfo},
       {path:'/home/goodslist',component:GoodsList}
    ],
    linkActiveClass:'mui-active'
})
export default router