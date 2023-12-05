<template>
  <div class="footer">
    <div class="upWrapper">
      <div class="left">
        <div class="text1">合作咨询</div>
        <div class="text2">Cooperation consultation</div>
        <div class="info">
          <div class="phone common">
            <img src="@/assets/images/phone.png" alt="">
            <span>(86) 021 - 61485266</span>
          </div>
          <div class="email common">
            <img src="@/assets/images/email.png" alt="">
            <span>ipoclub@innospace.com.cn</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/images/qrCode.png" alt="">
        <div class="text">InnoSpace 公众号</div>
      </div>
    </div>
    <div class="downWrapper">
      <div>
        © InnoSpace+ 2016 All Right Reserved
      </div>
      <div>
        网站备案号沪ICP备31011002001271号
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'commonFooter',
    data(){
      return {

      }
    },
    props: {
      text2: {
        type: String,
        default: '开放式创新服务'
      }
    }
}
</script>
<style lang='scss'>
.footer {
  width: 100%;
  opacity: 1;
  border: 0.67px solid rgba(90,94,102,0.2);
  background: rgba(43,46,51,1);
  display: flex;
  align-items: center;
  flex-direction: column;
  .upWrapper {
    display: flex;
    width: 860px;
    justify-content: space-between;
    .left {
      margin-top: 108px;
      .text1 {
        width: 80px;
        height: 26.67px;
        opacity: 1;
        color: rgba(255,255,255,1);
        font-size: 20px;
        font-weight: 500;
        font-family: "PingFang SC";
        text-align: left;
        line-height: 26.67px;
      }
      .text2 {
        margin-top: 20px;
        width: 161.33px;
        height: 18.67px;
        opacity: 1;
        color: rgba(255,255,255,1);
        font-size: 13.33px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
      }
      .info {
        display: flex;
        color: rgba(255,255,255,1);
        font-size: 10.67px;
        font-weight: 400;
        font-family: "Inter";
        text-align: left;
        img {
          width: 12px;
          height: 12px;
        }
        .common {
          margin-top: 53px;
          display: flex;
          span {
            margin-left: 10px;
          }
          padding-bottom: 14px;
          border-bottom: 1px solid #5A5E66;
        }
        .phone {

        }
        .email {
          margin-left: 33px;
        }
      }
    }
    .right {
      img {
        margin-top: 108px;
        width: 160px;
        height: 160px;
      }
      .text {
        margin-top: 10px;
        text-align: center;
        color: rgba(153,157,163,1);
        font-size: 9.33px;
        font-weight: 400;
        font-family: "Inter";
      }
    }
  }
  .downWrapper {
    width: 860px;
    color: rgba(90,94,102,1);
    font-size: 9.33px;
    font-weight: 400;
    font-family: "Inter";
    margin-top: 140px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    div {

    }
  }
}
</style>
