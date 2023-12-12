import router from './router'
import {ElMessage} from 'element-plus'
import { getToken } from '@/utils/storage'
router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
      ElMessage.error('请先登录')
    }
  } else {
    document.title = to.meta.title;
    next()
  } 
})
