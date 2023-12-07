<template>
  <div class="container">
    <top />
    <navbar />
    <Breadcrumb v-if="path !== '/home'" />
    <div class="content">
      <router-view></router-view>
    </div>
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
  }
}
</style>
