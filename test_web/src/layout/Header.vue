<template>
    <header class="nav-header">
        <div class="nav-logo">
                <span class="material-symbols-outlined">
                    filter_vintage
            </span>
                <v-banner-text>App</v-banner-text>
        </div>
        <nav class="nav-Menubar">
            <div class="menu-items"><router-link to="#">Home</router-link></div>
            <div class="menu-items"><router-link to="#">About</router-link></div>
            <Dropdown title="Services" :items="Services"></Dropdown>    
            <div class="menu-items"><router-link to="#">Content</router-link></div>
        </nav>
    </header>
</template>
<script>
import Dropdown from '@/layout/Dropdown.vue'
export default {
    name:"Header",
    components:{Dropdown},
    data(){
        return{
            Services:[
                {
                    title:'web',
                    link:'#'
                },
                {
                    title:'ds',
                    link:'#'
                },
                {
                    title:'hs',
                    link:'#'
                },
            ]
        }
    },
    
}
</script>
<style lang="scss">
.nav-header{
    background: #232323;
    color: #eee;
    padding: 0.375rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 /0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-logo,v-banner-text{
        display: flex; justify-content:center; font-size: x-large; margin: -1px; cursor: pointer; align-items: center;
    }
}
.nav-Menubar{display: flex; align-items: center; justify-content: center;
.menu-items{ color: #fff; padding:10px 20px; position: relative;  text-align: center;
border-bottom: 3px solid transparent; display: flex; transition: 0.4s;
>a{color: inherit; text-decoration: none;}
&active, &:hover{
    background-color: #444;
    border-bottom-color: #ff58;
}
}
}
</style>