<style lang="less" scoped>
@import '~vux/src/styles/center.less';
.card-padding {
  padding: 5px 8px;
}

.title {
  font-size: 14px;
  line-height: 1.2;
  margin-top: 12px;
}

.price {
  color: #e4565a;
  font-size: 12px;
  margin-top: 38px;
}

.content {
  margin: 0 5px 122px;
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
    margin: auto 15px;
  }
  .num {
    margin-left: 90px;
    color: #999;
  }
}
.cartool {
  position: fixed;
  bottom: 52px;
  width: 100%;
  .result {
    line-height: 40px;
  }
  .buyBtn {
    width: 40%;
    color: #fff;
    background-color: #ffb86c;
    text-align: center;
    float: right;
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
            <input type="checkbox" name="checkbox1" class="weui-check" id="s11">
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
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
              <p class="price">￥123.09
                <span class="num">x3</span>
              </p>
            </div>
          </div>
        </label>
      </div>
      <div class="weui-cells weui-cells_checkbox cartool">
        <label class="weui-cell weui-check__label" for="all">
          <div class="weui-cell__hd">
            <input type="checkbox" name="checkbox1" class="weui-check" id="all">
            <i class="weui-icon-checked"></i>全选
          </div>
          <div class="weui-cell__bd">
            <div class="result">
              合计：<span class="price">￥6574.09</span>
              <a href="#" class="buyBtn">结算(0)</a>
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
import { Tabbar, TabbarItem, XHeader, Checklist, Loading, Toast, XImg, Group } from 'vux'

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
    Group,
  },
  mounted: () => {
    document.title = '购物车'
  },
  methods: {
    onSubmit() {
    },
    onCancel() { },
    onFocus() { },
    getResult() { },
    resultClick() { },
    detail(id) {
      this.$router.push({ name: 'detail', params: { id } })
    },
  },
}
</script>
