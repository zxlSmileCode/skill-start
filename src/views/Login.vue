<template>
  <div>
    <div class="main-bone"></div>
    <div
      style="transform: scale(1) translateZ(0px); transform-origin: 0px 0px; width: 375.2px; height: 667.2px; z-index: 999999; position: absolute; left: 0px; top: 0px; background: rgb(255, 255, 255); display: block;"
    >
      <div
        v-show="bools"
        style="width: 100%; height: 52px; background: rgb(238, 238, 238); line-height: 52px; text-align: left; box-sizing: border-box; padding-left: 20px; position: absolute; left: 0px; top: 0px; font-size: 16px; font-weight: bold; color: rgb(51, 51, 51);"
      >
        您需要登录才能继续访问
        <a
          @click="changes"
          style="position: absolute; right: 0px; top: 0px; height: 52px; line-height: 52px; padding: 0px 20px; color: rgb(153, 153, 153);"
        >关闭</a>
      </div>
      <div id="box">
        <div class="logo tb-logo"></div>

        <form id="loginForm" class="mlogin">
          <input name="_tb_token_" type="hidden" value="eeb86b4353376">
          <input name="ttid" type="hidden" value="h5@iframe">
          <input type="hidden" id="J_Mparam" name="action" value="LoginAction">
          <input type="hidden" name="event_submit_do_login" value="1">
          <input
            type="hidden"
            name="TPL_redirect_url"
            value="https://h5.m.taobao.com/other/loginend.html?origin=https%3A%2F%2Fmain.m.taobao.com"
          >
          <input type="hidden" name="loginFrom" value="WAP_TAOBAO">
          <input type="hidden" name="style" value>
          <input type="hidden" name="bind_token" value>
          <input type="hidden" name="sdkInterceptType" value>
          <input type="hidden" name="assets_css" value>
          <input type="hidden" name="assets_js" value>
          <input type="hidden" name="ssottid" value>
          <input type="hidden" name="nv" value="false">
          <input
            type="hidden"
            name="otherLoginUrl"
            value="https://login.m.taobao.com/msg_login.htm?ttid=h5%40iframe&amp;redirectURL=https%3A%2F%2Fh5.m.taobao.com%2Fother%2Floginend.html%3Forigin%3Dhttps%253A%252F%252Fmain.m.taobao.com"
          >

          <input type="hidden" id="J_Exponent" value="10001">
          <input
            type="hidden"
            id="J_Module"
            value="98639b48645bdaadc930c1e2316b9d07223f3808e9192788a1e2183ff5a33f393ff51f9a6f65050600f4e77890c333c18ff2d5ca9e2259a1696aa4398c7ca809034911671ef06e760a12da4aa285fcd028edaa5e8e3a70d1fed92649ee7189ef0bec70ffa8e26ce57ede52d5593bc36c48abe16c50cc1fd7c1479e53cb0cde99"
          >
          <input type="hidden" name="TPL_timestamp" id="J_Timestamp" value>
          <input type="hidden" name="TPL_password2" id="password2">
          <input type="hidden" name="page" id="page" value="loginV3">

          <input type="hidden" id="J_NcoSig" name="ncoSig">
          <input type="hidden" id="J_NcoSessionid" name="ncoSessionid">
          <input type="hidden" id="J_NcoToken" name="ncoToken" value>

          <div class="am-list">
            <div class="am-list-item">
              <div class="am-list-control">
                <input
                  type="text"
                  class="am-input-required"
                  name="TPL_username"
                  placeholder="手机号/邮箱/会员名"
                  value
                  id="username"
                  autocomplete="off"
                >
              </div>
              <div class="am-list-action">
                <i class="am-icon-clear"></i>
              </div>
            </div>
            <div class="am-list-item">
              <div class="am-list-control">
                <input
                  type="password"
                  class="am-input-required am-input-required-password"
                  name="TPL_password"
                  placeholder="请输入密码"
                  value
                  id="password"
                  autocomplete="off"
                >
              </div>
              <div class="am-list-action am-list-action-password">
                <i class="am-icon-clear"></i>
              </div>
              <div class="pwd-show iconfont" id="show-pwd"></div>
            </div>
          </div>

          <div class="checkcode-wrap">
            <div id="checkcode"></div>
          </div>

          <div class="other-link">
            <div class="am-field am-footer">
              <a href="#" class="f-left">短信验证码登录</a>
              <a href="#" class="f-right">免费注册</a>
            </div>
          </div>
          <div class="am-field am-fieldBottom">
            <button type="submit" class="am-button am-button-submit" id="btn-submit">登 录</button>
          </div>

          <input
            type="hidden"
            name="um_token"
            value="TD2DBC30A0F8E21A115C0335272F897FDBBA1FE91AFDF08D889018608A1"
          >
        </form>

        <div id="_umfp" style="display:inline;width:1px;height:1px;overflow:hidden"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bools: true
    };
  },
  methods: {
    changes() {
      this.bools = false;
    }
  }
};
</script>





<style scoped>
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
#box {
  width: 100%;
  height: 667px;
  border: 0px;
  overflow: hidden;
}
.logo {
  width: 2.13333333rem;
  height: 2.13333333rem;
  background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png)
    no-repeat;
  background-size: contain;
  margin: 1.25333333rem auto 0;
}
.am-list {
  width: 8.77333333rem;
  position: relative;
  margin: 0 auto;
  font-size: 0.42666667rem;
  color: #333;
}
.am-list-item {
  position: relative;
  width: 100%;
  margin: 1.2rem 0 0;
  border-bottom: 1px solid #ff5000;
}
.am-input-required {
  font-size: inherit;
  width: 7.73333333rem;
  height: 0.48rem;
  margin: 0 0 0.17333333rem 0.12rem;
  outline: none;
  border: 0;
  color: #333;
}
.am-list-action {
  position: absolute;
  width: 0.53333333rem;
  height: 0.26666667rem;
  right: 0.18666667rem;
  bottom: 0.4rem;
}
.am-icon-clear {
  position: absolute;
  top: 0.04rem;
  right: 0;
}
.am-icon-clear {
  display: none;
}
.am-list-item {
  position: relative;
  width: 100%;
  margin: 1.2rem 0 0;
  border-bottom: 1px solid #ff5000;
}
.am-input-required-password {
  width: 7.2rem;
}
.am-input-required {
  font-size: inherit;
  width: 7.73333333rem;
  height: 0.48rem;
  margin: 0 0 0.17333333rem 0.12rem;
  outline: none;
  border: 0;
  color: #333;
}
.am-list-action-password {
  right: 0.85333333rem;
}
.am-footer {
  margin-top: 0.58666667rem;
}

.am-field {
  font-size: 0.37333333rem;
  width: 8.77333333rem;
  margin: 0.69333333rem auto 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.f-left,
.f-right {
  color: #555;
  text-decoration: none;
}
.am-button-submit {
  background: -webkit-linear-gradient(left, #ff9000, #ff5000) no-repeat;
  color: #fff;
  box-shadow: 0 0.08rem 0.16rem #f7c7b1;
}
.am-button {
  font-size: 0.42666667rem;
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 0.6rem;
  text-align: center;
  border: 0;
}
</style>

