<template>
  <div id="top">
    <div class="container">
      <div class="area1">
        <div class="wrapper">
          <img class="takoImg binding" src="../assets/tako.png" />
          <p class="fadeIn fs20 fw600 op0 mt4vh">ばんめしキメキメ</p>
          <p class="fadeIn fs12 op0">くだらないことで、ぐだらない</p>
        </div>
        <div class="bottomText fadeInLast op0">
          <p class="fs12">スワイプして参加人数を選択</p>
          <p class="fs12 mb2vh">👇</p>
        </div>
      </div>
      <div class="area2">
        <div class="formContainer">
          <div class="topText fs12 mt2vh">
            <p class="fs12">👆</p>
            <p class="fs12">トップにもどる</p>
          </div>
          <div class="takoWrapper mt20vh">
            <div class="takoContainer" v-for="tako in takoNum">
                <div :style="{'opacity' : returnOp(tako) }">{{ tako }}</div>
                <img src="../assets/tako.png"
                  :style="{'opacity': returnOp(tako) }" />
            </div>
          </div>
          <form class="mt2vh" method="post" onsubmit="return false;" action="">
            <input v-model="peopleNum" type="range" class="input-range" step="1"　min=3 max=6>
          </form>
          <div class="topText mt4vh fs12">
            <p>参加人数を選択</p>
          </div>
        </div>
        <div class="buttonWrapper">
          <button  v-on:click="goVotePage()">はじめる</button>
          <button class="buttonBkWhite" v-on:click="goToRulePage()">このアプリの使い方をみる</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rule from "../views/Rule";

export default {
  name: 'top',
  data () {
    return {
      peopleNum: 3, //スライダーは文字列で入る
      takoNum: 6,
    }
  },
  methods: {
    goVotePage: function() {
      setTimeout(() => {
          this.$router.push({
          name: 'vote',
          params: {
            routerPeopleNum: this.peopleNum,
          }
        })
      }, 300);
    },
    goToRulePage: function() {
      setTimeout(() => {
          this.$router.push({
          name: 'rule',
        })
      }, 300);
    },
    returnOp: function(num) {
      switch(Number(this.peopleNum)) {
        case 3:
          if(num > 0 && num < 4) {
            return 1;
          } else {
            return .3
          }
          return .3;
        case 4:
          if(num > 0 && num < 5) {
            return 1;
          } else {
            return .3
          }
        case 5:
          if(num != 6) {
            return 1;
          } else {
            return .3
          }
        case 6:
          return 1;
        default:
          return .3;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
a, a:visited {
  color: white;
}

.op0 {
  opacity: 0;
}

.fw600 {
  font-weight: 600
}

.fs12 {
  font-size: 12px;
}

.fs20 {
  font-size: 30px;
}

.mt2vh {
  margin-top: 2vh;
}

.mt4vh {
  margin-top: 4vh;
}

.mt8vh {
  margin-top: 8vh;
}

.mt12vh {
  margin-top: 12vh;
}

.mt20vh {
  margin-top: 20vh;
}

.mb2vh {
  margin-bottom: 2vh;
}

.timeup {
  position: fixed;
  height: 100%;
  width: 100%;
}

#top, button {
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, 1);
  background-color: #E87E97;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  position: absolute;
  height: 100%;
  width: calc(100% - 1px);
  background-color: white;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch; /* Needed to work on iOS Safari */
  background-color: #E87E97;
}
.area1 , .area2{
  position: relative;
  scroll-snap-align: start;
  height: 100%;
}

.area2 {
  background-color: #E87E97;
  color: #484848;
  overflow: scroll;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.wrapper {
  width: calc(100vw - 48px);
  position: absolute;
  bottom: 50%;
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

.takoImg {
  width: 80px;
}

.bottomText {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  color: white;
}

.formWrapper {
  position: absolute;
  bottom: calc(24px + 35%);
  right: 0;
  left: 0;
  margin: auto;
  width: calc(100vw - 48px);
  .text {
    margin-left: 8px;
  }
}

.formContainer {
  height: 50%;
  width: calc(100vw - 48px);
  background-color: #E87E97;
  border-radius: 0 0 0 43px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.topText {
  text-align: center;
  color: white;
}

.takoWrapper {
  width: calc(100vw - 48px);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.takoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  img {
    transition: all 300ms ease;
    width: 30px;
    margin: 4px 4px 0 4px;
  }
}

.buttonWrapper {
  position: absolute;
  right: 0;
  left: 0;
  bottom: calc(24px + 10%);
  margin: auto;
  width: calc(100vw - 48px);
}

button {
  width: calc(100vw - 48px);
  height: 50px;
  border:solid 2px #F0D400;
  background-color: #F0D400;
  border-radius: 30px;
  font-weight:bold;
  margin-top: 16px;
  transition: all 100ms ease;
  outline: none;
  z-index: 2;
}

button:active {
  transform: scale(1.1, 1.1);
}

.buttonBkWhite {
  background-color: rgba(#484848, 0);
  color: white;
}

form, input {
  outline: none;
  width: calc(100% - 32px);
}

.input-range[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  color: #E87E97;
  background-color: rgba(#484848, .4);
  height: 2px;
  width: 100%;
  margin-top: 32px;

  &:focus,
  &:active {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    position: relative;
    border: none;
    width: 24px;
    height: 24px;
    display: block;
    background-color: #F0D400;
    border-radius: 50%;
    -webkit-border-radius: 50%;
  }
}

@keyframes binding {
    0% {
      transform: scale(.1, .1);
      opacity: 0;
    }
    80% {
      transform: scale(2, 2);
      opacity: .5;
    }
    90% {
      opacity: .8;
    }
    100% {
      transform: scale(1, 1);
      opacity: 1;
    }
}

.binding {
    animation-name: binding;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-delay: .1s;
    //animation-iteration-count: 3;
}

@keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
}

@keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}

.fadeOut {
    animation-name: fadeOut;
    animation-duration: .35s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    //animation-delay: 2s;
    //animation-iteration-count: 3;
}

.fadeIn, .fadeInLast {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
}

.fadeInNoDelay {
  animation-name: fadeIn;
  animation-duration: .5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.fadeInLast {
  animation-delay: 1.6s;
}

.modalWrapper {
  opacity: 0;
}
</style>