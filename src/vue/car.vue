<style lang="less" scoped>
@import '~vux/src/styles/center.less';
.card-padding {
  padding: 5px 8px;
}
.title {
  font-size:14px;
  line-height:1.2;
}
.price {
  color: #e4565a;
  font-size: 12px;
  margin-top: 8px;
}
.content{
  img {
    height: 100px;
  }
}
.list {
  img {
    float: left;
  }
  .desc {
    float: left;
    margin: auto 10px;
  }
  .num {
    margin-left: 100px;
    color: #999;
  }
}
</style>
<template>
  <div>
    <x-header :left-options="{backText:'',showBack: true}">购物车</x-header>
    <div class="content">
      <div class="weui-cells weui-cells_checkbox">
        <label class="weui-cell weui-check__label" for="s11">
          <div class="weui-cell__hd">
            <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd">
            <p>购物车</p>
          </div>
          <div class="weui-cell__ft">编辑</div>
        </label>
        <label class="weui-cell weui-check__label" for="s12">
          <div class="weui-cell__hd">
            <input type="checkbox" name="checkbox1" class="weui-check" id="s12">
            <i class="weui-icon-checked"></i>
          </div>
          <div class="weui-cell__bd list">
            <x-img :src="imageUrl" :default-src="defaultImgUrl" />
            <div class="desc">
              <p class="title">神仙水</p>
              <p class="price">￥123.09<span class="num">x3</span></p>
            </div>
          </div>
        </label>
      </div>
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
        <img slot="icon" src="../assets/img/footer_nav_3_active.png">
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
import { Tabbar, TabbarItem, XHeader, Checklist, Loading, Toast, XImg } from 'vux'

const baseList = [{
  url: '/login',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua',
}, {
  url: '/login',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车',
}, {
  url: '/login',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行',
}]
const list = () => ['精选', '美食', '电影', '酒店', '外卖', '化妆品', '美食', '电影', '酒店', '外卖', '化妆品', '美食', '电影', '酒店', '外卖', '化妆品']
/* eslint no-console: "off" */
export default {
  data() {
    return {
      state: true,
      ads: baseList,
      value: '',
      results: [],
      list2: list(),
      index: 0,
      demo2: '美食',
      imageUrl: 'http://temp.im/100x100',
      defaultImgUrl: 'http://via.placeholder.com/100x100?text=loading',
      tabWidth: {
        width: `${list().length * 55}px`,
      },
    }
  },
  components: {
    XHeader,
    Tabbar,
    TabbarItem,
    Checklist,
    Loading,
    Toast,
    XImg,
  },
  mounted: () => {
    document.title = '购物车'
  },
  methods: {
    onSubmit() {
    },
    onCancel() {},
    onFocus() {},
    getResult() {},
    resultClick() {},
    detail(id) {
      this.$router.push({ name: 'detail', params: { id } })
    },
  },
}
</script>
