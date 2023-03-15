<template>
<div class="App">
  <Header/>
<router-view/>
<Footer v-if="!is_Checked"/>
</div>
</template>

<script>

import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
export default {
  name:'APP',
  components:{Header,Footer},
data(){
  return{
    is_Checked:false
  }
},
created(){
  switch(document.location.pathname){
    case '/Login':
      this.is_Checked = true;
      break
    default:
      this.is_Checked = false;
  }
}
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
