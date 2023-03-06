<template>
<div class="App">
  <Header/>
<router-view/>
<Footer/>
</div>
</template>

<script>

import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
export default {
  name:'APP',
  components:{Header,Footer},
}
</script>

<style lang="scss">
@import "@/style/sass/variables.scss";
:root{
html,body{font-family:$body-font-family; margin: 0px;}
background:var(--light); margin: 0 auto;}
.App{
  width: 100vw;
  height: 100vh;
}
</style>
