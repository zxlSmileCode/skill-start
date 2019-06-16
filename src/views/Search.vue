<template>
  <div>
    <div id="tbh5v0" class="mytaobao">
      <div class="toolbar">
        <header class="top-bar on" id="J_Header">
          <div class="top-bar-w">
            <div class="top-bar-c">
              <div class="s-input-select">
                <div class="s-input-tab">
                  <div class="s-input-tab-txt" data-spm-anchor-id="0.0.0.i2.afb048cc9NVNKP" @click="chos">宝贝</div>
                  <div class="s-input-tab-nav" id="J_TabNav" v-show="chose">
                    <ul>
                      <li class="all">
                        <span class="icon icons-baobei iconfont icon-baobei"></span>宝贝
                      </li>
                      <li class="shop">
                        <span class="icon icons-shop iconfont icon-dianpu" ></span>店铺
                      </li>
                      <li class="mall">
                        <span class="icon icons-tmall iconfont icon-tianmaot"></span>天猫
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="s-input-frame">
                  <form class="c-form-suggest" id="J_Search" method="get" action="/h5">
                    <div class="s-form-search search-form">
                      <input
                        type="search"
                        name="q"
                        class="J_autocomplete"
                        autocomplete="off"
                        v-model="name"
                        @keydown="showList(name)"
                        data-spm-anchor-id="0.0.0.i1.afb048cc9NVNKP"
                      >
                      <button style="display: none;">
                        <span></span>
                      </button>
                    </div>
                    <div class="c-form-btn">
                      <i class="iconfont icon-sousuo"></i>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <a class="logo" href="//m.taobao.com" style="display: none;">
              <div class="icons-home"></div>
            </a>
            <router-link
              to="/"
              class="top-bar-btn closed"
              style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
            >取消</router-link>
          </div>
        </header>
        <div
          class="suggest-container"
          style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
        ></div>
        <div class="rellkey-container" style="display: none;"></div>
        <div class="onesearch-container" style="display: none;"></div>
        <div class="filterbar-container" style="display: none;"></div>
        <div class="tip-container" style="display: none;"></div>
      </div>
      <div id="bodyCont" class="screen-wrap fullscreen searchlist" style="display: none;">
        <section class="searchcontent">
          <div class="search-content">
            <div class="c-more-nomal" id="J_Loading">
              <p class="loading">
                <span></span>
              </p>
            </div>
          </div>
          <input
            id="J_Page_Url"
            type="hidden"
            value="//s.m.taobao.com/search_turn_page_iphone.htm?q=s&amp;sst=1&amp;wlsort=10&amp;abtestNick=&amp;bagtype=&amp;bagvalue=&amp;sid=b905f8677e3fce29&amp;abtest=10"
          >
        </section>
      </div>
    </div>
    <div id="J_SiftContainer" class="m-sift"></div>
    <div id="J_PageNavContainer">
      <ul>
        <li v-for="(i,index) in allSearch" :key="index">
          <a href="#" @click="goAbout(i)">{{i}}</a>
        </li>
      </ul>
    </div>
    <div
      id="m6b88ad"
      dpr="1"
      class="_1DrF-Ndoxy1b882RZcUtzX _1bKOWZpFDSZMyGm5qZHZAU"
      style="display: block;"
      v-if="shows"
    >
      <div class="_2IjaJJcGLxfhZizlEvNf6I" style="background-color: rgb(255, 255, 255);">
        <a class="_1AS0ZunPbr2nuq8dF_GX3I" id="m6b88ad_close" @click="close">
          <span class="_3atXY3ryMGBlcX75fRjo9N"></span>
        </a>
        <a class="_2T8hH-dSehOB1ujnQCdUu1" id="m6b88ad_open">
          <i
            class="_3oSD8Zd4jHy0Cvv1LRRKqH _3WAstZQn9TpspEDdKs7mWt"
            style="background-image: url(&quot;//gw.alicdn.com/bao/uploaded/TB1FjNySpXXXXc8aXXXXXXXXXXX-200-200.png&quot;);"
          ></i>
          <section class="_17RmLD-GpgOKhfzcBdoxTJ">
            <div class="LCu5M00Kb9N_tr_bJy2id" style="color: rgb(51, 51, 51);">打开手机淘宝App</div>
            <div class="_2-Q7hSLdmo7eAQs6ypio1m" style="color: rgb(102, 102, 102);">随时随地 想淘就淘</div>
          </section>
          <div
            class="_3iC3gR5WjHPagmdfIxM934"
            style="background-image: linear-gradient(225deg, rgb(254, 86, 10) 3%, rgb(255, 153, 1) 100%); color: rgb(255, 255, 255);"
          >打开APP</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
      return{
          shows:true,
          chose:false,
          name:'',
          allSearch:[],
          open:true
      }
    },
    methods:{
        close(){
            this.shows = false;
        },
        chos(){
            this.chose = !this.chose;
        },
        showList(what){
          let _this = this;
          if(this.open){
            this.open = false;
            setTimeout(()=>{
              _this.allSearch = [];
              axios
                .get("https://www.easy-mock.com/mock/5d034e75707b753c83a5a2da/example/suning")
                .then(function(response) {
                    let msg = response.data.data;
                    for(const item of msg){
                      if(item.name.indexOf(what) != -1){
                        _this.allSearch.push(item.name);
                      }
                    }
                });
              this.open = true;
            },800);
          }
        },
        goAbout(data){
          this.$router.push({
            path:'about',
            query:{name:data}
          })
        }
    }
  }

