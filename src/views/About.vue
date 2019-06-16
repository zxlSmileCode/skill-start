<template>
  <div id="about">
    <div class="navi-bar">
      <button class="btn-back" @click="goback">
        <span class="taobao-iconfont">ꁽ</span>
      </button>
      <button class="btn-cart" @click="goback">
        <span class="taobao-iconfont">ꁍ</span>
      </button>
    </div>
    <div class="box" data-spm="home">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,i) in imgsrc" :key="i">
          <img :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div id="sys_list$sys_list_10014" class="dinamic-layout-one-column">
      <div class="d-price">
        <div>
          <div class="present-price">
            <div class="main-price-wrapper">
              <!-- empty -->
              <p class="o-t-price">
                <span class="num">{{thismes.price}}</span>
              </p>
              <p class="txt">
                <span>卖家促销</span>
              </p>
              <p class="txt">
                <span>淘金币抵2%</span>
              </p>
              <!-- empty -->
            </div>
          </div>
          <div class="original-price">
            <div class>
              价格:￥
              <del>278</del>
            </div>
          </div>
        </div>
      </div>
      <div
        data-spm="dinamic$TB_detail_brand_info_10016"
        data-tpl-id="dinamic$TB_detail_brand_info_10016"
        class="tpl-wrapper"
      >
        <div
          view-name="FrameLayout"
          style="position: relative; display: flex; overflow: hidden; width: 375px; height: 28px; background-color: rgb(255, 255, 255);"
        >
          <div
            view-name="SimpleRichText"
            aria-label="一站购齐 权威认证 买退无忧"
            style="position: absolute; display: flex; left: 0px; bottom: 0px; margin-top: 0px; margin-left: 12px; width: 351px; height: 14px; color: rgb(153, 153, 153); font-size: 13px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"
          >
            <img
              src="//gw.alicdn.com/tfs/TB1RXhclgvD8KJjy0FlXXagBFXa-165-45.png?getAvatar=avatar"
              style="vertical-align: top; margin-right: 3px; height: 14px;"
            >
            <span style="vertical-align: top; margin-left: 2px;">一站购齐 权威认证 买退无忧</span>
          </div>
        </div>
      </div>
      <div data-spm="dinamic$TB_detail_title_normal_10017" data-tpl-id="dinamic$TB_detail_title_normal_10017" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 44px; background-color: rgb(255, 255, 255);"><div view-name="FrameLayout" style="position: absolute; display: none; overflow: hidden; height: 0px; width: 0px; left: 0px; top: 22px;"><div view-name="RichText" style="position: absolute; display: flex; margin-top: 4px; margin-bottom: 5px; height: auto; margin-left: 12px; width: 263px; font-size: 15px; overflow: hidden; background-color: rgba(255, 255, 255, 0); color: rgb(51, 51, 51); font-weight: bold; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-height: 18px; overflow: hidden; text-overflow: ellipsis;">{{thismes.inf}}</span></div></div><div view-name="FrameLayout" style="position: absolute; display: flex; overflow: hidden; height: 44px; width: 312px; visibility: visible; left: 0px; top: 0px;"><div view-name="RichText"  style="position: absolute; display: flex; margin-top: 4px; height: auto; margin-left: 12px; width: 300px; font-size: 15px; overflow: hidden; background-color: rgba(255, 255, 255, 0); color: rgb(51, 51, 51); font-weight: bold; visibility: visible; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-height: 20px; overflow: hidden; text-overflow: ellipsis;">{{thismes.inf}}</span></div></div><div view-name="LinearLayout" aria-label="分享" style="position: absolute; display: flex; overflow: hidden; margin-right: 0px; width: -webkit-fit-content; margin-top: 0px; height: 24px; right: 0px; top: 10px; background-color: rgb(244, 244, 244); -webkit-box-orient: horizontal; flex-direction: row; border-top-left-radius: 12px; border-bottom-left-radius: 12px;"><div view-name="IconFontView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin-left: 9px; width: 17px; height: 17px; font-size: 16px; place-self: center flex-start; background-color: rgba(204, 204, 204, 0); color: rgb(153, 153, 153); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span class="taobao-iconfont">ꄪ</span></div><div view-name="TextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin-left: 0px; margin-right: 6px; width: -webkit-fit-content; height: auto; font-size: 12px; overflow: hidden; place-self: center flex-start; color: rgb(153, 153, 153); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">分享</span></div></div></div></div>
      <div data-spm="dinamic$TB_detail_subInfo_default_10018" data-tpl-id="dinamic$TB_detail_subInfo_default_10018" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 40px; background-color: rgb(255, 255, 255);"><div view-name="TextView" aria-label="快递: 免运费" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; height: auto; max-width: 120px; font-size: 13px; overflow: hidden; left: 0px; top: 12px; color: rgb(153, 153, 153); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;">快递: 免运费</span></div><div view-name="TextView" style="position: absolute; display: flex; width: -webkit-fit-content; height: auto; max-width: 120px; font-size: 13px; overflow: hidden; left: 163.65px; top: 12px; color: rgb(153, 153, 153); visibility: visible; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;">{{thismes.people}}</span></div><div view-name="TextView" aria-label="广东深圳" style="position: absolute; display: flex; margin-right: 12px; width: -webkit-fit-content; height: auto; max-width: 120px; font-size: 13px; overflow: hidden; right: 0px; top: 12px; color: rgb(153, 153, 153); visibility: visible; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;">广东深圳</span></div></div></div>
      <div data-spm="dinamic$TB_detail_divider_10019" data-tpl-id="dinamic$TB_detail_divider_10019" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 10px; background-color: rgb(248, 248, 248);"></div></div>
      <div data-spm="dinamic$TB_detail_new_lingquan_10021" data-tpl-id="dinamic$TB_detail_new_lingquan_10021" class="tpl-wrapper"><div view-name="LinearLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: auto; background-color: rgb(255, 255, 255); -webkit-box-orient: horizontal; flex-direction: row;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 375px; margin-top: 13px; margin-bottom: 0px; height: 56px; place-self: flex-start;"><div view-name="TextView" aria-label="优惠" style="position: absolute; display: flex; margin-left: 12px; width: 42px; height: 15px; font-size: 13px; left: 0px; top: 0px; color: rgb(153, 153, 153); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;">优惠</span></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; margin-left: 54px; width: 375px; height: auto; -webkit-box-orient: vertical; flex-direction: column; background-color: rgb(255, 255, 255);"><div view-name="RichText" aria-label="领券后, 再凑#￥81@ 可减#￥30@" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"><img src="//gw.alicdn.com/tfs/TB115IVsuuSBuNjSsziXXbq8pXa-40-40.png?getAvatar=avatar" style="max-height: 13px; margin-right: 4px; vertical-align: top;">领券后, 再凑<span style="color: rgb(255, 80, 0);">￥81</span> 可减<span style="color: rgb(255, 80, 0);">￥30</span></span></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div><div view-name="LinearLayout" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-bottom: 10px; height: 15px; width: 266px; -webkit-box-orient: horizontal; flex-direction: row;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 0px; height: 0px; border-radius: 8px; place-self: center flex-start; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(255, 235, 235);"><div view-name="TextView" aria-label="($const{品类券" style="position: absolute; display: flex; margin-left: 4px; margin-right: 4px; width: -webkit-fit-content; height: 13px; font-size: 9px; left: 0px; top: 0px; color: rgb(255, 0, 54); overflow: hidden; border-radius: 5px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(252, 227, 229); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 11px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="RichTextByCoupon" style="position: relative; display: none; flex-shrink: 1; flex-grow: 0; height: 15px; margin-left: 2px; width: 220px; font-size: 11px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 13px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="LinearLayout" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; -webkit-box-orient: horizontal; flex-direction: row;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 0px; height: 0px; border-radius: 8px; place-self: center flex-start; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231);"><div view-name="TextView" aria-label="($const{免息券" style="position: absolute; display: flex; margin-left: 4px; margin-right: 4px; width: -webkit-fit-content; height: 13px; font-size: 9px; left: 0px; top: 0px; color: rgb(255, 80, 0); overflow: hidden; border-radius: 5px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 11px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 1; flex-grow: 0; height: 100%; margin-left: 6px; width: 210px; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="LinearLayout" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; -webkit-box-orient: horizontal; flex-direction: row;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 0px; height: 0px; border-radius: 8px; place-self: center flex-start; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231);"><div view-name="TextView" aria-label="($const{花呗红包" style="position: absolute; display: flex; margin-left: 4px; margin-right: 4px; width: -webkit-fit-content; height: 13px; font-size: 9px; left: 0px; top: 0px; color: rgb(255, 80, 0); overflow: hidden; border-radius: 5px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 11px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 1; flex-grow: 0; height: 100%; margin-left: 6px; width: 210px; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="RichTextByCoupon" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; font-size: 11px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 13px; overflow: hidden; text-overflow: ellipsis;"></span></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-bottom: 10px; height: 15px; width: 266px; place-self: flex-start center; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div><div view-name="LinearLayout" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-bottom: 10px; height: 15px; width: 100%; -webkit-box-orient: horizontal; flex-direction: row;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 0px; height: 0px; border-radius: 8px; place-self: center flex-start; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231);"><div view-name="TextView" style="position: absolute; display: flex; margin-left: 4px; margin-right: 4px; width: -webkit-fit-content; height: 13px; font-size: 9px; left: 0px; top: 0px; color: rgb(255, 80, 0); overflow: hidden; border-radius: 5px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 11px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="RichTextByCoupon" style="position: relative; display: flex; flex-shrink: 1; flex-grow: 0; height: 15px; margin-left: 2px; width: 230px; font-size: 11px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 13px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="LinearLayout" aria-label="满300元减30券;满600元减60券" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-bottom: 10px; height: 15px; width: 266px; -webkit-box-orient: horizontal; flex-direction: row; max-width: 375px;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 57px; height: 13px; border-radius: 8px; place-self: center flex-start; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231);"><div view-name="TextView" style="position: absolute; display: flex; margin-left: 4px; margin-right: 4px; width: -webkit-fit-content; height: 13px; font-size: 9px; left: 0px; top: 0px; color: rgb(255, 80, 0); overflow: hidden; border-radius: 5px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 11px; overflow: hidden; text-overflow: ellipsis;">店铺优惠券</span></div></div><div view-name="RichTextByCoupon" style="position: relative; display: flex; flex-shrink: 1; flex-grow: 0; height: 15px; margin-left: 2px; width: 220px; font-size: 11px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 13px; overflow: hidden; text-overflow: ellipsis;"><span style="padding: 2px 4px;">满300元减30券</span><span style="padding: 2px 4px;">满600元减60券</span></span></div></div><div view-name="LinearLayout" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-bottom: 10px; height: 15px; width: 266px; -webkit-box-orient: horizontal; flex-direction: row; max-width: 375px;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 0px; height: 0px; place-self: center flex-start; border-radius: 8px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231);"><div view-name="TextView" style="position: absolute; display: flex; margin-left: 5px; margin-right: 5px; width: -webkit-fit-content; height: 13px; font-size: 10px; left: 0px; top: 0px; color: rgb(255, 80, 0); overflow: hidden; border-radius: 5px; border: 0.5px solid rgba(0, 0, 0, 0); background-color: rgb(253, 237, 231); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 12px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="RichText" style="position: relative; display: none; flex-shrink: 1; flex-grow: 0; height: 16px; margin-left: 6px; width: 210px; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;"></span></div></div><div view-name="View" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; height: 6px; width: 266px; background-color: rgb(255, 255, 255); place-self: flex-start; max-width: 375px;"></div></div><div view-name="TextView" aria-label="领券" style="position: absolute; display: flex; margin-right: 15px; width: 42px; height: 15px; font-size: 13px; right: 0px; top: 0px; color: rgb(153, 153, 153); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;">领券</span></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: 14px; height: 14px; font-size: 14px; right: 0px; top: 0px; color: rgb(204, 204, 204); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span class="taobao-iconfont">큚</span></div></div><div view-name="View" style="position: relative; display: flex; flex-shrink: 1; flex-grow: 0; width: 1px; height: 15px; place-self: flex-start;"></div></div></div>
      <div data-spm="dinamic$TB_detail_divider_10022" data-tpl-id="dinamic$TB_detail_divider_10022" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 10px; background-color: rgb(248, 248, 248);"></div></div>
      <div data-spm="dinamic$TB_detail_trade_guarantee_10023" data-tpl-id="dinamic$TB_detail_trade_guarantee_10023" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 42px; background-color: rgb(255, 255, 255);"><div view-name="TextView" aria-label="服务" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; margin-top: 13px; height: 15px; font-size: 13px; color: rgb(153, 153, 153); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="overflow: hidden; text-overflow: clip; white-space: nowrap; line-height: 16px;">服务</span></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; -webkit-box-orient: vertical; flex-direction: column; margin-left: 54px; margin-top: 13px; height: auto; width: 205px;"><div view-name="AdaptiveTextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; max-width: 205px; margin-left: 0px; width: -webkit-fit-content; margin-top: 0px; height: 15px; font-size: 13px; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">15天退货 · 1次破损补寄 · 无忧质保 · 破损包赔 · 运费险 · 公益宝贝</span></div><div view-name="SimpleRichText" style="position: relative; display: none; flex-shrink: 0; flex-grow: 0; margin-left: 0px; width: 205px; margin-top: 6px; height: 10px; color: rgb(153, 153, 153); font-size: 10px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="vertical-align: top; margin-left: 2px;"></span></div><div view-name="View" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; width: 1px; height: 14px; place-self: flex-start; max-width: 205px;"></div></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: 14px; margin-top: 13px; height: 14px; font-size: 14px; right: 0px; top: 0px; color: rgb(204, 204, 204); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span class="taobao-iconfont">큚</span></div></div></div>
      <div data-spm="dinamic$TB_detail_divider_10024" data-tpl-id="dinamic$TB_detail_divider_10024" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 10px; background-color: rgb(248, 248, 248);"></div></div>
      <div data-spm="xsku" data-tpl-id="xsku" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 42px; background-color: rgb(255, 255, 255);"><div view-name="TextView" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; margin-top: 13px; height: 14px; font-size: 12px; color: rgb(153, 153, 153); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="overflow: hidden; text-overflow: clip; white-space: nowrap; line-height: 14px;">规格</span></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; -webkit-box-orient: vertical; flex-direction: column; margin-left: 54px; margin-top: 13px; height: auto; width: 205px;"><div view-name="TextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; max-width: 205px; margin-left: 0px; width: -webkit-fit-content; margin-top: 0px; height: 15px; font-size: 13px; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">请选择 颜色分类 </span></div><div view-name="View" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; width: 1px; height: 14px; place-self: flex-start;"></div></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: 14px; margin-top: 13px; height: 14px; font-size: 14px; right: 0px; top: 0px; color: rgb(204, 204, 204); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span class="taobao-iconfont">큚</span></div></div></div>
      <div data-spm="dinamic$TB_detail_product_props_10027" data-tpl-id="dinamic$TB_detail_product_props_10027" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 40px; background-color: rgb(255, 255, 255);"><div view-name="TextView" aria-label="参数" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; margin-top: 13px; height: auto; font-size: 13px; color: rgb(153, 153, 153); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="overflow: hidden; text-overflow: clip; white-space: nowrap; line-height: 16px;">参数</span></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; -webkit-box-orient: horizontal; flex-direction: row; margin-left: 54px; margin-top: 13px; height: auto; width: 205px;"><div view-name="AdaptiveTextView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; max-width: 200px; width: 200px; height: auto; font-size: 13px; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">品牌 型号...</span></div></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: 14px; margin-top: 13px; height: 14px; font-size: 14px; right: 0px; top: 0px; color: rgb(204, 204, 204); overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span class="taobao-iconfont">큚</span></div></div></div>
      <div data-spm="dinamic$TB_detail_divider_rateLocator_10028" data-tpl-id="dinamic$TB_detail_divider_rateLocator_10028" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 10px; background-color: rgb(248, 248, 248);"></div></div>
      <div data-spm="dinamic$TB_detail_comment_head_10029" data-tpl-id="dinamic$TB_detail_comment_head_10029" class="tpl-wrapper"><div view-name="FrameLayout" aria-label="" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 44px; background-color: rgb(255, 255, 255);"><div view-name="TextView" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; height: 100%; font-size: 14px; left: 0px; top: 0px; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 17px;">宝贝评价(810)</span></div><div view-name="TextView" style="position: absolute; display: flex; margin-right: 28px; width: -webkit-fit-content; height: 24px; font-size: 13px; right: 0px; top: 10px; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">查看全部</span></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: -webkit-fit-content; height: auto; right: 0px; top: 14.4px; color: rgb(255, 80, 0); font-size: 14px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span class="taobao-iconfont">큚</span></div></div></div>
      <div data-spm="dinamic$TB_detail_comment_single_hot_10030" data-tpl-id="dinamic$TB_detail_comment_single_hot_10030" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 90px; background-color: rgb(255, 255, 255);"><div view-name="FrameLayout" aria-label="用户头像" style="position: absolute; display: flex; overflow: hidden; margin-left: 12px; width: 40px; margin-top: 0px; height: 40px; background-color: rgba(255, 255, 255, 0); left: 0px; top: 0px;"><div view-name="FrameLayout" style="position: absolute; display: flex; overflow: hidden; width: 20px; height: 20px; left: 0px; top: 10px; border-radius: 10px;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; width: 20px; height: 20px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vGNuOHcWv88YXF-HPmvbMGZ-PmHGO8*zMm7eOFPzvFxuv07-P0*hM8l-MF9HvCgb&amp;width=40&amp;height=40&amp;type=sns&quot;);"><img src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vGNuOHcWv88YXF-HPmvbMGZ-PmHGO8*zMm7eOFPzvFxuv07-P0*hM8l-MF9HvCgb&amp;width=40&amp;height=40&amp;type=sns" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div></div></div><div view-name="ImageView" style="position: absolute; display: none; overflow: hidden; width: 40px; height: 40px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1vzauhhrI8KJjy0FpXXb5hVXa-80-80.png_200x200_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1vzauhhrI8KJjy0FpXXb5hVXa-80-80.png_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="TextView" aria-label="p**7" style="position: absolute; display: flex; margin-left: 40px; width: -webkit-fit-content; margin-top: 11px; height: auto; font-size: 13px; overflow: hidden; color: rgb(153, 153, 153); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 16px; overflow: hidden; text-overflow: ellipsis;">p**7</span></div><div view-name="TextView" aria-label="效果怎么样，大家自己瞧吧。已经自己站上去试过，一米八的身高170斤完全没问题。" style="position: absolute; display: flex; margin-left: 12px; width: 355px; margin-top: 35px; margin-bottom: 20px; height: auto; font-size: 13px; overflow: hidden; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; line-height: 18px; overflow: hidden; text-overflow: ellipsis;">效果怎么样，大家自己瞧吧。已经自己站上去试过，一米八的身高170斤完全没问题。</span></div></div></div>
      <div data-spm="dinamic$TB_detail_buyer_photo_10031" data-tpl-id="dinamic$TB_detail_buyer_photo_10031" class="tpl-wrapper"><div view-name="LinearLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: auto; background-color: rgb(255, 255, 255); -webkit-box-orient: vertical; flex-direction: column;"><div view-name="View" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; margin-left: 12px; width: 351px; height: 0.5px; background-color: rgb(244, 244, 244); place-self: flex-start;"></div><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 375px; margin-top: 5px; height: 40px; place-self: flex-start; max-width: 375px;"><div view-name="TextView" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; height: 18px; font-size: 14px; left: 0px; top: 11px; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 17px;">买家相册 (39)</span></div><div view-name="TextView" aria-label="查看全部" style="position: absolute; display: flex; margin-right: 28px; width: -webkit-fit-content; height: 24px; font-size: 13px; right: 0px; top: 8px; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">查看全部</span></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: -webkit-fit-content; height: auto; right: 0px; top: 12.4px; color: rgb(255, 80, 0); font-size: 14px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span class="taobao-iconfont">큚</span></div></div><div view-name="LinearLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: -webkit-fit-content; margin-top: 0px; height: auto; border-radius: 6px; -webkit-box-orient: horizontal; flex-direction: row; place-self: center; max-width: 375px;"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 87px; height: 87px; place-self: flex-start;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; width: 87px; height: 87px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//gw.alicdn.com/tfscom/O1CN01qT2cdt1EHLc2IYnH0_!!0-rate.jpg_200x200_.webp&quot;);"><img src="//gw.alicdn.com/tfscom/O1CN01qT2cdt1EHLc2IYnH0_!!0-rate.jpg_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: none; overflow: hidden; width: 27px; height: 27px; left: 43.5px; top: 43.5px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"></div></div></div><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 87px; height: 87px; place-self: flex-start;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-left: 1px; width: 87px; height: 87px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//gw.alicdn.com/tfscom/O1CN01GCr5341bAEe6tnl6A_!!0-rate.jpg_200x200_.webp&quot;);"><img src="//gw.alicdn.com/tfscom/O1CN01GCr5341bAEe6tnl6A_!!0-rate.jpg_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: none; overflow: hidden; width: 27px; height: 27px; left: 43.5px; top: 43.5px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"></div></div></div><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 87px; height: 87px; place-self: flex-start;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-left: 1px; width: 87px; height: 87px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//gw.alicdn.com/tfscom/O1CN01D8dau62IktoSMksKS_!!0-rate.jpg_200x200_.webp&quot;);"><img src="//gw.alicdn.com/tfscom/O1CN01D8dau62IktoSMksKS_!!0-rate.jpg_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: none; overflow: hidden; width: 27px; height: 27px; left: 43.5px; top: 43.5px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"></div></div></div><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 87px; height: 87px; place-self: flex-start;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-left: 1px; width: 87px; height: 87px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//gw.alicdn.com/tfscom/O1CN01bnsCgg1EiMytAkeEv_!!0-rate.jpg_200x200_.webp&quot;);"><img src="//gw.alicdn.com/tfscom/O1CN01bnsCgg1EiMytAkeEv_!!0-rate.jpg_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: absolute; display: none; overflow: hidden; width: 27px; height: 27px; left: 43.5px; top: 43.5px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover;"></div></div></div></div><div view-name="View" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; width: 1px; height: 20px; place-self: flex-start; max-width: 375px;"></div></div></div>
      <div data-spm="dinamic$TB_detail_ask_all_two_questions_10032" data-tpl-id="dinamic$TB_detail_ask_all_two_questions_10032" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 109px; background-color: rgb(255, 255, 255);"><div view-name="View" style="position: absolute; display: flex; margin-left: 12px; width: 351px; height: 0.5px; background-color: rgb(244, 244, 244); visibility: visible; left: 0px; top: 0px;"></div><div view-name="FrameLayout" style="position: absolute; display: flex; overflow: hidden; width: 375px; margin-top: 12px; height: 24px; background-color: rgba(255, 255, 255, 0); left: 0px; top: 0px;"><div view-name="TextView" aria-label="问大家" style="position: absolute; display: flex; margin-left: 12px; width: -webkit-fit-content; height: 24px; font-size: 14px; left: 0px; top: 0px; color: rgb(51, 51, 51); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 17px;">问大家</span></div><div view-name="TextView" aria-label="查看全部" style="position: absolute; display: flex; margin-right: 28px; width: -webkit-fit-content; height: 24px; font-size: 13px; right: 0px; top: 0px; color: rgb(255, 80, 0); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">查看全部</span></div><div view-name="IconFontView" style="position: absolute; display: flex; margin-right: 9px; width: -webkit-fit-content; height: auto; right: 0px; top: 4.4px; color: rgb(255, 80, 0); font-size: 14px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span class="taobao-iconfont">큚</span></div></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; width: 375px; margin-top: 52px; height: auto; -webkit-box-orient: vertical; flex-direction: column; background-color: rgba(255, 255, 255, 0);"><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 375px; height: 16px; background-color: rgba(255, 255, 255, 0); place-self: flex-start;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-left: 12px; width: 12px; height: 12px; left: 0px; top: 2px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_50x50_.webp&quot;);"><img src="//gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_50x50_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="TextView" aria-label="你们的有没有坐坏" style="position: absolute; display: flex; margin-left: 28px; width: 270px; height: auto; font-size: 13px; left: 0px; top: 0px; color: rgb(22, 43, 54); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">你们的有没有坐坏</span></div><div view-name="TextView" aria-label="3个回答" style="position: absolute; display: flex; margin-right: 12px; width: -webkit-fit-content; height: auto; font-size: 13px; right: 0px; top: 0px; color: rgb(155, 155, 155); visibility: visible; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">3个回答</span></div></div><div view-name="FrameLayout" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; width: 375px; margin-top: 9px; height: 16px; background-color: rgba(255, 255, 255, 0); visibility: visible; place-self: flex-start; max-width: 375px;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-left: 12px; width: 12px; height: 12px; left: 0px; top: 2px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: contain; background-image: url(&quot;//gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_50x50_.webp&quot;);"><img src="//gw.alicdn.com/tfs/TB1lneilZLJ8KJjy0FnXXcFDpXa-36-36.png_50x50_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="TextView" aria-label="耐用吗？" style="position: absolute; display: flex; margin-left: 28px; width: 270px; height: auto; font-size: 13px; left: 0px; top: 0px; color: rgb(22, 43, 54); -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">耐用吗？</span></div><div view-name="TextView" aria-label="7个回答" style="position: absolute; display: flex; margin-right: 12px; width: -webkit-fit-content; height: auto; font-size: 13px; right: 0px; top: 0px; color: rgb(155, 155, 155); visibility: visible; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; overflow: hidden; max-width: none;"><span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 16px;">7个回答</span></div></div><div view-name="View" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; background-color: rgb(255, 255, 255); width: 375px; height: 16px; place-self: flex-start; max-width: 375px;"></div></div></div></div>
      <div data-spm="dinamic$TB_detail_divider_10033" data-tpl-id="dinamic$TB_detail_divider_10033" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; height: 10px; background-color: rgb(248, 248, 248);"></div></div>
      <div data-spm="dinamic$TB_detail_shop_10034" data-tpl-id="dinamic$TB_detail_shop_10034" class="tpl-wrapper"><div view-name="FrameLayout" style="position: relative; display: flex; overflow: hidden; width: 375px; background-color: rgb(255, 255, 255); height: 110px;"><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-top: 12px; height: 49px; margin-left: 12px; width: 49px; border-radius: 3px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//img.alicdn.com/https://img.alicdn.com/imgextra/i1/65784980/TB2NsimbY3nBKNjSZFMXXaUSFXa_!!65784980.jpg_200x200_.webp&quot;);"><img src="//img.alicdn.com/https://img.alicdn.com/imgextra/i1/65784980/TB2NsimbY3nBKNjSZFMXXaUSFXa_!!65784980.jpg_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="FrameLayout" style="position: absolute; display: flex; overflow: hidden; margin-top: 12px; height: 49px; margin-left: 69px; width: 145px; left: 0px; top: 0px;"><div view-name="TextView" aria-label="十八纸品牌自营店" style="position: absolute; display: flex; margin-left: 0px; width: 144px; margin-top: 9px; height: auto; font-size: 14px; overflow: hidden; color: rgb(51, 51, 51); visibility: visible; left: 0px; top: 0px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 17px; overflow: hidden; text-overflow: ellipsis;">十八纸品牌自营店</span></div><div view-name="TextView" aria-label="十八纸品牌自营店" style="position: absolute; display: none; margin-left: 0px; width: 100%; max-width: none; margin-top: 15px; height: auto; font-size: 14px; overflow: hidden; color: rgb(51, 51, 51); left: 0px; top: 0px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center;"><span style="white-space: nowrap; line-height: 17px; overflow: hidden; text-overflow: ellipsis;">十八纸品牌自营店</span></div><div view-name="LinearLayout" style="position: absolute; display: flex; overflow: hidden; margin-top: 27px; height: 14px; margin-left: 0px; width: -webkit-fit-content; -webkit-box-orient: horizontal; flex-direction: row;"><div view-name="ImageView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-top: 0px; height: 12px; margin-left: 0px; width: 14px; place-self: flex-start;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//gw.alicdn.com/tfs/TB1zgzmlZLJ8KJjy0FnXXcFDpXa-171-148.png_50x50_.webp&quot;);"><img src="//gw.alicdn.com/tfs/TB1zgzmlZLJ8KJjy0FnXXcFDpXa-171-148.png_50x50_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="ImageView" style="position: relative; display: flex; flex-shrink: 0; flex-grow: 0; overflow: hidden; margin-top: 0px; height: 12px; margin-left: 1px; width: 66px; place-self: flex-start;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;//gw.alicdn.com/tfs/TB1zuz8ir_I8KJjy1XaXXbsxpXa-132-24.png_200x200_.webp&quot;);"><img src="//gw.alicdn.com/tfs/TB1zuz8ir_I8KJjy1XaXXbsxpXa-132-24.png_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div></div><div view-name="ImageView" style="position: absolute; display: none; overflow: hidden; margin-top: 27px; height: 12px; margin-left: 48px; width: 12px; left: 0px; top: 0px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: 100% 100%;"></div></div></div><div view-name="TextView" aria-label="全部宝贝" style="position: absolute; display: flex; margin-right: 89px; width: 65px; margin-top: 24px; height: 24px; font-size: 12px; overflow: hidden; color: rgb(255, 80, 0); border-radius: 12px; border: 0.5px solid rgb(255, 80, 0); -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; right: 0px; top: 0px; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">全部宝贝</span></div><div view-name="ImageView" style="position: absolute; display: flex; overflow: hidden; margin-top: 24px; height: 24px; margin-right: 12px; width: 65px; right: 0px; top: 0px;"><div style="width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; background-image: url(&quot;https://gw.alicdn.com/tfs/TB1RldEnY9YBuNjy0FgXXcxcXXa-195-72.png?getAvata_200x200_.webp&quot;);"><img src="https://gw.alicdn.com/tfs/TB1RldEnY9YBuNjy0FgXXcxcXXa-195-72.png?getAvata_200x200_.webp" style="max-height: 100%; max-width: 100%; opacity: 0;"></div></div><div view-name="View" style="position: absolute; display: flex; width: 100%; margin-top: 61px; height: 20px; left: 0px; top: 0px;"></div><div view-name="FrameLayout" style="position: absolute; display: flex; overflow: hidden; margin-top: 61px; height: 49px; margin-left: 12px; width: 351px; visibility: visible; left: 0px; bottom: 0px;"><div view-name="TextView" aria-label="宝贝描述" style="position: absolute; display: flex; margin-left: 0px; width: 54px; height: auto; font-size: 12px; overflow: hidden; color: rgb(153, 153, 153); left: 0px; top: 17.7px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">宝贝描述</span></div><div view-name="TextView" aria-label="4.9 " style="position: absolute; display: flex; margin-left: 49px; width: 33px; height: auto; font-size: 12px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; left: 0px; top: 17.7px; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">4.9 </span></div><div view-name="TextView" aria-label="高" style="position: absolute; display: flex; margin-left: 81px; width: 14px; height: 14px; border-radius: 7px; font-size: 10px; overflow: hidden; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; color: rgb(255, 80, 0); background-color: rgb(255, 241, 235); left: 0px; top: 17.5px; max-width: none;"><span style="white-space: nowrap; line-height: 12px; overflow: hidden; text-overflow: ellipsis;">高</span></div><div view-name="TextView" aria-label="卖家服务" style="position: absolute; display: flex; margin-left: 128px; width: 54px; height: auto; font-size: 12px; overflow: hidden; color: rgb(153, 153, 153); left: 0px; top: 17.7px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">卖家服务</span></div><div view-name="TextView" aria-label="4.9 " style="position: absolute; display: flex; margin-left: 177px; width: 33px; height: auto; font-size: 12px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; left: 0px; top: 17.7px; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">4.9 </span></div><div view-name="TextView" aria-label="高" style="position: absolute; display: flex; margin-left: 210px; width: 14px; height: 14px; border-radius: 7px; font-size: 10px; overflow: hidden; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; color: rgb(255, 80, 0); background-color: rgb(255, 241, 235); left: 0px; top: 17.5px; max-width: none;"><span style="white-space: nowrap; line-height: 12px; overflow: hidden; text-overflow: ellipsis;">高</span></div><div view-name="TextView" aria-label="物流服务" style="position: absolute; display: flex; margin-left: 254px; width: 54px; height: auto; font-size: 12px; overflow: hidden; color: rgb(153, 153, 153); left: 0px; top: 17.7px; -webkit-box-pack: start; justify-content: flex-start; -webkit-box-align: center; align-items: center; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">物流服务</span></div><div view-name="TextView" aria-label="4.9 " style="position: absolute; display: flex; margin-left: 303px; width: 33px; height: auto; font-size: 12px; overflow: hidden; color: rgb(255, 80, 0); -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; left: 0px; top: 17.7px; max-width: none;"><span style="white-space: nowrap; line-height: 14px; overflow: hidden; text-overflow: ellipsis;">4.9 </span></div><div view-name="TextView" aria-label="高" style="position: absolute; display: flex; margin-left: 336px; width: 14px; height: 14px; border-radius: 7px; font-size: 10px; overflow: hidden; -webkit-box-pack: center; justify-content: center; -webkit-box-align: center; align-items: center; color: rgb(255, 80, 0); background-color: rgb(255, 241, 235); left: 0px; top: 17.5px; max-width: none;"><span style="white-space: nowrap; line-height: 12px; overflow: hidden; text-overflow: ellipsis;">高</span></div></div></div></div>
    </div>
    <div class="bottom-bar" data-spm="bottom-bar"><div class="btn-shop"><span class="taobao-iconfont icon-highlight">삍</span><span class="btn-text">店铺</span></div><div class="btn-wangwang"><span class="taobao-iconfont ">쁭</span><span class="btn-text">客服</span></div><div class="btn-fav"><span class="taobao-iconfont ">뀝</span><span class="btn-text">收藏</span></div><div @click="showbox=true" class="bottom-bar-btn cart btn-pos-left "><span class="btn-title">加入购物车</span><!-- empty --></div><div @click="showbox=true" class="bottom-bar-btn buy btn-pos-right "><span class="btn-title">立即购买</span><!-- empty --></div></div>
    <div ref="shows" :class="{'dialog-container':true,'dialog-show':showbox}"><div class="dialog-wrapper" :style="{display:dis}"></div><div class="dialog dialog-popup"><div class="dialog-title hide">sku选择</div><div class="dialog-content"><div class="dialog-xsku"><div class="tb-sku-container "><div class="sku-pro"><div><div class="sku-img"><p><img src="//img.alicdn.com/imgextra/i4/TB1AZigGXXXXXa.XXXXXXXXXXXX_!!0-item_pic.jpg_120x120q50s150.jpg"></p></div><div class="sku-pro-info"><div><h3 class="sku-title">{{thismes.name}}</h3><p class="h">¥ 80-220</p><p class="quantity">库存:{{kucun}}</p><p class="sku-txt"><span class="c-sku"></span><span class="unc-sku">请选择: 颜色分类</span></p></div></div><div @click="showbox=false" class="sku-closed tb-sku-iconfont tb-sku-icon-close-circle" data-spm-anchor-id="a2141.7c.dialog.i0"></div></div></div><div class="sku-info"><div><h2>颜色分类</h2><ul>
      <li v-for="item in types" :key="item" @click="thisAct(item)" :class="{
        'normal':active != item,
        sel: active == item
        }">{{item}}</li></ul></div><div class="quantity-info"><div class="sku-quantity"><h2>购买数量 <span></span></h2><p class="btn-minus tb-sku-iconfont tb-sku-icon-minus off"><a class="btn minus" min="" style="fontSize:20px;" @click="buysum--">-</a></p><p class="btn-input"><input type="tel" v-model="buysum"></p><p class="btn-plus tb-sku-iconfont tb-sku-icon-plus"><a class="btn plus" @click="buysum++" max="">+</a></p></div></div></div><div><div class="sku-btns"><div class="sku-btn addcart" @click="addCart">加入购物车</div><div class="sku-btn gobuy" @click="gobuy">立即购买</div></div></div></div></div></div><div class="dialog-button-group hide"><button class="btn-close ">完成</button></div></div></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
