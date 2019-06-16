<template>
  <div class="page" style="width:100%">
    <div class="page-container">
      <header class="fixed-top">
        <div class="fixed-wrap">
          <!-- empty -->
          <div class="tab-bar-container">
            <ul style="background-color: rgb(255, 255, 255);">
              <li class="acitve-tab">
                <div style="color: rgb(255, 80, 0); border-bottom: 2px solid rgb(255, 80, 0);">全部</div>
              </li>
              <li class>
                <div style="color: rgb(0, 0, 0); border-bottom: 2px solid transparent;">待付款</div>
              </li>
              <li class>
                <div style="color: rgb(0, 0, 0); border-bottom: 2px solid transparent;">待发货</div>
              </li>
              <li class>
                <div style="color: rgb(0, 0, 0); border-bottom: 2px solid transparent;">待收货</div>
              </li>
              <li class>
                <div style="color: rgb(0, 0, 0); border-bottom: 2px solid transparent;">待评价</div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="main-container">
        <div class="atmosphere">
          <div class="ptr--ptr" style="min-height: 0px;">
            <div class="ptr--box">
              <div class="ptr--content">
                <div class="ptr--icon">⇣</div>
                <div class="ptr--text">下拉即可刷新...</div>
              </div>
            </div>
          </div>
          <div
            id="ptr"
            shouldpulltorefresh="function(){return!(document.documentElement.scrollTop||document.body.scrollTop)}"
            class="ptr--top"
          >
            <!-- empty -->
            <div class="list-card">
              <li class="searchbar__wrap">
                <div class="searchbar__input">
                  <div class="search-icon">
                    <span class="taobao-iconfont">끺</span>
                  </div>
                  <input placeholder="搜索全部订单" type="text">
                </div>
                <div class="searchbar__button">
                  <span>搜索</span>
                </div>
              </li>
              <!-- empty -->
              <!-- empty -->
              <div class="item-card" v-for="(i,index) in list" :key="index">
                <div data-tpl-id="orderlist_head_1" class="tpl-wrapper" data-spm="orderlist_head_1">
                  <div
                    view-name="DLinearLayout"
                    style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;height:auto;width:100%;background-color:#ffffff;"
                  >
                    <div
                      view-name="DLinearLayout"
                      style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                    >
                      <div
                        view-name="TImageView"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;width:15px;height:15px;margin-top:16px;margin-bottom:16px;margin-left:12px;"
                      >
                        <div
                          class="lastImg"
                          :style="`backgroundImage: url(${i.src})`"
                        ></div>
                      </div>
                      <div
                        view-name="DTextView"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;max-width:155px;font-size:12px;margin-top:16px;margin-bottom:16px;margin-left:5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-box-align:center;"
                      >
                        <span
                          style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                        >某某官方旗舰店</span>
                      </div>
                    </div>
                    <div
                      view-name="DLinearLayout"
                      style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:1;flex:1;height:mathc_content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                    >
                      <div
                        view-name="DTextView"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:1;flex:1;font-size:12px;color: #FF5000;margin-top:16px;margin-bottom:16px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-right:12px;margin-left:12px;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:end;-webkit-box-align:center;"
                      >
                        <span
                          style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                        >卖家已发货</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-tpl-id="orderlist_sub_1" class="tpl-wrapper" data-spm="orderlist_sub_1">
                  <div
                    view-name="DLinearLayout"
                    style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;height:auto;width:100%;background-color:#ffffff;"
                  >
                    <div
                      view-name="DFrameLayout"
                      style="display: flex; overflow: hidden; height: 90px; width: 100%; margin-bottom: 12px; place-self: flex-start; position: relative;"
                    >
                      <div
                        view-name="TImageView"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;width:90px;height:90px;margin-left:12px;border-radius:6px;visibility:visible;"
                      >
                        <div
                          :style="`width: 100%; height: 100%; backgroundImage: url(${i.src}); background-repeat: no-repeat; background-position: center center; background-size: cover;`"
                        ></div>
                      </div>
                      <div
                        view-name="DLinearLayout"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;background-color:#ffffff;height:auto;width:225px;right:0;top:0;margin-right:12px;-webkit-flex-direction:column;flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;"
                      >
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;max-width:170px;margin-bottom:5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:12px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                          >{{i.name}}</span>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;max-width:170px;color:#999999;margin-bottom:5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:12px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                          >5G牛逼</span>
                        </div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;width:100%;height:auto;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                        ></div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex-direction:row;flex-direction:row;width:100%;height:auto;margin-bottom:5px;visibility:visible;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;"
                        >
                          <div
                            view-name="DLinearLayout"
                            style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;background-color:#FFF1EB;border-radius:4px;margin-right:4px;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                          >
                            <div
                              view-name="DTextView"
                              style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;font-size:10px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#ff5000;margin-right:2px;margin-left:2px;margin-top:2px;margin-bottom:2px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                            >
                              <span
                                style="text-overflow: ellipsis; overflow: hidden; line-height: 12px; white-space: nowrap;"
                              >七天退换</span>
                            </div>
                          </div>
                        </div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;-webkit-flex-direction:row;flex-direction:row;width:100%;height:auto;margin-bottom:5px;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;"
                        ></div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;-webkit-flex-direction:row;flex-direction:row;width:100%;height:auto;margin-bottom:5px;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;"
                        ></div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;color:#FF9F00;height:auto;width:100%;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;font-size:12px;margin-top:12px;max-width:auto;-webkit-box-pack:end;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                          ></span>
                        </div>
                      </div>
                      <div
                        view-name="DLinearLayout"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;right:0;top:0;margin-right:12px;-webkit-flex-direction:column;flex-direction:column;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-orient:vertical;-webkit-box-direction:normal;"
                      >
                        <div
                          view-name="DLinearLayout"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;margin-top:3.5px;margin-bottom:3.5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                        >
                          <div
                            view-name="DTextView"
                            style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;margin-left:12px;font-size:12px;visibility:visible;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                          >
                            <span
                              style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                            >￥{{i.id}}</span>
                          </div>
                          <div
                            view-name="DTextView"
                            style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;font-size:12px;visibility:visible;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                          >
                            <span
                              style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                            >.</span>
                          </div>
                          <div
                            view-name="DTextView"
                            style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;font-size:10px;visibility:visible;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;margin-top:2px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                          >
                            <span
                              style="text-overflow: ellipsis; overflow: hidden; line-height: 12px; white-space: nowrap;"
                            >00</span>
                          </div>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;color:#999999;font-size:12px;visibility:visible;margin-top:3.5px;margin-bottom:3.5px;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;height:auto;width:100%;max-width:auto;-webkit-box-pack:end;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                          >x{{i.num}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-tpl-id="orderlist_sub_2" class="tpl-wrapper" data-spm="orderlist_sub_2">
                  <div
                    view-name="DLinearLayout"
                    style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;height:auto;width:100%;background-color:#ffffff;"
                  >
                    <div
                      view-name="DFrameLayout"
                      style="display: flex; overflow: hidden; height: 21px; width: 100%; margin-bottom: 12px; place-self: flex-start; position: relative;"
                    >
                      <div
                        view-name="TImageView"
                        style="display:none;overflow:hidden;position:absolute;width:90px;height:90px;margin-left:12px;border-radius:6px;"
                      >
                        <div
                          style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"
                        ></div>
                      </div>
                      <div
                        view-name="DLinearLayout"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;background-color:#ffffff;height:auto;width:225px;right:0;top:0;margin-right:12px;-webkit-flex-direction:column;flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;"
                      >
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;max-width:170px;margin-bottom:5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:12px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                          >保险服务</span>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;max-width:170px;color:#999999;margin-bottom:5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:12px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;"
                          ></span>
                        </div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;width:100%;height:auto;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                        ></div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;-webkit-flex-direction:row;flex-direction:row;width:100%;height:auto;margin-bottom:5px;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;"
                        ></div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;-webkit-flex-direction:row;flex-direction:row;width:100%;height:auto;margin-bottom:5px;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;"
                        ></div>
                        <div
                          view-name="DLoopLinearLayout"
                          style="display:none;overflow:hidden;-webkit-flex-direction:row;flex-direction:row;width:100%;height:auto;margin-bottom:5px;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;-webkit-box-orient:horizontal;-webkit-box-direction:normal;"
                        ></div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;color:#FF9F00;height:auto;width:100%;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;font-size:12px;margin-top:12px;max-width:auto;-webkit-box-pack:end;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                          ></span>
                        </div>
                      </div>
                      <div
                        view-name="DLinearLayout"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;right:0;top:0;margin-right:12px;-webkit-flex-direction:column;flex-direction:column;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-box-orient:vertical;-webkit-box-direction:normal;"
                      >
                        <div
                          view-name="DLinearLayout"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;margin-top:3.5px;margin-bottom:3.5px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                        >
                          <div
                            view-name="DTextView"
                            style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;margin-left:12px;font-size:12px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                          >
                            <span
                              style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                            ></span>
                          </div>
                          <div
                            view-name="DTextView"
                            style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;font-size:12px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                          >
                            <span
                              style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                            >.</span>
                          </div>
                          <div
                            view-name="DTextView"
                            style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;font-size:10px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;margin-top:2px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                          >
                            <span
                              style="text-overflow: ellipsis; overflow: hidden; line-height: 12px; white-space: nowrap;"
                            ></span>
                          </div>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;color:#999999;font-size:12px;margin-top:3.5px;margin-bottom:3.5px;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-align-items:center;align-items:center;height:auto;width:100%;max-width:auto;-webkit-box-pack:end;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                          >xundefined</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-tpl-id="orderlist_pay_default_1"
                  class="tpl-wrapper"
                  data-spm="orderlist_pay_default_1"
                >
                  <div
                    view-name="DFrameLayout"
                    style="display: flex; overflow: hidden; height: 32.4px; width: 100%; background-color: rgb(255, 255, 255); position: relative;"
                  >
                    <div
                      view-name="DLinearLayout"
                      style="display: flex; overflow: hidden; position: absolute; height: auto; width: fit-content; margin-right: 12px; right: 0px; top: 4.76837e-07px; margin-bottom: 12px; margin-top: 6px;"
                    >
                      <div
                        view-name="DTextView"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;margin-left:12px;color:#999999;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;font-size:12px;visibility:visible;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                      >
                        <span
                          style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                        >共{{i.num}}件商品</span>
                      </div>
                      <div
                        view-name="DTextView"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;margin-left:12px;font-size:12px;color:#333333;visibility:visible;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                      >
                        <span
                          style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                        >合计:￥{{i.id*i.num}}.00</span>
                      </div>
                      <div
                        view-name="DLinearLayout"
                        style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                      >
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;margin-left:10px;font-size:12px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                          ></span>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;font-size:12px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 14.4px; white-space: nowrap;"
                          >.</span>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;color:#333333;font-size:10px;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;margin-top:2px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 12px; white-space: nowrap;"
                          ></span>
                        </div>
                        <div
                          view-name="DTextView"
                          style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;font-size:10px;color:#333333;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-top:2px;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:start;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 12px; white-space: nowrap;"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-tpl-id="orderlist_orderop_default_1"
                  class="tpl-wrapper"
                  data-spm="orderlist_orderop_default_1"
                >
                  <div
                    view-name="DLinearLayout"
                    style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex-direction:column;flex-direction:column;height:auto;background-color:#ffffff;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;"
                  >
                    <div
                      view-name="DView"
                      style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;width:100%;background-color:#f8f8f8;height:1px;visibility:visible;-webkit-align-self:flex-start;align-self:flex-start;justify-self:flex-start;"
                    ></div>
                    <div
                      view-name="DLinearLayout"
                      style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;background-color:#ffffff;height:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-end;align-self:flex-end;justify-self:center;"
                    >
                      <div
                        view-name="DTextView"
                        aria-label="&amp;#26356;&amp;#22810;&amp;#25805;&amp;#20316;"
                        style="display:none;overflow:hidden;-webkit-flex:0 0 auto;flex:0 0 auto;height:28px;margin-right:9px;margin-top:9px;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;color:#666666;font-size:13px;width:60px;max-width:auto;-webkit-box-pack:center;-webkit-box-align:center;"
                      >
                        <span
                          style="text-overflow: ellipsis; overflow: hidden; line-height: 15.6px; white-space: nowrap;"
                        >更多</span>
                      </div>
                      <div
                        view-name="DFrameLayout"
                        style="display: flex; overflow: hidden; flex: 0 0 auto; height: 28px; width: 81px; border-radius: 15px; margin-top: 9px; margin-bottom: 9px; visibility: visible; border-color: rgb(153, 153, 153); border-style: solid; border-width: 1px; margin-right: 9px; place-self: flex-start; position: relative;"
                      >
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;color:#666666;height:100%;width:80px;font-size:13px;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:center;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 15.6px; white-space: nowrap;"
                          >延长收货</span>
                        </div>
                      </div>
                      <div
                        view-name="DFrameLayout"
                        style="display: flex; overflow: hidden; flex: 0 0 auto; height: 28px; width: 81px; border-radius: 15px; margin-top: 9px; margin-bottom: 9px; margin-right: 9px; visibility: visible; border-color: rgb(153, 153, 153); border-style: solid; border-width: 1px; place-self: flex-start; position: relative;"
                      >
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;color:#666666;height:100%;width:80px;font-size:13px;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:center;-webkit-box-align:center;"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 15.6px; white-space: nowrap;"
                          >查看物流</span>
                        </div>
                      </div>
                      <div
                        view-name="DFrameLayout"
                        style="display: flex; overflow: hidden; flex: 0 0 auto; height: 28px; width: 81px; border-radius: 15px; margin-top: 9px; margin-bottom: 9px; margin-right: 9px; visibility: visible; border-color: rgb(255, 80, 0); border-style: solid; border-width: 1px; place-self: flex-start; position: relative;"
                      >
                        <div
                          view-name="DTextView"
                          style="display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;position:absolute;color: #FF5000;height:100%;width:80px;font-size:13px;-webkit-justify-content:center;justify-content:center;-webkit-align-items:center;align-items:center;max-width:auto;-webkit-box-pack:center;-webkit-box-align:center;"
                          @click="close=false"
                        >
                          <span
                            style="text-overflow: ellipsis; overflow: hidden; line-height: 15.6px; white-space: nowrap;"
                          >确认收货</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="bottomObject" style="position: relative; height: 43px;"></div>
            </div>
            <div id="recommend__wrap" style="display: none;">
              <div class="recommend-container" data-spm="recommend" style="display: flex;">
                <div class="recommend-hd">
                  <img
                    src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png"
                    class="recommend-hd-bg"
                  >
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="0"
                    href="//item.taobao.com/item.htm?id=589722028641&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%22589722028641%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i4/3486185211/O1CN01v9T15I1oMgQ2Zwn4U_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="0"
                    href="//item.taobao.com/item.htm?id=589722028641&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%22589722028641%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">夏季薄款裤子男韩版潮流宽松运动五分休闲裤七分中裤修身男士短裤</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">59</span>
                      <span class="recommend-payed">11678人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="1"
                    href="//item.taobao.com/item.htm?id=556958800544&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%22556958800544%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i3/3383535278/O1CN01n6CLDr1orMxNXA1It_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="1"
                    href="//item.taobao.com/item.htm?id=556958800544&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%22556958800544%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">妮维雅女男士专用温和型洗面奶敏感肌肤补水刺激洁面啫喱不无泡沫</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">44.9</span>
                      <span class="recommend-payed">122人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="2"
                    href="//item.taobao.com/item.htm?id=15301638387&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2215301638387%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i4/867473773/TB1q4WKdEvMR1JjSZPcXXc1tFXa_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="2"
                    href="//item.taobao.com/item.htm?id=15301638387&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2215301638387%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">祥祺 小鸟陶瓷肥皂盒香皂盒沥水皂盘缸浴室储水收纳肥皂托 包邮</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">39.99</span>
                      <span class="recommend-payed">40人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="3"
                    href="//item.taobao.com/item.htm?id=18868184842&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2218868184842%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i3/97685766/O1CN01sZzPKQ1sSsDSDKVEy_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="3"
                    href="//item.taobao.com/item.htm?id=18868184842&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2218868184842%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">[摆设家居]茶几简约角几客厅实木沙发边桌茶几新中式官箱茶几边几</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">970.92</span>
                      <span class="recommend-payed">24人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="4"
                    href="//item.taobao.com/item.htm?id=20315784835&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2220315784835%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i1/TB13QLhKXXXXXbRXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="4"
                    href="//item.taobao.com/item.htm?id=20315784835&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2220315784835%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">英国thumbs Up!创意雪糕门档 冰淇淋门缝塞挡门器硅胶门阻挡门塞</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">48</span>
                      <span class="recommend-payed">64人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="5"
                    href="//item.taobao.com/item.htm?id=36238693895&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2236238693895%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i1/TB1tAv2LFXXXXXdXVXXYXGcGpXX_M2.SS2_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="5"
                    href="//item.taobao.com/item.htm?id=36238693895&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2236238693895%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">欧美风 纯亚麻荷叶边被套 亚麻被套 贝壳扣封口纯亚麻被套 包邮</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">510</span>
                      <span class="recommend-payed">12人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="6"
                    href="//item.taobao.com/item.htm?id=38762200475&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2238762200475%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i2/1646186745/TB2YlZmcCOI.eBjy1zkXXadxFXa_!!1646186745.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="6"
                    href="//item.taobao.com/item.htm?id=38762200475&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2238762200475%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">欧式陶瓷高档洗手液瓶创意分装沐浴露瓶酒店美容院乳液分装按压瓶</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">48</span>
                      <span class="recommend-payed">99人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="7"
                    href="//item.taobao.com/item.htm?id=39900335081&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2239900335081%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i2/TB1z18qHXXXXXauXXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="7"
                    href="//item.taobao.com/item.htm?id=39900335081&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2239900335081%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">百山九川厨房楠竹调味架置物调料架瓶刀架收纳双层竹木多功能包邮</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">38</span>
                      <span class="recommend-payed">217人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="8"
                    href="//item.taobao.com/item.htm?id=20118332770&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2220118332770%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i3/T1__0gFIBaXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="8"
                    href="//item.taobao.com/item.htm?id=20118332770&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2220118332770%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">藤编功夫茶几茶桌椅组合茶台桌喝茶艺泡茶创意阳台小茶桌简约现代</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">210</span>
                      <span class="recommend-payed">57人已购买</span>
                    </div>
                  </a>
                </div>
                <div class="recommend-item">
                  <a
                    class="recommend-img-wrapper triggerClick"
                    data-index="9"
                    href="//item.taobao.com/item.htm?id=43573088804&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2243573088804%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <img
                      class="recommend-img lazyload"
                      src="//gw.alicdn.com/bao/uploaded/i3/364724398/O1CN01aiD8c91iMKOUNLJlj_!!0-item_pic.jpg_500x500q90.jpg_.webp"
                    >
                  </a>
                  <a
                    class="recommend-info triggerClick"
                    data-index="9"
                    href="//item.taobao.com/item.htm?id=43573088804&amp;scm=1007.18975.103645.0&amp;pvid=3bdcc494-ac72-40b3-b955-852198eaa8b2&amp;utparam=%7B%22ranger_buckets_native%22%3A%2217638_15948_6362_11514_6595_13440_11609_11608_12894_12893_17347_11513%22%2C%22x_object_type%22%3A%22item%22%2C%22mtx_ab%22%3A0%2C%22mtx_sab%22%3A0%2C%22scm%22%3A%221007.18975.103645.0%22%2C%22x_object_id%22%3A%2243573088804%22%7D&amp;spm=a2141.8138988.guess.0"
                  >
                    <div class="recommend-title">
                      <span class="recommend-title-p">膳魔师保温杯 JNO JNL 车载杯男女士超轻日本儿童大容量便携水杯</span>
                    </div>
                    <div class="recommend-price-box">
                      <span class="recommend-sign recommend-h">￥</span>
                      <span class="recommend-price">135</span>
                      <span class="recommend-payed">216人已购买</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-for="(i,index) in list" :key="index" class="alert-container" :class="{'hide':close}">
        <div class="mengban"></div>
        <div class="alert-content" style="width:200px;paddingTop:20px;background:#ccc;">
          <header class="alert-title"></header>
          <div class="alert-msg" style="textAlign:center;margin-bottom:20px;fontFamily:STCaiyun">你确定要执行该操作吗？</div>
          <div class="alert-btn-group">
            <button class="left-btn" style="margin-right:10px;" @click="close=true">取消</button>
            <button class="right-btn" @click="checkList(i.id)">确定</button>
          </div>
        </div>
      </div>
      <div class="confirmdialog-wrap">
        <div class="confirmdialog-mask">
          <div class="confirmdialog-contentwrap">
            <div class="confirmdialog-titlewrap">
              <h1></h1>
            </div>
            <div class="confirmdialog-content">
              <h2 class="warn-tips"></h2>
              <div class="multi-detailInfo"></div>
            </div>
            <div class="confirmdialog-btnwrap"></div>
          </div>
        </div>
      </div>
      <TaoFoottool/>
    </div>
  </div>
