<template>
  <div class="container">
    <!-- 关闭按钮 -->
    <div class="close">
      <span class="iconfont iconicon-test"></span>
    </div>

    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- 用户名密码输入框 -->
    <div class="inputs">
      <AuthInput
        placeholder="手机号码"
        :value="form.username"
        @input="handleUsername"
        :rule="/^1[0-9]{4,10}$/"
        err_message="手机号码格式不正确"
      ></AuthInput>

      <AuthInput
        placeholder="密码"
        v-model="form.password"
        :rule="/^[0-9a-zA-Z]{3,12}$/"
        err_message="密码格式不正确"
      ></AuthInput>
    </div>

    <!-- 登录按钮 -->
    <AuthButton text="登录" @click="handleSubmit" />
  </div>
</template>

<script>
// 导入组件
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";

export default {
  data() {
    return {
      // 发送后台的数据
      form: {
        username: "",
        password: ""
      }
    };
  },

  // 注册组件
  components: {
    AuthInput,
    AuthButton
  },

  methods: {
    handleUsername(value) {
      this.form.username = value;
    },

    // 表单提交
    handleSubmit() {
      this.$axios({
        url: "http://localhost:3000/login",
        method: "POST", // methods相当于type
        data: this.form
        //  .then的回调函数相当于success
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 20px;

  span {
    font-size: 27 / 360 * 100vw;
  }
}

.logo {
  display: flex;
  justify-content: center;

  span {
    display: block;
    font-size: 126 / 360 * 100vw;
    color: #d81e06;
  }
}

.inputs {
  input {
    margin-bottom: 20px;
  }
}
</style>