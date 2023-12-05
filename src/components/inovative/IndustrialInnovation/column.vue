<template>
  <div class="column">
    <div class="img"
    :style="{backgroundImage:`url(${getImageUrl(item.imgName)})`}">
    </div>
    <div class="columnTitle">
      {{ item.columnTitle }}
    </div>
    <ul class="content" >
      <li class="text" v-for="(text, index) in item.contentList" :key="index">
        {{ text }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'column',
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
.column {
  width: 240px;
  height: 272px;

  .img {
    ///Users/ories/Downloads/sunder/innospace2022/src/imgs/inovative/IndustrialInnovation/service_a.png
    background-size: cover;
    width: 37.33px;
    height: 37.33px;
  }

  .columnTitle {
    color: rgba(43, 46, 51, 1);
    font-size: 13.33px;
    font-weight: 700;
    font-family: "Inter";
    margin-top: 16px;
  }

  .content {
    margin-left: 20px;
    width: 240px;
    height: 61.33px;
    color: rgba(43, 46, 51, 1);
    font-size: 10.67px;
    font-weight: 400;
    font-family: "Inter";
    text-align: left;
    margin-top: 16px;
    .text {
      list-style-type: disc;
      line-height: 23.67px;
    }
  }
}
</style>
