import {createRouter, createWebHashHistory} from "vue-router"

// import storage from "../utils/storage.js"
// import API from "../api/index.js"
// import utils from "../utils/utils"

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    // 元信息，方便修改标题等操作。也可以用来做权限
    meta: {
      title: '首页'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home.vue'),
      }, 
    ]
  },
  {
    name: 'dataUpload',
    path: '/dataUpload',
    meta: {
      title: '数据上传'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'dataUpload',
        path: '/dataUpload',
        meta: {
          title: '数据上传'
        },
        component: () => import('@/views/home.vue'),
      }, 
    ]
  },
  {
    name: 'dataConfirm',
    path: '/dataConfirm',
    redirect:'/dataConfirm/dataConfirm',
    meta: {
      title: '数据确认'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'dataConfirm',
        path: 'dataConfirm',
        meta: {
          title: '数据确认'
        },
        component: () => import('@/views/home.vue'),
      },
      {
        name: 'dataGroupConfirm',
        path: 'dataGroupConfirm',
        meta: {
          title: '数据组确认'
        },
        component: () => import('@/views/home.vue'),
      },
    ]
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/login.vue'),
  },
  {
    name: '404',
    path: '/404',
    meta: {
      title: '页面不存在'
    },
    component: () => import('@/views/404.vue'),
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  
})
router.afterEach((to, from) => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if (scrollTop !== 0) {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    window.pageYOffset =0
    return;
  }
})


export default router;
