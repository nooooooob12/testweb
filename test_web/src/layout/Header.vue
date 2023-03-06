<template>
    <header class="nav-header">
        <div class="nav-logo">
            <span class="material-symbols-outlined">
                filter_vintage
            </span>
            <v-banner-text>App</v-banner-text>
        </div>
        <article class="nav-bars">
            <div class="nav-phonMenu" v-if="this.width<=768" >
                <span class="material-symbols-outlined">menu</span>
        </div>
            <nav class="nav-Menubar" v-else-if="this.width>768">
            <div class="menu-items"><router-link to="#">Home</router-link></div>
            <div class="menu-items"><router-link to="#">About</router-link></div> 
            <div class="menu-items"><router-link to="#">Content</router-link></div>
            <div class="menu-items"><router-link to="#">FQA</router-link></div>
        </nav>
        <ul class="nav-icons">
            <li class="menu-icons"><span class="material-symbols-outlined">Login</span></li>
            <li class="menu-icons"><span class="material-symbols-outlined">notification_important</span></li>

        </ul>
    </article>
    </header>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{
           width:0,
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
        }
    },
    setup(){
    }
}   
</script>
<style lang="scss">
.nav-header{
    background: #232323; color: #eee; padding: 0.375rem; justify-content: space-between;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 /0.1);
    display: flex; align-items: center; height: auto;
    .nav-logo{display: flex; justify-content:center; font-size: x-large; margin: -1px; cursor: pointer; align-items: center;}

.nav-bars{width: 100%; height: auto; display: flex; 
    .nav-Menubar{display: flex; margin: 0px auto;
        .menu-items{ color: #fff; padding-left: 0px; position: relative;display: flex; border-bottom: 3px solid transparent; transition: 0.4s;
            >a{color: inherit; text-decoration: none; padding: 8px 24px;};
                &active, &:hover{background-color: #444;border-bottom-color: #ff58;}; 
            }; 
        };
    .nav-icons{display:flex; list-style: none; color: #eee;
       .menu-icons{padding-left: 12px; padding-right: 12px; padding-top: 8px;
    &:hover{cursor:pointer;background-color: #444;}} }; 
    }; 
};
@media screen and (max-width:768px) {
    .nav-phonMenu{display: flex; font-size: x-large; text-align: center; justify-content: space-between;}
    .nav-header{
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 10%;
        overflow: hidden;
        .nav-logo{padding:8px 12px}
    };
    .nav-Menubar{
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .nav-Menubar a {
        width: 100%;
        align-items: center;
    }
    .nav-icons{
        justify-content: center;
        width: 100%;
    }
}
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
};
</style>