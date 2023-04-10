import { createApp } from 'vue'
import App from './App.vue'

//Vuex 설치 & import
import store from './store'


// router 경로 미리 불러와 사용 준비
import router from '@/router/router'

// Vuetify 사용
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//material 사용
import Vue3Material from 'vue3-material'

// fontAwesome 불러오기
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faInstagram,faTwitter,faGithub,faGoogle,faFacebook} from "@fortawesome/free-brands-svg-icons";

library.add(fas)
library.add(faInstagram,faTwitter,faGithub,faGoogle,faFacebook)


const vuetify = createVuetify ({
    components,
    directives,
})


//firebase 연동
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM3pNwfF559OIcIBXTusYKkfYS6ARBpHY",
  authDomain: "testweb-ff663.firebaseapp.com",
  projectId: "testweb-ff663",
  storageBucket: "testweb-ff663.appspot.com",
  messagingSenderId: "173318368530",
  appId: "1:173318368530:web:a084321747dcd1ee6997cb",
  measurementId: "G-H0DE75L8X4"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(apps);


//axios 설정
import axios from 'axios';
import VueAxios from 'vue-axios'
// Vue.prototype.$http = axios; = vue2에서 사용된 방식

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
.use(Vue3Material)
.use(vuetify)
.use(store)
.use(router)
.use(VueAxios,axios)
app.config.globalProperties.axios = axios
app.mount('#app')
