import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// localStorage.removeItem('shopcar');
// localStorage.removeItem('liststate');
const shopcar = JSON.parse(localStorage.getItem('shopcar') || '[]');
const liststate = JSON.parse(localStorage.getItem('liststate') || '[]');
export default new Vuex.Store({
  state: {
    shopcar,
    liststate,
  },
  mutations: {
    setGoods(state, goodsinfo) {// 记录购买的商品名和数量到仓库
      let flag = true;
      state.shopcar.some((item) => {
        if (item.id == goodsinfo.id) {// 商品id相同 则直接加数量
          item.num += parseInt(goodsinfo.num);
          flag = false;
          return true;
        }
      });
      // 如果 flag 循环过后还是 true 就把 商品数据 直接插入到 shopcar
      if (flag) {
        state.shopcar.push(goodsinfo);
      }
      // 当 shopcar 更新之后，把 shopcar 数组，存储到本地的 localStorage中
      localStorage.setItem('shopcar', JSON.stringify(state.shopcar));
    },
    removeFormCar(state, id) {
      // 根据id从store中的购物车中删除对应的那条数据
      state.shopcar.forEach((item, i) => {
        if (item.id == id) {
          state.shopcar.splice(i, 1);
          return true;
        }
      });
      localStorage.setItem('shopcar', JSON.stringify(state.shopcar));
    },
    updataCar(state, goodsinfo) {
      // 修改购物车中商品的数量值
      state.shopcar.some((item) => {
        if (item.id == goodsinfo.id) {
          item.num = parseInt(goodsinfo.num);
          return true;
        }
      });
      // 当修改完商品的数量，把最新的购物车数据保存到 本地存储中
      localStorage.setItem('shopcar', JSON.stringify(state.shopcar));
    },
    setList(state, buyinf) {
      state.liststate.push(buyinf);
      localStorage.setItem('liststate', JSON.stringify(state.liststate));
    },
    removeList(state, id) {
      // 根据id从store中的购物车中删除对应的那条数据
      state.liststate.forEach((item, i) => {
        if (item.id == id) {
          state.liststate.splice(i, 1);
          return true;
        }
      });
      localStorage.setItem('liststate', JSON.stringify(state.liststate));
    },
  },
  actions: {

  },
});


// const store = new Vuex.Store({
//   state:{
//     arr:[]
//   },
//   mutations:{//方法
//     setGoods(state,inf){//记录购买的商品名和数量到仓库
//       state.arr.push(inf);
//     }
//   }
// });
// this.$store.commit('setGoods', {
    // name:'',
    // num:0
// })使用对象传值方法
