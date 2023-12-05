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
    name: 'fundTwoItem',
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
    width: 193.33px;
    height: 24px;
    opacity: 1;
    color: rgba(43,46,51,1);
    font-size: 18.67px;
    font-weight: 700;
    font-family: "Inter";
    text-align: center;
    line-height: 24px;
  }
  .text2 {
    margin-top: 8px;
    width: 193.33px;
    height: 16px;
    opacity: 1;
    color: rgba(153,157,163,1);
    font-size: 10.67px;
    font-weight: 400;
    font-family: "Inter";
    text-align: center;
    line-height: 16px;
  }
}
</style>
