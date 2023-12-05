<template>
  <div class="content">
    <div class="contain">
      <div class="descBottom">
        <div>完整的创业生态服务体系</div>
        <div class="location">InnoSpace 上海</div>
      </div>
    </div>
    <div class="road">
      <div class="roadTitle">
        <div class="title">发展历程</div>
        <div class="path">Development Path</div>
      </div>
      <timeLine :timeData="timeData" class="timeLine"></timeLine>
    </div>
    <div class="qualification">
      <div class="abilityTitle">
        <div class="title">资质能力</div>
        <div class="ability">Qualification Ability</div>
      </div>
      <div v-for="(item,index) in abilityData" :key="index" class="abilityList">
        <div class="listItem">
        <ul>
          <li v-for="(subItem,i) in item.list" :key="i">
            <span>{{subItem.text}}</span>
            <span class="name">({{ subItem.title }})</span>
          </li>
        </ul>
        <div class="totalNum">
          <div class="number">{{item.number}}</div>
          <div class="total">共计获奖</div>
        </div>
        <div class="date">{{item.date}}</div>
      </div>
      </div>
    </div>
    <div class="layout">
      <div class="layoutContent">
        <div class="title">
          <div>上海布局</div>
          <div class="en">Shanghai Layout</div>
        </div>
        <div class="tabs">
          <ul class="tabUl">
            <li 
              :class="{active:tabIndex === i}" 
              v-for="(item,i) in tabsData" 
              @click="changeTab(i)"
              :key="i">
              {{item}}
            </li>
          </ul>
          <div class="tabContent">
            <div class="desc">
              坐落于 “国家创新型试点城区” ——上海杨浦，面积约5800平米，由开放式办公区和独立办公间组成，可满足50人以下初创期企业的办公需求。经过近多年的服务体系建设和精准孵化模式探索，成功构建了一个集创业、生活、学习、交流等多创业要素于一体的一站式创业孵化器，为创业者提供多方位的创业服务。
            </div>
            <div class="address">地址：上海市杨浦区政学路77号</div>
            <div class="show">
              <img src="@/imgs/nationalLayout/img@2x.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cooperation">
       <div class="title">
          <div>合作网络</div>
          <div class="en"> Cooperation Network</div>
        </div> 
        <div class="show">
          <img src="@/imgs/nationalLayout/Frame@2x.png" alt="">
        </div> 
    </div>
    <div class="consultation">
      <div class="infoContent">
          <div class="title">
            <div>合作咨询 · 上海</div>
            <div class="en">Cooperation consultation</div>
            <div class="info">
              <div class="mobile"> 
                <img src="@/assets/images/phone.png" alt="">
                <span>(86) 021 - 61485266</span>
              </div>
              <div class="mobile right"> 
                <img src="@/assets/images/phone.png" alt="">
                <span>InnoSpace 公众号</span>
              </div>
            </div>
            <div class="email">
              <img src="@/assets/images/email.png" alt="">
              <span>ipoclub@innospace.com.cn</span>
            </div>
          </div>
          
        <div class="address">
          <img src="" alt="">
        </div>
      </div>
    </div>
    <layoutFooter></layoutFooter>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import {useStore} from 'vuex'
