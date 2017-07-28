<style scoped>
@import '~vux/src/styles/center.less';

</style>
<template>
  <div>
    <div class="content">
      {{ id }}
    </div>
    <tabbar style="position:fixed">
      <tabbar-item link="/">
        <img slot="icon" src="../assets/img/footer_nav_1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/category">
        <img slot="icon" src="../assets/img/footer_nav_2.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item link="/car">
        <img slot="icon" src="../assets/img/footer_nav_3.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/me">
        <img slot="icon" src="../assets/img/footer_nav_4.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

/* eslint no-console: "off" */
export default {
  data() {
    return {
      state: true,
      ads: 'baseList',
      value: '',
      id: this.$route.params.id,
    }
  },
  components: {
    Tabbar,
    TabbarItem,
  },
  mounted: () => {
    document.title = '详情'
  },
  methods: {
  },
}
</script>
