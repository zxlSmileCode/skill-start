<template>
  <div id="all">
    <div class="page-header">
      <div class="head-bar no-empty">
        <div class="title-opts">
          <h2 class="title">购物车(2)</h2>
          <div class="opts">
            <span class="opt manage">管理</span>
          </div>
        </div>
        <p class="info">共2件宝贝</p>
      </div>
    </div>
    <div>
      <div class="page-content" v-for="(i,index) in goods" :key="index">
      <div class="content-top" style="height:44px;width:100%">
        <div
          class="checked fl"
          style="float: left;border-radius: 50%;border: 1px solid #ccc;width: 21px;height: 21px;"
        ></div>
        <div class="fl" style="marginLeft:20px;">xxxxxxxxx</div>
        <div class="fr">领卷</div>
      </div>
      <div class="content-main">
        <div class="checked fl" style="float: left;border-radius: 50%;border: 1px solid #ccc;width: 21px;height: 21px;marginTop:63px;"
        ></div>
        <div class="imgs"></div>
        <ul>
          <li
            style="line-height: 16.8px;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;marginBottom:10px;"
          >{{i.name}}</li>
          <li style="color: rgb(153, 153, 153)">{{i.size}}</li>
          <li style="margin:4px 0;">
            <span>比加入时降￥9.00</span>
          </li>
          <li class="fl" style="marginLeft:136px;">
            <span>￥{{i.much}}</span>
          </li>
          <li class="fr addopp">
            <input type="button" style="width:24px" @click="i.buynum--" value="-" :disabled="i.buynum==1"/>
            <input type="text" v-model="i.buynum" style="width:30px;textAlign:center">
            <input type="button" style="width:24px" @click="i.buynum++" value="+" :disabled="i.buynum==i.num">
          </li>
        </ul>
      </div>
      <div class="settlement-bar">
        <div class="checkbox-wrapper">
          <label class="select-all">
            <span class="icon checked"></span>全选
          </label>
        </div>
        <div class="submit-wrapper">
          <span class="price-wrapper">
            <div class="post-price">
              <span class="post">不含运费</span>合计:
              <span class="price">￥0</span>
            </div>
            <!-- empty -->
          </span>
          <span class="btn submit">结算(1)</span>
        </div>
      </div>
    </div>
    </div>
    
    <div class="page-footer">
      <div>
        <div class="ribbon-container">
          <div class="alert-container">
            <div class="alert-content inlined">
              <!-- empty -->
              <!-- empty -->
              <div class="alert-btn-group">
                <button class="btn">找相似</button>
                <button class="btn">收藏</button>
                <button class="btn">删除</button>
              </div>
            </div>
          </div>
          <div class="dialog-container" data-spm="dialog">
            <div class="dialog-wrapper"></div>
            <div class="dialog">
              <div class="dialog-title"></div>
              <div class="dialog-content"></div>
              <div class="dialog-button-group hide">
                <button class="btn-close">完成</button>
              </div>
            </div>
          </div>
          <div class="popup-container"></div>
          <div class="loading-container hide">
            <div class="loading">
              <img
                class="loading-icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2ZmZiI+PHBhdGggb3BhY2l0eT0iLjEiIGQ9Ik0xNCAwaDR2OGgtNHoiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIuMSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwIi8+PC9wYXRoPjxwYXRoIG9wYWNpdHk9Ii4xIiBkPSJNMjUuOSAzLjI3MmwyLjgyOCAyLjgyOS01LjY1NyA1LjY1Ni0yLjgyOC0yLjgyOHoiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIuMSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjEyNXMiLz48L3BhdGg+PHBhdGggb3BhY2l0eT0iLjEiIGQ9Ik0zMiAxNHY0aC04di00eiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89Ii4xIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMjVzIi8+PC9wYXRoPjxwYXRoIG9wYWNpdHk9Ii4xIiBkPSJNMjguNzI4IDI1LjlsLTIuODI5IDIuODI4LTUuNjU2LTUuNjU3IDIuODI4LTIuODI4eiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89Ii4xIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuMzc1cyIvPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIuMSIgZD0iTTE4IDMyaC00di04aDR6Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iLjEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC41cyIvPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIuMSIgZD0iTTYuMSAyOC43MjhsLTIuODI4LTIuODI5IDUuNjU3LTUuNjU2IDIuODI4IDIuODI4eiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89Ii4xIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNjI1cyIvPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIuMSIgZD0iTTAgMTh2LTRoOHY0eiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89Ii4xIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuNzVzIi8+PC9wYXRoPjxwYXRoIG9wYWNpdHk9Ii4xIiBkPSJNMy4yNzIgNi4xbDIuODI5LTIuODI4IDUuNjU2IDUuNjU3LTIuODI4IDIuODI4eiI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89Ii4xIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuODc1cyIvPjwvcGF0aD48L3N2Zz4="
                alt="loading"
              >
              <span class="loading-text">正在加载</span>
            </div>
          </div>
        </div>
        <TaoFoottool/>
      </div>
    </div>
  </div>
