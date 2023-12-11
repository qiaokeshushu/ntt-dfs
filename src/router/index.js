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
        component: () => import('@/views/dataUpload/index.vue'),
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
        component: () => import('@/views/dataConfirm/index.vue'),
      },
      {
        name: 'ftpFile',
        path: 'ftpFile',
        meta: {
          title: 'FTP 文件确认'
        },
        component: () => import('@/views/dataConfirm/ftpFile/index.vue'),
      },
      {
        name: 'refresh',
        path: 'refresh',
        meta: {
          title: '数据刷新'
        },
        component: () => import('@/views/home.vue'),
      },
       {
        name: 'shareFolderUpload',
        path: 'shareFolderUpload',
        meta: {
          title: 'ShareFolder 数据上传'
        },
        component: () => import('@/views/home.vue'),
      },
       {
        name: 'shareFolderRelease',
        path: 'shareFolderRelease',
        meta: {
          title: 'ShareFolder 发布'
        },
        component: () => import('@/views/home.vue'),
      },
    ]
  },
  {
    name: 'historyData',
    path: '/historyData',
    redirect:'/historyData/dfs',
    meta: {
      title: '历史数据'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'dfs',
        path: 'dfs',
        meta: {
          title: 'DFS 历史数据'
        },
        component: () => import('@/views/historyData/dfs/index.vue'),
      },
      {
        name: 'ftp',
        path: 'ftp',
        meta: {
          title: 'FTP 历史数据'
        },
        component: () => import('@/views/historyData/ftp/index.vue'),
      }
    ]
  },
  {
    name: 'dataSource',
    path: '/dataSource',
    redirect:'/dataSource/dataSourceMaintenance',
    meta: {
      title: '数据源管理'
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        name: 'dataSourceMaintenance',
        path: 'dataSourceMaintenance',
        meta: {
          title: '数据源维护'
        },
        component: () => import('@/views/dataSource/dataSourceMaintenance/index.vue'),
      },
      {
        name: 'dataSoucePremission',
        path: 'dataSoucePremission',
        meta: {
          title: '数据源权限'
        },
        component: () => import('@/views/dataSource/dataSoucePremission/index.vue'),
      }
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
