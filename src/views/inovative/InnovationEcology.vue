<template>
<!--  创新智库-->
  <div class="ecology">
    <div class="serviceWrapper">
      <top-service text2="创新生态服务"></top-service>
    </div>
    <div class="openInnovation">
      <center-title color="white">
        <template #title1>社会群生态价值</template>
        <template #title2>Social group ecological value</template>
      </center-title>
      <div class="valueItemListWrapper">
        <value-item
            v-for="(item, index) in valueItemList"
            :text1="item.text1"
            :text2="item.text2"
            :key="index"
        ></value-item>
      </div>
    </div>
    <common-white-paragraph text1="创新社群" text2="Innovation community" imgName="community2" class="whitePara"></common-white-paragraph>
    <div class="cases">
      <div class="casesWrapper">
        <center-title color="white">
          <template #title1>高校合作</template>
          <template #title2>Colleges and universities cooperation</template>
        </center-title>
        <div class="text">
          随着时代的进步，企业间的竞争越演越烈，降低成本已经成为了现代企业保持和提高竞争力的重要手段之一。
          人力资源成本在企业的成本中占有极大的比例，为了追求利润的最大化，许多企业都希望能够有效的降低培训成本，即希望高校毕业生在毕业时就能达到岗位的要求，而不需要再次对他们进行岗位培训。但是由于现阶段我国高等教育在对学生的理论知识培养方面具有一定的滞后性，而在对学生的综合能力和综合素质的培养方面也存在着许多不足之处，这与现代企业对人才的需求存在着巨大的偏差。
        </div>
<!--        <div class="bgcWrapper">-->
<!--        </div>-->
      </div>
    </div>
    <common-white-paragraph text1="全球合作伙伴" text2="Global Partners" imgName="world" class="whitePara2"></common-white-paragraph>
    <div class="footerWrapper">
      <common-footer2></common-footer2>
    </div>
  </div>
</template>
<script>
  import TopService from "../../components/inovative/common/topService.vue"
  import CenterTitle from "../../components/inovative/IndustrialInnovation/centerTitle.vue"
  import ValueItem from "../../components/inovative/InovationThinkTank/valueItem.vue"
  import CommonWhiteParagraph from "../../components/inovative/common/commonWhiteParagraph.vue"
  import CommonFooter2 from "../../components/inovative/common/commonFooter2.vue"
  import Footer from "../news/footer.vue"
  // import bgc from "@/imgs/common/moon.jpg";
  import bgc from "@/imgs/bg_news1.png";

  export default {
    name: 'InnovationEcology',
    components: {Footer, CommonFooter2, CommonWhiteParagraph, ValueItem, CenterTitle, TopService},
    data(){
      return {
        valueItemList: [
          {
            text1: "10,000+",
            text2: "初创企业"
          },
          {
            text1: "2000+",
            text2: "投资人"
          },
          {
            text1: "100+",
            text2: "投资机构"
          },
        ],
      }
    },
    mounted() {
      this.$store.commit("changeBgc", bgc);
    }
  }
</script>
<style lang='scss' scoped>
.ecology {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .serviceWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 598px;
  }
  .openInnovation {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 330.67px;
    opacity: 1;
    background: rgba(43, 46, 51, 1);
    justify-content: center;
    .valueItemListWrapper {
      flex-wrap: wrap;
      display: flex;
      justify-content: space-around;
      margin-bottom: 66px;
      width: 800px;
    }
  }
  .whitePara {
    :deep .bgcWrapper{
      width: 853.33px;
      height: 201.33px;
    }
  }
  .cases {
    display: flex;
    justify-content: center;
    .casesWrapper {
      align-items: center;
      flex-direction: column;
      background: rgba(250, 250, 250, 1) url("@/imgs/inovative/InnovationEcology/school.png");
      background-size: contain;
      width: 1280px;
      display: flex;
      justify-content: center;
      .text {
        width: 853.33px;
        height: 56px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 10.67px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
        line-height: 18.67px;
        margin-top: 16px;
        margin-bottom: 66px;
      }
    }
  }
  .whitePara2 {
    :deep .bgcWrapper{
      width: 853.33px;
      height: 416px;
    }
  }
  .footerWrapper {
    background-color: #2B2E33;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    :deep .downWrapper{
      margin-top: 21px;
    }
  }
}
</style>
