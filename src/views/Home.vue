<template>
  <div>
    <TaoHeader/>
    <div class="sc-htpNat gQmoYV">
      <TaoBanner/>
      <TaoMain/>
      <TaoGuess v-show="bool"/>
      <TaoFooter/>
      <div
        v-show="goTop"
        @click="goback"
        style="position: fixed; bottom: 70px; right: 10px; cursor: pointer; transition: opacity 0.2s linear 0s, visibility; z-index: 1000; opacity: 1; visibility: visible;"
      >
        <div class="sc-gzVnrw fSEVbN">
          <span class="iconfont icon-upward"></span>顶部
        </div>
      </div>
      <TaoFoottool/>
    </div>
    <div
      class="smartbanner-wrapper"
      style="background-image: url(&quot;//gw.alicdn.com/bao/uploaded/TB1FjNySpXXXXc8aXXXXXXXXXXX-200-200.png&quot;);"
    >
      <span class="open-app">打开App</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TaoHeader from '@/components/TaoHeader.vue'; // @ is an alias to /src
import TaoBanner from '@/components/TaoBanner.vue';
import TaoMain from '@/components/TaoMain.vue';
import TaoGuess from '@/components/TaoGuess.vue';
import TaoFooter from '@/components/TaoFooter.vue';
import TaoFoottool from '@/components/TaoFoottool.vue';

@Component({
  components: {
    TaoHeader,
    TaoBanner,
    TaoMain,
    TaoGuess,
    TaoFooter,
    TaoFoottool,
  },
})
export default class Home extends Vue {
  public data() {
    return {
      bool: false,
      goTop: false,
      scrolls: true,
    };
  }
  public mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 50) {
        this.goTop = true;
      } else {
        this.goTop = false;
      }
      // 只加载一次 后面数据再改！
      if (window.scrollY >= 1750) {
        if (this.scrolls) {
          this.scrolls = false;
          if (!this.scrolls) {
            setTimeout(() => {
              this.bool = true;
            }, 1000);
          }
        }
      }
    });
  }
  public methods() {
    this.goback();
  }

  private goback() {
    let Y = window.scrollY;
    const timer = setInterval(() => {
      Y -= 50;
      if (Y <= 0) {
        Y = 0;
        clearInterval(timer);
      }
      window.scrollTo(0, Y);
    }, 10);
  }

}
</script>


<style lang="scss">
@import "../components/iconfont/iconfont.css";
body, html {
    height: 100%;
    background-color: #f4f4f4;
}
html{
  font-size: 37.5px;
}
body{
  font-size: 16px;
}
.gQmoYV {
  min-height: 100%;
  background-color: #f4f4f4;
}
.fSEVbN {
  position: relative;
  color: #bbbbbb;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  line-height: 60px;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 12px;
  text-align: center;
}
.fSEVbN span {
  color: #999999;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  font-size: 20px;
  line-height: 24px;
}
.smartbanner-wrapper {
  position: fixed;
  z-index: 1000;
  right: 10px;
  bottom: 150px;
  width: 44px;
  height: 44px;
  border-radius: 6px;
  background-size: contain;
  background-position: center;
}
.smartbanner-wrapper .open-app {
  position: absolute;
  font-size: 12px;
  color: #ffffff;
  white-space: nowrap;
  background: -webkit-linear-gradient(bottom left, #ff9500, #ff5000);
  background: linear-gradient(to top right, #ff9500, #ff5000);
  top: 48px;
  border-radius: 8px;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transform-origin: left top;
  transform-origin: left top;
  width: 60px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  left: -2px;
}
</style>

