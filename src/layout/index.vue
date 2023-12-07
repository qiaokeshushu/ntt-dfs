<template>
  <div class="container">
    <top />
    <navbar />
    <Breadcrumb v-if="path !== '/home'" />
    <div class="content" :class="{ home_container: path === '/home' }">
      <router-view></router-view>
    </div>
    <div class="footer">Copyright 2021 ORGANON.All rights reseved</div>
  </div>
</template>

<script setup>
import navbar from "./nav.vue";
import top from "./top.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
const route = useRoute();
const path = ref("");
watch(route, () => {
  path.value = route.path;
});
onMounted(() => {
  path.value = route.path;
});
</script>

<style lang="scss" scoped>
.container {
  min-width: 1280px;
  .content {
    padding: 0 20px;
    min-height: calc(100vh - 182px);
    &.home_container {
      min-height: calc(100vh - 130px);
    }
  }
  .footer {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #999;
  }
}
</style>
