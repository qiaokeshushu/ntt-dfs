<template>
  <div class="card">
    <img src="" alt="" />
    <h2>
      in热点 |
      全国首个零碳未来城发展规划获批；联合利华首个"碳中和"生产基地落户广州
    </h2>
    <p>
      8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace
      GBA成功举办。8月25日，“绿色创新·湾区未来”绿色可持续产业研讨会在深圳InnoSpace
      GBA成功举办。
    </p>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    info: Object,
  },
  data() {
    return {};
  },
  created() {
    // console.log("info", this.info);
  },
};
</script>
<style lang='scss' scoped>
.card {
  width: 400px;
  height: 346px;
  color: #2b2e33;
  font-family: "Inter";
  overflow: hidden;
  &:hover {
    color: red;
  }
  img {
    width: 400px;
    height: 240px;
  }
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
