<template>
  <div class="singleCase">
    <div class="bgWrapper" :style="{backgroundImage:`url(${getImageUrl(item.imgName)})`}">
      <div class="imgTitle">{{item.title}}</div>
      <div class="imgSubTitle">
        {{item.content}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'researchCase',
  data() {
    return {}
  },
  props: {
    item: {
      required: true,
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../../../imgs/inovative/InnovationThinkTank/${name}.png`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss' scoped>
.singleCase {
  width: 266.67px;
  height: 106.67px;
  .bgWrapper {
    width: 266.67px;
    height: 106px;
    //background-image: url("@/imgs/inovative/IndustrialInnovation/case1.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .imgTitle {
      color: rgba(255,255,255,1);
      font-size: 13.33px;
      font-weight: 700;
      font-family: "Inter";
      text-align: center;
    }
    .imgSubTitle {
      margin-top: 8px;
      color: rgba(255,255,255,1);
      font-size: 9.33px;
      font-weight: 400;
      font-family: "Inter";
      text-align: center;
      line-height: 14.67px;
    }
  }
}
</style>
