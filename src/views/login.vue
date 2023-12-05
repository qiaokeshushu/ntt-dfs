<template>
  <div>login</div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.commit("changeBgc", '');
  },
    name: 'login',
    created(){
      console.log('login');
    }
}
</script>

<style>

</style>