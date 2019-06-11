<template>
  <div id="app" class="sc-htoDjs gsXFBA">

      <router-view/>
  </div>
</template>

<script>
export default {
}

</script>


<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-tap-highlight-color: transparent;
}
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
#app {
    padding-bottom: 43px;
    height: 100%;
    display: flex;
    justify-content: center;
}
.gsXFBA {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
