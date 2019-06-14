<template>
  <div class="box" data-spm="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in imgSrc" :key="i">
        <img :src="item" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    data(){
      return{
        imgSrc:['//gw.alicdn.com/imgextra/i3/186/O1CN01TQUvHU1DFECcvMoXY_!!186-0-lubanu.jpg',
        'https://aecpm.alicdn.com/tfscom/TB1aYq6bRSD3KVjSZFqXXc4bpXa.jpg_q50.jpg',
        'https://img.alicdn.com/simba/img/TB1m315a8Cw3KVjSZFuSuwAOpXa.jpg_q50.jpg',
        '//gw.alicdn.com/imgextra/i4/192/O1CN01dkIhEO1DHyZzL7fwG_!!192-0-lubanu.jpg',
        '//gw.alicdn.com/imgextra/i4/197/O1CN01w6hwZJ1DKGYnMAMGH_!!197-0-lubanu.jpg',
        '//gw.alicdn.com/imgextra/i4/155/O1CN01Wkp6XU1D11vNXdUt7_!!155-0-lubanu.jpg',
        'https://img.alicdn.com/tps/i4/TB14_c1bqSs3KVjSZPiSuwsiVXa.jpg',
        '//gw.alicdn.com/imgextra/i2/128/O1CN01FxWlAo1CofEKpjGQ6_!!128-0-lubanu.jpg']
      }
    }
}
</script>

<style lang="scss" scoped>
.box {
  width: 375px;
  height: 120px;
  margin-top: 37px;
}
.mint-swipe-indicators {
  .is-active {
    background: orangered !important;
  }
}
.mint-swipe-item {
  img {
    height: 100%;
    width: 100%;
  }
}

</style>

