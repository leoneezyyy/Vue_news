import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Login from "@/pages/Login";

// 在.vue文件中使用router-link或router-view需要先注册
Vue.use(VueRouter);

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
