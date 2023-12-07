<template>
  <div class="container">
    <top />
    <navbar />
    <Breadcrumb />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import navbar from "./nav.vue";
import top from "./top.vue";
import Breadcrumb from "@/components/Breadcrumb/index.vue";
const routerName = useRouter().currentRoute.value.name;
onMounted(() => {});
</script>

<style lang="scss" scoped>
.container {
  min-width: 1280px;
  padding: 0 20px;
}
</style>
