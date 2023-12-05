<template >
  <div class="footer" :class="{white:type}">
    <div class="bottom">
      <div>© InnoSpace+ 2016 All Right Reserved</div>
      <div>网站备案号沪ICP备31011002001271号</div>
    </div>
  </div>
</template>
<script setup>
const { type } = defineProps(['type'])
</script>
<style scope lang="scss">
.footer{
  width:100%;
  height: 86px;
  display: flex;
  justify-content: center;
  background: #2B2E33;
  color:#5A5E66;
  border-top:1px solid #5A5E66;
  &.white{
    background: #fff;
    color:#2B2E33;
  }
  .bottom{
    width:1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size:14px;
    
  }

}
</style>