</template>

<script>
import TaoFoottool from "@/components/TaoFoottool.vue";
export default {
  data(){
    return{
      goods:[{
        name:'白衬衫男长袖韩版修身商务正装职业工装短袖结婚伴郎西装白色衬衣',
        size:'1-317（长袖）平纹款白色;40/XL',
        pigimg:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2865991597,944747464&fm=173&app=49&f=JPEG?w=640&h=360&s=B4A602BA56C750E2D2B7E2C70300F0B6',
        much:39,
        num:5,
        buynum:1
      },{
        name:'cyxcyxxyxycxycyxzxlcyxcyxxyxycxycyxzxl',
        size:'250-250(IQ) like a pig',
        pigimg:'http://img4.imgtn.bdimg.com/it/u=3889104832,2229867208&fm=26&gp=0.jpg',
        much:9999,
        num:3,
        buynum:1
      }
      ]
      
    }
  },
  components: {
    TaoFoottool
  }
};
</script>

<style lang="scss" scoped>
@import "../components/iconfont/iconfont.css";

.head-bar.no-empty {
  width: 375px;
  height: 180px;
}
.head-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  padding: 20px 12px;
  background-image: -webkit-linear-gradient(right, #ff5000 0%, #ff8400 100%);
  background-image: linear-gradient(-90deg, #ff5000 0%, #ff8400 100%);
  color: #ffffff;
  height: 100px;
}
.head-bar .title-opts {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.head-bar .title-opts .title {
  font-size: 20px;
  line-height: 22px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}
.head-bar .title-opts .opts {
  font-size: 15px;
  line-height: 22px;
}
.head-bar .title-opts .opts .opt {
  margin-right: 24px;
}
.head-bar .title-opts .opts .opt:last-child {
  margin-right: 0;
}
.head-bar .info {
  margin-top: 15px;
  font-size: 12px;
  line-height: 14px;
}
.page-content {
  // position: relative;
  margin-bottom: 20px;
  border-radius: 20px;
  background: #f8f8f8;
  padding: 0 10px 10px 10px;
}
#all .page-content:nth-child(1){
  margin-top: -95px;
}
.checked {
  margin-top: 10px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABEBAMAAADKPY6BAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFZaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkzCJ1kAAAAqUExURUdwTP9rAP9xAP9vAP9pAP9tAP9rAP9tAP9fAP90AP9XAP99AP9nAP9tACJieToAAAAIdFJOUwCH6CSqRmbMw7TcXwAAAy1JREFUSMd1lr+LE0EUxzdeFMuAdnfCgYIecqAiIlwTPQRBhHioaHd4ZRrxKrlOPBlCqhM8hmWLmJAsU1oIy1RayBax0EYC2f/F92tmZ5Lc1o/PfN+b73zfJkn43bv8bvvn9QcHyVnf+YdVVf2eTqfltc7qittbWQY1UDJVHy6tqniutRbKtK/Uo+WKu1Axm1XVfA4HlUqp3cWKRgoleA4d1AdM3oor1t4XGjFOL2Imt6KSvaKQijnJxc8chxUXbKGhJhNKSZRevh+UrBdIybSj9LFCmUGg1VqtQy0KKaZnasVdW1jXEVFEjBn7wVubotoMp+vnghTjLuKOhRqk6GguKjdmKCVH1lLPuvJzcZSJF+tr3Fy4Bj4WvIPn6FQa4rk4ipz0BCHUNY6OKFhDWsxI+oFPc0tLFOqpSVJsGkwu0GLaIiWYLs6FOuoxBcWse0oW+UWRFhJzs9aio5tminFquaPYL6wF9JJaOKbQtV8A8/HljV5P9J6zjElDvyi1n7xiLWZTGiqKWMunJLnIEGipa+WkyC9gyfs9poy5Z/BLEfrlF3T6WLQM6IbwoMgvAGkqOWiEZvEHOb8IhGsmMrki8ksLITJd81VKbOiXHwjx0zWJQEK/MCSX6UoJUE4O3vA9OkhNES32e7K2xfkiSpwW47V8hsdCfiFI6f0CHR0J5QskyDbKRUg/uOmJjM7qb5Ame0D5A5CN0C8jfwHpVfBORpCG+CWXC+i60Z0A5jVD6AnIcOEad8QvujgEDEMiylAsha47BcwzgQRaNsWYNN1DfuLukUhHbbE3hccplWzUWSf2duPFO3orEMo6d0fuqaUUQYi54nOXtQz8g6U3AphG8I5y92CbNWX278XTxdfYduHBposSU7R0XARxTZ0vfUcZ+SDjxJwF+0i0DH0cpgv54v3S8qFq43zxyTCpo5nlLufLMAz4aB+VTkunXhOcddE+Qr+Mg2XDWafjlAqXDdxTvI8oDk24smDxxfuI/RItvmTPxvuIao4XlnC8j9TyEk4a8T5CSmvVD0HU0e7K34p6H5Wrfivo58Tvo9U/J/KLQ1rO+sWRH6W/iz9K/wEP1oz20WaXfgAAAABJRU5ErkJggg==)
    0% 0% / 100% 100%;
}
.fl {
  float: left;
}
.fr {
  float: right;
}

