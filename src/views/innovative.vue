<template>
  <div>innovative</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.commit("changeBgc", '');
    store.commit("isNavTransparent", false);
  },
  name:'innovative',
  created(){
    console.log('innovative');
  },
}
</script>

<style>

</style>