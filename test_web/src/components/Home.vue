<template>
    <div class="Home">
        <main>
            <Header/>
                <div class="Story">
                    <h2>본문</h2>
                </div>
            <Footer/>
        </main>
    </div>
</template>
<script lnag="ts">
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
export default {
    name:"Home",
    components:{Header,Footer},
    data(){

    },
    methods:{
        
    },
     
}
</script>
<style lang="scss">
    .Home{width: 100%;}
    .Story{width: 80%;}
</style>