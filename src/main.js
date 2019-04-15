//入口文件
import Vue from 'vue'
//1.1 导入路由的包
import VueRouter from 'vue-router'
//2.1 导入 vue-resource
import VueResource from 'vue-resource'


//按需倒入
// import {
//     Header,
//     Swipe,
//     SwipeItem,
//     Button,
//     Lazyload
// } from 'mint-ui';

//要使得mint-ui生效，需要导入样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import moment from 'moment'

Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload)

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css';


//1.2 安装路由
Vue.use(VueRouter)
//2.2 安装 vue-resource
Vue.use(VueResource)

//1.3 导入自己的router.js路由模块
import router from './router'

//导入App根组件  测试改变
import app from "./App.vue"

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, //挂载路由对象到vm实例上http: {

})