<template>
<div id="app">
  <router-view/>
  <FooterGuide v-show="$route.meta.Showfooter"/>
</div>
</template>

<script>
  import FooterGuide from './conpoments/FooterGuide/FooterGuide.vue'
  export default {
    name: 'App',
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
