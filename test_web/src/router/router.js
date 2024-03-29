import { createRouter, createWebHistory } from 'vue-router';
const routes = [
{
    path:'/',
    name:'Home',
    component:()=>import('@/components/Home.vue')
},
{
  path:'/Login',
  name:'Login',
  component:()=>import('@/components/Login.vue')
},
{
  path:'/SignUp',
  name:'SignUp',
  component:()=>import('@/components/SignUp.vue')
}
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;