import axios from 'axios';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  data() {
    return {
      imgsrc: [
        "https://img.alicdn.com/imgextra/i4/65784980/O1CN01yG8KBg1meswaQSktI_!!65784980.jpg_640x640q85s150_.webp",
        "https://img.alicdn.com/imgextra/i1/65784980/O1CN01pXE5aL1mesvN15uWk_!!65784980.jpg_640x640q85s150_.webp",
        "https://img.alicdn.com/imgextra/i2/65784980/O1CN01wa3EW51mesvMDKk5m_!!65784980.jpg_640x640q85s150_.webp",
        "https://img.alicdn.com/imgextra/i1/65784980/O1CN01DOmolP1mesvLhPXxC_!!65784980.jpg_640x640q85s150_.webp",
        "https://img.alicdn.com/imgextra/i4/65784980/O1CN011mesrMtYAEgdj5j_!!65784980.jpg_640x640q85s150_.webp"
      ],
      thismes:"",
      price:0,
      buysum:1,
      kucun:8,
      types:['长40宽25高15简易','长40宽25高30','长40宽25高25','长40宽25高35','长40宽25高40','长40宽25高20简易','长40宽25高45','长40宽25高50'],
      active:"",
      showbox:false,
      dis:''
    };
  },
  created(){
      let goodinf = this.$route.query.name;
      let _this = this;
      axios
      .get("https://www.easy-mock.com/mock/5d034e75707b753c83a5a2da/example/suning")
      .then(function(response) {
          let msg = response.data.data;
          for(const item of msg){
            if(item.name == goodinf){
                _this.thismes = item;
                break;
            }
          }
      });
  },
  methods:{
    thisAct(item){
      this.active = item;
    },
    addCart(){
      this.$store.commit("setGoods",{
        'id':this.thismes.price,
        'name':this.thismes.name,
        'num':this.buysum,
        'src':this.thismes.imgsrc
      });
      console.log('添加成功！');
    },
    gobuy(){
      this.$store.commit("setGoods",{
        'id':this.thismes.price,
        'name':this.thismes.name,
        'num':this.buysum,
        'src':this.thismes.imgsrc
      });
      location.href="/shopcar";
    },
    goback(){
      this.$router.go(-1);
    }
  },
  watch:{
    buysum:{
      deep:true,
      handler(val){
        if(val<=1){
          this.buysum = 1;
        }
        if(val>=this.kucun){
          this.buysum = this.kucun;
        }
      }
    },
    showbox:{
      deep:true,
      handler(val){
        if(val){
          this.dis='block';
        }else{
          this.dis='none';
        }
      }
    }
  }
};
</script>

