<template>
  <div :class="['machine', {'bgBigger': animateFlag}]" :style="{backgroundImage:`url(${getImageUrl(item.imgName)})`}">
    <div class="machineTextWrapper" @mouseover="focus" @mouseleave="leave">
      <div :class="['text1',{'textShow': animateFlag}]">
        {{ item.title1 }}
      </div>
      <div class="vector"></div>
      <div class="text2">
        {{ item.title2 }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'machine',
  data() {
    return {
      flag: false,
      animateFlag: false
    }
  },
  props: {
    item: {
      required: true,
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    getImageUrl(name) {
      return new URL(`../../../imgs/inovative/IndustrialInnovation/${name}.png`, import.meta.url).href;
    },
    focus() {
      console.log(111)
      this.animateFlag = true
    },
    leave() {
      this.animateFlag = false
    }
  }
}
</script>
<style lang='scss'>

.machine {
  margin-top: 26px;
  margin-left: 26px;
  width: 413.33px;
  height: 170.67px;
  background-image: url("@/imgs/inovative/IndustrialInnovation/machine.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;



  .machineTextWrapper {
    width: 193.33px;
    background: rgba(0, 0, 0, 0.4);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .text1 {
      color: rgba(255, 255, 255, 1);
      font-size: 12px;
      font-weight: 400;
      font-family: "Inter";
      text-align: center;
      width: 193.33px;
    }

    .vector {
      border-top: 1px solid white;
      width: 16px;
      margin-top: 8px;
      margin-bottom: 8px;
      display: none;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      opacity: 0;
    }
    .text2 {
      //letter-spacing: .2rem;
      font-size: 9px;
      font-weight: 400;
      font-family: "Inter";
      text-align: center;
      opacity: 0;
    }
  }

  .machineTextWrapper:hover {
    .vector {
      display: block;
      animation: wordShow 0.4s;
      animation-iteration-count:1;
      animation-fill-mode: forwards;
    }
    .text2 {
      display: block;
      animation: wordShow 0.4s;
      animation-iteration-count:1;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes topTextMove {
  from {

  }
  to {

  }
}

@keyframes wordShow {
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: block;
    opacity: 1;
  }
}

.textShow {
  animation: topTextMove 2s;
  animation-iteration-count:1;
  animation-fill-mode: forwards;
}

@keyframes bgcBig {
  from {
    background-size: 100%;
  }
  to {
    background-size: 110%;
  }
}
.bgBigger {
  animation: bgcBig 0.4s;
  animation-iteration-count:1;
  animation-fill-mode: forwards;
}
</style>
