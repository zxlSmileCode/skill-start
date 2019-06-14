<template>
  <div data-spm="7514111">
    <div class="am-header am-header-grey">
      <h1>&#x6DD8;&#x5B9D;&#x6CE8;&#x518C;</h1>
      <router-link
        to="/"
        id="J_PageBack"
        class="am-header-reverse am-header-reverse-btn"
      >&#x8FD4;&#x56DE;</router-link>
      <router-link to="/login" id="loginbtn">登录</router-link>
    </div>
    <form id="J_Form" class="mt-10" action method="post">
      <div
        class="am-ft-sm am-content"
      >&#x4E3A;&#x4E86;&#x4F60;&#x7684;&#x8D26;&#x6237;&#x5B89;&#x5168;&#x8BF7;&#x586B;&#x5199;&#x4E00;&#x4E2A;&#x624B;&#x673A;&#x53F7;&#x5B8C;&#x6210;&#x9A8C;&#x8BC1;</div>
      <div class="am-list">
        <div class="am-list am-list-flat am-list-flat-chip">
          <div class="am-list-item am-list-item-form am-input-autoclear">
            <div class="am-list-label">&#x56FD;&#x5BB6;/&#x5730;&#x533A;</div>
            <div class="am-list-control">
              <select id="mySelect" name="phoneArea">
                <option
                  value="36"
                  data-pattern="^(00){0,1}(57){1}\d{6,12}$"
                  check-key="^(00){0,1}(57){1}\d{6,12}$"
                  data-code="57"
                  class="tsl"
                  data-phase-id="r_c_1"
                >&#x54E5;&#x4F26;&#x6BD4;&#x4E9A; (+57)</option>
                <option
                  value="50"
                  data-pattern="^(00){0,1}(94){1}\d{6,12}$"
                  check-key="^(00){0,1}(94){1}\d{6,12}$"
                  data-code="94"
                  class="tsl"
                  data-phase-id="r_c_2"
                >&#x65AF;&#x91CC;&#x5170;&#x5361; (+94)</option>
                <option
                  value="138"
                  data-pattern="^(00){0,1}(265){1}\d{6,15}$"
                  check-key="^(00){0,1}(265){1}\d{6,15}$"
                  data-code="265"
                  class="tsl"
                  data-phase-id="r_c_3"
                >&#x9A6C;&#x62C9;&#x7EF4; (+265)</option>
                <option
                  value="153"
                  data-pattern="^(00){0,1}(221){1}\d{6,15}$"
                  check-key="^(00){0,1}(221){1}\d{6,15}$"
                  data-code="221"
                  class="tsl"
                  data-phase-id="r_c_4"
                >&#x585E;&#x5185;&#x52A0;&#x5C14; (+221)</option>
                <option
                  value="52"
                  data-pattern="^(00){0,1}(352){1}\d{6,12}$"
                  check-key="^(00){0,1}(352){1}\d{6,12}$"
                  data-code="352"
                  class="tsl"
                  data-phase-id="r_c_5"
                >&#x5362;&#x68EE;&#x5821; (+352)</option>
                <option
                  value="51"
                  data-pattern="^(00){0,1}(370){1}\d{6,12}$"
                  check-key="^(00){0,1}(370){1}\d{6,12}$"
                  data-code="370"
                  class="tsl"
                  data-phase-id="r_c_6"
                >&#x7ACB;&#x9676;&#x5B9B; (+370)</option>
                <option
                  value="64"
                  data-pattern="^(00){0,1}(40){1}\d{6,12}$"
                  check-key="^(00){0,1}(40){1}\d{6,12}$"
                  data-code="40"
                  class="tsl"
                  data-phase-id="r_c_7"
                >&#x7F57;&#x9A6C;&#x5C3C;&#x4E9A; (+40)</option>
                <option
                  value="57"
                  data-pattern="^(00){0,1}(234){1}\d{6,12}$"
                  check-key="^(00){0,1}(234){1}\d{6,12}$"
                  data-code="234"
                  class="tsl"
                  data-phase-id="r_c_8"
                >&#x5C3C;&#x65E5;&#x5229;&#x4E9A; (+234)</option>
                <option
                  value="59"
                  data-pattern="^(00){0,1}(507){1}\d{6,12}$"
                  check-key="^(00){0,1}(507){1}\d{6,12}$"
                  data-code="507"
                  class="tsl"
                  data-phase-id="r_c_9"
                >&#x5DF4;&#x62FF;&#x9A6C; (+507)</option>
                <option
                  value="6"
                  data-pattern="^(00){0,1}(81){1}0{0,1}[7,8,9](?:\d{8}|\d{9})$"
                  check-key="^(00){0,1}(81){1}0{0,1}[7,8,9](?:\d{8}|\d{9})$"
                  data-code="81"
                  class="tsl"
                  data-phase-id="r_c_10"
                >&#x65E5;&#x672C; (+81)</option>
                <option
                  value="8"
                  data-pattern="^(00){0,1}(1){1}\d{10}$"
                  check-key="^(00){0,1}(1){1}\d{10}$"
                  data-code="1"
                  class="tsl"
                  data-phase-id="r_c_11"
                >&#x52A0;&#x62FF;&#x5927; (+1)</option>
                <option
                  value="165"
                  data-pattern="^(00){0,1}(255){1}\d{6,15}$"
                  check-key="^(00){0,1}(255){1}\d{6,15}$"
                  data-code="255"
                  class="tsl"
                  data-phase-id="r_c_12"
                >&#x5766;&#x6851;&#x5C3C;&#x4E9A; (+255)</option>
                <option
                  value="55"
                  data-pattern="^(00){0,1}(960){1}\d{6,12}$"
                  check-key="^(00){0,1}(960){1}\d{6,12}$"
                  data-code="960"
                  class="tsl"
                  data-phase-id="r_c_13"
                >&#x9A6C;&#x5C14;&#x4EE3;&#x592B; (+960)</option>
                <option
                  value="19"
                  data-pattern="^(00){0,1}(33){1}(\d{6}|\d{8,9})$"
                  check-key="^(00){0,1}(33){1}(\d{6}|\d{8,9})$"
                  data-code="33"
                  class="tsl"
                  data-phase-id="r_c_14"
                >&#x6CD5;&#x56FD; (+33)</option>
                <option
                  value="43"
                  data-pattern="^(00){0,1}(36){1}\d{6,12}$"
                  check-key="^(00){0,1}(36){1}\d{6,12}$"
                  data-code="36"
                  class="tsl"
                  data-phase-id="r_c_15"
                >&#x5308;&#x7259;&#x5229; (+36)</option>
                <option
                  value="5"
                  data-pattern="^(00){0,1}(82){1}0{0,1}[7,1](?:\d{8}|\d{9})$"
                  check-key="^(00){0,1}(82){1}0{0,1}[7,1](?:\d{8}|\d{9})$"
                  data-code="82"
                  class="tsl"
                  data-phase-id="r_c_16"
                >&#x97E9;&#x56FD; (+82)</option>
                <option
                  value="160"
                  data-pattern="^(00){0,1}(235){1}\d{6,15}$"
                  check-key="^(00){0,1}(235){1}\d{6,15}$"
                  data-code="235"
                  class="tsl"
                  data-phase-id="r_c_17"
                >&#x4E4D;&#x5F97; (+235)</option>
                <option
                  value="35"
                  data-pattern="^(00){0,1}(56){1}\d{6,12}$"
                  check-key="^(00){0,1}(56){1}\d{6,12}$"
                  data-code="56"
                  class="tsl"
                  data-phase-id="r_c_18"
                >&#x667A;&#x5229; (+56)</option>
                <option
                  value="118"
                  data-pattern="^(00){0,1}(254){1}\d{6,15}$"
                  check-key="^(00){0,1}(254){1}\d{6,15}$"
                  data-code="254"
                  class="tsl"
                  data-phase-id="r_c_19"
                >&#x80AF;&#x5C3C;&#x4E9A; (+254)</option>
                <option
                  value="32"
                  data-pattern="^(00){0,1}(375){1}\d{6,12}$"
                  check-key="^(00){0,1}(375){1}\d{6,12}$"
                  data-code="375"
                  class="tsl"
                  data-phase-id="r_c_20"
                >&#x767D;&#x4FC4;&#x7F57;&#x65AF; (+375)</option>
                <option
                  value="1"
                  data-pattern="^(86){0,1}1\d{10}$"
                  check-key="^(86){0,1}1\d{10}$"
                  data-code="86"
                  selected="selected"
                  class="tsl"
                  data-phase-id="r_c_21"
                >&#x4E2D;&#x56FD;&#x5927;&#x9646; (+86)</option>
                <option
                  value="81"
                  data-pattern="^(00){0,1}(226){1}\d{6,15}$"
                  check-key="^(00){0,1}(226){1}\d{6,15}$"
                  data-code="226"
                  class="tsl"
                  data-phase-id="r_c_22"
                >&#x5E03;&#x57FA;&#x7EB3;&#x6CD5;&#x7D22; (+226)</option>
                <option
                  value="2"
                  data-pattern="^(00){0,1}(852){1}0{0,1}[1,5,6,9](?:\d{7}|\d{8}|\d{12})$"
                  check-key="^(00){0,1}(852){1}0{0,1}[1,5,6,9](?:\d{7}|\d{8}|\d{12})$"
                  data-code="852"
                  class="tsl"
                  data-phase-id="r_c_23"
                >&#x4E2D;&#x56FD;&#x9999;&#x6E2F; (+852)</option>
                <option
                  value="99"
                  data-pattern="^(00){0,1}(253){1}\d{6,15}$"
                  check-key="^(00){0,1}(253){1}\d{6,15}$"
                  data-code="253"
                  class="tsl"
                  data-phase-id="r_c_24"
                >&#x5409;&#x5E03;&#x63D0; (+253)</option>
                <option
                  value="168"
                  data-pattern="^(00){0,1}(998){1}\d{6,15}$"
                  check-key="^(00){0,1}(998){1}\d{6,15}$"
                  data-code="998"
                  class="tsl"
                  data-phase-id="r_c_25"
                >&#x4E4C;&#x5179;&#x522B;&#x514B;&#x65AF;&#x5766; (+998)</option>
                <option
                  value="31"
                  data-pattern="^(00){0,1}(1242){1}\d{6,12}$"
                  check-key="^(00){0,1}(1242){1}\d{6,12}$"
                  data-code="1242"
                  class="tsl"
                  data-phase-id="r_c_26"
                >&#x5DF4;&#x54C8;&#x9A6C; (+1242)</option>
                <option
                  value="105"
                  data-pattern="^(00){0,1}(995){1}\d{6,15}$"
                  check-key="^(00){0,1}(995){1}\d{6,15}$"
                  data-code="995"
                  class="tsl"
                  data-phase-id="r_c_27"
                >&#x683C;&#x9C81;&#x5409;&#x4E9A; (+995)</option>
                <option
                  value="26"
                  data-pattern="^(00){0,1}(54){1}\d{6,12}$"
                  check-key="^(00){0,1}(54){1}\d{6,12}$"
                  data-code="54"
                  class="tsl"
                  data-phase-id="r_c_28"
                >&#x963F;&#x6839;&#x5EF7; (+54)</option>
                <option
                  value="39"
                  data-pattern="^(00){0,1}(20){1}\d{6,12}$"
                  check-key="^(00){0,1}(20){1}\d{6,12}$"
                  data-code="20"
                  class="tsl"
                  data-phase-id="r_c_29"
                >&#x57C3;&#x53CA; (+20)</option>
                <option
                  value="127"
                  data-pattern="^(00){0,1}(371){1}\d{6,15}$"
                  check-key="^(00){0,1}(371){1}\d{6,15}$"
                  data-code="371"
                  class="tsl"
                  data-phase-id="r_c_30"
                >&#x62C9;&#x8131;&#x7EF4;&#x4E9A; (+371)</option>
                <option
                  value="45"
                  data-pattern="^(00){0,1}(972){1}\d{6,12}$"
                  check-key="^(00){0,1}(972){1}\d{6,12}$"
                  data-code="972"
                  class="tsl"
                  data-phase-id="r_c_31"
                >&#x4EE5;&#x8272;&#x5217; (+972)</option>
                <option
                  value="166"
                  data-pattern="^(00){0,1}(256){1}\d{6,15}$"
                  check-key="^(00){0,1}(256){1}\d{6,15}$"
                  data-code="256"
                  class="tsl"
                  data-phase-id="r_c_32"
                >&#x4E4C;&#x5E72;&#x8FBE; (+256)</option>
                <option
                  value="30"
                  data-pattern="^(00){0,1}(55){1}\d{6,12}$"
                  check-key="^(00){0,1}(55){1}\d{6,12}$"
                  data-code="55"
                  class="tsl"
                  data-phase-id="r_c_33"
                >&#x5DF4;&#x897F; (+55)</option>
                <option
                  value="4"
                  data-pattern="^(00){0,1}(886){1}0{0,1}[6,7,9](?:\d{7}|\d{8}|\d{10})$"
                  check-key="^(00){0,1}(886){1}0{0,1}[6,7,9](?:\d{7}|\d{8}|\d{10})$"
                  data-code="886"
                  class="tsl"
                  data-phase-id="r_c_34"
                >
                  &#x4E2D;&#x56FD;&#x53F0;&#x6E7E;&#x5730;&#x533A;
                  (+886)
                </option>
                <option
                  value="132"
                  data-pattern="^(00){0,1}(261){1}\d{6,15}$"
                  check-key="^(00){0,1}(261){1}\d{6,15}$"
                  data-code="261"
                  class="tsl"
                  data-phase-id="r_c_35"
                >&#x9A6C;&#x8FBE;&#x52A0;&#x65AF;&#x52A0; (+261)</option>
                <option
                  value="155"
                  data-pattern="^(00){0,1}(597){1}\d{6,15}$"
                  check-key="^(00){0,1}(597){1}\d{6,15}$"
                  data-code="597"
                  class="tsl"
                  data-phase-id="r_c_36"
                >&#x82CF;&#x91CC;&#x5357; (+597)</option>
                <option
                  value="29"
                  data-pattern="^(00){0,1}(359){1}\d{6,12}$"
                  check-key="^(00){0,1}(359){1}\d{6,12}$"
                  data-code="359"
                  class="tsl"
                  data-phase-id="r_c_37"
                >&#x4FDD;&#x52A0;&#x5229;&#x4E9A; (+359)</option>
                <option
                  value="139"
                  data-pattern="^(00){0,1}(258){1}\d{6,15}$"
                  check-key="^(00){0,1}(258){1}\d{6,15}$"
                  data-code="258"
                  class="tsl"
                  data-phase-id="r_c_38"
                >&#x83AB;&#x6851;&#x6BD4;&#x514B; (+258)</option>
                <option
                  value="144"
                  data-pattern="^(00){0,1}(675){1}\d{6,15}$"
                  check-key="^(00){0,1}(675){1}\d{6,15}$"
                  data-code="675"
                  class="tsl"
                  data-phase-id="r_c_39"
                >&#x5DF4;&#x5E03;&#x4E9A;&#x65B0;&#x51E0;&#x5185;&#x4E9A; (+675)</option>
                <option
                  value="47"
                  data-pattern="^(00){0,1}(962){1}\d{6,12}$"
                  check-key="^(00){0,1}(962){1}\d{6,12}$"
                  data-code="962"
                  class="tsl"
                  data-phase-id="r_c_40"
                >&#x7EA6;&#x65E6; (+962)</option>
                <option
                  value="65"
                  data-pattern="^(00){0,1}(381){1}\d{6,12}$"
                  check-key="^(00){0,1}(381){1}\d{6,12}$"
                  data-code="381"
                  class="tsl"
                  data-phase-id="r_c_41"
                >&#x585E;&#x5C14;&#x7EF4;&#x4E9A; (+381)</option>
                <option
                  value="78"
                  data-pattern="^(00){0,1}(994){1}\d{6,15}$"
                  check-key="^(00){0,1}(994){1}\d{6,15}$"
                  data-code="994"
                  class="tsl"
                  data-phase-id="r_c_42"
                >&#x963F;&#x585E;&#x62DC;&#x7586; (+994)</option>
                <option
                  value="143"
                  data-pattern="^(00){0,1}(968){1}\d{6,15}$"
                  check-key="^(00){0,1}(968){1}\d{6,15}$"
                  data-code="968"
                  class="tsl"
                  data-phase-id="r_c_43"
                >&#x963F;&#x66FC; (+968)</option>
                <option
                  value="161"
                  data-pattern="^(00){0,1}(228){1}\d{6,15}$"
                  check-key="^(00){0,1}(228){1}\d{6,15}$"
                  data-code="228"
                  class="tsl"
                  data-phase-id="r_c_44"
                >&#x591A;&#x54E5; (+228)</option>
                <option
                  value="18"
                  data-pattern="^(00){0,1}(39){1}[37]\d{8,11}$"
                  check-key="^(00){0,1}(39){1}[37]\d{8,11}$"
                  data-code="39"
                  class="tsl"
                  data-phase-id="r_c_45"
                >&#x610F;&#x5927;&#x5229; (+39)</option>
                <option
                  value="140"
                  data-pattern="^(00){0,1}(264){1}\d{6,15}$"
                  check-key="^(00){0,1}(264){1}\d{6,15}$"
                  data-code="264"
                  class="tsl"
                  data-phase-id="r_c_46"
                >&#x7EB3;&#x7C73;&#x6BD4;&#x4E9A; (+264)</option>
                <option
                  value="10"
                  data-pattern="^(00){0,1}(61){1}4\d{8,9}$"
                  check-key="^(00){0,1}(61){1}4\d{8,9}$"
                  data-code="61"
                  class="tsl"
                  data-phase-id="r_c_47"
                >&#x6FB3;&#x5927;&#x5229;&#x4E9A; (+61)</option>
                <option
                  value="167"
                  data-pattern="^(00){0,1}(598){1}\d{6,15}$"
                  check-key="^(00){0,1}(598){1}\d{6,15}$"
                  data-code="598"
                  class="tsl"
                  data-phase-id="r_c_48"
                >&#x4E4C;&#x62C9;&#x572D; (+598)</option>
                <option
                  value="44"
                  data-pattern="^(00){0,1}(353){1}\d{6,12}$"
                  check-key="^(00){0,1}(353){1}\d{6,12}$"
                  data-code="353"
                  class="tsl"
                  data-phase-id="r_c_49"
                >&#x7231;&#x5C14;&#x5170; (+353)</option>
                <option
                  value="95"
                  data-pattern="^(00){0,1}(238){1}\d{6,15}$"
                  check-key="^(00){0,1}(238){1}\d{6,15}$"
                  data-code="238"
                  class="tsl"
                  data-phase-id="r_c_50"
                >&#x4F5B;&#x5F97;&#x89D2; (+238)</option>
                <option
                  value="157"
                  data-pattern="^(00){0,1}(503){1}\d{6,15}$"
                  check-key="^(00){0,1}(503){1}\d{6,15}$"
                  data-code="503"
                  class="tsl"
                  data-phase-id="r_c_51"
                >&#x8428;&#x5C14;&#x74E6;&#x591A; (+503)</option>
                <option
                  value="141"
                  data-pattern="^(00){0,1}(227){1}\d{6,15}$"
                  check-key="^(00){0,1}(227){1}\d{6,15}$"
                  data-code="227"
                  class="tsl"
                  data-phase-id="r_c_52"
                >&#x5C3C;&#x65E5;&#x5C14; (+227)</option>
                <option
                  value="151"
                  data-pattern="^(00){0,1}(421){1}\d{6,15}$"
                  check-key="^(00){0,1}(421){1}\d{6,15}$"
                  data-code="421"
                  class="tsl"
                  data-phase-id="r_c_53"
                >&#x65AF;&#x6D1B;&#x4F10;&#x514B; (+421)</option>
                <option
                  value="171"
                  data-pattern="^(00){0,1}(967){1}\d{6,15}$"
                  check-key="^(00){0,1}(967){1}\d{6,15}$"
                  data-code="967"
                  class="tsl"
                  data-phase-id="r_c_54"
                >&#x4E5F;&#x95E8; (+967)</option>
                <option
                  value="63"
                  data-pattern="^(00){0,1}(974){1}\d{6,12}$"
                  check-key="^(00){0,1}(974){1}\d{6,12}$"
                  data-code="974"
                  class="tsl"
                  data-phase-id="r_c_55"
                >&#x5361;&#x5854;&#x5C14; (+974)</option>
                <option
                  value="148"
                  data-pattern="^(00){0,1}(250){1}\d{6,15}$"
                  check-key="^(00){0,1}(250){1}\d{6,15}$"
                  data-code="250"
                  class="tsl"
                  data-phase-id="r_c_56"
                >&#x5362;&#x65FA;&#x8FBE; (+250)</option>
                <option
                  value="103"
                  data-pattern="^(00){0,1}(241){1}\d{6,15}$"
                  check-key="^(00){0,1}(241){1}\d{6,15}$"
                  data-code="241"
                  class="tsl"
                  data-phase-id="r_c_57"
                >&#x52A0;&#x84EC; (+241)</option>
                <option
                  value="66"
                  data-pattern="^(00){0,1}(966){1}\d{6,12}$"
                  check-key="^(00){0,1}(966){1}\d{6,12}$"
                  data-code="966"
                  class="tsl"
                  data-phase-id="r_c_58"
                >&#x6C99;&#x7279;&#x963F;&#x62C9;&#x4F2F; (+966)</option>
                <option
                  value="137"
                  data-pattern="^(00){0,1}(230){1}\d{6,15}$"
                  check-key="^(00){0,1}(230){1}\d{6,15}$"
                  data-code="230"
                  class="tsl"
                  data-phase-id="r_c_59"
                >&#x6BDB;&#x91CC;&#x6C42;&#x65AF; (+230)</option>
                <option
                  value="159"
                  data-pattern="^(00){0,1}(268){1}\d{6,15}$"
                  check-key="^(00){0,1}(268){1}\d{6,15}$"
                  data-code="268"
                  class="tsl"
                  data-phase-id="r_c_60"
                >&#x65AF;&#x5A01;&#x58EB;&#x5170; (+268)</option>
                <option
                  value="13"
                  data-pattern="^(00){0,1}(66){1}[13456789]\d{7,8}$"
                  check-key="^(00){0,1}(66){1}[13456789]\d{7,8}$"
                  data-code="66"
                  class="tsl"
                  data-phase-id="r_c_61"
                >
                  &#x6CF0;&#x56FD;
                  (+66)
                </option>
                <option
                  value="20"
                  data-pattern="^(00){0,1}(7){1}[13489]\d{9,11}$"
                  check-key="^(00){0,1}(7){1}[13489]\d{9,11}$"
                  data-code="7"
                  class="tsl"
                  data-phase-id="r_c_62"
                >&#x4FC4;&#x7F57;&#x65AF; (+7)</option>
                <option
                  value="114"
                  data-pattern="^(00){0,1}(385){1}\d{6,15}$"
                  check-key="^(00){0,1}(385){1}\d{6,15}$"
                  data-code="385"
                  class="tsl"
                  data-phase-id="r_c_63"
                >&#x514B;&#x7F57;&#x5730;&#x4E9A; (+385)</option>
                <option
                  value="41"
                  data-pattern="^(00){0,1}(358){1}\d{6,12}$"
                  check-key="^(00){0,1}(358){1}\d{6,12}$"
                  data-code="358"
                  class="tsl"
                  data-phase-id="r_c_64"
                >&#x82AC;&#x5170; (+358)</option>
                <option
                  value="85"
                  data-pattern="^(00){0,1}(673){1}\d{6,15}$"
                  check-key="^(00){0,1}(673){1}\d{6,15}$"
                  data-code="673"
                  class="tsl"
                  data-phase-id="r_c_65"
                >&#x6587;&#x83B1; (+673)</option>
                <option
                  value="117"
                  data-pattern="^(00){0,1}(1876){1}\d{6,15}$"
                  check-key="^(00){0,1}(1876){1}\d{6,15}$"
                  data-code="1876"
                  class="tsl"
                  data-phase-id="r_c_66"
                >&#x7259;&#x4E70;&#x52A0; (+1876)</option>
                <option
                  value="12"
                  data-pattern="^(00){0,1}(60){1}1\d{8,9}$"
                  check-key="^(00){0,1}(60){1}1\d{8,9}$"
                  data-code="60"
                  class="tsl"
                  data-phase-id="r_c_67"
                >&#x9A6C;&#x6765;&#x897F;&#x4E9A; (+60)</option>
                <option
                  value="34"
                  data-pattern="^(00){0,1}(41){1}\d{6,12}$"
                  check-key="^(00){0,1}(41){1}\d{6,12}$"
                  data-code="41"
                  class="tsl"
                  data-phase-id="r_c_68"
                >&#x745E;&#x58EB; (+41)</option>
                <option
                  value="150"
                  data-pattern="^(00){0,1}(386){1}\d{6,15}$"
                  check-key="^(00){0,1}(386){1}\d{6,15}$"
                  data-code="386"
                  class="tsl"
                  data-phase-id="r_c_69"
                >&#x65AF;&#x6D1B;&#x6587;&#x5C3C;&#x4E9A; (+386)</option>
                <option
                  value="11"
                  data-pattern="^(00){0,1}(65){1}[13689]\d{6,7}$"
                  check-key="^(00){0,1}(65){1}[13689]\d{6,7}$"
                  data-code="65"
                  class="tsl"
                  data-phase-id="r_c_70"
                >&#x65B0;&#x52A0;&#x5761; (+65)</option>
                <option
                  value="37"
                  data-pattern="^(00){0,1}(45){1}\d{6,12}$"
                  check-key="^(00){0,1}(45){1}\d{6,12}$"
                  data-code="45"
                  class="tsl"
                  data-phase-id="r_c_71"
                >&#x4E39;&#x9EA6; (+45)</option>
                <option
                  value="9"
                  data-pattern="^(00){0,1}(44){1}[347-9](\d{8,9}|\d{11,12})$"
                  check-key="^(00){0,1}(44){1}[347-9](\d{8,9}|\d{11,12})$"
                  data-code="44"
                  class="tsl"
                  data-phase-id="r_c_72"
                >&#x82F1;&#x56FD; (+44)</option>
                <option
                  value="25"
                  data-pattern="^(00){0,1}(971){1}\d{6,12}$"
                  check-key="^(00){0,1}(971){1}\d{6,12}$"
                  data-code="971"
                  class="tsl"
                  data-phase-id="r_c_73"
                >&#x963F;&#x8054;&#x914B; (+971)</option>
                <option
                  value="113"
                  data-pattern="^(00){0,1}(504){1}\d{6,15}$"
                  check-key="^(00){0,1}(504){1}\d{6,15}$"
                  data-code="504"
                  class="tsl"
                  data-phase-id="r_c_74"
                >&#x6D2A;&#x90FD;&#x62C9;&#x65AF; (+504)</option>
                <option
                  value="60"
                  data-pattern="^(00){0,1}(51){1}\d{6,12}$"
                  check-key="^(00){0,1}(51){1}\d{6,12}$"
                  data-code="51"
                  class="tsl"
                  data-phase-id="r_c_75"
                >&#x79D8;&#x9C81; (+51)</option>
                <option
                  value="86"
                  data-pattern="^(00){0,1}(591){1}\d{6,15}$"
                  check-key="^(00){0,1}(591){1}\d{6,15}$"
                  data-code="591"
                  class="tsl"
                  data-phase-id="r_c_76"
                >&#x73BB;&#x5229;&#x7EF4;&#x4E9A; (+591)</option>
                <option
                  value="164"
                  data-pattern="^(00){0,1}(1868){1}\d{6,15}$"
                  check-key="^(00){0,1}(1868){1}\d{6,15}$"
                  data-code="1868"
                  class="tsl"
                  data-phase-id="r_c_77"
                >
                  &#x7279;&#x7ACB;&#x5C3C;&#x8FBE;&#x548C;&#x591A;&#x5DF4;&#x54E5;
                  (+1868)
                </option>
                <option
                  value="162"
                  data-pattern="^(00){0,1}(992){1}\d{6,15}$"
                  check-key="^(00){0,1}(992){1}\d{6,15}$"
                  data-code="992"
                  class="tsl"
                  data-phase-id="r_c_78"
                >&#x5854;&#x5409;&#x514B;&#x65AF;&#x5766; (+992)</option>
                <option
                  value="70"
                  data-pattern="^(00){0,1}(58){1}\d{6,12}$"
                  check-key="^(00){0,1}(58){1}\d{6,12}$"
                  data-code="58"
                  class="tsl"
                  data-phase-id="r_c_79"
                >&#x59D4;&#x5185;&#x745E;&#x62C9; (+58)</option>
                <option
                  value="111"
                  data-pattern="^(00){0,1}(245){1}\d{6,15}$"
                  check-key="^(00){0,1}(245){1}\d{6,15}$"
                  data-code="245"
                  class="tsl"
                  data-phase-id="r_c_80"
                >&#x51E0;&#x5185;&#x4E9A;&#x6BD4;&#x7ECD; (+245)</option>
                <option
                  value="92"
                  data-pattern="^(00){0,1}(237){1}\d{6,15}$"
                  check-key="^(00){0,1}(237){1}\d{6,15}$"
                  data-code="237"
                  class="tsl"
                  data-phase-id="r_c_81"
                >&#x5580;&#x9EA6;&#x9686; (+237)</option>
                <option
                  value="3"
                  data-pattern="^(00){0,1}(853){1}6\d{7}$"
                  check-key="^(00){0,1}(853){1}6\d{7}$"
                  data-code="853"
                  class="tsl"
                  data-phase-id="r_c_82"
                >&#x4E2D;&#x56FD;&#x6FB3;&#x95E8; (+853)</option>
                <option
                  value="15"
                  data-pattern="^(00){0,1}(63){1}[24579](\d{7,9}|\d{12})$"
                  check-key="^(00){0,1}(63){1}[24579](\d{7,9}|\d{12})$"
                  data-code="63"
                  class="tsl"
                  data-phase-id="r_c_83"
                >&#x83F2;&#x5F8B;&#x5BBE; (+63)</option>
                <option
                  value="58"
                  data-pattern="^(00){0,1}(47){1}\d{6,12}$"
                  check-key="^(00){0,1}(47){1}\d{6,12}$"
                  data-code="47"
                  class="tsl"
                  data-phase-id="r_c_84"
                >&#x632A;&#x5A01; (+47)</option>
                <option
                  value="107"
                  data-pattern="^(00){0,1}(220){1}\d{6,15}$"
                  check-key="^(00){0,1}(220){1}\d{6,15}$"
                  data-code="220"
                  class="tsl"
                  data-phase-id="r_c_85"
                >&#x5188;&#x6BD4;&#x4E9A; (+220)</option>
                <option
                  value="17"
                  data-pattern="^(00){0,1}(49){1}1(\d{5,6}|\d{9,12})$"
                  check-key="^(00){0,1}(49){1}1(\d{5,6}|\d{9,12})$"
                  data-code="49"
                  class="tsl"
                  data-phase-id="r_c_86"
                >
                  &#x5FB7;&#x56FD;
                  (+49)
                </option>
                <option
                  value="23"
                  data-pattern="^(00){0,1}(46){1}[124-7](\d{8}|\d{10}|\d{12})$"
                  check-key="^(00){0,1}(46){1}[124-7](\d{8}|\d{10}|\d{12})$"
                  data-code="46"
                  class="tsl"
                  data-phase-id="r_c_87"
                >&#x745E;&#x5178; (+46)</option>
                <option
                  value="72"
                  data-pattern="^(00){0,1}(27){1}\d{6,12}$"
                  check-key="^(00){0,1}(27){1}\d{6,12}$"
                  data-code="27"
                  class="tsl"
                  data-phase-id="r_c_88"
                >&#x5357;&#x975E; (+27)</option>
                <option
                  value="152"
                  data-pattern="^(00){0,1}(232){1}\d{6,15}$"
                  check-key="^(00){0,1}(232){1}\d{6,15}$"
                  data-code="232"
                  class="tsl"
                  data-phase-id="r_c_89"
                >&#x585E;&#x62C9;&#x5229;&#x6602; (+232)</option>
                <option
                  value="56"
                  data-pattern="^(00){0,1}(52){1}\d{6,12}$"
                  check-key="^(00){0,1}(52){1}\d{6,12}$"
                  data-code="52"
                  class="tsl"
                  data-phase-id="r_c_90"
                >&#x58A8;&#x897F;&#x54E5; (+52)</option>
                <option
                  value="71"
                  data-pattern="^(00){0,1}(1284){1}\d{6,12}$"
                  check-key="^(00){0,1}(1284){1}\d{6,12}$"
                  data-code="1284"
                  class="tsl"
                  data-phase-id="r_c_91"
                >&#x82F1;&#x5C5E;&#x7EF4;&#x5C14;&#x4EAC;&#x7FA4;&#x5C9B; (+1284)</option>
                <option
                  value="109"
                  data-pattern="^(00){0,1}(240){1}\d{6,15}$"
                  check-key="^(00){0,1}(240){1}\d{6,15}$"
                  data-code="240"
                  class="tsl"
                  data-phase-id="r_c_92"
                >&#x8D64;&#x9053;&#x51E0;&#x5185;&#x4E9A; (+240)</option>
                <option
                  value="112"
                  data-pattern="^(00){0,1}(592){1}\d{6,15}$"
                  check-key="^(00){0,1}(592){1}\d{6,15}$"
                  data-code="592"
                  class="tsl"
                  data-phase-id="r_c_93"
                >&#x572D;&#x4E9A;&#x90A3; (+592)</option>
                <option
                  value="75"
                  data-pattern="^(00){0,1}(355){1}\d{6,15}$"
                  check-key="^(00){0,1}(355){1}\d{6,15}$"
                  data-code="355"
                  class="tsl"
                  data-phase-id="r_c_94"
                >&#x963F;&#x5C14;&#x5DF4;&#x5C3C;&#x4E9A; (+355)</option>
                <option
                  value="61"
                  data-pattern="^(00){0,1}(48){1}\d{6,12}$"
                  check-key="^(00){0,1}(48){1}\d{6,12}$"
                  data-code="48"
                  class="tsl"
                  data-phase-id="r_c_95"
                >&#x6CE2;&#x5170; (+48)</option>
                <option
                  value="21"
                  data-pattern="^(00){0,1}(64){1}[278]\d{7,9}$"
                  check-key="^(00){0,1}(64){1}[278]\d{7,9}$"
                  data-code="64"
                  class="tsl"
                  data-phase-id="r_c_96"
                >&#x65B0;&#x897F;&#x5170; (+64)</option>
                <option
                  value="121"
                  data-pattern="^(00){0,1}(1345){1}\d{6,15}$"
                  check-key="^(00){0,1}(1345){1}\d{6,15}$"
                  data-code="1345"
                  class="tsl"
                  data-phase-id="r_c_97"
                >&#x5F00;&#x66FC;&#x7FA4;&#x5C9B; (+1345)</option>
                <option
                  value="28"
                  data-pattern="^(00){0,1}(32){1}\d{6,12}$"
                  check-key="^(00){0,1}(32){1}\d{6,12}$"
                  data-code="32"
                  class="tsl"
                  data-phase-id="r_c_98"
                >&#x6BD4;&#x5229;&#x65F6; (+32)</option>
                <option
                  value="40"
                  data-pattern="^(00){0,1}(34){1}\d{6,12}$"
                  check-key="^(00){0,1}(34){1}\d{6,12}$"
                  data-code="34"
                  class="tsl"
                  data-phase-id="r_c_99"
                >&#x897F;&#x73ED;&#x7259; (+34)</option>
                <option
                  value="93"
                  data-pattern="^(00){0,1}(506){1}\d{6,15}$"
                  check-key="^(00){0,1}(506){1}\d{6,15}$"
                  data-code="506"
                  class="tsl"
                  data-phase-id="r_c_100"
                >&#x54E5;&#x65AF;&#x8FBE;&#x9ECE;&#x52A0; (+506)</option>
                <option
                  value="68"
                  data-pattern="^(00){0,1}(216){1}\d{6,12}$"
                  check-key="^(00){0,1}(216){1}\d{6,12}$"
                  data-code="216"
                  class="tsl"
                  data-phase-id="r_c_101"
                >&#x7A81;&#x5C3C;&#x65AF; (+216)</option>
                <option
                  value="27"
                  data-pattern="^(00){0,1}(43){1}\d{6,12}$"
                  check-key="^(00){0,1}(43){1}\d{6,12}$"
                  data-code="43"
                  class="tsl"
                  data-phase-id="r_c_102"
                >&#x5965;&#x5730;&#x5229; (+43)</option>
                <option
                  value="136"
                  data-pattern="^(00){0,1}(222){1}\d{6,15}$"
                  check-key="^(00){0,1}(222){1}\d{6,15}$"
                  data-code="222"
                  class="tsl"
                  data-phase-id="r_c_103"
                >&#x6BDB;&#x91CC;&#x5854;&#x5C3C;&#x4E9A; (+222)</option>
                <option
                  value="53"
                  data-pattern="^(00){0,1}(212){1}\d{6,12}$"
                  check-key="^(00){0,1}(212){1}\d{6,12}$"
                  data-code="212"
                  class="tsl"
                  data-phase-id="r_c_104"
                >&#x6469;&#x6D1B;&#x54E5; (+212)</option>
                <option
                  value="147"
                  data-pattern="^(00){0,1}(970){1}\d{6,15}$"
                  check-key="^(00){0,1}(970){1}\d{6,15}$"
                  data-code="970"
                  class="tsl"
                  data-phase-id="r_c_105"
                >&#x5DF4;&#x52D2;&#x65AF;&#x5766; (+970)</option>
                <option
                  value="7"
                  data-pattern="^(00){0,1}(1){1}\d{10,12}$"
                  check-key="^(00){0,1}(1){1}\d{10,12}$"
                  data-code="1"
                  class="tsl"
                  data-phase-id="r_c_106"
                >&#x7F8E;&#x56FD; (+1)</option>
                <option
                  value="42"
                  data-pattern="^(00){0,1}(30){1}\d{6,12}$"
                  check-key="^(00){0,1}(30){1}\d{6,12}$"
                  data-code="30"
                  class="tsl"
                  data-phase-id="r_c_107"
                >&#x5E0C;&#x814A; (+30)</option>
                <option
                  value="54"
                  data-pattern="^(00){0,1}(976){1}\d{6,12}$"
                  check-key="^(00){0,1}(976){1}\d{6,12}$"
                  data-code="976"
                  class="tsl"
                  data-phase-id="r_c_108"
                >&#x8499;&#x53E4; (+976)</option>
                <option
                  value="16"
                  data-pattern="^(00){0,1}(62){1}[2-9]\d{7,11}$"
                  check-key="^(00){0,1}(62){1}[2-9]\d{7,11}$"
                  data-code="62"
                  class="tsl"
                  data-phase-id="r_c_109"
                >
                  &#x5370;&#x5EA6;&#x5C3C;&#x897F;&#x4E9A;
                  (+62)
                </option>
                <option
                  value="84"
                  data-pattern="^(00){0,1}(229){1}\d{6,15}$"
                  check-key="^(00){0,1}(229){1}\d{6,15}$"
                  data-code="229"
                  class="tsl"
                  data-phase-id="r_c_110"
                >&#x8D1D;&#x5B81; (+229)</option>
                <option
                  value="172"
                  data-pattern="^(00){0,1}(260){1}\d{6,15}$"
                  check-key="^(00){0,1}(260){1}\d{6,15}$"
                  data-code="260"
                  class="tsl"
                  data-phase-id="r_c_111"
                >&#x8D5E;&#x6BD4;&#x4E9A; (+260)</option>
                <option
                  value="108"
                  data-pattern="^(00){0,1}(224){1}\d{6,15}$"
                  check-key="^(00){0,1}(224){1}\d{6,15}$"
                  data-code="224"
                  class="tsl"
                  data-phase-id="r_c_112"
                >&#x51E0;&#x5185;&#x4E9A; (+224)</option>
                <option
                  value="126"
                  data-pattern="^(00){0,1}(266){1}\d{6,15}$"
                  check-key="^(00){0,1}(266){1}\d{6,15}$"
                  data-code="266"
                  class="tsl"
                  data-phase-id="r_c_113"
                >&#x83B1;&#x7D22;&#x6258; (+266)</option>
                <option
                  value="46"
                  data-pattern="^(00){0,1}(91){1}\d{6,12}$"
                  check-key="^(00){0,1}(91){1}\d{6,12}$"
                  data-code="91"
                  class="tsl"
                  data-phase-id="r_c_114"
                >&#x5370;&#x5EA6; (+91)</option>
                <option
                  value="67"
                  data-pattern="^(00){0,1}(248){1}\d{6,12}$"
                  check-key="^(00){0,1}(248){1}\d{6,12}$"
                  data-code="248"
                  class="tsl"
                  data-phase-id="r_c_115"
                >&#x585E;&#x820C;&#x5C14; (+248)</option>
                <option
                  value="77"
                  data-pattern="^(00){0,1}(244){1}\d{6,15}$"
                  check-key="^(00){0,1}(244){1}\d{6,15}$"
                  data-code="244"
                  class="tsl"
                  data-phase-id="r_c_116"
                >&#x5B89;&#x54E5;&#x62C9; (+244)</option>
                <option
                  value="48"
                  data-pattern="^(00){0,1}(996){1}\d{6,12}$"
                  check-key="^(00){0,1}(996){1}\d{6,12}$"
                  data-code="996"
                  class="tsl"
                  data-phase-id="r_c_117"
                >&#x5409;&#x5C14;&#x5409;&#x65AF;&#x65AF;&#x5766; (+996)</option>
                <option
                  value="97"
                  data-pattern="^(00){0,1}(357){1}\d{6,15}$"
                  check-key="^(00){0,1}(357){1}\d{6,15}$"
                  data-code="357"
                  class="tsl"
                  data-phase-id="r_c_118"
                >&#x585E;&#x6D66;&#x8DEF;&#x65AF; (+357)</option>
                <option
                  value="119"
                  data-pattern="^(00){0,1}(269){1}\d{6,15}$"
                  check-key="^(00){0,1}(269){1}\d{6,15}$"
                  data-code="269"
                  class="tsl"
                  data-phase-id="r_c_119"
                >&#x79D1;&#x6469;&#x7F57; (+269)</option>
                <option
                  value="14"
                  data-pattern="^(00){0,1}(84){1}[1-9]\d{6,9}$"
                  check-key="^(00){0,1}(84){1}[1-9]\d{6,9}$"
                  data-code="84"
                  class="tsl"
                  data-phase-id="r_c_120"
                >&#x8D8A;&#x5357; (+84)</option>
                <option
                  value="33"
                  data-pattern="^(00){0,1}(501){1}\d{6,12}$"
                  check-key="^(00){0,1}(501){1}\d{6,12}$"
                  data-code="501"
                  class="tsl"
                  data-phase-id="r_c_121"
                >&#x4F2F;&#x5229;&#x5179; (+501)</option>
                <option
                  value="82"
                  data-pattern="^(00){0,1}(973){1}\d{6,15}$"
                  check-key="^(00){0,1}(973){1}\d{6,15}$"
                  data-code="973"
                  class="tsl"
                  data-phase-id="r_c_122"
                >&#x5DF4;&#x6797; (+973)</option>
                <option
                  value="38"
                  data-pattern="^(00){0,1}(372){1}\d{6,12}$"
                  check-key="^(00){0,1}(372){1}\d{6,12}$"
                  data-code="372"
                  class="tsl"
                  data-phase-id="r_c_123"
                >&#x7231;&#x6C99;&#x5C3C;&#x4E9A; (+372)</option>
                <option
                  value="129"
                  data-pattern="^(00){0,1}(373){1}\d{6,15}$"
                  check-key="^(00){0,1}(373){1}\d{6,15}$"
                  data-code="373"
                  class="tsl"
                  data-phase-id="r_c_124"
                >&#x6469;&#x5C14;&#x591A;&#x74E6; (+373)</option>
                <option
                  value="134"
                  data-pattern="^(00){0,1}(223){1}\d{6,15}$"
                  check-key="^(00){0,1}(223){1}\d{6,15}$"
                  data-code="223"
                  class="tsl"
                  data-phase-id="r_c_125"
                >&#x9A6C;&#x91CC; (+223)</option>
                <option
                  value="69"
                  data-pattern="^(00){0,1}(90){1}\d{6,12}$"
                  check-key="^(00){0,1}(90){1}\d{6,12}$"
                  data-code="90"
                  class="tsl"
                  data-phase-id="r_c_126"
                >&#x571F;&#x8033;&#x5176; (+90)</option>
                <option
                  value="120"
                  data-pattern="^(00){0,1}(965){1}\d{6,15}$"
                  check-key="^(00){0,1}(965){1}\d{6,15}$"
                  data-code="965"
                  class="tsl"
                  data-phase-id="r_c_127"
                >&#x79D1;&#x5A01;&#x7279; (+965)</option>
                <option
                  value="163"
                  data-pattern="^(00){0,1}(993){1}\d{6,15}$"
                  check-key="^(00){0,1}(993){1}\d{6,15}$"
                  data-code="993"
                  class="tsl"
                  data-phase-id="r_c_128"
                >&#x571F;&#x5E93;&#x66FC;&#x65AF;&#x5766; (+993)</option>
                <option
                  value="24"
                  data-pattern="^(00){0,1}(380){1}[3-79]\d{8,9}$"
                  check-key="^(00){0,1}(380){1}[3-79]\d{8,9}$"
                  data-code="380"
                  class="tsl"
                  data-phase-id="r_c_129"
                >
                  &#x4E4C;&#x514B;&#x5170;
                  (+380)
                </option>
                <option
                  value="104"
                  data-pattern="^(00){0,1}(1473){1}\d{6,15}$"
                  check-key="^(00){0,1}(1473){1}\d{6,15}$"
                  data-code="1473"
                  class="tsl"
                  data-phase-id="r_c_130"
                >&#x683C;&#x6797;&#x7EB3;&#x8FBE; (+1473)</option>
                <option
                  value="142"
                  data-pattern="^(00){0,1}(505){1}\d{6,15}$"
                  check-key="^(00){0,1}(505){1}\d{6,15}$"
                  data-code="505"
                  class="tsl"
                  data-phase-id="r_c_131"
                >&#x5C3C;&#x52A0;&#x62C9;&#x74DC; (+505)</option>
                <option
                  value="22"
                  data-pattern="^(00){0,1}(31){1}6\d{8}$"
                  check-key="^(00){0,1}(31){1}6\d{8}$"
                  data-code="31"
                  class="tsl"
                  data-phase-id="r_c_132"
                >&#x8377;&#x5170; (+31)</option>
                <option
                  value="62"
                  data-pattern="^(00){0,1}(351){1}\d{6,12}$"
                  check-key="^(00){0,1}(351){1}\d{6,12}$"
                  data-code="351"
                  class="tsl"
                  data-phase-id="r_c_133"
                >&#x8461;&#x8404;&#x7259; (+351)</option>
                <option
                  value="173"
                  data-pattern="^(00){0,1}(263){1}\d{6,15}$"
                  check-key="^(00){0,1}(263){1}\d{6,15}$"
                  data-code="263"
                  class="tsl"
                  data-phase-id="r_c_134"
                >&#x6D25;&#x5DF4;&#x5E03;&#x97E6; (+263)</option>
                <option
                  value="49"
                  data-pattern="^(00){0,1}(855){1}\d{6,12}$"
                  check-key="^(00){0,1}(855){1}\d{6,12}$"
                  data-code="855"
                  class="tsl"
                  data-phase-id="r_c_135"
                >&#x67EC;&#x57D4;&#x5BE8; (+855)</option>
                <option
                  value="110"
                  data-pattern="^(00){0,1}(502){1}\d{6,15}$"
                  check-key="^(00){0,1}(502){1}\d{6,15}$"
                  data-code="502"
                  class="tsl"
                  data-phase-id="r_c_136"
                >&#x5371;&#x5730;&#x9A6C;&#x62C9; (+502)</option>
              </select>
            </div>
            <div class="am-list-arrow">
              <span class="am-icon-arrow-vertical"></span>
            </div>
          </div>

          <div class="am-list-item am-list-item-form am-input-autoclear">
            <div class="am-list-label">&#x624B;&#x673A;&#x53F7;</div>
            <div class="am-list-control">
              <input
                id="J_Mobile"
                type="tel"
                class="am-input-required"
                name="phoneNum"
                autocomplete="off"
                v-model="user"
              >
            </div>
            <div class="am-list-clear">
              <i class="am-icon-clear"></i>
            </div>
          </div>
          <div data-v-0915376c class="am-list-item am-list-item-form am-input-autoclear">
            <div data-v-0915376c class="am-list-label">密码</div>
            <div data-v-0915376c class="am-list-control">
              <input
                v-model="pw"
                data-v-0915376c
                id="J_Mobile"
                type="password"
                name="phoneNum"
                autocomplete="off"
                class="am-input-required"
              >
            </div>
            <div data-v-0915376c class="am-list-clear">
              <i data-v-0915376c class="am-icon-clear"></i>
            </div>
          </div>
        </div>
      </div>

      <input id="J_NcoSig" name="ncoSig" type="hidden">
      <input id="J_NcoSessionid" name="ncoSessionid" type="hidden">
      <input id="J_NcoToken" type="hidden" name="ncoToken" value="3e16edb5e0795f9c9c45f663943be16e">

      <div style="width:0;height:0;overflow:hidden;">
        <img
          height="0"
          src="https://ynuf.aliapp.org/dc.htm?token=3e16edb5e0795f9c9c45f663943be16e"
          width="0"
        >
      </div>
      <div id="checkcode" class="nc-container" style="display: block;">
        <div class="_nc">
          <div id="nc_1-stage-1" class="stage stage1" style="display: block;">
            <div ref="box" class="slider">
              <div
                class="label"
                data-spm-anchor-id="a2145.7514111.0.i1.274332d1hgCFP9"
              >&#x5411;&#x53F3;&#x6ED1;&#x52A8;&#x9A8C;&#x8BC1;</div>
              <div class="track" :style="`width:${lefts+26}px;`">
                <div class="bg-green" style="width: 345.2px;"></div>
              </div>
              <div ref="mb" @touchstart="moves" class="button" :style="`left:${lefts}px`">
                <div class="icon nc-iconfont iconfont icon-youjiantou" id="nc_1_n1t"></div>
              </div>
            </div>
          </div>
          <div id="nc_1-stage-2" class="stage stage2" style="display: none;">
            <div class="textbox">
              <input
                class="input"
                type="text"
                maxlength="6"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
              >
              <div class="placeholder" style="display: block;">&#x9A8C;&#x8BC1;&#x7801;</div>
              <div class="icon tip nc-iconfont icon-message"></div>
              <div class="icon clear nc-iconfont icon-close-white" style="display: none;"></div>
              <div class="icon refresh nc-iconfont icon-refresh"></div>
              <img class="code" width="100" height="30" alt>
            </div>
            <div class="ope">
              <button class="btn-ok" disabled>&#x786E; &#x5B9A;</button>
              <div
                class="tips"
              >&#x9A8C;&#x8BC1;&#x7801;&#x9519;&#x8BEF;&#xFF0C;&#x8BF7;&#x91CD;&#x65B0;&#x8F93;&#x5165;</div>
            </div>
          </div>
          <div id="nc_1-stage-3" class="stage stage3" style="display: none;">
            <div
              class="title"
            >&#x975E;&#x5E38;&#x62B1;&#x6B49;&#xFF0C;&#x8FD9;&#x51FA;&#x9519;&#x4E86;</div>
            <span class="menu refresh">
              <span class="icon nc-iconfont icon-refresh"></span>
              <span class="label">&#x5237;&#x65B0;</span>
            </span>
            <span class="menu nc-sep"></span>
            <span class="menu feedback">
              <span class="icon nc-iconfont icon-message"></span>
              <span class="label">&#x53CD;&#x9988;</span>
            </span>
          </div>
        </div>
      </div>

      <div class="am-ft-sm am-ft-gray am-ft-center">
        &#x7EE7;&#x7EED;&#x64CD;&#x4F5C;&#x5373;&#x89C6;&#x4E3A;&#x540C;&#x610F;
        <a
          href="http://www.taobao.com/go/chn/member/agreement.php"
        >&#x6DD8;&#x5B9D;&#x5E73;&#x53F0;&#x670D;&#x52A1;&#x534F;&#x8BAE;</a>&#x3001;
        <a
          href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201703241622_61002.html"
          target="_blank"
        >&#x9690;&#x79C1;&#x6743;&#x653F;&#x7B56;</a>&#x3001;
        <a
          href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_taobao/suit_bu1_taobao201811121436_80276.html"
          target="_blank"
        >&#x6CD5;&#x5F8B;&#x58F0;&#x660E;</a>&#x548C;
        <a
          href="https://render.alipay.com/p/f/fd-jm7jym6r/alipay/multi-agreement.html"
        >&#x652F;&#x4ED8;&#x5B9D;&#x53CA;&#x5BA2;&#x6237;&#x7AEF;&#x670D;&#x52A1;&#x534F;&#x8BAE;</a>

        <div
          class="am-ft-sm am-ft-gray am-ft-center"
        >&#x7CFB;&#x7EDF;&#x5C06;&#x540C;&#x6B65;&#x4E3A;&#x60A8;&#x521B;&#x5EFA;&#x652F;&#x4ED8;&#x5B9D;&#x8D26;&#x6237;</div>
      </div>
    </form>

    <div class="none" id="J_um_mob">
      <img
        src="//ynuf.aliapp.org/dc.htm?token=SHAREDPLATFORM_REGISTER:6e26ae7e9beb94382f8654b0246508a5&amp;jsInfo=375%7C667%7C375%7C667%7C-%7C-%7C-%7C-%7C-%7C-%7C-"
        width="0"
        height="0"
        frameborder="0"
      >
    </div>

    <noscript>
      <img
        height="0"
        src="//ynuf.aliapp.org/dc.htm?token=SHAREDPLATFORM_REGISTER:6e26ae7e9beb94382f8654b0246508a5"
        width="0"
      >
    </noscript>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      user: "",
      pw: "",
      lefts: 0
    };
  },
  methods: {
    register() {
      this.$http
        .get(
          "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=" +
            this.user +
            "&passwd=" +
            this.pw
        )
        .then(result => {
          if (result.body.msg == "用户已注册！") {
            Toast(result.body.msg);
          } else if (result.body.msg == "成功!") {
            Toast("注册成功");
            location.href = "/login";
          } else {
            Toast("请完善注册信息");
          }
        });
    },
    moves(ev) {
      document.ontouchmove = ev => {
        this.lefts =
          ev.touches[0].clientX -
          this.$refs.mb.offsetWidth / 2 -
          this.$refs.box.offsetLeft;
        if (this.lefts <= 0) {
          this.lefts = 0;
        }
        if (
          this.lefts >=
          this.$refs.box.offsetWidth - this.$refs.mb.offsetWidth
        ) {
          this.lefts = this.$refs.box.offsetWidth - this.$refs.mb.offsetWidth;
          if (this.user && this.pw) {
            this.register();
          }
        }
      };
      document.ontouchend = ev => {
        document.ontouchmove = null;
        if (
          this.lefts <
          this.$refs.box.offsetWidth - this.$refs.mb.offsetWidth
        ) {
          const fast = 20;
          let timer = setInterval(() => {
            this.lefts -= 40;
            if (this.lefts <= 0) {
              this.lefts = 0;
              clearInterval(timer);
            }
          }, 20);
        }
      };
    }
  }
};
</script>


