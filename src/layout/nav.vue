<template>
  <div class="nav">
    <div class="menu">
      <span
        :class="['menu-item', { active: currentPath.includes('/home') }]"
        :style="{
          color: opacity === 0 && isNavTransparent ? '#fff' : '#25282E',
        }"
        @click="changeRouter('/home')"
        >首页</span
      >
      <span
        :class="['menu-item', { active: currentPath.includes('/innovative') }]"
        @mousemove="hover(1)"
        @mouseleave="leave"
      >
        <span class="el-dropdown-link">
          <span>数据上传</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
          <ul :class="{ activeMenu: index === 1 }">
            <li
              v-for="(item, i) in innovativeData"
              :key="i"
              @click="changeRouter(item.path)"
              :class="{ activeItem: currentPath === item.path }"
            >
              {{ item.name }}
            </li>
          </ul>
        </span>
      </span>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import logo1 from "@/imgs/logo.png";
import logo2 from "@/imgs/logo1.png";
const route = useRoute();
const router = useRouter();
const store = useStore();
const index = ref(null);
const isNavTransparent = computed(() => store.state.isNavTransparent);
const currentPath = ref("/home");
const { opacity } = defineProps(["opacity"]);
const innovativeData = reactive([
  {
    path: "/innovative/IndustrialInnovation",
    name: "产业创新",
  },
  {
    path: "/innovative/InnovationAcceleration",
    name: "创业加速",
  },
  {
    path: "/innovative/InnovationThinkTank",
    name: "创新智库",
  },
  {
    path: "/innovative/InnovationEcology",
    name: "创新生态",
  },
]);
const layoutData = reactive([
  {
    path: "/nationalLayout/shanghai",
    name: "上海",
  },
  {
    path: "/nationalLayout/gba",
    name: "GBA",
  },
  {
    path: "/nationalLayout/nanjing",
    name: "南京",
  },
]);
const changeRouter = (path) => {
  index.value = null;
  currentPath.value = path;
  if (path !== "/home") {
    store.commit("isNavTransparent", true);
  }
  router.push({ path: path });
};

const hover = (i) => {
  index.value = i;
};
const leave = () => {
  index.value = null;
};
onMounted(() => {
  currentPath.value = route.path;
});
watch(
  () => route.path,
  () => {
    currentPath.value = route.path;
  }
);
</script>
<style lang="scss" scoped>
.nav {
  height: 60px;
  width: 100%;
  background: rgb(226, 0, 118);
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
        color: #fff;
        .el-icon--right {
          position: absolute;
          right: 0px;
          // top: 42px;
        }
        ul {
          position: absolute;
          line-height: 35px;
          font-size: 14px;
          width: 100px;
          height: 0px;
          top: 70px;
          left: -10px;
          text-align: center;
          background: #fff;
          z-index: 100;
          color: #2b2e33;
          border-radius: 4px;
          transition: all 0.3s;
          overflow: hidden;
          &.activeMenu {
            height: 140px;
            border: 1px solid rgba(235, 235, 235, 1);
          }
          &.activeMenuGlb {
            height: 105px;
            border: 1px solid rgba(235, 235, 235, 1);
          }
          li {
            height: 35px;
            font-weight: 400;
            &.activeItem {
              color: #f53a2c;
            }
          }
        }
      }
    }
    .active {
      color: #f5f5f5 !important;
      .el-dropdown-link {
        color: #f5f5f5 !important;
        font-weight: 700;
      }
    }
  }
}
</style>
