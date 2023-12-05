<template>
  <div class="topTitle" :style="{color: color}">
    <div class="text1">
      {{text1}}
    </div>
    <div class="text2">
      {{text2}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'leftTitle',
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
      color: {
        type: String
      }
    }

  }
</script>
<style lang='scss' scoped>
.topTitle {
  width: 853px;
  .text1 {
    //color: rgba(43,46,51,1);
    font-size: 20px;
    font-weight: 500;
    font-family: "PingFang SC";
    text-align: left;
  }
  .text2 {
    margin-top: 3px;
    //color: rgba(43,46,51,1);
    font-size: 13.33px;
    font-weight: 400;
    font-family: "Inter";
    text-align: left;
  }
}
</style>
