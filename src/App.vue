<template>
  <transition name="fade">
      <router-view></router-view>
  </transition>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/global.less';
@import '~vux/src/styles/1px.less';

body {
  background-color: #fbf9fe;
}
</style>