</template>

<script>
import TaoFoottool from "@/components/TaoFoottool.vue";
export default {
  data(){
    return{
      close:true,
      list:[]
    }
  },
  components:{
    TaoFoottool
  },
  methods:{
    getList(){
      this.list = [...this.list,...this.$store.state.liststate]
    },
    checkList(id){
      console.log(id);
      this.$store.commit('removeList',id);
      location.reload();
    }
  },
  created(){
    this.getList('removeList');
  }
}
</script>

<style scoped>
ul {
    list-style: none;
}
.fixed-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}
.tab-bar-container {
    width: 100%;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
}
.tab-bar-container ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    font-size: 14px;
}
.tab-bar-container ul li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    max-width: 25%;
    height: 1rem;
    line-height: 1rem;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.main-container {
    width: 100%;
    padding-bottom: env(safe-area-inset-bottom);
    padding-bottom: constant(safe-area-inset-bottom);
}
.main-container .atmosphere {
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-x: center;
    background-position-y: -0.42rem;
}
.ptr--ptr {
    box-shadow: inset 0 -3px 5px rgba(0, 0, 0, 0.12);
    pointer-events: none;
    font-size: 0.85em;
    font-weight: bold;
    top: 0;
    height: 0;
    transition: height 0.3s, min-height 0.3s;
    text-align: center;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    align-content: stretch;
}
.ptr--ptr {
    box-shadow: none !important;
}
.ptr--box {
    padding: 10px;
    flex-basis: 100%;
}
.ptr--icon {
    color: rgba(0, 0, 0, 0.3);
    transition: transform .3s;
}
.ptr--text {
    margin-top: .33em;
    color: rgba(0, 0, 0, 0.3);
}
.ptr--top {
    touch-action: pan-x pan-down pinch-zoom;
}
.main-container .list-card {
    min-height: 1.2rem;
    padding: 12px 0 0;
}
.searchbar__wrap {
    margin: 0 0.12rem 12px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.searchbar__wrap .searchbar__input {
    overflow: hidden;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-radius: 0.15rem;
    position: relative;
}
.searchbar__wrap .searchbar__input .search-icon {
    position: absolute;
    left: 0;
    top: 0;
    color: #b2b2b2;
    padding: 0.05rem 0 0.05rem 0.1rem;
}
.taobao-iconfont {
    font-family: "taobao" !important;
    font-size: inherit;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
}
.searchbar__wrap .searchbar__input input {
    width: 100%;
    font-size: 14px;
    padding: 0.05rem 0.1rem 0.05rem 0.6rem;
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
}
.searchbar__wrap .searchbar__button {
    background: #FF5000;
    width: 75px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 600;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-radius: 0.15rem;
    margin-left: 12px;
}
.main-container .item-card {
    margin: 0 0.12rem 12px;
    border-radius: 12px;
    overflow: hidden;
}
.alert-btn-group{
    padding:14px 62px;
}
.alert-content{
  position: absolute;
  border: 2px solid red;
  border-radius: 10px;
  z-index: 99;
  top:150px;
  left:87px;
}
.alert-container{
  position: absolute;
  width: 200px;
  height: 100%;
  top:0;
  left:0;
}
.mengban{
  position: absolute;
  top: 0;
  width: 375px;
  height: 100%;
  background: black;
  opacity: .4;
  z-index: 1;
}
.hide{
  display: none;
}
.lastImg{
  width: 100%; height: 100%; 
  background-repeat: no-repeat; 
  background-position: center center; 
  background-size: contain;
}
</style>




