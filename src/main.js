import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import './assets/style/index.scss'
import './premission.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
app.use(ElementPlus, {size: 'default'}).use(router).use(store)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
import CommonTable from '@/components/CommonTable/index.vue'
import Pagination from '@/components/Pagination/index.vue'
app.component('CommonTable', CommonTable)
app.component('Pagination', Pagination)
app.mount('#app')