<style lang="scss">
ul {
    list-style: none;
}
html{
    font-size: 100px;
}
.box {
  width: 375px;
  height: 500px;
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
.navi-bar {
  width: 100%;
  position: absolute;
  top: 0.2rem;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  z-index: 110;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 0 0.1rem;
}
.navi-bar button {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 0.3rem;
  height: 0.3rem;
  border: 0;
  border-radius: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
}
.navi-bar button .taobao-iconfont {
  width: 100%;
  top: 0;
  font-size: 0.2rem;
}
.dinamic-layout-one-column {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0;
  flex: 1 1 0;
}
.d-price {
  line-height: 1;
  padding: 0 0.12rem;
  background-color: rgb(255, 255, 255);
}
.d-price .present-price {
  padding-top: 0.18rem;
}
.d-price .present-price .main-price-wrapper,
.d-price .present-price .sub-price {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  align-items: flex-end;
}
.d-price .present-price .o-t-price {
  margin-right: 0.05rem;
}
.o-t-price {
  color: #ff5000;
  font-size: 0.24rem;
}
.o-t-price:before {
  content: "\FFE5";
  display: inline-block;
  font-size: 0.15rem;
  margin-left: -0.035rem;
}
.hairlines .d-price .present-price .icon,
.hairlines .d-price .present-price .txt {
  margin-bottom: 0.02rem;
}
.d-price .present-price .txt {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 0.14rem;
  background-color: #fff1eb;
  border-radius: 0.2rem;
  padding: 0.04rem;
  margin-right: 0.04rem;
}
.d-price .present-price .txt span {
  font-size: 0.09rem;
  line-height: 1;
  color: #ff5000;
}
.d-price .original-price {
  padding-top: 0.02rem;
  font-size: 0.1rem;
  color: #999;
}

.d-price > div > div {
  padding-top: 0.18rem;
}
.bottom-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    min-height: 0.55rem;
    max-width: 768px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    z-index: 110;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0 -0.01rem 0.06rem 0;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    padding-bottom: env(safe-area-inset-bottom);
    padding-bottom: constant(safe-area-inset-bottom);
}
.bottom-bar > div:first-child {
    padding-left: 0;
    margin-left: 0;
}
.bottom-bar > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    width: 0.5rem;
    height: 0.5rem;
    white-space: nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #999;
    padding: 0 0.1rem;
}
.bottom-bar > div .taobao-iconfont {
    font-size: 0.18rem;
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
.icon-highlight {
    color: #ff5000;
}
.bottom-bar > div .btn-text {
    font-size: 0.1rem;
    line-height: 0.2rem;
}
.bottom-bar .bottom-bar-btn.btn-pos-left {
    border-radius: 0.2rem 0 0 0.2rem;
    background-image: -webkit-linear-gradient(left, #FFC500, #FF9402);
    background-image: linear-gradient(to right, #FFC500, #FF9402);
}
.bottom-bar .bottom-bar-btn {
    width: 50% !important;
    height: 0.4rem;
    bottom: 0.12rem;
    line-height: 0.4rem;
    color: #fff;
    text-align: center;
    font-size: 0.14rem;
    cursor: pointer;
    line-height: 1;
    padding: 0;
}
.bottom-bar .bottom-bar-btn .btn-title {
    font-size: 0.14rem;
    font-weight: bold;
}
.bottom-bar .bottom-bar-btn.btn-pos-right {
    border-radius: 0 0.2rem 0.2rem 0;
    background-image: -webkit-linear-gradient(left, #FF7A00, #FE560A);
    background-image: linear-gradient(to right, #FF7A00, #FE560A);
}
.dialog.dialog-popup {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}

.dialog {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 83%;
    -webkit-transition: 0.3s -webkit-transform;
    transition: 0.3s -webkit-transform;
    transition: 0.3s transform;
    transition: 0.3s transform, 0.3s -webkit-transform;
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    background-color: #fff;
    color: #333;
    font-size: 0.15rem;
    border-radius: 0.1rem 0.1rem 0 0;
}
.dialog .dialog-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    height: 0.6rem;
    line-height: 0.6rem;
}
.dialog .dialog-content {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: auto;
    margin: 0 0.1rem;
}
.dialog-xsku {
    position: relative;
    width: 100%;
}
.dialog-xsku .tb-sku-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.dialog-container.dialog-show {
    width: 100%;
    transition: all .5s;
}
.dialog-container {
    position: fixed;
    max-width: 768px;
    left: 0;
    bottom: 0;
    width: 0;
    height: 100%;
    z-index: 1000;
}
.tb-sku-container {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
    font-size: 0.13rem;
    padding: 0.1rem 0;
    color: #333;
    box-sizing: border-box;
}
.tb-sku-container .sku-pro {
    padding-bottom: 0.16rem;
    border-bottom: 0.005rem solid #f2f2f2;
}
.tb-sku-container .sku-pro > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
}
.tb-sku-container .sku-pro > div .sku-img {
    font-size: 0;
}
.tb-sku-container .sku-pro > div .sku-img img {
    width: 1.1rem;
    height: 1.1rem;
}
.tb-sku-container .sku-info {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: auto;
}
.tb-sku-container .sku-info > div:first-child {
    border-top: 0;
    margin-top: 0;
}
.tb-sku-container .sku-info > div {
    margin-top: 0.2rem;
    border-top: 0.005rem solid #f2f2f2;
}
.tb-sku-container .sku-info > div h2 {
    font-size: 0.15rem;
    font-weight: normal;
    padding: 0.125rem 0;
}
.tb-sku-container .sku-info > div ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
}
.tb-sku-container .sku-info > div ul li.normal {
    background-color: #F8F8F8;
    white-space: nowrap;
}
.tb-sku-container .sku-info > div ul li {
    border-radius: 0.2rem;
    padding: 0.08rem 0.145rem;
    font-size: 0.12rem;
    margin-right: 0.14rem;
    margin-bottom: 0.1rem;
}
.tb-sku-container .sku-pro > div .sku-pro-info {
    margin-left: 0.1rem;
}
.tb-sku-container .sku-pro > div .sku-pro-info .sku-title {
    display: none;
}
.tb-sku-container .sku-pro > div .sku-pro-info .h {
    color: #ff5000!important;
    font-size: 0.18rem;
}
.tb-sku-container .sku-pro > div .sku-pro-info .quantity, .tb-sku-container .sku-pro > div .sku-pro-info .sku-txt {
    font-size: 0.12rem;
}
.hide {
    display: none !important;
}
.dialog-xsku .tb-sku-container .sku-pro > div .sku-closed {
    right: 0;
}

.tb-sku-container .sku-pro > div .sku-closed {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    font-size: 0.24rem;
    color: #999999;
    cursor: pointer;
}

.tb-sku-iconfont {
    font-family: "tb-sku-iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.tb-sku-icon-close-circle:before {
    content: "X";
} 
.tb-sku-container .sku-info > div.quantity-info .sku-quantity {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.tb-sku-container .sku-info > div.quantity-info .sku-quantity h2 {
    -webkit-box-flex: 2;
    -webkit-flex: 2;
    flex: 2;
}

.tb-sku-container .sku-info > div h2 {
    font-size: 0.15rem;
    font-weight: normal;
    padding: 0.125rem 0;
}
.tb-sku-container .sku-info > div.quantity-info .sku-quantity .btn-minus.off, .tb-sku-container .sku-info > div.quantity-info .sku-quantity .btn-plus.off {
    background-color: #fbfbfb;
    color: #ccc;
}
.tb-sku-container .sku-info > div.quantity-info .sku-quantity .btn-minus, .tb-sku-container .sku-info > div.quantity-info .sku-quantity .btn-plus {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    position: relative;
    width: 0.325rem;
    height: 0.325rem;
    background-color: #f6f6f6;
}
.tb-sku-container .sku-info > div.quantity-info .sku-quantity .btn-input {
    width: 0.4rem;
    height: 0.325rem;
    margin: 0 0.02rem;
    position: relative;
}
.tb-sku-container .sku-info > div.quantity-info .sku-quantity .btn-input input {
    font-size: 0.14rem;
    background-color: #f6f6f6;
    border: 0;
    width: 0.4rem;
    height: 0.325rem;
    text-align: center;
}
.tb-sku-container .sku-btns {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-sizing: border-box;
    padding-top: 0.1rem;
    padding-bottom: constant(safe-area-inset-bottom);
}
.tb-sku-container .sku-btns .sku-btn.addcart {
    border-radius: 0.2rem 0 0 0.2rem;
    background-image: -webkit-linear-gradient(left, #FFC500, #FF9402);
    background-image: linear-gradient(to right, #FFC500, #FF9402);
}

.tb-sku-container .sku-btn.addcart {
    border-radius: 20px 0 0 20px;
    background-image: -webkit-linear-gradient(left, #FFC500, #FF9402);
    background-image: linear-gradient(to right, #FFC500, #FF9402);
}


.tb-sku-container .sku-btns .sku-btn {
    width: 50%;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #fff;
    text-align: center;
    font-size: 0.15rem;
    cursor: pointer;
}

.tb-sku-container .sku-btn {
    height: 40px;
    line-height: 40px;
    color: #fff;
    border-radius: 20px;
    background-image: -webkit-linear-gradient(left, #FF7A00, #FE560A);
    background-image: linear-gradient(to right, #FF7A00, #FE560A);
    text-align: center;
    font-size: 15px;
    cursor: pointer;
}
.tb-sku-container .sku-btns .sku-btn.gobuy {
    border-radius: 0 0.2rem 0.2rem 0;
    background-image: -webkit-linear-gradient(left, #FF7A00, #FE560A);
    background-image: linear-gradient(to right, #FF7A00, #FE560A);
}

.tb-sku-container .sku-btn.gobuy {
    border-radius: 0 20px 20px 0;
    background-image: -webkit-linear-gradient(left, #FF7A00, #FE560A);
    background-image: linear-gradient(to right, #FF7A00, #FE560A);
}
.tb-sku-container .sku-info > div ul li.sel {
    color: #fff;
    background-image: -webkit-linear-gradient(left, #FF7A00 100%, #FE560A 100%);
    background-image: linear-gradient(to right, #FF7A00 100%, #FE560A 100%);
}
.dialog-wrapper {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>
