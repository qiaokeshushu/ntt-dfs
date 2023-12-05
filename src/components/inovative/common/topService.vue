<template>
  <div>
    <div class="service">
      <div class="text">
        <div class="text1">
          提供全生命周期的
        </div>
        <div class="text2">
          {{text2}}
        </div>
<!--        <div class="text3">-->
<!--          为初创企业提供创业初期所需的孵化及投融资等服务,包括工商注册、政策申报等，帮助企业顺利成⻓-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'topService',
    data(){
      return {

      }
    },
    props: {
      text2: {
        type: String,
        default: '开放式创新服务'
      }
    }
}
</script>
<style lang='scss'>
.service {
  width: 1280px;
  height: 640px;
  //background-image: url("@/imgs/common/moon.jpg");
  //background-size: cover;
  background-color: transparent;
  overflow: hidden;
  .text {
    color: white;
    margin-left: 214px;
    margin-top: 390px;
    .text1 {
      height: 48px;
      opacity: 1;
      color: rgba(255, 255, 255, 1);
      font-size: 42.67px;
      font-weight: 100;
      font-family: "PingFang SC";
      text-align: left;
      line-height: 48px;
    }

    .text2 {
      margin-top: 10px;
      height: 48px;
      opacity: 1;
      color: rgba(255, 255, 255, 1);
      font-size: 42.67px;
      font-weight: 400;
      font-family: "PingFang SC";
      text-align: left;
      line-height: 48px;
    }

    .text3 {
      margin-top: 20px;
      width: 413.33px;
      height: 40px;
      opacity: 1;
      color: rgba(255, 255, 255, 1);
      font-size: 12px;
      font-weight: 400;
      font-family: "Inter";
      text-align: left;
      line-height: 20px;
    }
  }
}
</style>
