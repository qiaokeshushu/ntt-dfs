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
            {{ route.meta.title }}
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
      background: #ce2c75;
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
        background-color: unset !important;
      }
      .el-sub-menu {
        height: 100%;
      }
      .el-sub-menu__title {
        color: #fff !important;
        font-weight: bold;
        padding: 0 10px !important;
        margin-left: 30px;
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
  }
}
.el-popper {
  .el-menu-item:hover {
    background-color: rgba(206, 44, 117, 0.5) !important;
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #ce2c75 !important;
  }
}
</style>
