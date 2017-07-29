<style scoped>
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
.more a a:visited {
  padding-right: 5px;
  color: #9cc;
  font-size: 12px;
}
</style>
<template>
  <div>
    <div>
      <swiper loop auto :list="ads"></swiper>
    </div>
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top top="0"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <div class="content">
      <divider>化妆品</divider>
      <flexbox>
        <flexbox-item>
          <card @on-click-footer="detail" @on-click-header="detail">
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
      <div class="more"><a href="/category?id=1">更多>></a></div>
      <divider>化妆品</divider>
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
      <div class="more"><a href="/category?id=1">更多>></a></div>
    </div>
    <tabbar style="position:fixed">
      <tabbar-item link="/">
        <img slot="icon" src="../assets/img/footer_nav_1_active.png">
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
import { Tabbar, TabbarItem, Swiper, SwiperItem, Search, Flexbox, FlexboxItem, Divider, Card, XImg } from 'vux'

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

export default {
  data() {
    return {
      state: true,
      ads: baseList,
      value: '',
      results: [],
      imageUrl: 'http://temp.im/640x300',
      defaultImgUrl: 'http://via.placeholder.com/640x300?text=loading',
    }
  },
  components: {
    Swiper,
    SwiperItem,
    Search,
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
    /* eslint no-console: "off" */
    login() {
      console.log('login')
    },
    regist() {
      window.location.href = '/regist'
    },
    onSubmit() {
    },
    onCancel() {},
    onFocus() {},
    getResult() {},
    resultClick() {},
    detail(id) {
      console.log(id)
    },
  },
}
</script>
