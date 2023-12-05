<template>
  <div class="singleCase">
<!--    <div class="bgWrapper" :style="{backgroundImage:`url(${getImageUrl(item.imgName)})`}">-->
    <div class="bgWrapper" :style="{backgroundImage: `url(${item.imgName})`}">
      <div class="imgTitle">INNOSPACE</div>
      <div class="imgSubTitle">
        创造有价值的产业链接
      </div>
    </div>
    <div class="textWrapper">
      <div class="title">
        {{item.title}}
      </div>
      <div class="content">
        {{item.content}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'singleCase',
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
      return new URL(`../../../imgs/inovative/IndustrialInnovation/${name}.png`, import.meta.url).href;
    }
  }
}
</script>
<style lang='scss' scoped>
.singleCase {
  height: 230px;
  width: 266.67px;
  .bgWrapper {
    width: 266.67px;
    height: 160px;
    //background-image: url("@/imgs/inovative/IndustrialInnovation/case1.png");
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .imgTitle {
      color: rgba(255,255,255,1);
      font-size: 17.67px;
      font-weight: 300;
      font-family: "Inter";
      text-align: center;
    }
    .imgSubTitle {
      margin-top: 8px;
      color: rgba(255,255,255,1);
      font-size: 12.67px;
      font-weight: 300;
      font-family: "Inter";
      text-align: center;
    }
  }
  .textWrapper {
    .title {
      color: rgba(255,255,255,1);
      font-size: 13.33px;
      font-weight: 700;
      font-family: "Inter";
      text-align: left;
      margin-top:14px;
    }
    .content {
      width: 266.67px;
      height: 29.33px;
      opacity: 1;
      color: rgba(255,255,255,1);
      font-size: 9.33px;
      font-weight: 400;
      font-family: "Inter";
      text-align: left;
      line-height: 14.67px;
      margin-top:8px;
    }
  }

  //.textWrapper:hover {
  //  .title {
  //    color: rgb(230, 68, 49);
  //  }
  //  .content {
  //    color: rgb(230, 68, 49);
  //  }
  //}

}
.singleCase:hover {
  .textWrapper {
    .title {
      color: rgb(230, 68, 49);
    }
    .content {
      color: rgb(230, 68, 49);
    }
  }
}
</style>
