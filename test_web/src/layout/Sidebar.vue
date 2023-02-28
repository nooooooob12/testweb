<template lang>
    <div class="Side_Menu">
        <!--1.Home-->
        <v-btn class="m-home">
        <router-link class="m-btn" to='/'>
                <span class="material-symbols-outlined">Home</span>
                <span class="m-text">Home</span>
            </router-link>
        </v-btn>
        <!--2.Profile-->
        <v-btn class="m-Profile">
        <router-link class="m-btn" to='/'>
                <span class="material-symbols-outlined">Person</span>
                <span class="m-text">Profile</span>
            </router-link>
        </v-btn>
        <!--3.Subscribe-->
        <v-btn class="m-Subscribe">
        <router-link class="m-btn" to='/'>
                <span class="material-symbols-outlined">notifications_active</span>
                <span class="m-text">Subscribe</span>
            </router-link>
        </v-btn>
        <!--4.Help-->
        <v-btn class="m-Help">
        <router-link class="m-btn" to='/'>
                <span class="material-symbols-outlined">Help_Center</span>
                <span class="m-text">Help</span>
            </router-link>
        </v-btn>
        <div class="m-status">
        <router-link class="m-btn" to='#'>
                <span class="material-symbols-outlined">Account_Circle</span>
                <span class="m-text">{{ID}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    data(){
        return{
            is_expanded:true
        }
    },
    methods:{  
    },
    setup() {
        {
      const store = useStore()
      const User = computed(()=>store.state.User)
      return {User}
    }
    }
}
</script>
<style lang="scss" scoped>
$left:left;
.Side_Menu{
    width: 17.5rem;
    height: 100%;
    padding: 0.5em 1.0em 0.5em 1.0em;
    display: flex;
    flex-direction: column;
    background-color:#E2E2E2;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    span{
    vertical-align: middle;
    text-align: left;
    margin: 0px; padding: 0px;
    .m-text{margin-left: 0.5em;}
    }
    .m-home{
        justify-content: $left;
        margin-top: 32px;
        margin-bottom: 30px;
    }
    .m-Profile{
        justify-content: $left;
        margin-bottom: 30px;
    }
    .m-Subscribe{
        justify-content: $left;
        margin-bottom: 30px;
    }
    .m-Help{
        justify-content: $left;
        margin-bottom: 30px;
    }
    .m-status{
       position:relative;
       top:42%;
    }
    .material-symbols-outlined {
        font-variation-settings:
        'FILL' 0,
        'wght' 200,
        'GRAD' 0,
        'opsz' 40,}
}
    
</style>