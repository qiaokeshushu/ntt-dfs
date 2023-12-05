<template>
  <div class="smallItem">
    <div class="fundOneItem">
      <img :src="`${getImageUrl(imgName)}`" alt="">
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'fundOneItem',
    data(){
      return {

      }
    },
    props: {
      text: {
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
.fundOneItem {
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 26px;
    height: 26px;
  }
  .text {
    width: 120px;
    height: 16px;
    opacity: 1;
    color: rgba(43,46,51,1);
    font-size: 10.67px;
    font-weight: 400;
    font-family: "Inter";
    text-align: center;
    line-height: 16px;
    margin-top: 14px;
  }
}
</style>
