<template>
  <div class="smallItem">
    <div class="item">
      <div class="text1">{{text1}}</div>
      <div class="text2">{{text2}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'valueItem',
    data(){
      return {

      }
    },
    props: {
      text1: {
        type: String
      },
      text2: {
        type: String
      }
    }

  }
</script>
<style lang='scss' scoped>
.item {
  width: 194px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 53px;
  .text1 {
    height: 45.33px;
    opacity: 1;
    color: rgba(255,255,255,1);
    font-size: 40px;
    font-weight: 700;
    font-family: "Inter";
    text-align: left;
    line-height: 45.33px;
  }
  .text2 {
    margin-top: 12px;
    color: rgba(255,255,255,1);
    font-size: 10.67px;
    font-weight: 400;
    font-family: "Inter";
    text-align: left;
    line-height: 18.67px;
  }
}
</style>
