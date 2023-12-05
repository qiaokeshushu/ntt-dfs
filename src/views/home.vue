<template>
  <div class="home">
    <!-- <div v-show="index === 1" class="module1">
      <p class="text1">创造</p>
      <p class="text2">有价值的产业链接</p>
      <p class="text3">
        一家专注于大企业开放式创新和科技企业孵化加速的创新服务机构
      </p>
      <p class="about">关于我们</p>
    </div>
    <div v-show="index === 2" class="module2">
      <div class="left">
        <div class="content">
          <p class="text1">InnoSpace</p>
          <p class="text2">以创造有价值的产业链接</p>
          <p class="text3">为理念打造创新型技术与服务平台</p>
          <p class="text4">以技术创新赋能产业升级，以产业资源助力企业发展。</p>
          <p class="text4">
            围绕前沿产业与科技领域，InnoSpace 以 “技术创新产业化” 为核心，
          </p>
          <p class="text4">以 “产创合作+技术转化” 模式链接场景、技术与资本，</p>
          <p class="text4">搭建起 “三擎驱动” 开放型生态系统。</p>
          <p class="about">关于我们</p>
        </div>
      </div>
      <div class="right" />
    </div>
    <div v-show="index === 3" class="module3">
      <div class="item">
        <p class="top">InnoSpace</p>
        <div class="bottom">
          <img src="../imgs/ic1.png" alt="" />
          <p class="title">
            <span>产业创新</span>
            <span>Industrial Innovation</span>
          </p>
        </div>
      </div>
      <div class="item">
        <p class="top">InnoSpace</p>
        <div class="bottom">
          <img src="../imgs/ic2.png" alt="" />
          <p class="title">
            <span>创业加速</span>
            <span>Entrepreneurship acceleration</span>
          </p>
        </div>
      </div>
      <div class="item">
        <p class="top">InnoSpace</p>
        <div class="bottom">
          <img src="../imgs/ic3.png" alt="" />
          <p class="title">
            <span>创新智库</span>
            <span>Innovation think tank</span>
          </p>
        </div>
      </div>
      <div class="item">
        <p class="top">InnoSpace</p>
        <div class="bottom">
          <img src="../imgs/ic4.png" alt="" />
          <p class="title">
            <span>创新生态</span>
            <span>Innovation Ecology</span>
          </p>
        </div>
      </div>
    </div>
    <div v-show="index === 4" class="module4">
      <div class="item shanghai">
        <p class="ch">上海</p>
        <p class="en">SHANGHAI</p>
      </div>
      <div class="item shenzhen">
        <p class="ch">深圳</p>
        <p class="en">SHENZHEN</p>
      </div>
      <div class="item nanjing">
        <p class="ch">南京</p>
        <p class="en">NANJING</p>
      </div>
    </div>
    <div class="dot">
      <p :class="handlerClass(1)" />
      <p :class="handlerClass(2)" />
      <p :class="handlerClass(3)" />
      <p :class="handlerClass(4)" />
    </div> -->
    <swiper
      :modules="modules"
      ref="mySwiper"
      class="swiper"
      :pagination="{ clickable: true, el: '.swiper-pagination' }"
      :options="swiperOption"
      direction="vertical"
      :mousewheel="true"
      @slideChange="slideChange"
    >
      <swiper-slide class="slide">
        <div class="module1">
          <p class="text1">创造</p>
          <p class="text2">有价值的产业链接</p>
          <p class="text3">
            一家专注于大企业开放式创新和科技企业孵化加速的创新服务机构
          </p>
          <p class="about">关于我们</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="module2">
          <div class="left">
            <div class="content">
              <p class="text1">InnoSpace</p>
              <p class="text2">以创造有价值的产业链接</p>
              <p class="text3">为理念打造创新型技术与服务平台</p>
              <p class="text4">
                以技术创新赋能产业升级，以产业资源助力企业发展。
              </p>
              <p class="text4">
                围绕前沿产业与科技领域，InnoSpace 以 “技术创新产业化” 为核心，
              </p>
              <p class="text4">
                以 “产创合作+技术转化” 模式链接场景、技术与资本，
              </p>
              <p class="text4">搭建起 “三擎驱动” 开放型生态系统。</p>
              <p class="about">关于我们</p>
            </div>
          </div>
          <div class="right" />
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="module3">
          <div class="item" @click="handleRoute('/innovative/IndustrialInnovation')">
            <p class="top">InnoSpace</p>
            <div class="bottom">
              <img src="../imgs/ic1.png" alt="" />
              <p class="title">
                <span>产业创新</span>
                <span>Industrial Innovation</span>
              </p>
            </div>
          </div>
          <div class="item" @click="handleRoute('/innovative/InnovationAcceleration')">
            <p class="top">InnoSpace</p>
            <div class="bottom">
              <img src="../imgs/ic2.png" alt="" />
              <p class="title">
                <span>创业加速</span>
                <span>Entrepreneurship acceleration</span>
              </p>
            </div>
          </div>
          <div class="item" @click="handleRoute('/innovative/InnovationThinkTank')">
            <p class="top">InnoSpace</p>
            <div class="bottom">
              <img src="../imgs/ic3.png" alt="" />
              <p class="title">
                <span>创新智库</span>
                <span>Innovation think tank</span>
              </p>
            </div>
          </div>
          <div class="item" @click="handleRoute('/innovative/innovationEcology')">
            <p class="top">InnoSpace</p>
            <div class="bottom">
              <img src="../imgs/ic4.png" alt="" />
              <p class="title">
                <span>创新生态</span>
                <span>Innovation Ecology</span>
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="slide">
        <div class="module4">
          <div class="item shanghai" @click="handleRoute('/nationalLayout/shanghai')">
            <p class="ch">上</p>
            <p class="en">SHANGHAI</p>
            <p class="ch">海</p>

          </div>
          <div class="item shenzhen" @click="handleRoute('/nationalLayout/gba')">
            <p class="ch">深</p>
            <p class="en">SHENZHEN</p>
            <p class="ch">圳</p>

          </div>
          <div class="item nanjing" @click="handleRoute('/nationalLayout/nanjing')">
            <p class="ch">南</p>
            <p class="en">NANJING</p>
            <p class="ch">京</p>

          </div>
        </div>
      </swiper-slide>
      <div
        class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-vertical"
        :class="{ activeThree: index === 2 }"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { useStore } from "vuex";
