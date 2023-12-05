<template>
  <div>requirement</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.commit("changeBgc", '');
    store.commit("isNavTransparent", false);
  },
  name:'requirement',
  created(){
    console.log('requirement');
  },
}
</script>

<style>

</style>