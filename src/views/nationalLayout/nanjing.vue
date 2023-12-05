<template>
  <div class="content">
    <div class="contain">
      <div class="descBottom">
        <div>完整的创业生态服务体系</div>
        <div class="loca">InnoSpace 南京</div>
      </div>
    </div>
    <div class="location">
      <div class="localtionContent">
        <div class="title">项目介绍</div>
        <div class="path">Project Description</div>
        <div class="desc">
          <p>位于南京市玄武区珠江路创业大街，北临南京大学、东南大学，珠江路沿街正对玄武区区政府，背靠内秦淮河。作为InnoSpace立足南京，乃至辐射华东区域的重点项目，以实现多区域资源与创新产业有效结合及协同发展的目标，并带动长三角地区创新创业的快速发展与深度融合。</p>
        </div>
        <div class="desc">
            <p>It is located in Chuangye Street, Zhujiang Road, Xuanwu District, Nanjing City, with Nanjing University and Southeast University in the north, and the Zhujiang Road along the street is facing the Xuanwu District Government and backed by the Inner Qinhuai River. As a key project of InnoSpace based in Nanjing and even radiating to East China, it aims to achieve the goal of effective integration and coordinated development of multi-regional resources and innovative industries, and to drive the rapid development and deep integration of innovation and entrepreneurship in the Yangtze River Delta region.</p>
        </div>
        <div class="address">地址：南京市玄武区珠江路与杨家胡同交叉口西南40米</div>
          <div class="show">
            <img src="@/imgs/nationalLayout/img_nanjing@2x.png" alt="">
          </div>
      </div>
    </div>
    <div class="serviceDetail">
      <div class="title">
        <div>服务简介</div>
        <div class="en">Service Introduction</div>
      </div>
      <layoutHover :data="serviceData"></layoutHover>
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
    <layoutFooter></layoutFooter>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import {useStore} from 'vuex'
import bgc from "@/imgs/nationalLayout/nanjing@2x.png";
import layoutHover from '@/components/layout/layoutHover.vue'
import layoutFooter from '@/components/layout/layoutFooter.vue'
const store = useStore();
const serviceData = reactive([
  {
    bg: new URL('../../imgs/nationalLayout/img_tec@2x.png', import.meta.url).href,
    title: '多区域资源与创新产业结合',
    tips:"INNOVATIVE INDUSTRIES"
  },
  {
    bg: new URL('../../imgs/nationalLayout/img_tec@2x.png', import.meta.url).href,
    title: '多区域资源与创新产业结合',
    tips:"INNOVATIVE INDUSTRIES"
  },
  {
    bg: new URL('../../imgs/nationalLayout/img_tec@2x.png', import.meta.url).href,
    title: '多区域资源与创新产业结合',
    tips:"INNOVATIVE INDUSTRIES"
  },
  {
    bg: new URL('../../imgs/nationalLayout/img_tec@2x.png', import.meta.url).href,
    title: '多区域资源与创新产业结合',
    tips:"INNOVATIVE INDUSTRIES"
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
        margin: 4px 0 60px 0;
      }
      .desc{
        font-size: 16px;
        margin-top:24px;
        p{
          line-height: 24px;
          margin-bottom: 10px;
          span{
            font-weight: 600;
          }
        }
      }
      .address{
        margin:24px 0 60px 0;
        font-size: 16px;
        color:#999DA3
      }
      .show{
          width: 100%;
          height: 280px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      
    }
  }
  .serviceDetail{
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
    background: #2B2E33;
    padding:100px 0;
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
}

</style>