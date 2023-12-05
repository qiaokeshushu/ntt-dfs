<template >
  <div class="layoutHover">
    <ul>
      <li 
        v-for="(item,i) in data" 
        :key="i" 
        :style="{'background-image':`url(${item.bg})`}"
        :class="{active:hoverIndex === i}"
        @mouseleave="mouseleave"
        @mouseover="mouseover(i)"
        >
        <div class="title">{{item.title}}</div>
        <div class="lineEn">
          <div class="line">___</div>
          <div class="en">{{item.tips}}</div>
        </div>
        
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const hoverIndex = ref(null)
const { data } = defineProps(['data'])
const mouseover = (i)=>{
  hoverIndex.value = i 
}
const mouseleave = () => {
  hoverIndex.value = null
}
</script>
<style scoped lang="scss">
  .layoutHover{
    width: 1280px;
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width:620px;
        height:256px;
        margin-bottom:40px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        transition: all 0.3s;
        color:#fff;
        text-align: center;
        &.active{
          background-size: 110% 110%;
          background-position: -10px -10px ;
          .title{
            margin-top:100px;
          }
          .lineEn{
              opacity: 1;
              margin-top:0px;
          }
        }
        .title{
          font-size:20px;
          line-height: 28px;
          margin-top:114px;
          transition: all 0.3s;
        }
        .lineEn{
          text-align: center;
          font-size: 14px;
          line-height: 22px;
          transition: all 0.3s;
          margin-top:10px;
          opacity: 0;
        }

        .line{
          margin-bottom: 11px;
        }

      }
    }
  }
</style>