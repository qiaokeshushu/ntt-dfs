<template>
  <div class="centerTitleWrapper" >
    <div class="title">
      <div class="title1" :style="{color: color}">
        <slot name="title1" ></slot>
      </div>
      <div class="title2" :style="{color: color}">
        <slot name="title2" ></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'centerTitle',
    data(){
      return {

      }
    },
    props: {
      color: {
        type: String,
        default: 'rgb(43, 46, 51)',
      }
    }
}
</script>
<style lang='scss' scoped>
.centerTitleWrapper {
  .title {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 66.6px;
    margin-bottom: 53.3px;
    .title1 {
      height: 26.67px;
      opacity: 1;
      color: rgba(43, 46, 51, 1);
      font-size: 20px;
      font-weight: 500;
      font-family: "PingFang SC";
      text-align: left;
      line-height: 26.67px;
    }

    .title2 {
      //width: 127.33px;
      height: 18.67px;
      opacity: 1;
      color: rgba(43, 46, 51, 1);
      font-size: 13.33px;
      font-weight: 400;
      font-family: "Inter";
      text-align: left;
      line-height: 18.67px;
    }
  }
}

</style>