</script>

<style lang="scss" scoped>
@import url(../components/iconfont2/iconfont.css);
@import url(../components/iconfont3/iconfont.css);
* {
  margin: 0;
  padding: 0;
}
#tbh5v0 {
  color: #3d4245;
}
.top-bar.on {
  background-color: #fff;
}

.top-bar {
  width: 100%;
  background: #f6f6f6;
  z-index: 101;
}
.top-bar-w {
  width: 375px;
  color: #212121;
  height: 45px;
  line-height: 32px;
  padding: 6px 0;
  display: -webkit-box;
  position: relative;
  border-bottom: 1px solid #dbdbdb;
}
.top-bar.on .top-bar-c {
  margin: 0 0 0 12px;
}
.top-bar-c {
  -webkit-box-flex: 1;
  margin: 0 8px;
}
.s-input-select {
  width: 300px;
  display: -webkit-box;
  height: 32px;
  background: #e3e3e5;
  -webkit-border-radius: 4px;
}
.s-input-tab {
  display: inline-block;
  position: relative;
}
.s-input-tab .s-input-tab-txt {
  width: 56px;
  height: 30px;
  line-height: 30px;
  text-indent: 10px;
  color: #999;
  font-size: 14px;
}
.s-input-tab .s-input-tab-txt:after {
  content: "";
  position: absolute;
  width: 6px;
  height: 3px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAMAAADAMI+zAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAQlBMVEX///9dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY25dY27///8uqZX9AAAAFHRSTlMA5+OrpwOTjmz8+2hJ8vBGLdbSK35PS8AAAAABYktHRACIBR1IAAAAMklEQVQI12NgFIEDJgZmBIeFgZUNxmZnZWBg4OAEMbm4GcCAh1dEhI+fAQoEBIWEQTQAoJUDbNS7QAEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDEtMjZUMTY6MTE6MzYrMDg6MDBa8kEXAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAxLTI2VDE2OjExOjM2KzA4OjAwK6/5qwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=);
  background-size: 6px 3px;
  top: 13px;
  right: 8px;
}
.s-input-tab .s-input-tab-nav.off {
  display: none;
}

.s-input-tab .s-input-tab-nav {
  position: absolute;
  left: 0;
  top: 30px;
  z-index: 101;
  padding: 10px;
}
input,
select,
textarea {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-appearance: none;
  border: 0;
  border-radius: 0;
}

input,
img {
  vertical-align: middle;
}
#tbh5v0 .c-form-suggest {
  position: relative;
}
.s-input-frame .c-form-suggest {
  display: -webkit-box;
}
.s-input-frame .s-form-search .J_autocomplete {
  border: none;
  background: none;
  width: 100%;
  height: 26px;
  font-size: 14px;
}
.s-input-frame .s-form-search {
  -webkit-box-flex: 1;
}
.top-bar-btn {
//   display: none;
  height: 30px;
  line-height: 34px;
  padding: 0 20px;
  font-size: 12px;
  color: #333;
}
.top-bar.on .c-form-suggest .c-form-btn {
  margin-left: 32px;
  display: block;
}
.s-input-frame .c-form-btn {
  width: 30px;
  height: 30px;
  margin-right: -10px;
}
.icon-sousuo {
  width: 18px;
  height: 18px;
}
#tbh5v0 a {
  color: #3d4245;
  text-decoration: none;
}
.top-bar.on .logo {
  display: none;
}
.top-bar-w .logo {
  width: 44px;
  height: 44px;
  display: block;
  overflow: hidden;
  margin-top: -6px;
}

