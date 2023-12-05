<template>
  <div class="news">
    <div class="dsc">
      <div>
        <p>看数据新闻 观商业未来</p>
        <p>最新动态</p>
      </div>
    </div>
    <div class="content">
      <h2>新闻动态</h2>
      <h3>News</h3>
      <div class="tab">
        <span
          v-for="(item, index) in tabArr"
          :key="index"
          :class="activeIndex === index ? 'active' : ''"
          @click="changeTab(index)"
          >{{ item.text }}</span
        >
      </div>
      <div class="box">
        <NewsCard :info="test" @click="toDetail(i)" v-for="i in 9" :key="i" />
      </div>
      <p class="page">下一页</p>
    </div>
    <Footer />
  </div>
</template>

<script>
import bgc from "@/imgs/bg_news1.png";
import { useStore } from "vuex";
import footer from "./news/footer.vue";
import newsCard from "./news/news-card.vue";
export default {
  setup() {
    const store = useStore();
    store.commit("changeBgc", bgc);
    store.commit("isNavTransparent", true);
  },
  components: {
    Footer: footer,
    NewsCard: newsCard,
  },
  data() {
    return {
      tabArr: [
        {
          text: "全部",
          index: 0,
        },
        {
          text: "in 动态",
          index: 1,
        },
        {
          text: "in 热点",
          index: 2,
        },
        {
          text: "in 观点",
          index: 3,
        },
        {
          text: "in 视野",
          index: 4,
        },
      ],
      activeIndex: 0,
      test: {
        title: "123",
      },
    };
  },
  name: "news",
  created() {},
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    },
    toDetail(info) {
      console.log("toDetail", info);
      const url = location.origin + "/#/newsDetail?id=1";
      window.open(url, "_blank");
    },
  },
};
</script>

<style lang='scss' scoped>
.news {
  min-height: calc(100% - 100px);
  .dsc {
    height: calc(100vh - 100px);
    div {
      position: absolute;
      left: 320px;
      bottom: 120px;
      p {
        font-size: 64px;
        line-height: 72px;
        color: #fff;
      }
      & :first-child {
        font-weight: 100;
      }
    }
  }
  .content {
    text-align: center;
    width: 1280px;
    margin: 0 auto;
    h2 {
      margin-top: 100px;
    }
    h2,
    h3 {
      color: rgba(43, 46, 51, 1);
      font-size: 30px;
      font-weight: 500;
      line-height: 40px;
    }
    h3 {
      line-height: 40px;
      margin-bottom: 72px;
    }
    .tab {
      margin-bottom: 60px;
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid rgba(90, 94, 102, 0.2);
      display: flex;
      justify-content: center;
      span {
        width: 160px;
        font-size: 16px;
        font-weight: 700;
        font-family: "Inter";
        text-align: center;
        cursor: pointer;
      }
      .active {
        color: #f53a2c;
        border-bottom: 1px solid rgba(245, 58, 44, 1);
      }
    }
    .box {
      display: flex;
      flex-wrap: wrap;
      column-gap: 40px;
      row-gap: 60px;
    }
  }
  .page {
    width: 240px;
    height: 64px;
    line-height: 64px;
    border-radius: 100px;
    opacity: 1;
    border: 1px solid #e0e0e0;
    color: #f53a2c;
    text-align: center;
    cursor: pointer;
    margin: 80px auto 120px;
  }
}
</style>