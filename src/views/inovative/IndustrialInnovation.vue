<template>
  <div class="wrapper">
    <!--    产业创新-->
    <div class="serviceWrapper">
      <!--      <div :style="{'background': 'red'}" @click="useGetCaseData">-->
      <!--        点击测试接口-->
      <!--      </div>-->
      <top-service></top-service>
    </div>
    <div class="openInnovation">
      <div class="textWrapper">
        <div class="text1">
          大企业创新
        </div>
        <div class="text2">
          Open Innovation
        </div>
        <div class="text3">
          培育创新基因，激活商业价值。InnoSpace通过科学的⽅法和创新实践，为⼤企业提供⼀系列多⽅位的创新服务，辅助企业⼤脑完成 “眼、脚、⼿、嘴”
          的创新协同，帮助⼤企业实现⾼效转型和模式升级，以更快的速度和更低的成本实现价值创新。
        </div>
        <div class="text4">
          Cultivate innovative genes and activate commercial value. Through scientific methods and innovative practices,
          InnoSpace provides large enterprises with a series of multi-faceted innovation services, assists the
          enterprise brain to complete the "eyes, feet, hands, mouths" innovation collaboration, and helps large
          enterprises achieve efficient transformation and model Upgrade to realize value innovation faster and at lower
          cost.
        </div>
      </div>
    </div>
    <div class="serviceIntroduction">
      <center-title>
        <template #title1>服务介绍</template>
        <template #title2>Service Introduction</template>
      </center-title>
      <div class="columnListWrapper">
        <column :key="index" :item="item" v-for="(item, index) in columnList"></column>
      </div>
    </div>
    <div class="industryConcern">
      <center-title>
        <template #title1>产业关注</template>
        <template #title2>Industry concern</template>
      </center-title>
      <!--      <div class="machineWrapper">-->
      <!--        <machine :key="index" :item="item" v-for="(item, index) in machineList"></machine>-->
      <!--      </div>-->
      <div class="focusDataWrapper">
        <layoutHover :data="focusData"></layoutHover>
      </div>
    </div>
    <div class="projectCases">
      <center-title color="white">
        <template #title1>往期案例</template>
        <template #title2>Projects & cases</template>
      </center-title>
      <div class="caseWrapper">
        <single-case :key="index" :item="item" v-for="(item, index) in caseList"></single-case>
      </div>
      <div class="btnWrapper">
        <red-button @click="lastPage">
          上一页
        </red-button>
        <red-button @click="nextPage">
          下一页
        </red-button>
      </div>
    </div>
    <div class="partners">
      <center-title>
        <template #title1>合作伙伴</template>
        <template #title2>Projects & cases</template>
      </center-title>
      <div class="bgcWrapper">
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
import Column from "../../components/inovative/IndustrialInnovation/column.vue"
import CenterTitle from "../../components/inovative/IndustrialInnovation/centerTitle.vue"
import Machine from "../../components/inovative/IndustrialInnovation/machine.vue"
import SingleCase from "../../components/inovative/IndustrialInnovation/singleCase.vue"
import TopService from "../../components/inovative/common/topService.vue"
import RedButton from "../../components/inovative/common/redButton.vue"
import CommonFooter from "../../components/inovative/common/commonFooter.vue"
import {getCaseData} from "../../api/inovative/index.js"
import LayoutHover from "../../components/layout/layoutHover.vue"
// import bgc from "@/imgs/common/moon.jpg";
// import bgc from "@/imgs/nationalLayout/gba@2x.png";
import bgc from "@/imgs/bg_news1.png";


