<template>
  <div class="nav" 
    :style="{boder:opacity===0?'':'1px solid rgba(235,235,235,1)',
      backgroundColor:opacity===0?'transparent':'#fff',
      opacity:opacity || 1,
      
      }" >
    <img :src="opacity>0 || !isNavTransparent? logo2 : logo1" alt="" class="logo" />
    <div class="menu">
      <span
        :class="['menu-item', { active: currentPath.includes('/home') }]"
        :style="{
          color: opacity === 0 && isNavTransparent ? '#fff' : '#25282E',
        }"
        @click="changeRouter('/home')"
        >首页</span
      >
      <span :class="['menu-item' ,{'active':currentPath.includes('/innovative')}]" @mousemove="hover(1)" @mouseleave="leave">
          <span
            class="el-dropdown-link"
            :style="{
              color: opacity === 0 && isNavTransparent ? '#fff' : '#25282E',
            }"
          >
            <span>创新服务</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
            <ul :class="{activeMenu:index ===1}" >
              <li v-for="(item,i) in innovativeData" 
                  :key="i" 
                  @click="changeRouter(item.path)"
                  :class="{activeItem:currentPath ===item.path}">{{item.name}}</li>
            </ul>
          </span>
      </span>
      <span :class="['menu-item',{'active':currentPath.includes('/nationalLayout')}]" @mousemove="hover(2)" @mouseleave="leave">
        <span
          class="el-dropdown-link"
          :style="{ color: opacity===0 && isNavTransparent? '#fff' : '#25282E' }"
          >
            <span>全国布局</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
            <ul :class="{activeMenuGlb:index ===2}" >
             <li v-for="(item,i) in layoutData" 
                  :key="i" 
                  @click="changeRouter(item.path)"
                  :class="{activeItem:currentPath ===item.path}">
                {{item.name}}
              </li>
          </ul>
        </span>
      </span>
      <span
        :class="['menu-item', { active: currentPath.includes('/news') }]"
        :style="{
          color: opacity === 0 && isNavTransparent ? '#fff' : '#25282E',
        }"
        @click="changeRouter('/news')"
        >新闻动态</span
      >
      <!-- <span
        :class="['menu-item',{'active':currentPath.includes('/requirement')}]"
        :style="{ color: opacity===0 && isNavTransparent? '#fff' : '#25282E' }"
        @click="changeRouter('/requirement')"
        >创新需求</span
      > -->
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, reactive, watch } from 'vue'
import {useStore} from 'vuex'
import { useRoute,useRouter } from "vue-router";
import logo1 from '@/imgs/logo.png';
import logo2 from '@/imgs/logo1.png';
const route = useRoute();
const router = useRouter()
const store = useStore()
const index = ref(null)
const isNavTransparent = computed(() => store.state.isNavTransparent);
const currentPath = ref('/home')
const { opacity } = defineProps(['opacity'])
const innovativeData = reactive([
  {
    path: "/innovative/IndustrialInnovation",
    name:'产业创新'
  },
  {
    path: "/innovative/InnovationAcceleration",
    name:'创业加速'
  },
  {
    path: "/innovative/InnovationThinkTank",
    name:'创新智库'
  },
  {
    path: "/innovative/InnovationEcology",
    name:'创新生态'
  }
])
const layoutData = reactive([
  {
    path: "/nationalLayout/shanghai",
    name:'上海'
  },
  {
    path: "/nationalLayout/gba",
    name:'GBA'
  },
  {
    path: "/nationalLayout/nanjing",
    name:'南京'
  }
])
const changeRouter = (path) => {
  index.value = null
  currentPath.value = path
  if (path !== '/home') {
    store.commit("isNavTransparent", true);
  }
  router.push({ path: path });
}

const hover = (i) => {
  index.value = i
}
const leave = () => {
  index.value = null
}
onMounted(() => {
  currentPath.value = route.path;
});
watch(
  () => route.path,
  () => {currentPath.value = route.path}
);
</script>
<style lang='scss' scoped>
.nav {
  height: 100px;
  width: 100%;
  line-height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.1);
  justify-content: center;
  z-index:10;
  .logo {
    position: absolute;
    top: 36px;
    left: 60px;
    width: 176px;
    height: 28px;
  }
  .menu {
    display: flex;
    column-gap: 34px;
    .menu-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      .el-dropdown-link {
        display: flex;
        position: relative;
        width: 85px;
        .el-icon--right{
          position: absolute;
          right:0px;
          top:42px;
        }
        ul{
          position: absolute;
          line-height: 35px;
          font-size:14px;
          width:100px;
          height: 0px;
          top:70px;
          left:-10px;
          text-align: center;
          background: #fff;
          z-index:100;
          color:#2B2E33;
          border-radius: 4px;
          transition: all 0.3s;
          overflow: hidden;
          &.activeMenu{
            height: 140px;
            border:1px solid rgba(235,235,235,1);
          }
          &.activeMenuGlb{
            height: 105px;
            border:1px solid rgba(235,235,235,1);
          }
          li{
            height: 35px;
            font-weight: 400;
            &.activeItem{
              color:#f53a2c;
            }
          }
        }
      }
    }
    .active {
      color: #f53a2c !important;
      .el-dropdown-link {
        color: #f53a2c !important;
        font-weight: 700;
      }
    }
  }
}
</style>