import bgc1 from "@/imgs/bg_home_1.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Mousewheel } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ref } from "vue";
import {useRouter} from 'vue-router'
export default {
  setup() {
    const store = useStore();
    const router = useRouter()
    const index = ref(0);
    const swiperOption = ref({
      direction: "vertical", //设置竖向轮播
      loop: false,
      autoplay: true,
      mousewheel: true,
      speed: 500,
      resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。
    });
    store.commit("changeBgc", bgc1);
    store.commit("isNavTransparent", true);
    function slideChange(e) {
      index.value = e.realIndex;
      // console.log(e);
      if (index.value === 0) {
        store.commit("changeBgc", bgc1);
        store.commit("isNavTransparent", true);
      } else {
        store.commit("changeBgc", "");
        store.commit("isNavTransparent", false);
      }
      // if(index.value === 2) {
      //   const swiperPages = document.querySelectorAll('.swiper-pagination-bullet')
      //   console.log(swiperPages);
      //   swiperPages.forEach((item)=>{
      //     item.style.backgroundColor = '#494949'
      //   })
      // } else {
      //   const swiperPages = document.querySelectorAll('.swiper-pagination-bullet')
      //   console.log(swiperPages);
      //   swiperPages.forEach((item)=>{
      //     item.style.backgroundColor = '#ffffff'
      //   })
      // }
    }
    function handleRoute (path){
      router.push(path)
    }
    return {
    // 属性
      store,
      index,
      swiperOption,
      modules: [Autoplay, Pagination, Mousewheel],
      // 方法
      slideChange,
      handleRoute,
    };
  },
  name: "home",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    // turnPage(e) {
    //   if (this.timer) {
    //     clearTimeout(this.timer);
    //     this.timer = null;
    //   }
    //   this.timer = setTimeout(() => {
    //     this.handlerScroll(e);
    //   }, 100);
    // },
    // handlerScroll(e) {
    //   const down = e.wheelDelta < 0;
    //   if (down) {
    //     this.index >= 4 ? (this.index = 1) : this.index++;
    //   } else {
    //     this.index <= 1 ? (this.index = 4) : this.index--;
    //   }
    //   if (this.index === 1) {
    //     this.store.commit("changeBgc", bgc1);
    //     this.store.commit("isNavTransparent", true);
    //   } else {
    //     this.store.commit("changeBgc", "");
    //     this.store.commit("isNavTransparent", false);
    //   }
    // },
    // handlerClass(index) {
    //   let className = "";
    //   if (this.index === index) {
    //     if (this.index === 3) {
    //       className = "active deep-color";
    //     } else {
    //       className = "active";
    //     }
    //   } else {
    //     if (this.index === 3) {
    //       className = "deep-color";
    //     } else {
    //       className = "";
    //     }
    //   }
    //   return className;
    // },
  },
};
</script>

