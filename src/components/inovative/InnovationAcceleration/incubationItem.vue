<template>
  <div class="smallItem">
<!--    <img src="@/assets/images/building.png" alt="">-->
    <img :src="getImageUrl(imgName)" alt="">
    <div class="text">
      <div class="text1">
        {{text1}}
      </div>
      <div class="text2">
        {{text2}}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'incubationItem',
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
      imgName: {
        type: String
      }
    },
    methods: {
      getImageUrl(name) {
        return new URL(`../../../assets/images/${name}.png`, import.meta.url).href;
      }
    }
  }
</script>
<style lang='scss' scoped>
.smallItem {
  display: flex;
  align-items: center;
  img {
    width: 26px;
    height: 26px;
  }
  .text {
    margin-left: 21px;
    .text1 {
      width: 292px;
      height: 26.67px;
      opacity: 1;
      color: rgba(43,46,51,1);
      font-size: 21.33px;
      font-weight: 700;
      font-family: "Inter";
      text-align: left;
      line-height: 26.67px;
    }
    .text2 {
      width: 292px;
      height: 18.67px;
      opacity: 1;
      color: rgba(43,46,51,1);
      font-size: 10.67px;
      font-weight: 400;
      font-family: "Inter";
      text-align: left;
      line-height: 18.67px;
    }
  }
}
</style>
