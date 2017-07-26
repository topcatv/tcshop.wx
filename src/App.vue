<template>
  <transition name="fade">
      <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
