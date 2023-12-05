<template>
<!--  <div class="footer">-->
<!--    <div class="downWrapper">-->
<!--      <div>-->
<!--        © InnoSpace+ 2016 All Right Reserved-->
<!--      </div>-->
<!--      <div>-->
<!--        网站备案号沪ICP备31011002001271号-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="downWrapper">
    <div>
      © InnoSpace+ 2016 All Right Reserved
    </div>
    <div>
      网站备案号沪ICP备31011002001271号
    </div>
  </div>
</template>
<script>
  export default {
    name: 'commonFooter2',
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
//.footer {
//  width: 100%;
//  opacity: 1;
//  border: 0.67px solid rgba(90,94,102,0.2);
//  background: rgba(43,46,51,1);
//  display: flex;
//  align-items: center;
//  //justify-content: center;
//  flex-direction: column;
//  .downWrapper {
//    width: 860px;
//    color: rgba(90,94,102,1);
//    font-size: 9.33px;
//    font-weight: 400;
//    font-family: "Inter";
//    margin-top: 140px;
//    display: flex;
//    justify-content: space-between;
//    margin-bottom: 20px;
//    div {
//
//    }
//  }
//}
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
</style>
