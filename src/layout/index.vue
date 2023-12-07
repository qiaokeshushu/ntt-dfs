<template>
  <div class="container">
    <top />
    <navbar />
    <Breadcrumb />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import navbar from "./nav.vue";
import top from "./top.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
onMounted(() => {});
</script>

<style lang="scss" scoped>
.container {
  min-width: 1280px;
  padding: 0 20px;
}
</style>
