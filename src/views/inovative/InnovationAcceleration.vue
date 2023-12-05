<template>
  <div class="innovation">
    <!--    创新加速-->
    <div class="serviceWrapper">
      <top-service text2="孵化服务"></top-service>
    </div>
    <div class="incubationWrapper">
      <div class="leftTitleWrapper">
        <left-title text1="孵化加速" text2="Incubation acceleration" color="rgba(43,46,51,1)"></left-title>
      </div>
      <div class="second">
        <incubation-title text1="孵化 incubation"
                          text2="为初创企业提供创业初期所需的孵化机投融资等服务，包括工商注册、政策申报等，帮助企业顺利成长"></incubation-title>
        <incubation-title text1="加速 accelerate" text2="帮助成长期企业对接产业资源，拓展行业应用场景，通过产创合作提升行业效率，实现业务增长"></incubation-title>
      </div>
      <div class="incubationItemWrapper">
        <incubation-item class="incubationItem" :key="index" :text1="item.text1" :text2="item.text2"
                         :img-name="item.imgName" v-for="(item, index) in incubationItemList"></incubation-item>
      </div>
    </div>
    <div class="camp">
      <div class="campTextWrapper">
        <left-title text1="InnoSpace 国际创业集训营" text2="InnoSpace International Entrepreneurship Training Camp"
                    color="white"></left-title>
      </div>
      <div class="text">
        Innospace 国际创业集训营是一个为期3个月的创业加速营，每期精选10-15个项目入营，由 lnnospace 携手海外政府或产业龙头企业共同举办。Innospace
        国际创业集训营分春秋两季，每年3月和9月开营自2013年以来，Innospace
        国际创业集训营已成功举办十一期．帮助100多个创业团队开启创业征程，并取得了里程碑式的成功。在集训营已毕业的项目中，超过60%的创业项目获得了下一轮的融资，平均估值增长5-7倍，累计产生13个估值超过亿的明星创业项目，项目最高增值倍数超过100倍。
      </div>
      <div class="btnWrapper">
        <red-button @click="jumpTo('camp')">
          申请入营
        </red-button>
      </div>
    </div>
    <div class="venture">
      <div class="ventureTitleWrapper">
        <left-title text1="创业投资" text2="Venture Capital" color="rgba(43,46,51,1)"></left-title>
      </div>

      <div class="textWrapper">
        <div class="text1">
          依托多年的孵化+投资经验，InnoSpace与独家战略合作基金—瑞奕资本资本共同携手，为初创团队和在孵企业解决发展过程的投融资需求，提供从种子轮、天使轮到成长期的精细化融资辅导和风险投资服务。
        </div>
        <div class="text2">
          Relying on years of incubation + investment experience, InnoSpace and the exclusive strategic cooperation
          fund - Ruiyi Capital Capital have joined hands to solve the investment and financing needs of the
          development process for start-up teams and incubating enterprises, and provide refinement from seed rounds,
          angel rounds to growth stages. Financing Counseling and Venture Capital Services.
        </div>
      </div>
      <div class="itemWrapper">
        <div class="title">
          InnoSpace 一期基金
        </div>
        <div class="fundOneItemWrapper">
          <fund-one-item
              :img-name="item.imgName" v-for="(item, index) in fundOneItemList"
              :text="item.text"
              :key="index"
          ></fund-one-item>
        </div>
        <div class="line">

        </div>
        <div class="title">
          InnoSpace 二期基金
        </div>
        <div class="fundTwoItemWrapper">
          <fund-two-item
              v-for="(item, index) in fundTwoItemList"
              :text1="item.text1"
              :text2="item.text2"
              :key="index"
          ></fund-two-item>
        </div>

      </div>
      <div class="btnWrapper">
        <red-button @click="jumpTo('BP')">BP 投递</red-button>
      </div>
    </div>
    <div class="cases">
      <div class="casesWrapper">
        <center-title color="white">
          <template #title1>校友社群</template>
          <template #title2>Alumni Community</template>
        </center-title>
        <div class="bgcWrapper">
        </div>
      </div>
    </div>
    <common-white-paragraph text1="创投伙伴" text2="Venture Partners" imgName="brand2"></common-white-paragraph>
    <div class="projectCases">
      <center-title color="white">
        <template #title1>创业活动</template>
        <template #title2>Entrepreneurial activities</template>
      </center-title>
      <div class="caseWrapper">
        <single-case :key="index" :item="item" v-for="(item, index) in caseList"></single-case>
      </div>
      <div class="btnWrapper">
        <red-button @click.prevent="lastPage">
          上一页
        </red-button>
        <red-button @click.prevent="nextPage">
          下一页
        </red-button>
      </div>
      <common-footer2></common-footer2>
    </div>
  </div>
