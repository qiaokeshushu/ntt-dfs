<template>
  <div>
<!--    创新智库-->
    <div class="thinkTank">
      <div class="serviceWrapper">
        <top-service text2="咨询服务"></top-service>
      </div>
      <div class="caseWrapper">
<!--        <research-case :key="index" :item="item" v-for="(item, index) in caseList"></research-case>-->

        <div class="focusDataWrapper">
          <my-layout-hover :data="focusData" @myHover="hover"></my-layout-hover>
        </div>

      </div>
      <div class="line"></div>
      <div class="industry">
        <div class="left">
          <div class="industryTitle">产业研究</div>
          <div class="content" v-if="contentIndex===0">
            <div class="industrySubTitle">
              产业组织理论
            </div>
            <div class="industryContent">
              <div>
                产业组织理论主要是为了解决所谓的“马歇尔冲突”的难题，即产业内企业的规模经济效应与企业之间的竞争活力的冲突。
              </div>
              <div>
                传统的产业组织理论体系主要是由张伯伦、梅森、贝恩、谢勒等建立的，即著名的市场结构、市场行为和市场绩效理论范式（又称SCP模式）。
              </div>
              <div>
                SCP模式奠定了产业组织理论体系的基础，以后各派产业组织理论的发展都是建立在对SCP模式的继承或批判基础之上的。
              </div>
            </div>
            <div class="industrySubTitle">
              产业政策研究
            </div>
            <div class="industryContent">
              <div>
                从纵的方向来看包括产业政策调查（事前经济分析）、产业政策制定、产业政策实施方法、产业政策效果评估、产业政策效果反馈和产业政策修正等内容。
              </div>
              <div>
                从横的方向来看包括产业发展政策、产业组织政策、产业结构政策、产业布局政策和产业技术政策等几个方面的内容；从其作用特征来看包括秩序型（或称制度型）产业政策以及过程型（或称行为型）产业政策。
              </div>
            </div>
          </div>
          <div class="content" v-if="contentIndex===1">
            <div class="industrySubTitle">
              产业组织理论1111111
            </div>
            <div class="industryContent">
              <div>
                产业组织理论主要是为了解决所谓的“马歇尔冲突”的难题，即产业内企业的规模经济效应与企业之间的竞争活力的冲突。2222
              </div>
              <div>
                传统的产业组织理论体系主要是由张伯伦、梅森、贝恩、谢勒等建立的，即著名的市场结构、市场行为和市场绩效理论范式（又称SCP模式）。2222
              </div>
              <div>
                SCP模式奠定了产业组织理论体系的基础，以后各派产业组织理论的发展都是建立在对SCP模式的继承或批判基础之上的。
              </div>
            </div>
            <div class="industrySubTitle">
              产业政策研究
            </div>
            <div class="industryContent">
              <div>
                从纵的方向来看包括产业政策调查（事前经济分析）、产业政策制定、产业政策实施方法、产业政策效果评估、产业政策效果反馈和产业政策修正等内容。
              </div>
              <div>
                从横的方向来看包括产业发展政策、产业组织政策、产业结构政策、产业布局政策和产业技术政策等几个方面的内容；从其作用特征来看包括秩序型（或称制度型）产业政策以及过程型（或称行为型）产业政策。
              </div>
            </div>
          </div>
          <div class="content" v-if="contentIndex===2">
            <div class="industrySubTitle">
              产业组织理论3333
            </div>
            <div class="industryContent">
              <div>
                产业组织理论主要是为了解决所谓的“马歇尔冲突”的难题，即产业内企业的规模经济效应与企业之间的竞争活力的冲突。3333
              </div>
              <div>
                传统的产业组织理论体系主要是由张伯伦、梅森、贝恩、谢勒等建立的，即著名的市场结构、市场行为和市场绩效理论范式（又称SCP模式）。
              </div>
              <div>
                SCP模式奠定了产业组织理论体系的基础，以后各派产业组织理论的发展都是建立在对SCP模式的继承或批判基础之上的。
              </div>
            </div>
            <div class="industrySubTitle">
              产业政策研究
            </div>
            <div class="industryContent">
              <div>
                从纵的方向来看包括产业政策调查（事前经济分析）、产业政策制定、产业政策实施方法、产业政策效果评估、产业政策效果反馈和产业政策修正等内容。
              </div>
              <div>
                从横的方向来看包括产业发展政策、产业组织政策、产业结构政策、产业布局政策和产业技术政策等几个方面的内容；从其作用特征来看包括秩序型（或称制度型）产业政策以及过程型（或称行为型）产业政策。
              </div>
            </div>
          </div>

        </div>
        <div class="right">
          <img src="/src/assets/images/industry.png" alt="">
        </div>
      </div>
      <common-footer></common-footer>
    </div>
  </div>
