<style lang="less" scoped>
@import '~vux/src/styles/center.less';
.content {
  margin: 0 0 70px 0;
}
.addCartBtn {
  width: 50%;
  color: #fff;
  background-color: #f01b2d;
  display: inline-block;
  text-align: center;
  line-height: 40px;
}
.addCartTab {
  background-color: #f01b2d;
  span { 
    color: #fff !important;
  }
}
.buyTab {
  background-color: #ffb86c;
  span { 
    color: #fff !important;
  }
}
.buyBtn {
  width: 50%;
  color: #fff;
  background-color: #ffb86c;
  display: inline-block;
  text-align: center;
  line-height: 40px;
}
.check-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.check-item-selected {
  background: #fff url(../assets/img/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
.product-info {
  padding: 10px;
  margin-top: 10px;
  background: #fefefe;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  .info-title {
    overflow: hidden;
    vertical-align: baseline;
    text-overflow: ellipsis;
    font-size: 15px;
    padding-bottom: 5px;
  }
  .product-price {
      color: #e4565a;
      margin-bottom: 12px;
      font-size: 21px;
  }
  .product-other {
    font-size: 11px;
    display: flex;
    span {
      color: #999;
      width: 100%;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      justify-content: center;
      flex-flow: column nowrap;
      display: flex;
    }
  }
}
.toggle-head {
  padding: 12px;
  margin: 0 auto;
  border-bottom: 1px solid #dedede;
  background-color: #fff;
  img {
    width: 80px;
    height: 80px;
    border-radius: 2px;
  }
  .pd-price {
    margin: 10px 0 0 10px;
    color: #e4565a;
    font-size: 15px;
  }
  .pd-amount {
    display: block;
    margin-left: 10px;
    text-align: left;
    line-height: 30px;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
<template>
  <div>
    <div class="content">
      <x-header>商品详情</x-header>
      <div>
        <swiper :list="sku.pics" height="375px"></swiper>
      </div>
      <div class="product-info">
        <p><span class="info-title">{{ sku.name }}</span></p>
        <p class="product-price">{{ sku.price }}</p>
        <p class="product-other">
          <span>快递：{{ sku.kd }}</span>
          <span style="align-items: center">月销量：{{ sku.salenum }}</span>
          <span style="align-items: flex-end">库存量：{{ sku.stock }}</span>
        </p>
      </div>
      <group gutter="0">
        <cell :title="'选择规格'" is-link @click.native="selectSku"></cell>
      </group>
      <group>
        <tab :line-width="2" active-color="#fc378c">
          <tab-item class="vux-center" selected>商品详情</tab-item>
          <tab-item class="vux-center">买家评价(0)</tab-item>
        </tab>
      </group>
    </div>
    <div v-transfer-dom>
      <popup v-model="showSpec">
        <div class="toggle-head">
          <img :src="sku.pics[0].img"/>
          <div style="display: inline-block">
            <p class="pd-price">{{ sku.price }}</p>
            <p class="pd-amount">库存量：{{ sku.stock }}</p>
          </div>
        </div>
        <div style="padding: 12px;background-color: #fff;border-bottom: 1px solid #dedede;">
          <p>产地：</p>
          <checker
            v-model="demo5"
            default-item-class="check-item"
            selected-item-class="check-item-selected"
            >
              <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</checker-item>
            </checker>
        </div>
        <div style="padding: 12px;background-color: #fff;">
          <x-number title="购买数量" v-model="buynum" :min="0" width="40px"></x-number>
        </div>
        <div>
          <a href="#" class="addCartBtn">加入购物车</a><a href="#" class="buyBtn">立即购买</a>
        </div>
      </popup>
    </div>
    <tabbar style="position:fixed">
      <tabbar-item>
        <img slot="icon" src="../assets/img/footer_nav_12.png">
        <span slot="label">收藏</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/img/footer_nav_13.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item class="addCartTab">
        <span slot="label">加入购物车</span>
      </tabbar-item>
      <tabbar-item class="buyTab">
        <span slot="label">立即购买</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Tab, TabItem, XHeader, Swiper, SwiperItem, Cell, Group, Popup, TransferDom, XNumber, Checker, CheckerItem } from 'vux'

const baseList = [{
  url: '',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '',
}, {
  url: '',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '',
}, {
  url: '',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '',
}]

/* eslint no-console: "off" */
export default {
  data() {
    return {
      state: true,
      sku: {
        pics: baseList,
        name: '美式咖啡',
        price: 23.9,
        kd: 40,
        salenum: 10,
        stock: 9999,
      },
      demo5: undefined,
      value: '',
      buynum: 0,
      showSpec: false,
      id: this.$route.params.id,
    }
  },
  directives: {
    TransferDom,
  },
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    Swiper,
    SwiperItem,
    Cell,
    Group,
    Tab,
    TabItem,
    Popup,
    XNumber,
    Checker,
    CheckerItem,
  },
  mounted: () => {
    document.title = '商品详情'
  },
  methods: {
    selectSku() {
      this.showSpec = true
    },
  },
}
</script>