<style  lang='scss' scoped>
.home {
  height: calc(100% - 100px);
  position: relative;
  .module1 {
    color: #fff;
    position: absolute;
    left: 180px;
    bottom: 120px;
    line-height: 72px;
    .text1 {
      font-size: 64px;
      font-weight: 100;
    }
    .text2 {
      font-size: 64px;
      font-weight: 400;
    }
    .text3 {
      font-size: 18px;
    }
  }
  .module2 {
    height: 100%;
    display: flex;
    div {
      height: 100%;
    }
    .left {
      flex: 1;
      position: relative;
      .content {
        position: absolute;
        top: 50%;
        height: 400px;
        transform: translateY(-50%);
        margin-left: 180px;
        p {
          line-height: 30px;
        }
        .text1 {
          color: rgba(245, 58, 44, 1);
          font-size: 16px;
          font-weight: 700;
          font-family: "Inter";
          line-height: 28px;
          margin-bottom: 40px;
        }
        .text2 {
          color: rgba(37, 40, 46, 1);
          font-size: 36px;
          font-weight: 100;
          margin-bottom: 20px;
        }
        .text3 {
          color: rgba(37, 40, 46, 1);
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 40px;
        }
        .text4 {
          color: rgba(37, 40, 46, 1);
          font-size: 18px;
          font-weight: 400;
          font-family: "Inter";
        }
        & :last-child {
          margin-top: 40px;
        }
      }
    }
    .right {
      flex: 1;
      background: url("@/imgs/bg_home_2.png") no-repeat;
      background-size: cover;
    }
  }
  .module3 {
    height: 100%;
    display: flex;
    justify-content: center;
    column-gap: 20px;
    align-items: center;
    .item {
      flex-shrink: 0;
      width: 20%;
      height: 89%;
      background: url("@/imgs/bg_home_3.png") no-repeat;
      background-size: cover;
      color: #fff;
      font-family: "Inter";
      font-size: 16px;
      position: relative;
      overflow: hidden;
      .top {
        margin-top: 30px;
        margin-left: 30px;
      }
      .bottom {
        position: absolute;
        left: 24px;
        bottom: 36px;
        display: flex;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
          border: 1px dashed rgba(255, 255, 255, 1);
          margin-right: 10px;
        }
        .title {
          display: flex;
          flex-direction: column;
          padding-left: 15px;
          border-left: 1px solid rgba(255, 255, 255, 1);
          span {
            opacity: 0.6;
            line-height: 24px;
            white-space: nowrap;
          }
          & :first-child {
            opacity: 1;
            font-size: 28px;
            font-weight: 700;
            line-height: 36px;
          }
        }
      }
    }
  }
  .module4 {
    height: 100%;
    display: flex;
    .shanghai {
      background: url("@/imgs/img_shanghai.png") no-repeat;
    }
    .shenzhen {
      background: url("@/imgs/img_shenzhen.png") no-repeat;
    }
    .nanjing {
      background: url("@/imgs/img_nanjing.png") no-repeat;
    }
    .item {
      flex: 1;
      height: 100%;
      background-size: cover;
      color: #fff;
      position: relative;
      font-family: "Inter";
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .ch {
        font-size: 40px;
        font-weight: 700;
      }
      .en {
        font-size: 16px;
        font-weight: 400;
        margin: 30px 0;
        letter-spacing: 38.4px;
      }
    }
  }
  .about {
    width: 200px;
    height: 56px;
    line-height: 56px !important;
    text-align: center;
    border-radius: 100px;
    border: 1px solid rgba(245, 58, 44, 1);
    font-size: 16px;
    color: rgba(245, 58, 44, 1);
    cursor: pointer;
  }
  .dot {
    position: absolute;
    top: 50%;
    right: 75px;
    width: 36px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 36px;
    p {
      height: 6px;
      width: 6px;
      border-radius: 100%;
      background-color: #fff;
    }
    .active {
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 36px;
        height: 36px;
        border-radius: 100%;
        border: 1px solid rgba(255, 255, 255, 0.4);
        position: absolute;
        bottom: -17px;
        right: -17px;
      }
    }
    .deep-color {
      background-color: #494949;
      &::before {
        border: 1px solid rgba(73, 73, 73, 0.2);
      }
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang='scss'>
.swiper-pagination {
}
.swiper-pagination-bullet {
  background-color: #fff;
  width: 6px;
  height: 6px;
  margin-bottom: 30px !important;
  margin-right: 60px !important;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
  position: relative;
}
.swiper-pagination-bullet-active:after {
  content: " ";
  width: 36px;
  position: absolute;
  height: 36px;
  border-radius: 50%;
  opacity: 1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.activeThree {
  .swiper-pagination-bullet {
    background-color: #494949;
  }
  .swiper-pagination-bullet-active {
    background-color: #494949;
    position: relative;
  }
  .swiper-pagination-bullet-active:after {
    border: 1px solid rgba(73, 73, 73, 0.2);
  }
}
</style>