import bgc from "@/imgs/nationalLayout/shanghai@2x.png";
import timeLine from '@/components/timeLine/index.vue'
import layoutFooter from "@/components/layout/layoutFooter.vue"
const store = useStore();
const timeData = reactive([
  {
    date: '2011',
    list:['创业咖啡']
  },
  {
    date: '2012',
    list:['孵化器']
  },{
    date: '2013',
    list:['加速服务','国际创业集训营']
  },
  {
    date: '2015',
    list:['摩托罗拉·初创企业对接','⻄⻔子·工业4.0加速营','天使投资','开放式创新']
  },
  {
    date: '2016',
    list:['创业生态社区','硬件加速器','韩国振兴社加速计划','韩国KISED加速计划']
  },
  {
    date: '2017',
    list:['1','2','3']
  },
  {
    date: '2018',
    list:['1','2','3']
  },
  {
    date: '2019',
    list:['1','2','3']
  },
  {
    date: '2020',
    list:['1','2','3']
  }
])
const abilityData = reactive([
  {
    number: 4,
    date:'2013',
    list: [
      {
        text: '天使中国创新创业大奖',
        title: '天使中国 颁奖',
        
      },
      {
        text: '上海市创业投资行业协会第四届理事会 (2013-2016)理事单位',
        title: '上海市创业投资行业协会 颁奖',
      },
      {
        text: '上海市中小企业服务机构',
        title: '上海市经济和信息化委员会&上海市促进中小企业发展协调办公室联合 颁奖',
      },
      {
        text: "杨浦大学生创业孵化基地",
        title: '上海市杨浦区人力资源和社会保障局 颁奖',
      }
    ]
  },
  {
    number: 3,
     date:'2015',
    list: [
      {
        text: '上海市创业者⻅习基地',
        title: '上海市杨浦区公共实训基地 颁奖',
       
      },
      {
        text: '中国最值得关注的创业孵化器',
        title: '创业邦 颁奖',
      },
      {
        text: "全国联合办公行业创投孵化奖",
        title: '全国联合办公行业联盟 颁奖',
      }
    ]
  },
  {
    number: 6,
    date:'2016',
    list: [
      {
        text: '最具人气众创空间',
        title: '上海高校创新创业教育联盟 颁奖',
      },
      {
        text: '杨浦区众创空间联盟',
        title: '上海市科学技术委员会 颁奖',
      },
      {
        text: "上海市杨浦区众创空间促进会会员单位",
        title: '上海市杨浦区众创空间促进会 颁奖',
      },
      {
        text: "国家备案众创空间",
        title: '中华人⺠共和国科学技术部火炬中心 颁奖',
      },
      {
        text: "市级众创空间",
        title: '上海市科创中心、上海科技企业孵化协会 颁奖',
      },
      {
        text: "上海市优秀众创空间Top1",
        title: '海市科学技术委员会 颁奖',
      }
    ]
  },
  {
    number: 4,
    date:'2017',
    list: [
      {
        text: '中国十佳孵化器',
        title: '融资中国 颁奖',
      },
      {
        text: '年度创业服务机构',
        title: 'ChinaBang Awards 颁奖',
      },
      {
        text: "上海市优秀众创空间Top1",
        title: '上海市科学技术委员会 颁奖',
      },
      {
        text: "上海市级创业孵化示范基地",
        title: '上海市杨浦区人力资源和社会保障局 颁奖',
      }
    ]
  },
  {
    number: 3,
    date:'2018',
    list: [
      {
        text: '最具投资奖',
        title: '上海市杨浦区众创空间促进会 颁奖',
      },
      {
        text: '中国最佳众创空间TOP10',
        title: '投中网 / 投中集团 颁奖',
      },
      {
        text: "年度最佳双创扶持机构",
        title: 'ChinaBang Awards 颁奖',
      },
    ]
  },
  {
    number: 4,
    date:'2019',
    list: [
      {
        text: '上海市杨浦区众创空间协会理事⻓单位',
        title: '上海市杨浦区众创空间协会 颁奖',
      },
      {
        text: '上海技术转移机构新锐Top10',
        title: '胡润百富集团 颁奖',
      },
      {
        text: "上海市优秀众创空间Top1",
        title: '上海市科学技术委员会 颁奖',
      },
      {
        text: "上海市级创业孵化示范基地",
        title: '上海市杨浦区人力资源和社会保障局 颁奖',
      }
    ]
  },
])
const tabsData = reactive([
  '上海 · 旗舰','上海 · 江湾','上海 · 虹口'
])
const tabIndex = ref(0)
const changeTab = (i) => {
  tabIndex.value = i
}
onMounted(() => {
  store.commit("changeBgc", bgc);
})
</script>

