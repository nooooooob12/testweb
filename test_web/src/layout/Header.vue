<template>
    <nav class="nav-bar">
        <div class="nav-logo">
            <router-link to="/">
                <font-awesome-icon icon="fa-frog" />
            </router-link>
            <router-link to="/"><span class="nav-name">Coding</span></router-link>
        </div>
        <ul :class="{'nav-menu':this.width>=768 || is_Active,
                    'active-menu':this.width<768 || !is_Active}">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="">Gallery</router-link>
            </li>
            <li>
                <router-link to="">Contents</router-link>
            </li>
            <li>
                <router-link to="">Production</router-link>
            </li>
            <li>
                <router-link to="">FQA</router-link>
            </li>
        </ul>

        <ul :class="{'nav-icons':this.width>=768 || is_Active,
                    'active-icons':this.width<768 || !is_Active} ">
            <li><router-link to="Login"><font-awesome-icon icon="fa-solid fa-user-plus" /></router-link></li>
            <li><router-link to="insta"><font-awesome-icon :icon="['fab','instagram']" /></router-link></li>
        </ul>
        <span class="togglebtn" @click="OpneMenu"><font-awesome-icon icon="bars" /></span>
    </nav>
</template>
<script>
import {ref} from 'vue';
export default {
    name:"Header",
    data(){
        return{
           width:0,
           is_Active:false
        }
    },
    mounted(){
        window.addEventListener('resize',this.handlerResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize',this.handlerResize)
    },
    methods:{
        handlerResize(e){
            this.width = window.innerWidth;
        },
    },
    setup(){
        const is_Active = ref(false)
        const OpneMenu = () =>{
            is_Active.value = !is_Active.value;
        }
        return{is_Active,OpneMenu}
    }
}   
</script>
<style lang="scss" scoped>
$paddings:8 24px;
//FullScreen 공통 태그 css설정
a,li{text-decoration: none; color: whitesmoke; list-style: none;}

//FullScreen Header영역 css 설정(scss)
.nav-bar{display: flex; justify-content: space-between; align-items: center; 
    background-color: #263343; padding: 8px 24px; width: 100%; min-height: 33px;
.nav-logo,.nav-name{font-size:24px;}
.nav-menu{display: flex; align-items: center; padding-left: 0px;}
li{padding: 8px 12px;}
.nav-icons{display: flex;}
}
.togglebtn{display:none;color: whitesmoke; font-size: 24px; position: absolute; right: 32px;}

@media screen and (max-width:768px){
    .nav-bar{flex-direction: column; align-items: flex-start; padding: 8px 24px;}
    .nav-menu{display:none;flex-direction: column; align-items: center; width: 100%;}
    .nav-menu li {display:none;width: 100%; text-align: center;}
    .nav-icons li {display:none; justify-content: center; width: 100%;}
    .togglebtn{display:block;}
    .active-menu{display: flex; flex-direction: column; align-items: center; width: 100%;}
    .active-icons{display:flex; justify-content: center; width: 100%;}
}
</style>