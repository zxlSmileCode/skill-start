<template>
  <div class="sc-bwzfXH clGjrA" data-spm="guess">
    <div class="title">
      <span class="line"></span>
      <div class="text-wrapper">
        <span class="iconfont icon-search"></span>猜你喜欢
      </div>
    </div>
    <div ref="list" class="waterfall">
      <div
        v-for="(i,index) in goodList"
        :key="index"
        class="tpl-wrapper"
        style="width:185px;display:inline-block;margin-right:2px;"
        @click="goAbout(i.name)"
      >
      <!-- style="position: absolute; left: 0px; top: 0px;" -->
        <div
          view-name="DLinearLayout"
          style="display: flex; overflow: hidden; width: 184.5px; height: 265px; -webkit-box-orient: vertical; flex-direction: column; background-color: rgb(255, 255, 255); place-self: flex-start;"
        >
          <div
            view-name="DFrameLayout"
            style="display: flex; overflow: hidden; width: 100%; height: 193px; place-self: flex-start; position: relative;"
          >
            <div
              view-name="HImageView"
              style="display: flex; overflow: hidden; width: 100%; height: 184.5px; position: absolute;"
            >
              <div
                class="imgSrc"
                :style="`backgroundImage:url(${i.imgsrc})`"
              ></div>
            </div>
            <div
              view-name="DView"
              style="display: flex; overflow: hidden; width: 100%; height: 184.5px; background-color: rgba(0, 18, 60, 0.03); top: 0px; left: 0px; position: absolute;"
            ></div>
            <div
              view-name="HImageView"
              style="display: none; overflow: hidden; margin-top: 165.5px; width: 93px; height: 25px; position: absolute;"
            >
              <div
                style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"
              ></div>
            </div>
            <div
              view-name="DFrameLayout"
              style="display: none; overflow: hidden; margin-top: 167.5px; width: 100%; height: 17px; top: 0px; left: 0px; position: absolute;"
            >
              <div
                view-name="HImageView"
                style="display: flex; overflow: hidden; width: 100%; height: 17px; position: absolute;"
              >
                <div
                  style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"
                ></div>
              </div>
              <div
                view-name="DTextView"
                style="display: inline-block; overflow: hidden; font-size: 11px; height: 17px; width: 100%; margin-left: 26.5px; color: rgb(255, 255, 255); text-align: left; text-overflow: ellipsis; white-space: nowrap; line-height: 17px; position: absolute;"
              ></div>
            </div>
          </div>
          <div
            view-name="RIconTextView"
            style="display: inline-block; overflow: hidden; font-size: 13px; height: 36px; margin-left: 10px; width: 164.5px; color: rgb(51, 51, 51); line-height: 16px; text-align: left; text-overflow: ellipsis;"
          >
            <span>
              <span
                style="display: inline-block; overflow: hidden; -webkit-line-clamp: 2; max-height: 32px; word-break: break-all;"
              >
                <img
                  src="//gw.alicdn.com/tfs/TB1HVMEmWmWBuNjy1XaXXXCbXXa-69-45.png"
                  style="height: 13px; vertical-align: top; padding-right: 4px; position: relative; top: 2px;"
                >
                {{i.name}}
              </span>
            </span>
          </div>
          <div
            view-name="DFrameLayout"
            style="display: flex; overflow: hidden; width: 100%; height: 36px; place-self: flex-start; position: relative;"
          >
            <div
              view-name="DLinearLayout"
              style="display: flex; overflow: hidden; width: 100%; height: 100%; top: 0px; left: 0px; position: absolute;"
            >
              <div
                view-name="RPriceView"
                style="display: inline-block; overflow: hidden; font-size: 16px; height: 24px; width: 164.5px; margin-left: 10px; margin-top: 5.5px; color: rgb(255, 80, 0); text-align: left; text-overflow: ellipsis; white-space: nowrap; line-height: 24px;"
              >
                <span>
                  <span style="display: inline-block; font-size: 10px;">¥</span>{{i.price}}
                </span>
              </div>
            </div>
            <div
              view-name="DTextView"
              style="display: inline-block; overflow: hidden; font-size: 11px; height: 23px; width: 164.5px; margin-left: 10px; margin-top: 6.5px; text-align: right; color: rgb(153, 153, 153); text-overflow: ellipsis; white-space: nowrap; line-height: 23px; position: absolute;"
            >66</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goodList: [],
      bool:true
    };
  },
  methods: {
    getList() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5d034e75707b753c83a5a2da/example/suning"
        )
        .then(result => {
          this.goodList = [...this.goodList, ...result.data.data];
          console.log(this.goodList);
        });
      this.bool = true;
    },
    goAbout(data){
      this.$router.push({
        path:'about',
        query:{name:data}
      })
    }
  },
  mounted(){
    window.addEventListener("scroll", () => {
      if (this.bool) {
        if (window.scrollY >= this.$refs.list.offsetHeight + 1600) {
          this.bool = false;
          console.log('到底部了',this.$refs.list.offsetHeight);
          this.timer = setTimeout(this.getList, 1000);
        }
      }
    });
  },
  destroyed(){
    window.addEventListener("scroll",null);
    this.timer = null;
  }
};
</script>

<style scoped>
.clGjrA {
  position: relative;
  margin-top: 0.1rem;
}
.clGjrA .title {
  position: relative;
  color: #ff5000;
  text-align: center;
  background-color: #ffffff;
  height: 35px;
  line-height: 35px;
  font-size: 17px;
}
.clGjrA .title .line {
  display: inline-block;
  width: 140px;
  height: 1px;
  background: #ff5000;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.clGjrA .title .text-wrapper {
  position: relative;
  z-index: 2;
  display: inline-block;
  padding: 0 8px;
  background-color: #ffffff;
}
.clGjrA .title .text-wrapper:before {
  left: -3px;
}
.clGjrA .title .text-wrapper:before,
.clGjrA .title .text-wrapper:after {
  content: "";
  position: absolute;
  background: #ff5000;
  width: 3px;
  height: 3px;
  border-radius: 100%;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.clGjrA .title .iconfont {
  color: #ff5000;
  font-size: 17px;
  line-height: 17px;
  margin-right: 6px;
}
.iconfont {
  font-family: h5index-iconfont;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
}
.clGjrA .waterfall {
  position: relative;
}
.tpl-wrapper {
  overflow: hidden;
}
.imgSrc{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>

