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

//fontAwesome 불러오기
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// library.add(faUserSecret) -- 에러로 인해 사용 x

const vuetify = createVuetify ({
    components,
    directives,
})
createApp(App).use(Vue3Material).use(vuetify).use(store).use(router).mount('#app')
