<style scoped>
@import '~vux/src/styles/center.less';

.card-padding {
  padding: 5px 8px;
}
.title {
  font-size:14px;
  line-height:1.2;
}
.price {
  color: red;
  font-size: 12px;
  margin-top: 8px;
}
.content {
  margin: 0 5px 70px;
}
.content img {
  width: 100%;
}
.more {
  width: 100%;
  text-align: right;
}
.more a {
  padding-right: 5px;
  color: #9cc;
  font-size: 12px;
}
.more a:visited {
  color: #9cc;
}
</style>
<template>
  <div>
    <div class="content">
      <div>
        <div style="width:100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
          <tab :line-width="2" active-color="#fc378c" v-model="index" :style="tabWidth">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
          </tab>
        </div>
        <flexbox>
          <flexbox-item>
            <div @click="() => detail(123)">
              <card>
                <div slot="header"><x-img :src="imageUrl" :default-src="defaultImgUrl" /></div>
                <div slot="content" class="card-padding">
                  <p class="title">神仙水</p>
                  <p class="price">￥123.09</p>
                </div>
              </card>
            </div>
          </flexbox-item>
          <flexbox-item>
            <card>
              <div slot="header"><x-img :src="imageUrl" :default-src="defaultImgUrl" /></div>
              <div slot="content" class="card-padding">
                <p class="title">神仙水</p>
                <p class="price">￥123.09</p>
              </div>
            </card>
          </flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item>
            <card>
              <div slot="header"><x-img :src="imageUrl" :default-src="defaultImgUrl" /></div>
              <div slot="content" class="card-padding">
                <p class="title">神仙水</p>
                <p class="price">￥123.09</p>
              </div>
            </card>
          </flexbox-item>
          <flexbox-item>
            <card>
              <div slot="header"><x-img :src="imageUrl" :default-src="defaultImgUrl" /></div>
              <div slot="content" class="card-padding">
                <p class="title">神仙水</p>
                <p class="price">￥123.09</p>
              </div>
            </card>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
    <tabbar style="position:fixed">
      <tabbar-item link="/">
        <img slot="icon" src="../assets/img/footer_nav_1.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/category">
        <img slot="icon" src="../assets/img/footer_nav_2_active.png">
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
import { Tabbar, TabbarItem, Tab, TabItem, Flexbox, FlexboxItem, Divider, Card, XImg } from 'vux'

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
      imageUrl: 'http://temp.im/640x300',
      defaultImgUrl: 'http://via.placeholder.com/640x300?text=loading',
      tabWidth: {
        width: `${list().length * 55}px`,
      },
    }
  },
  components: {
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Card,
    Tabbar,
    TabbarItem,
  },
  mounted: () => {
    document.title = '首页'
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
