<style scoped>

</style>
<template>
  <div>
    <x-header>登录</x-header>
    <group>
      <x-input title="账号" placeholder="请输入账号" v-model="form.userName"></x-input>
      <x-input title="密码" placeholder="请输入密码" type="password" v-model="form.password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button @click.native="login" type="primary">登录</x-button>
      <x-button @click.native="regist">注册</x-button>
    </box>
    <toast v-model="toast" type="warn">{{text}}</toast>
  </div>
</template>
<script>
import { XInput, Group, XButton, XHeader, Toast, Box } from 'vux'

export default {
  data() {
    return {
      text: '',
      toast: false,
      state: true,
      form: {
        userName: '',
        password: '',
      },
    }
  },
  components: {
    XInput,
    Group,
    XButton,
    XHeader,
    Toast,
    Box,
  },
  mounted: () => {
    document.title = '登陆'
  },
  methods: {
    /* eslint no-console: "off" */
    login() {
      console.log('login')
    },
    regist() {
      window.location.href = '/regist'
    },
  },
}
</script>
