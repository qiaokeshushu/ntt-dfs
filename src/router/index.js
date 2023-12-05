import {createRouter, createWebHashHistory} from "vue-router"

// import storage from "../utils/storage.js"
// import API from "../api/index.js"
// import utils from "../utils/utils"

const routes = [
  {
    name: 'layout',
    path: '/',
    redirect: '/home',
    // 元信息，方便修改标题等操作。也可以用来做权限
    meta: {
      title: '首页'
    },
    component: () => import('../layout/index.vue'),
    children: [
      {
        name: 'home',
        path: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home.vue'),
      },
      {
        name: 'innovative',
        path: 'innovative',
        meta: {
          title: '创新服务'
        },
        children: [
          {
            name: 'IndustrialInnovation',
            path: '/innovative/IndustrialInnovation',
            meta: {
              title: '产业创新'
            },
            component: () => import('@/views/inovative/IndustrialInnovation.vue'),
          },
          {
            name: 'InnovationAcceleration',
            path: '/innovative/InnovationAcceleration',
            meta: {
              title: '创新加速'
            },
            component: () => import('@/views/inovative/InnovationAcceleration.vue'),
          },
          {
            name: 'InnovationThinkTank',
            path: '/innovative/InnovationThinkTank',
            meta: {
              title: '创新智库'
            },
            component: () => import('@/views/inovative/InnovationThinkTank.vue'),
          },
          {
            name: 'InnovationEcology',
            path: '/innovative/innovationEcology',
            meta: {
              title: '创新生态'
            },
            component: () => import('@/views/inovative/InnovationEcology.vue'),
          }
        ]
      },
      {
        name: 'nationalLayout',
        path: '/nationalLayout',
        meta: {
          title: '全国布局'
        },
        children: [
          {
            name: 'shanghai',
            path: 'shanghai',
            meta: {
              title: '上海'
            },
            component: () => import('@/views/nationalLayout/shanghai.vue'),
          },
          {
            name: 'gba',
            path: 'gba',
            meta: {
              title: 'gba'
            },
            component: () => import('@/views/nationalLayout/gba.vue'),
          },
          {
            name: 'nanjing',
            path: 'nanjing',
            meta: {
              title: '南京'
            },
            component: () => import('@/views/nationalLayout/nanjing.vue'),
          },
        ]
      },
      {
        name: 'news',
        path: 'news',
        meta: {
          title: '新闻动态'
        },
        component: () => import('@/views/news.vue'),
      },
      {
        name: 'detail',
        path: 'newsDetail',
        meta: {
          title: '新闻详情'
        },
        component: () => import('@/views/news/detail.vue'),
      },
      {
        name: 'requirement',
        path: 'requirement',
        meta: {
          title: '创新需求'
        },
        component: () => import('@/views/requirement.vue'),
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
