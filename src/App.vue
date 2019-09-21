<template>
  <div>
    第一个单文件组件 {{message}}
    <router-link to="/login">登录页</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hhh"
    };
  }
};
</script>

<style>
</style>