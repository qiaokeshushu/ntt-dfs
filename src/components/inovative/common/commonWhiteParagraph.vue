<template>
  <div class="partners">
    <center-title>
      <template #title1>{{text1}}</template>
      <template #title2>{{text2}}</template>
    </center-title>
    <div class="bgcWrapper" :style="{backgroundImage:`url(${getImageUrl(imgName)})`}">
    </div>
  </div>
</template>
<script>
  import CenterTitle from "../IndustrialInnovation/centerTitle.vue"
  export default {
    name: 'commonWhiteParagraph',
    components: {CenterTitle},
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
<style lang='scss'>
.partners {
  .bgcWrapper {
    width: 853px;
    height: 342px;
    opacity: 1;
    background-size: cover;
    margin-bottom: 66px;
  }
}
</style>
