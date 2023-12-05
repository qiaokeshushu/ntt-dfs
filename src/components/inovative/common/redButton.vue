<template>
    <div class="btn" >
      <span class="text">
         <slot></slot>
      </span>
    </div>
</template>
<script>
  export default {
    name: 'redButton',
    data(){
      return {

      }
    }
}
</script>
<style lang='scss' scoped>
.btn {
  width: 160px;
  height: 42.67px;
  border-radius: 66.67px;
  opacity: 1;
  border: 0.67px solid rgba(90,94,102,1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .text {
    height: 16px;
    opacity: 1;
    color: rgba(245,58,44,1);
    font-size: 10.67px;
    font-weight: 700;
    font-family: "Inter";
    text-align: left;
    line-height: 16px;
  }
}
.btn:hover {
  border: 1px solid rgba(245,58,44,1);
}
</style>
