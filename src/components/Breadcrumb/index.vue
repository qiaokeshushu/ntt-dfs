<template>
  <el-breadcrumb class="app-breadcrumb" separator=">">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        <span v-if="item.redirect" class="first">
          {{ item.meta.title }}
        </span>
        <span v-else class="two">
          {{ item.meta.title }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
const route = useRoute();
const levelList = ref([]);
function getBreadcrumb() {
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  let hash = {};
  levelList.value = matched.reduce((preVal, curVal) => {
    if (!hash[curVal["path"]]) {
      hash[curVal["path"]] = true;
      preVal.push(curVal);
    }
    return preVal;
  }, []);
}

watch(route, () => {
  getBreadcrumb();
});
onMounted(() => {
  getBreadcrumb();
});
</script>
<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 46px;
  width: 100%;
  background: #eee;

  .first {
    color: #8d9199;
    margin-left: 20px;
  }
  .two {
    color: #292c33;
  }
}
</style>
