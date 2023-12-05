<template>
  <div class="detail">detail</div>
</template>
<script>
import bgc from "@/imgs/bg_news1.png";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    // const store = computed(() => store);
    store.commit("changeBgc", bgc);
    store.commit("isNavTransparent", true);
  },
  name: "detail",
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
.detail {
  margin: 0 auto;
  margin-top: 220px;
  width: 800px;
}
</style>