</template>
<script>
import TopService from "../../components/inovative/common/topService.vue"
import LeftTitle from "../../components/inovative/InnovationAcceleration/leftTitle.vue"
import IncubationTitle from "../../components/inovative/InnovationAcceleration/incubationTitle.vue"
import IncubationItem from "../../components/inovative/InnovationAcceleration/incubationItem.vue"
import RedButton from "../../components/inovative/common/redButton.vue"
import FundOneItem from "../../components/inovative/InnovationAcceleration/fundOneItem.vue"
import FundTwoItem from "../../components/inovative/InnovationAcceleration/fundTwoItem.vue"
import CenterTitle from "../../components/inovative/IndustrialInnovation/centerTitle.vue"
import SingleCase from "../../components/inovative/IndustrialInnovation/singleCase.vue"
import CommonWhiteParagraph from "../../components/inovative/common/commonWhiteParagraph.vue"
import CommonFooter2 from "../../components/inovative/common/commonFooter2.vue"
import {getCaseData} from "../../api/inovative/index.js"
// import bgc from "@/imgs/common/moon.jpg";
import bgc from "@/imgs/bg_news1.png";

export default {
  name: '创新加速',
  components: {
    CommonFooter2,
    CommonWhiteParagraph,
    SingleCase,
    CenterTitle, FundTwoItem, FundOneItem, RedButton, IncubationItem, IncubationTitle, LeftTitle, TopService},
  data() {
    return {
      pager: {
        caseType: '107',
        pageNum: 1,
        pageSize: 6,
      },
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
      ],
      fundOneItemList: [
        {
          imgName: 'honour',
          text: "一期4000万"
        },
        {
          imgName: 'honour',
          text: "一期4000万"
        },
        {
          imgName: 'honour',
          text: "一期4000万"
        },
        {
          imgName: 'honour',
          text: "一期4000万"
        },
        {
          imgName: 'honour',
          text: "一期4000万"
        },
        {
          imgName: 'honour',
          text: "一期4000万"
        }
      ],
      fundTwoItemList: [
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },
        {
          text1: "6个",
          text2: "完成投资企业"
        },

      ],
      incubationItemList: [
        {
          text1: "650+",
          text2: "累积孵化服务初创企业",
          imgName: "building"
        },
        {
          text1: "10期",
          text2: "创业集训营",
          imgName: "group"
        },
        {
          text1: "13",
          text2: "投估值过亿明星企业",
          imgName: "medal"
        },
        {
          text1: "100+",
          text2: "加速企业",
          imgName: "flashlight"
        },
        {
          text1: "70%+",
          text2: "六年存活率",
          imgName: "flag"
        },
        {
          text1: "8家",
          text2: "估值过亿企业",
          imgName: "building2"
        },
      ],
      // incubationItemList2: [
      //   {
      //     text1: "8家",
      //     text2: "估值过亿企业",
      //     imgName: "building2"
      //   },
      //   {
      //     text1: "300倍",
      //     text2: "项目最高增长",
      //     imgName: "lineChart"
      //   },
      // ]
    }
  },
  mounted() {
    this.useGetCaseData()
    this.$store.commit("changeBgc", bgc);

  },
  methods: {
    nextPage() {
      if(this.isLastPage) return
      this.pager.pageNum += 1
      this.useGetCaseData()
    },
    lastPage() {
      if(this.pager.pageNum===1) {return}
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
    },
    jumpTo(target){
      let href
      if(target==='camp') {
        href = "https://www.innospaceplus.com.cn/tables/apply.html"
      } else {
        href = "https://www.innospaceplus.com.cn/tables/financing-demand.html"
      }
      window.open(href,"_blank")
    }
  }
}
</script>
<style lang='scss' scoped>
.innovation {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .serviceWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    //background: #111215;
    height: 600px;
  }

  .incubationWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    .leftTitleWrapper {
      margin-top: 66px;
      margin-bottom: 74px;
    }

    .second {
      width: 850px;
      display: flex;
      justify-content: space-between;
    }

    .incubationItemWrapper {
      width: 850px;
      margin-bottom: 66px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .incubationItem {
        margin-top: 26px;
      }
    }
    .incubationItemWrapper2 {
      margin-top: -60px;
      margin-left: 50%;
      width: 250px;
      margin-bottom: 66px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .incubationItem {
        margin-top: 26px;
        flex: 1;
      }
    }
  }

  .camp {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    opacity: 1;
    background: #2B2E33;
    //justify-content: center;
    .campTextWrapper {
      margin-top: 66px;
      margin-bottom: 40px;
    }

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
    }

    .btnWrapper {
      width: 850px;
      margin-top: 40px;
      margin-bottom: 66px;
    }
  }

  .venture {
    //background: rgba(255,255,255,1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    opacity: 1;
    background: rgba(250,250,250,1);
    .ventureTitleWrapper {
      margin-top: 63px;
      margin-bottom: 40px;
    }

    .textWrapper {
      .text1 {
        width: 853.33px;
        height: 37.33px;
        opacity: 1;
        color: rgba(43, 46, 51, 1);
        font-size: 10.67px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
        line-height: 18.67px;
      }

      .text2 {
        margin-top: 16px;
        width: 853.33px;
        height: 56px;
        opacity: 1;
        color: rgba(43, 46, 51, 1);
        font-size: 10.67px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
        line-height: 18.67px;
      }
    }
    .itemWrapper {
      margin-top: 54px;
      width: 853px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255,255,255,1);
      .title {
        margin-top: 40px;
        width: 125.33px;
        height: 18.67px;
        opacity: 1;
        color: rgba(43,46,51,1);
        font-size: 13.33px;
        font-weight: 700;
        font-family: "Inter";
        text-align: center;
        line-height: 18.67px;
      }
      .fundOneItemWrapper {
        margin-top: 54px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 40px;
      }
      .line {
        width: 820px;
        border: 0.76px solid rgba(235,235,235,1);
      }
      .fundTwoItemWrapper {
        flex-wrap: wrap;
        //margin-top: 54px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-bottom: 40px;
      }
    }
    .btnWrapper {
      margin-top: 53px;
      margin-bottom: 66px;
      :deep .btn {
          border: 0.67px solid rgba(224,224,224,1);
      }
      :deep .btn:hover {
        border: 0.67px solid rgba(245,58,44,1);
      }

    }
  }
  .cases {
    display: flex;
    justify-content: center;
    .casesWrapper {
      align-items: center;
      flex-direction: column;
      background: rgba(250, 250, 250, 1) url("@/imgs/inovative/InnovationAcceleration/community.png");
      background-size: contain;
      width: 1280px;
      height: 645.33px;
      display: flex;
      justify-content: center;
      .bgcWrapper {
        width: 853px;
        opacity: 1;
        background: url("@/imgs/inovative/InnovationAcceleration/brands.png");
        background-size: cover;
        height: 410px;
        margin-bottom: 66px;
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
      display: flex;
      .btn:nth-child(2) {
        margin-left: 40px;
      }
    }
  }
}
</style>
