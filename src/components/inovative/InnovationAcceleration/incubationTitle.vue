<template>
<!--  <div class="topTitle" :style="{color: color}">-->
<!--    <div class="text1">-->
<!--      {{text1}}-->
<!--    </div>-->
<!--    <div class="text2">-->
<!--      {{text2}}-->
<!--    </div>-->
<!--  </div>-->
  <div class="common">
    <div class="title">
      {{text1}}
    </div>
    <div class="line"></div>
    <div class="content">
      {{text2}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'incubationTitle',
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
      },
    }

  }
</script>
<style lang='scss' scoped>
//.topTitle {
//  width: 853px;
//  .text1 {
//    //color: rgba(43,46,51,1);
//    font-size: 20px;
//    font-weight: 500;
//    font-family: "PingFang SC";
//    text-align: common;
//  }
//  .text2 {
//    margin-top: 3px;
//    //color: rgba(43,46,51,1);
//    font-size: 13.33px;
//    font-weight: 400;
//    font-family: "Inter";
//    text-align: common;
//  }
//}
.common {
  .title {
    color: rgba(43,46,51,1);
    font-size: 16px;
    font-weight: 700;
    font-family: "Inter";
    text-align: common;
    line-height: 21.33px;
  }
  .line {
    width: 340px;
    border: 1px solid rgba(235,235,235,1);
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content {
    color: rgba(43,46,51,1);
    font-size: 10.67px;
    font-weight: 400;
    width: 340px;

  }
}
</style>
