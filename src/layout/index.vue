<template>
  <div
    class="container"
    :style="{
      backgroundImage: `url(${bgc})`,
      backgroundSize: `100% ${bgcSizeY}`,
    }"
  >
    <navbar :opacity="opacity" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref, onUnmounted } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
import bgc1 from "@/imgs/bg_home_1.png";
import navbar from "./nav.vue";
const opacity = ref(0);
const store = useStore();
const bgc = computed(() => store.state.bgc);
const routerName = useRouter().currentRoute.value.name;
let bgcSizeY = computed(() => (routerName === "detail" ? "320px" : "100%"));
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
const handleScroll = () => {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  if (scrollTop === 0) {
    opacity.value = 0;
  } else {
    opacity.value = scrollTop / 100 > 1 ? 1 : scrollTop / 100;
  }
};
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang='scss' scoped>
.container {
  min-width: 1280px;
  height: 100vh;
  padding-top: 100px;
  background-repeat: no-repeat;
}
</style>