.top-bar-w a {
  color: #5f646e !important;
}
._1DrF-Ndoxy1b882RZcUtzX._1bKOWZpFDSZMyGm5qZHZAU {
    bottom: 0;
}
._1DrF-Ndoxy1b882RZcUtzX {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 999;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._2IjaJJcGLxfhZizlEvNf6I {
    height: 70px;
    font-size: 12px;
}

._1DrF-Ndoxy1b882RZcUtzX._1bKOWZpFDSZMyGm5qZHZAU ._2IjaJJcGLxfhZizlEvNf6I {
    border-top: 1px solid #BABABA;
}

._1DrF-Ndoxy1b882RZcUtzX ._2IjaJJcGLxfhZizlEvNf6I {
    box-sizing: content-box;
    height: 100%;
    color: inherit;
    font-size: inherit;
}
._1DrF-Ndoxy1b882RZcUtzX * {
    color: inherit;
    background-color: inherit;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._1AS0ZunPbr2nuq8dF_GX3I {
    height: 70px;
    line-height: 76px;
    width: 35px;
}

._1DrF-Ndoxy1b882RZcUtzX ._1AS0ZunPbr2nuq8dF_GX3I {
    font-weight: lighter;
    float: left;
}

._1DrF-Ndoxy1b882RZcUtzX * {
    color: inherit;
    background-color: inherit;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._1AS0ZunPbr2nuq8dF_GX3I ._3atXY3ryMGBlcX75fRjo9N {
    font-size: 28px;
    width: 14px;
    height: 14px;
    line-height: 14px;
    margin-left: 10.5px;
}

._1DrF-Ndoxy1b882RZcUtzX ._1AS0ZunPbr2nuq8dF_GX3I ._3atXY3ryMGBlcX75fRjo9N {
    content: " ";
    display: inline-block;
    box-sizing: content-box;
    background-image: url("data:image/png;base64,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");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._2T8hH-dSehOB1ujnQCdUu1 {
    margin: 0 0 0 35px;
}

._1DrF-Ndoxy1b882RZcUtzX ._2T8hH-dSehOB1ujnQCdUu1 {
    display: -webkit-box;
    display: flex;
    height: 100%;
    overflow: hidden;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    text-decoration: none;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._3WAstZQn9TpspEDdKs7mWt {
    margin: 0 8px 0 0;
    width: 50px;
    height: 50px;
}

._1DrF-Ndoxy1b882RZcUtzX ._3WAstZQn9TpspEDdKs7mWt {
    display: inline-block;
    vertical-align: top;
}
._3oSD8Zd4jHy0Cvv1LRRKqH {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._17RmLD-GpgOKhfzcBdoxTJ {
    height: 50px;
    padding-right: 8px;
}

._1DrF-Ndoxy1b882RZcUtzX ._17RmLD-GpgOKhfzcBdoxTJ {
    display: block;
    -webkit-box-flex: 1;
    flex: 1;
    overflow: hidden;
    background: none;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._3iC3gR5WjHPagmdfIxM934 {
    font-size: 14px;
    width: 90px;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._17RmLD-GpgOKhfzcBdoxTJ .LCu5M00Kb9N_tr_bJy2id {
    font-size: 16px;
    margin-top: 3px;
    margin-bottom: 3px;
}
._1DrF-Ndoxy1b882RZcUtzX[dpr="1"] ._17RmLD-GpgOKhfzcBdoxTJ ._2-Q7hSLdmo7eAQs6ypio1m {
    font-size: 12px;
}
._1DrF-Ndoxy1b882RZcUtzX ._17RmLD-GpgOKhfzcBdoxTJ .LCu5M00Kb9N_tr_bJy2id {
    font-size: 16px;
    height: 1.5em;
    line-height: 1.5em;
    margin: 0;
    overflow: hidden;
}

._1DrF-Ndoxy1b882RZcUtzX ._3iC3gR5WjHPagmdfIxM934 {
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    font-weight: normal;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
}
ul li{
    list-style: none;
}
.s-input-tab .s-input-tab-nav ul {
    background: #484d50;
    border-radius: 6px;
    width: 140px;
    overflow: hidden;
    color: #c7c8c9;
}
.s-input-tab .s-input-tab-nav li .icon {
    display: inline-block;
    margin: auto 8px -8px 8px;
    position: relative;
}

.icons-baobei {
    // background-position: -3px -164px;
    width: 20px;
    height: 22px;
}
.s-input-tab .s-input-tab-nav li {
    border-top: 1px solid #707476;
    margin-top: -1px;
    height: 35px;
    line-height: 35px;
}
.s-input-tab .s-input-tab-nav ul:after {
    position: absolute;
    left: 20px;
    top: 5px;
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #484d50;
    -webkit-transform: rotate(45deg);
}
</style>