.content-top {
  padding-left: 10px;
  line-height: 44px;
  border-radius: 20px 20px 0 0;
  background: #fff;
}
.content-main {
  height: 146px;
  padding-top: 10px;
}
.imgs {
  width: 90px;
  height: 90px;
  background: url('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2865991597,944747464&fm=173&app=49&f=JPEG?w=640&h=360&s=B4A602BA56C750E2D2B7E2C70300F0B6') no-repeat;
  margin-left: 20px;
  margin-right: 10px;
  float: left;
}
ul li {
  list-style: none;
}
ul li span {
  font-size: 14px;
  color: #ff5000;
}

.addopp span {
  display: inline-block;
  width: 20px;
  text-align: center;
  background: #e7e7e7;
}

[data-tpl-id^="shopPromotion_"],
[data-tpl-id^="groupPromotion_"],
[data-tpl-id^="invalid_"],
[data-tpl-id^="shop_"] {
  min-height: 30px;
}
.alert-container {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1002;
}
.alert-container .alert-content {
  width: 2.7rem;
  border-radius: 0.08rem;
  background-color: #f0f0f0;
  padding-top: 0.15rem;
  text-align: center;
}
.alert-container .alert-content .alert-btn-group {
  margin-top: 0.1rem;
  border-top: 0.01rem solid #ddd;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.alert-container .alert-content .alert-btn-group > button {
  border: 0;
  background-color: transparent;
  height: 0.42rem;
  width: 100%;
}
.settlement-bar {
  position: fixed;
  bottom: 43px;
  bottom: calc(43px + constant(safe-area-inset-bottom));
  bottom: calc(43px + env(safe-area-inset-bottom));
  width: 100%;
  max-width: 768px;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 0 12px;
  background-color: #ffffff;
  height: 54px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.settlement-bar .checkbox-wrapper {
  white-space: nowrap;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  margin-right: 10px;
}
.settlement-bar .checkbox-wrapper .select-all {
  position: relative;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.settlement-bar .checkbox-wrapper .select-all .icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;  
  background-size: contain;
}
.settlement-bar .submit-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  overflow: hidden;
}
.settlement-bar .submit-wrapper .price-wrapper {
  white-space: nowrap;
  font-size: 15px;
  color: #333333;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}
.settlement-bar .submit-wrapper .price-wrapper .price {
  color: #ff5000;
  display: inline-block;
  vertical-align: middle;
}
.settlement-bar .submit-wrapper .submit.disabled {
  color: rgba(255, 255, 255, 0.5);
}
.settlement-bar .submit-wrapper .submit {
  background-image: -webkit-linear-gradient(left, #ff9000 0%, #ff5000 98%);
  background-image: linear-gradient(90deg, #ff9000 0%, #ff5000 98%);
  font-size: 15px;
  line-height: 15px;
  padding: 12px 12px;
  text-align: center;
  border-radius: 80px;
  color: #ffffff;
  white-space: nowrap;
  margin-left: 10px;
}
.tb-toolbar-container {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  background-color: #ffffff;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #f8f8f8;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 20px;
  padding-top: 2px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}
.tb-toolbar-container .tab {
  color: #5d656b;
  text-decoration: none;
}
.tb-toolbar-container > .tab {
  display: block;
  text-align: center;
}
.tb-toolbar-container .text {
  font-size: 12px;
  -webkit-transform: scale(0.83333333);
  transform: scale(0.83333333);
}
.tb-toolbar-container .tb-toolbar-iconfont {
  font-size: 22px;
  height: 22px;
  line-height: 22px;
  color: #5d656b;
}
.hide {
  display: none;
}
</style>