export default {
  name: '产业创新',
  components: {LayoutHover, CommonFooter, RedButton, TopService, SingleCase, Machine, CenterTitle, Column},
  data() {
    return {
      focusData: [
        {
          bg: new URL('../../assets/images/machine.png', import.meta.url).href,
          title: '人工智能-各自升级的孪生注意力',
          tips: "artificial intelligence"
        },
        {
          bg: new URL('../../assets/images/machine.png', import.meta.url).href,
          title: '人工智能-各自升级的孪生注意力',
          tips: "artificial intelligence"
        },
        {
          bg: new URL('../../assets/images/machine.png', import.meta.url).href,
          title: '人工智能-各自升级的孪生注意力',
          tips: "artificial intelligence"
        },
        {
          bg: new URL('../../assets/images/machine.png', import.meta.url).href,
          title: '人工智能-各自升级的孪生注意力',
          tips: "artificial intelligence"
        },
      ],
      pager: {
        caseType: '103',
        pageNum: 1,
        pageSize: 9,
      },
      isLastPage: false,
      caseList: [
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        },
        {
          title: "绿色创新 · 湾区未来",
          content: "8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace GBA成功举办。",
          imgName: "case1"
        }
      ],
      machineList: [{
        title1: "人工智能-各自升级的孪生注意力",
        title2: "artificial intelligence",
        imgName: "machine"
      },
        {
          title1: "人工智能-各自升级的孪生注意力1",
          title2: "artificial intelligence",
          imgName: "machine"
        },
        {
          title1: "人工智能-各自升级的孪生注意力1",
          title2: "artificial intelligence",
          imgName: "machine"
        },
        {
          title1: "人工智能-各自升级的孪生注意力1",
          title2: "artificial intelligence",
          imgName: "machine"
        },
      ],
      columnList: [{
        imgName: "service_a",
        columnTitle: "内部创新",
        contentList: [
          "挖掘品牌增⻓点",
          "激发员工自主创新能力⻓点",
          "与立体化竞争的优质项目⻓点",
          "Explore brand growth",
          "Stimulate employees' ability to innovate independently⻓点",
          "Incubate high-quality projects with sustainable growth and three-dimensional competition",
        ]
      },
        {
          imgName: "service_b",
          columnTitle: "开放创新",
          contentList: [
            "拓宽优质项目获取渠道",
            "加强集团BU与外部创业项目的业务撮合",
            "合作共建产业加速器",
            "Broaden access to high-quality projects",
            "Strengthen the business matching between group BU and external entrepreneurial projects",
            "Cooperation to build an industry accelerator",
          ]
        },
        {
          imgName: "service_c",
          columnTitle: "创新合作",
          contentList: [
            "创新活动策划与实施",
            "合作共建大企业/政府创新中心",
            "定制化创新之旅",
            "Innovative event planning and implementation",
            "Cooperation to build a large enterprise/government innovation center",
            "Customized Innovation Journey",
          ]
        }
      ]
    }
  },
  mounted() {
    this.useGetCaseData()
    this.$store.commit("changeBgc", bgc);
  },
  methods: {
    nextPage(arg) {
      if (this.isLastPage) return
      this.pager.pageNum += 1
      this.useGetCaseData()
    },
    lastPage() {
      if (this.pager.pageNum === 1) {
        return
      }
      this.pager.pageNum -= 1
      this.useGetCaseData()
    },
    async useGetCaseData() {
      let result = await getCaseData(this.pager)
      this.isLastPage = result.isLastPage
      let list = result.list
      let totalList = list.map(
          item => {
            let obj = {
              title: item.caseTitle,
              conent: item.caseDesc,
              imgName: item.map.url
            }
            return obj
          }
      )
      this.caseList = totalList
    }
  }
}
</script>
<style lang='scss' scoped>
.wrapper {
  //border: 2px solid red;
  //transform: scale(1.3, 1.3);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .serviceWrapper {
    width: 100%;
    //background: #121417;
    display: flex;
    justify-content: center;
    align-items: center;
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

    .textWrapper {
      .text1 {
        width: 100px;
        height: 26.67px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 20px;
        font-weight: 500;
        font-family: "PingFang SC";
        text-align: left;
      }

      .text2 {
        width: 103.33px;
        height: 18.67px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 13.33px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
        line-height: 18.67px;
      }

      .text3 {
        width: 853.33px;
        height: 37.33px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 10.67px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
        line-height: 18.67px;
        margin-top: 40px;
      }

      .text4 {
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
      }
    }
  }

  .serviceIntroduction {
    width: 853px;
    height: 506.67px;
    background: rgba(255, 255, 255, 1);

    .columnListWrapper {
      display: flex;
      justify-content: space-between;
    }
  }

  .industryConcern {
    width: 100%;
    //width: 1280px;
    height: 602.67px;
    background: #FAFAFA;
    display: flex;
    align-items: center;
    flex-direction: column;

    .machineWrapper {
      width: 882px;
      display: flex;
      height: 400px;
      flex-wrap: wrap;
      margin-left: -26px;
    }

    .focusDataWrapper :deep {
      .layoutHover {
        width: 882px;

        ul {
          li {
            width: 413.33px;
            height: 170.67px;

            .title {
              margin-top: 72px;
            }
          }

          .active {
            .title {
              margin-top: 44px;
            }
          }
        }
      }
    }
  }

  .projectCases {
    background-color: #2B2E33;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .caseWrapper {
      width: 1158px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .singleCase {
        margin-left: 26px;
        margin-top: 30px;
      }
    }

    .btnWrapper {
      margin-top: 40px;
      margin-bottom: 60px;
      display: flex;

      .btn:nth-child(2) {
        margin-left: 40px;
      }
    }
  }

  .partners {
    .bgcWrapper {
      width: 853px;
      height: 342px;
      opacity: 1;
      background: rgba(250, 250, 250, 1) url("@/imgs/inovative/IndustrialInnovation/brands.png");
      background-size: cover;
      margin-bottom: 66px;
    }
  }


}

</style>
