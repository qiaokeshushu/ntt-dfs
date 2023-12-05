<template >
  <div class="timeLine">
    <div class="list" >
      <ul ref="ulRef">
        <li v-for="(item,i ) in timeData" :key="i" :class="{liBlack:bgColor==='black'}">
          <div class="date">{{item.date}}</div>
          <div v-for="(subItem,idx) in item.list" key="idx" class="subitem">
            {{subItem}}
          </div>
        </li>
      </ul>
    </div>
    <div class="btn">
      <img :src="rightIcon" alt="" @click="moveRight">
    </div>
    <div class="btn" style="margin-left:3px">
      <img :src="leftIcon" alt="" @click="moveleft" v-if="timeIndex>0">
    </div>
  </div>
</template>
<script setup>
import {ref, computed} from 'vue'
const ulRef = ref(null)
const timeIndex = ref(0)
const { timeData, bgColor } = defineProps(['timeData', 'bgColor'])
const leftIcon = computed(() => {
  return bgColor!=='black'? new URL('../../imgs/nationalLayout/arrow_left@2x.png', import.meta.url).href:new URL('../../imgs/nationalLayout/arrow_left_white@2x.png', import.meta.url).href
}) 
const rightIcon = computed(() => {
  return bgColor!=='black'? new URL('../../imgs/nationalLayout/arrow_right@2x.png', import.meta.url).href:new URL('../../imgs/nationalLayout/arrow_right_white@2x.png', import.meta.url).href
}) 
const moveRight = () => {
  if(timeIndex.value === timeData.length-5) return 
  timeIndex.value+=1
  ulRef.value.style.left = timeIndex.value *(-320)+ 'px'
}

const moveleft = () => {
  timeIndex.value -= 1
  ulRef.value.style.left = timeIndex.value *(-320)+ 'px'
}
</script>
<style scoped lang="scss">
.timeLine{
    display: flex;
    justify-content: center;
    .btn{
      width:40px;
      img{
        width: 40px;
        cursor:pointer;
      }
    }
  .list{
    position: relative;
    width:1280px;
    overflow: hidden;
    ul{
      display: flex;
      position: absolute;
      top:0;
      left:0;
      transition: all 0.5s;
      li{
        width:320px;
        flex-shrink: 0;
        position: relative;
        &:after{
          position: absolute;
          content:'';
          width: 212px;
          height:2px;
          background: #fff;
          top:20px;
          left:104px
        }
        .date{
          width:100px;
          height:40px;
          border:2px solid #5A5E66;
          border-radius: 20px;
          text-align: center;
          font-size: 20px;
          color: #fff;
          line-height: 36px;
          font-weight: 700;
        }
        .subitem{
          position: relative;
          padding-left: 15px;
          margin-top: 10px;
          color: #fff;
          font-size: 16px;
          line-height: 28px;
          max-width: 290px;
          &:before{
            position: absolute;
            content:'';
            width:4px;
            height:4px;
            border-radius:50%;
            background: #fff;
            top: 12px;
            left: 4px;
          }
        }
        &.liBlack{
          &:after{
            background: #2B2E33;
          }
          .date{
            border:2px solid #E0E0E0;
            color:#2B2E33;
          }
          .subitem{
            color: #2B2E33;
            &:before{
              background: #2B2E33;
            }
          }
        }
      }
    }
  }
}
</style>