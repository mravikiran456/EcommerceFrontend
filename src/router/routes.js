import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'product', component: () => import('../pages/Products') },
      { path: '/product/men', component: () => import('../pages/MenDetailsPage.vue') },
      { path: '/product/women', component: () => import('../pages/WomenDetailsPage.vue') },
      { path: '/cart', component: () => import('../pages/Cart.vue') },
      {path:'/login',component:()=>import('../components/LoginSignUp/Login.vue')},
      {path:'/sign-up',component:()=>import('../components/LoginSignUp/SignUp.vue')}
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

const router =createRouter({
  history:createWebHashHistory(),
  routes,
});

export default routes
