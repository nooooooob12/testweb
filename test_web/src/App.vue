<template>
<div class="App">
<Home></Home>
<router-view/>
</div>
</template>

<script>
import Home from "@/components/Home.vue"
export default {
  name:'APP',
  components:{Home}
}
</script>

<style lang="scss">
@import "@/style/sass/variables.scss";
:root{
html,body{font-family:$body-font-family;
background:var(--light); margin: 0 auto;}
.App{
  width: 100vw;
  height: 100vh;
}
}
</style>
