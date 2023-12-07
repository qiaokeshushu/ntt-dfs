<template>
  <div class="nav">
    <div class="menu">
      <el-menu
        mode="horizontal"
        :default-active="activeIndex"
        active-text-color="#ffd04b"
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
            <el-menu-item
              v-for="(child, idx) in route.children"
              :key="i"
              :index="`${route.path}/${child.path}`"
            >
              {{ child.meta.title }}
            </el-menu-item>
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
      background: rgb(226, 0, 118);
      display: flex;
      align-items: center;
      .el-menu-item {
        color: #fff;
      }
      .el-menu-item:hover {
        background-color: rgba(226, 0, 118, 0.3) !important;
      }
      .el-menu-item.is-active {
        background-color: rgba(226, 0, 118, 0.3) !important;
      }
      .el-sub-menu {
        height: 100%;
      }
      .el-sub-menu__title {
        color: #fff;
      }
      .el-sub-menu__title:hover {
        background-color: rgba(226, 0, 118, 0.5) !important;
      }
      .el-sub-menu:hover {
        background-color: rgba(226, 0, 118, 0.5) !important;
      }
    }
  }
}
</style>
