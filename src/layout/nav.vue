<template>
  <div class="nav">
    <div class="menu">
      <el-menu
        mode="horizontal"
        :default-active="activeIndex"
        active-text-color="#fff"
        router
      >
        <template v-for="(route, i) in routes" :key="i">
          <el-menu-item
            v-if="route.children && route.children.length === 1"
            :index="route.path"
          >
            <div v-if="route.path === '/home'" class="home_icon">
              <img src="@/assets/images/home_icon.png" alt="" />
            </div>
            <div v-else>{{ route.meta.title }}</div>
          </el-menu-item>
          <el-sub-menu
            v-else-if="route.children && route.children.length > 1"
            :index="route.path"
            :teleported="false"
          >
            <template #title>
              {{ route.meta.title }}
            </template>
            <template v-for="(child, idx) in route.children" :key="i">
              <el-menu-item
                :index="`${route.path}/${child.path}`"
                v-if="!!!child.meta.hidden"
              >
                {{ child.meta.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>
<script setup>
const activeIndex = ref("");
const route = useRoute();
const router = useRouter();
const routes = computed(() => router.options.routes);
watch(route, () => {
  activeIndex.value = route.path;
});

onMounted(() => {
  activeIndex.value = route.path;
});
</script>
<style lang="scss" scoped>
.nav {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .menu {
    width: 100%;
    height: 100%;
    :deep(.el-menu) {
      height: 100%;
      background: linear-gradient(
        180deg,
        #e20076cc 0%,
        #e51a84 47.4%,
        #b0065f 100%
      );
      display: flex;
      align-items: center;
      .el-menu-item {
        color: #fff !important;
        font-weight: bold;
      }
      .el-menu-item:hover {
        background-color: unset !important;
      }
      .el-menu-item.is-active {
        background-color: #feeced36 !important;
        border: none !important;
      }

      .el-sub-menu {
        height: 100%;
      }
      .el-sub-menu__title {
        color: #fff !important;
        font-weight: bold;
        padding: 0 6px !important;
        margin-left: 18px;
      }
      .el-sub-menu__title:hover {
        background-color: unset !important;
      }
      .el-sub-menu:hover {
        background-color: unset !important;
      }

      .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
      .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
        background-color: unset !important;
        color: #fff;
      }
    }
    :deep(.el-menu--horizontal) {
      .el-menu-item {
        border: none !important;
      }
      .el-sub-menu.is-active .el-sub-menu__title {
        border: none !important;
        background-color: #feeced36 !important;
      }
      .el-sub-menu .el-sub-menu__title {
        border: none !important;
      }
    }

    .home_icon {
      width: 20px;
      height: 20px;
      display: flex;
    }
  }
}
.el-popper {
  .el-menu-item:hover {
    background-color: rgba(206, 44, 117, 0.5) !important;
    color: #fff;
  }
  .el-menu-item.is-active {
    background: linear-gradient(
      180deg,
      #e20076cc 0%,
      #e51a84 47.4%,
      #b0065f 100%
    );
  }
}
</style>
