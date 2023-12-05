<template>
  <div class="content">
    <div class="contain">
      <div class="descBottom">
        <div>完整的创业生态服务体系</div>
        <div class="loca">InnoSpace GBA</div>
      </div>
    </div>
    <div class="location">
      <div class="localtionContent">
        <div class="title">定位与介绍</div>
        <div class="path">Positioning And Introduction</div>
        <div class="desc">
          <p><span>一句话定位：</span>InnoSpace GBA 聚焦人文与科技的交叉点，立足大湾区打造有价值的产业创新平台，赋能未来城市可持续发展。</p>
          <p><span> 整体介绍：</span>
           源于硅谷，深耕上海，发展于大湾区，以“创造有价值的产业链接”为理念，依托十年的科技企业孵化加速和开放式创新等创新服务探索与生态沉淀，我们将持续深耕，聚焦科技与人文的交叉点，挖掘前沿产业的应用场景，整合产业创新要素，输出具有国际前沿理念的洞察研究与产业创新解决方案，提供优质的产业创新产品与服务，立足大湾区打造有价值的产业创新平台，培育大湾区创新创意人才，赋能未来城市可持续发展。</p>
          <p><span>对内瑞安定位：</span>帮助公司搭建大湾区产业创新生态系统，输出有价值的湾区洞察研究以及产业创新解决方案，形成具有竞争优势的产业创新平台，为公司在大湾区拓展与发展赋能。</p>
        </div>
        <div class="desc">
            <p>One-sentence positioning: InnoSpace GBA focuses on the intersection of humanities and technology, builds a valuable industrial innovation platform based on the Greater Bay Area, and empowers the sustainable development of future cities.</p>
            <p>Internal positioning: help the company to build an industrial innovation ecosystem in the Greater Bay Area, output valuable insights and research on the Bay Area and industrial innovation solutions, form an industrial innovation platform with competitive advantages, and empower the company to expand and develop in the Greater Bay Area .</p>
            <p>Overall introduction: Originated in Silicon Valley, deeply cultivated in Shanghai, and developed in the Greater Bay Area, with the concept of "creating valuable industrial links", relying on ten years of technology business incubation acceleration and open innovation and other innovative service exploration and ecological precipitation, we will Continue to deepen the cultivation, focus on the intersection of technology and humanities, explore the application scenarios of cutting-edge industries, integrate industrial innovation elements, output insight research and industrial innovation solutions with international cutting-edge concepts, provide high-quality industrial innovation products and services, and establish a foothold in the Greater Bay Area. Create a valuable industrial innovation platform, cultivate innovative and creative talents in the Greater Bay Area, and empower the sustainable development of future cities.</p>
        </div>
      </div>
    </div>
    <div class="road">
      <div class="roadTitle">
        <div class="title">发展历程</div>
        <div class="path">Development Path</div>
      </div>
      <timeLine :timeData="timeData" class="timeLine" bgColor="black"></timeLine>
    </div>
    <div class="qualification">
      <div class="abilityTitle">
        <div class="title">荣誉资质</div>
        <div class="ability">Qualification Ability</div>
      </div>
      <div v-for="(item,index) in abilityData" :key="index" class="abilityList">
        <div class="listItem">
        <ul>
          <li v-for="(subItem,i) in item.list" :key="i">
            <span>{{subItem.text}}</span>
            <span class="name">{{ subItem.title }}</span>
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
    <div class="service">
      <div class="serviceContent">
        <div class="title">
          <div>服务能力</div>
          <div class="en">Service Capabilities</div>
        </div>
        <div class="serviceList">
          <ul>
            <li v-for="(item,i) in serviceData" :key="i">
              <div class="num">
                {{item.number}}
                <span class="plus" v-if="item.more">+</span>
              </div>
              <div>{{item.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="layout">
      <div class="layoutContent">
        <div class="title">
          <div>GBA布局</div>
          <div class="en">GBA Layout</div>
        </div>
          <div class="tabContent">
            <div class="desc">
              位于深圳南山区深圳湾科技生态园，拥有近4000平米的孵化空间。重点布局Al、5G、IOT、智能硬件、海洋经济等前沿科技高新创新领域，致力于全球优秀创新企业的孵化和大企业产业加速及开放式创新服务体系的建设。
            </div>
            <div class="address">地址：深圳市南山区深圳湾科技生态园9A2栋15-16层</div>
            <div class="show">
              <img src="@/imgs/nationalLayout/img_GBA@2x.png" alt="">
            </div>
          </div>
      </div>
    </div>
    <div class="focus">
      <div class="title">
        <div>聚焦产业</div>
        <div class="en">Focus on Industry</div>
      </div>
      <layoutHover :data="focusData"></layoutHover>
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
          <div>合作咨询 · GBA</div>
          <div class="en">Cooperation consultation</div>
          <div class="info">
            <div class="mobile">
              <img src="@/assets/images/phone.png" alt="">
              <span>(86) 0755-3320 1097</span>
            </div>
            <div class="mobile right">
              <img src="@/assets/images/phone.png" alt="">
              <span>ipoclub@innospace.com.cn</span>
            </div>
          </div>
        </div>
        <div class="address">
          <img src="@/assets/images/qrCode.png" alt="">
          <div class="wechat">InnoSpace GBA 公众号</div>
        </div>
      </div>
    </div>
    <layoutFooter></layoutFooter>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import {useStore} from 'vuex'
import bgc from "@/imgs/nationalLayout/gba@2x.png";
import timeLine from '@/components/timeLine/index.vue'
import layoutHover from '@/components/layout/layoutHover.vue'
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
    number: 2,
    date:'2019',
    list: [
      {
        text: '深圳市众创空间',
        title: '',

      },
      {
        text: '深圳市众创空间协会理事',
        title: '',
      },
    ]
  },
  {
    number: 2,
     date:'2020',
    list: [
      {
        text: '国家级众创空间',
        title: '',

      },
      {
        text: '广东省科技孵化育成平台（A级）',
        title: '',
      },

    ]
  },
])
const serviceData = reactive([
  { name: '累计孵化项目', number: '70',more:true },
  { name: '知识产权统计', number: '798',more:false },
  { name: '国高企业', number: '4',more:false  },
  { name: '产业需求提供', number: '300' ,more:true},
  { name: '获得资助企业', number: '9',more:false  },
  { name: '创新生态活动', number: '300' ,more:true}
])
const focusData = reactive([
  {
    bg: new URL('../../imgs/nationalLayout/img2@2x.png', import.meta.url).href,
    title: '可持续发展',
    tips:"SUSTAINABLE DEVELOPMENT"
  },
  {
    bg: new URL('../../imgs/nationalLayout/img1@2x.png', import.meta.url).href,
    title: '可持续发展',
    tips:"SUSTAINABLE DEVELOPMENT"
  },
  {
    bg: new URL('../../imgs/nationalLayout/img1@2x.png', import.meta.url).href,
    title: '可持续发展',
    tips:"SUSTAINABLE DEVELOPMENT"
  },
  {
    bg: new URL('../../imgs/nationalLayout/img2@2x.png', import.meta.url).href,
    title: '可持续发展',
    tips:"SUSTAINABLE DEVELOPMENT"
  }
])
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
      .loca{
        font-weight: 700;
        margin-top:16px;
      }
  }
  .location{
    width:100%;
    display: flex;
    justify-content: center;
    background: #2B2E33;
    padding:100px 0;
    .localtionContent{
      width: 1280px;
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
      .desc{
        font-size: 16px;
        margin-top:60px;
        p{
          line-height: 24px;
          margin-bottom: 10px;
          span{
            font-weight: 600;
          }
        }
      }
    }
  }
  .road{
    width:100%;
    height: 664px;
    background: #fafafa;
    padding-top:100px;
    .roadTitle{
      width: 100%;
      text-align: center;
      color:#2B2E33;
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
  .service{
    width: 100%;
    height:468px;
    display: flex;
    justify-content: center;
    padding:100px 0 120px 0;
    background-image: url('@/imgs/nationalLayout/bg_school@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .serviceContent{
      width: 1280px;
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
      .serviceList{
        width:1280px;
        margin-top:80px;
        ul{
          display: flex;
          justify-content: space-between;
          li{
            width:180px;
            height: 96px;
            color:#fff;
            font-size: 16px;
            text-align: center;
            .num{
              position: relative;
              font-size: 48px;
              font-weight: 700;
              line-height: 56px;
              margin-bottom: 16px;
              .plus{
                position: absolute;
                font-size: 30px;
                top:-18px
              }
            }
          }
        }
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
  .focus{
    padding:100px 0 60px 0;
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
        margin:4px 0 80px 0;
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
        width: 240px;
        height: 240px;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .wechat{
          font-size: 14px;
          color:#999DA3;
          text-align: center;
          margin-top:16px;
        }
      }
    }

  }
}

</style>
