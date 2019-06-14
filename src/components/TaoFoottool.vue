<template>
  <div class="tb-toolbar-container" data-spm="toolbar">
    <router-link v-for="(i,index) in inf" :key="index" :to="src[index]" class="tab">
      <span
        :class="{
        'tb-toolbar-iconfont':true,
        'iconfont':true,
        [styles[index]]:true,
        'active':act[index]
        }"
      ></span>
      <p class="text">{{i}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inf: ["首页", "购物车", "订单列表", "我的淘宝", "更多"],
      styles: [
        "icon-xiazai45",
        "icon-gouwuche",
        "icon-dingdanliebiao",
        "icon-weibiaoti2fuzhi12",
        "icon-more"
      ],
      src: ["/", "/shopcar", "/list", "myself", "/more"],
      act: [true, false, false, false, false]
    };
  },
  created() {
    for (var i = 0; i < this.src.length; i++) {
      this.act[i] = false;
    }
    this.act[this.src.indexOf(this.$route.path)] = true;
  }
};

</script>

<style lang="scss" scoped>
@import "./iconfont/iconfont.css";
.active {
  color: black !important;
  font-weight: bolder;
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
</style>

