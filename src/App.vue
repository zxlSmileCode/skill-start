<template>
  <div id="app" class="sc-htoDjs gsXFBA">

      <router-view/>
  </div>
</template>

<script>
export default {
    watch:{
        $route:{
            handler(val,oldVal){
                if(val.path == '/more'){
                    this.$el.parentNode.parentNode.style.fontSize = 24+'px';
                    this.$el.parentNode.style.fontSize = 28+'px';
                }else{
                    this.$el.parentNode.parentNode.style.fontSize = 37.5+'px';
                    this.$el.parentNode.style.fontSize = 16+'px';
                    if(val.path == '/about'){
                        this.$el.parentNode.parentNode.style.fontSize = 100+'px';
                    }
                }
            }
        }
    }
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
