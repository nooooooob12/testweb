<template>
    <div class="header">
        <article id="header">
            <v-app>
                <v-card>
                    <v-toolbar density="compact" color="primary">
                    <v-app-bar-nav-icon color="white" @click="ToggleMenu">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </v-app-bar-nav-icon>
                    <v-toolbar-tilte>HeaderName</v-toolbar-tilte>
                    <v-spacer></v-spacer>
                        <div class="search_box">
                        <input type="search" placeholder="검색" id="search">
                    </div>
                    <v-btn id="search_btn">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </v-btn>
                    <v-spacer>
                    </v-spacer>
                    <v-btn icon color="white">
                        <span class="material-symbols-outlined">
                            login
                        </span>
                    </v-btn>
                    <v-btn icon color="white">
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                    </v-btn>
                     </v-toolbar>
                </v-card>
                <Sidebar v-if="is_expanded"/>
            </v-app>
        </article>
    </div>
</template>
<script>
import {ref,reactive} from 'vue';
import Sidebar from './Sidebar.vue'
export default {
    name:"Header",
    components:{Sidebar},
    data:()=>{
        return{
            L_bar:"https://cdn.iconscout.com/icon/free/png-256/bars-collection-view-application-grid-menu-44415.png",
            is_expanded:true
        }
    },
    methods:{
         ToggleMenu(){
          this.is_expanded = !this.is_expanded
          console.log('클릭')
        }
    },
    setup(){
        
    }
}
</script>
<style lang="scss" scoped>
$border-size:1rem;
    .header{
        width: 100%;
        height: 3.5rem;
        margin-bottom: 0.5rem;
        .search_box,#search{
            width: 5.5rem 5em;
            height: 1.5rem; 
            background-color: white;
            border: 1px soild black;
            border-top-left-radius: $border-size;
            border-bottom-left-radius: $border-size;
            text-align: center;
        }
        #search_btn{
            width: 5.5rem 5em;
            height: 1.5rem;
            border: 1px solid darkgrey;
            border-top-right-radius: $border-size;
            border-bottom-right-radius: $border-size;
            background-color: rgba(169,169,169,0.7);

        }
    }
    .material-symbols-outlined {
        position: absolute;
        font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48,}

</style>