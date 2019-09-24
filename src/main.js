import Vue from "vue";
import VueRouter from "vue-router";
// 导入vant-ui组件
import Vant from "vant";
// 导入axios
import axios from "axios";

// 导入组件
import App from "@/App.vue";
import Login from "@/pages/Login";

// 在.vue文件中使用router-link或router-view需要先注册
Vue.use(VueRouter);
Vue.use(Vant);

// 把axios挂载到原型
Vue.prototype.$axios = axios; // this.$axios

// 基准路劲，以后每次请求都会自动在前面加上该路劲
axios.defaults.baseURL = "http://localhost:3000";

// 创建路由配置
const routes = [
  {
    path: "/login",
    component: Login
  }
];

// 创建对象
const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",

  // 指定一个组件渲染到根实例，这个组件可以成为最底层的组件
  render: function(createElement) {
    // render函数使用固定的写法
    return createElement(App);
  },
  router
});
