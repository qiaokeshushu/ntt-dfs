<template>
  <div class="logo">
    <div>ORGANON</div>
    <div class="welcome">
      当前用户： <span class="name">{{ name }}</span>
    </div>
  </div>
</template>

<script setup>
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
const { name } = userStore.userInfo;
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .welcome {
    color: #666;
    .name {
      color: #333;
      font-weight: bold;
    }
  }
}
</style>
