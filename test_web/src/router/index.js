import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/', 
            component: Header
        },
        ]
})

export default router;