<style scoped>
@import url(../components/iconfont2/iconfont.css);
body,
input,
textarea,
select,
button {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
}

body {
  background-color: #eee;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
*,
:before,
:after {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a {
  text-decoration: none;
}
.am-header-grey {
  background: #e6e6e6;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f2f2f2),
    to(#e6e6e6)
  );
  background-image: linear-gradient(#f2f2f2, #e6e6e6);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 1px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 1px #c1c1c5 solid;
}

.am-header {
  position: relative;
  padding: 3px 0;
  -webkit-box-sizing: border-box;
}
.am-header-grey h1 {
  color: #333;
}

.am-header h1 {
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
  height: 40px;
  overflow: hidden;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
}
.am-header-grey .am-header-reverse-btn,
.am-header-grey .am-header-operate-btn {
  background: #e6e6e6;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#f2f2f2),
    to(#e6e6e6)
  );
  background-image: linear-gradient(#f2f2f2, #e6e6e6);
  border: 1px #c1c1c5 solid;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8),
    0 1px 0 rgba(255, 255, 255, 0.8);
}

.am-header-grey .am-header-reverse,
.am-header-grey .am-header-operate {
  color: #888;
}
.am-header .am-header-reverse-btn,
.am-header .am-header-operate-btn {
  top: 8px;
  display: inline-block;
  width: auto;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 20px;
  border: 1px #000 solid;
  color: #d3d3d2;
  background: #292b38;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#3d4257),
    to(#292b38)
  );
  background-image: linear-gradient(#3d4257, #292b38);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  -webkit-background-clip: padding-box;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 0 rgba(255, 255, 255, 0.15);
}
.am-header .am-header-reverse {
  left: 5px;
  padding-left: 6px;
}
.am-header .am-header-reverse,
.am-header .am-header-operate {
  position: absolute;
  top: 6px;
  text-align: center;
  color: #fff;
}
.mt-10 {
  margin-top: 10px;
}
.am-ft-sm {
  font-size: 14px;
}
.am-content {
  margin-left: 10px;
  margin-right: 10px;
}
.am-list {
  padding: 6px 0;
}
.am-list-flat .am-list-item:first-child {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.am-list .am-list-item:first-child {
  margin-top: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.am-list-flat-chip .am-list-item {
  position: relative;
  z-index: 1;
}
.am-list-flat .am-list-item {
  overflow: inherit;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 0;
  margin-right: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-color: #d2d2d2;
  border-top-width: 0;
  margin-top: 0;
}
.am-list .am-list-item {
  padding: 6px 10px;
  min-height: 32px;
  border: 1px solid #d2d2d2;
  background-color: #fff;
  color: #000;
  vertical-align: middle;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -1px;
  text-align: left;
  display: -webkit-box;
  display: -webkit-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
}
.am-list-flat-chip .am-list-item:first-child:before {
  top: 0;
  border-top: 0 none;
}
.am-list-flat .am-list-item .am-list-label {
  margin-right: 15px;
  text-align: left;
}

.am-list .am-list-item .am-list-label {
  font-size: 16px;
  margin-right: 8px;
  color: #000;
  text-align: right;
}
.am-list .am-list-item .am-list-control {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
}
.am-list .am-list-item .am-list-arrow {
  margin-left: 4px;
  width: 12px;
}
.am-icon-arrow-horizontal,
.am-icon-arrow-vertical {
  display: inline-block;
  width: 12px;
  height: 12px;
  overflow: hidden;
}
.am-icon-arrow-vertical:before {
  margin-left: 2px;
  -webkit-transform: rotate(45deg);
}
.am-icon-arrow-horizontal:before,
.am-icon-arrow-vertical:before {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin-left: 0;
  border: solid 2px rgba(0, 0, 0, 0.2);
  border-top: 0 none;
  border-left: 0 none;
}
.am-list-flat .am-list-item:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.am-list .am-list-item:last-child {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.am-list-flat-chip .am-list-item {
  position: relative;
  z-index: 1;
}
.am-list-flat-chip .am-list-item:last-child:before {
  border-bottom: 0 none;
}
.am-list-flat-chip .am-list-item:before {
  display: block;
  content: " ";
  position: absolute;
  top: -1px;
  left: 0;
  width: 12px;
  height: 100%;
  border: 1px solid #fff;
  border-width: 1px 0;
  z-index: 12;
}
.am-list-flat .am-list-item .am-list-label {
  margin-right: 15px;
  text-align: left;
}
.am-list .am-list-item .am-list-label {
  font-size: 16px;
  margin-right: 8px;
  color: #000;
  text-align: right;
}
.am-list .am-list-item input {
  padding-top: 5px;
  padding-bottom: 5px;
}

.am-list .am-list-item input,
.am-list .am-list-item select,
.am-list .am-list-item textarea {
  font-size: 16px;
  -webkit-appearance: none;
  width: 100%;
  padding: 0;
  border: 0;
  background-color: transparent;
}
.am-list .am-list-item .am-list-clear {
  width: 28px;
}
.am-list .am-list-item .am-list-clear .am-icon-clear {
  padding: 4px;
}
.am-input-autoclear .am-icon-clear {
  visibility: hidden;
}

.am-icon-clear {
  display: block;
  width: 20px;
  height: 20px;
  overflow: hidden;
}
.am-icon-clear:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFW…rsqGo2Iw3xnJjI+yQtMy9EVaxd3JW0GKoCxWFDr/0VYABoXObmE/g7GgAAAABJRU5ErkJggg==)
    no-repeat;
  -webkit-background-size: 20px auto;
}
._nc {
  width: 100%;
  height: 100%;
  touch-action: none;
  font-size: 16px;
}
._nc * {
  padding: 0;
  margin: 0;
  border: none;
}
._nc .stage1 {
  height: 55px;
  position: relative;
}
._nc .stage1 .label {
  display: block;
  width: 100%;
  color: #aaa;
}
._nc .stage1 .slider {
  position: absolute;
  height: 52px;
  box-shadow: 0 0 3px #999;
  background-color: #ddd;
  left: 15px;
  right: 15px;
}
@keyframes slidetounlock {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}
._nc .stage1 .label {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #4d4d4d),
    color-stop(0.4, #4d4d4d),
    color-stop(0.5, white),
    color-stop(0.6, #4d4d4d),
    color-stop(1, #4d4d4d)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: slidetounlock 3s infinite;
  -webkit-text-size-adjust: none;
}

._nc .stage1 .track div,
._nc .stage1 .label {
  line-height: 52px;
  height: 52px;
  text-align: center;
  font-size: 16px;
}

._nc .stage1 .track {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
}
._nc .stage1 .track div,
._nc .stage1 .label {
  line-height: 52px;
  height: 52px;
  text-align: center;
  font-size: 16px;
}

._nc .stage1 .track div {
  color: #fff;
}
._nc .stage1 .bg-green {
  background-color: #78c430;
}
._nc .stage1 .button {
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 52px;
  background-color: #fff;
  cursor: pointer;
}
._nc .stage1 .icon {
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
}

._nc .icon-slide-arrow {
  font-size: 30px;
  color: #dbdbdb;
}
._nc .icon {
  width: 30px;
  height: 30px;
}
.am-ft-gray {
  color: #6c6c6c;
}

.am-ft-sm {
  font-size: 14px;
}
.am-ft-center {
  text-align: center;
}
a {
  color: #f40;
  text-decoration: none;
}
.am-ft-gray {
  color: #6c6c6c;
}
.am-ft-sm {
  font-size: 14px;
}

.am-ft-center {
  text-align: center;
}
.icon-youjiantou {
  text-align: center;
  line-height: 30px;
}
#loginbtn {
  position: absolute;
  display: inline-block;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 20px;
  border: 1px #000 solid;
  right: 5px;
  top: 6px;
  color: #d3d3d2;
  background: #292b38;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
</style>