<style scoped lang="scss">
  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
  .contain{
    height:calc(100vh - 100px);
    width: 1280px;
    
      .descBottom{
        position: absolute;
        color: #fff;
        font-size: 64px;
        font-weight: 300;
        bottom: 120px;
      }
      .location{
        font-weight: 700;
        margin-top:16px;
      }
  }
  .road{
    width:100%;
    height: 664px;
    background: #2b2e33;
    padding-top:100px;
    .roadTitle{
      width: 100%;
      text-align: center;
      color:#fff;
      .title{
        font-size:30px;
        font-weight: 500;
        line-height: 40px;
      }
      .path{
        font-size: 20px;
        line-height: 28px;
        margin-top: 4px;
      }
    }
    .timeLine{
      margin-top:120px;
      height:calc(100% - 188px)
    }
  }
  .qualification{
    background: #fff;
    width: 100%;
    padding-top: 100px;
    .abilityTitle{
      text-align: center;
      color:#2B2E33;
      margin-bottom:80px;
      .title{
        font-size: 30px;
        font-weight: 500;
        line-height: 40px;
      }
      .ability{
        font-size: 20px;
        line-height: 28px;
        margin-top: 4px;
      }
    }
    .abilityList{
      
      display: flex;
      justify-content: center;
      align-items: center;
      padding:60px 0px;
      overflow: hidden;
      &:nth-child(even){
        background: #FAFAFA;
      }
      .listItem{
        position: relative;
        width:1280px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      li{
        list-style:disc;
        line-height: 34px;
        font-size:16px;
        color:#2B2E33;
        .name{
          color:#999da3;
          margin-left: 10px;
        }
      }
      .totalNum{
        text-align: center;
      }
      .number{
        font-size:48px;
        font-weight: 400;
        line-height: 68px;
        margin-bottom: 8px;
        color:#F53A2C;
      }
      .total{
        color:#999da3;
        font-size:14px;
        line-height: 28px;
      }
      .date{
        position: absolute;
        font-size:96px;
        font-weight: 700;
        color:#f0f0f0;
        left:-20px;
        bottom:-85px;
      }
    }
  }
  .layout{
    width:100%;
    display: flex;
    justify-content: center;
    background: #2B2E33;
    padding:100px 0;
    .layoutContent{
      width:1280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
        font-size:30px;
        font-weight: 500;
        line-height: 40px;
        color:#fff;
        text-align: center;
        .en{
          font-size:20px;
          font-weight: 300;
          line-height: 28px;
          margin-top:4px;
        }
      }
      .tabs{
        margin-top:60px;
        width:100%;
        .tabUl{
          border-bottom:1px solid #5A5E66;
          display: flex;
          justify-content: center;
          padding:0 240px;
          li{
            width: 200px;
            height: 48px;
            text-align: center;
            line-height: 48px;
            font-size:16px;
            color: #fff;
            cursor: pointer;
            &.active{
              color:#F53A2C;
              font-weight: 700;
              border-bottom: 1px solid #F53A2C;
            }
          }
        }
        .tabContent{
          margin-top:60px;
          .desc{
            color:#fff;
            font-size: 16px;
            line-height: 28px;
            font-weight: 400;
          }
          .address{
            margin-top:16px;
            font-weight: 400;
            line-height: 28px;
            color:#999DA3;
          }
          .show{
            width:100%;
            height: 570px;
            margin-top: 60px;
            img{
              width:100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  .cooperation{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: #FAFAFA;
    padding:100px 0;
    .title{
      font-size:30px;
      font-weight: 500;
      line-height: 40px;
      color:#2B2E33;
      text-align: center;
      .en{
        font-size:20px;
        font-weight: 300;
        line-height: 28px;
        margin-top:4px;
      }
    }
    .show{
      width: 1280px;
      height: 514px;
      margin-top:80px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .consultation{
    width: 100%;
    padding:120px 0 ;
    background: #2B2E33;
    display: flex;
    justify-content: center;
    .infoContent{
      width: 1280px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title{
          font-size: 30px;
          color:#fff;
          font-weight: 500;
        .en{
          font-size: 20px;
          font-weight: 400;
          line-height: 28px;
          margin-top: 8px;
        }
        .info{
          display: flex;
          margin-top:60px;
          font-size: 16px;
          font-weight: 400;
          .mobile {
            height: 64px;
            display: flex;
            align-items: center;
            border-bottom:1px solid #5A5E66;
            &.right{
              margin-left:48px;
            }
            img {
              width:24px;
              height:24px;
              margin-right: 12px;
            }
          }
        }
         .email{
            height: 64px;
            width: 243px;
            border-bottom:1px solid #5A5E66;
            display: flex;
            align-items: center;
            margin-top:24px;
            font-size: 16px;
            font-weight: 400;
            img {
              width:24px;
              height:24px;
              margin-right: 12px;
            }
          }
      }
      
      .address{
        width: 500px;
        height: 400px;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    
  }
}

</style>