</template>
<script>
  import TopService from "../../components/inovative/common/topService.vue"
  import CenterTitle from "../../components/inovative/IndustrialInnovation/centerTitle.vue"
  import ValueItem from "../../components/inovative/InovationThinkTank/valueItem.vue"
  import ResearchCase from "../../components/inovative/InovationThinkTank/researchCase.vue"
  import CommonFooter from "../../components/inovative/common/commonFooter.vue"
  // import bgc from "@/imgs/common/moon.jpg";
  import MyLayoutHover from "../../components/inovative/common/myLayoutHover.vue"
  import bgc from "@/imgs/bg_news1.png";

  export default {
    name: 'InnovationThinkTank',
    components: {MyLayoutHover, CommonFooter, ResearchCase, ValueItem, CenterTitle, TopService},
    data(){
      return {
        contentIndex: 1,
        focusData: [
          {
            bg: new URL('../../assets/images/research.png', import.meta.url).href,
            title: '产业研究',
            tips:"基于时下行业转型热点痛点，围绕相关议题进行产业研究服务"
          },
          {
            bg: new URL('../../assets/images/research.png', import.meta.url).href,
            title: '产业研究',
            tips:"基于时下行业转型热点痛点，围绕相关议题进行产业研究服务"
          },
          {
            bg: new URL('../../assets/images/research.png', import.meta.url).href,
            title: '产业研究',
            tips:"基于时下行业转型热点痛点，围绕相关议题进行产业研究服务"
          },
        ],
        caseList: [
          {
            title: "产业研究",
            content: "基于时下行业转型热点痛点，围绕相关议题进行产业研究服务",
            imgName: "research"
          },
          {
            title: "产业研究",
            content: "基于时下行业转型热点痛点，围绕相关议题进行产业研究服务",
            imgName: "research"
          },
          {
            title: "产业研究",
            content: "基于时下行业转型热点痛点，围绕相关议题进行产业研究服务",
            imgName: "research"
          },
        ],
      }
    },
    mounted() {
      this.$store.commit("changeBgc", bgc);
    },
    methods: {
      hover(i) {
        this.contentIndex = i
      }
    }
}
</script>
<style lang='scss' scoped>
.thinkTank {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .serviceWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 600px;
  }
  .caseWrapper {
    margin-top: 80px;
    width: 1158px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .singleCase {
      margin-left: 26px;
      //margin-top: 80px;
    }
    .focusDataWrapper :deep  {
      .layoutHover {
        width: 882px;
        ul {
          li {
            width: 266.33px;
            height: 106.67px;
            .title {
              font-size: 14px;
            }
            .lineEn {
              font-size: 12px;
            }
          }
          .active  {
            .title {
              margin-top: 30px;
            }
          }
        }
      }
    }

  }
  .line {
    margin-top: 30px;
    width: 850px;
    border: 0.76px solid rgba(235,235,235,1);
  }
  .industry {
    margin-top: 26px;
    width: 850px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 114px;
    .left {
      .content {
        margin-top: 26px;
        .industrySubTitle {
          width: 413.33px;
          opacity: 1;
          color: rgba(43,46,51,1);
          font-size: 10.67px;
          font-weight: 700;
          text-align: left;
          font-family: "Inter";
        }
        .industrySubTitle:nth-child(3) {
          margin-top: 26px;
        }
        .industryContent {
          margin-top: 16px;
          line-height: 18px;
          width: 413.33px;
          opacity: 1;
          color: rgba(43,46,51,1);
          font-size: 10.67px;
          font-weight: 400;
          text-align: left;
          font-family: "Inter";
        }
      }
      .industryTitle {
        width: 413.33px;
        height: 26.67px;
        opacity: 1;
        color: rgba(43,46,51,1);
        font-size: 20px;
        font-weight: 500;
        font-family: "PingFang SC";
        text-align: left;
        line-height: 26.67px;
      }

    }
    .right {
      img {
        width: 340px;
        height: 340px;
      }
    }
  }
}
</style>
