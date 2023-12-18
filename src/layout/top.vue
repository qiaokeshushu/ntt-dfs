<template>
  <div class="logo">
    <div class="logo_icon">
      <img src="@/assets/images/logo_icon.png" alt="" />
    </div>
    <div class="welcome">
      Welcome： <span class="name">{{ name }}</span>
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
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo_icon {
    width: 133px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .welcome {
    color: #292c33;
    font-size: 14px;
  }
}
</style>
