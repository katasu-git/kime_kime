<template>
  <div id="top">
    <div class="container">
      <div class="area1">
        <div class="imgAndText abc">
          <img class="takoImg" src="../assets/tako.png" />
          <p class="titleText">ばんめしキメキメ</p>
          <p class="subText">くだらないことで、ぐだらない</p>
        </div>
        <div class="bottomTextWrapper">
          <div class="bottomText">スワイプして参加人数を選択</div>
          <div class="bottomText fontBold">👇</div>
        </div>
      </div>
      <div class="area2">
        <div class="topTextWrapper">
          <div class="topText fontBold">👆</div>
          <div class="topText">トップにもどる</div>
        </div>
        <div class="buttonWrapper">
          <div class="text">何人でキメキメする？</div>
          <div class="imgWrapper">
            <div class="takoContainer" v-for="tako in takoNum">
              <div class="num" :style="{'opacity' : returnOp(tako) }">{{ tako }}</div>
              <img class="takoJoin" src="../assets/tako.png"
                :style="{'opacity': returnOp(tako) }" />
            </div>
          </div>
          <form method="post" onsubmit="return false;" action="">
            <input v-model="peopleNum" type="range" class="input-range" step="1"　min=3 max=6>
          </form>
          <button  v-on:click="goVotePage()" class="startButton">はじめる</button>
        </div>
        <div class="bottomTextWrapper">
          <div class="bottomText">ばんめしキメキメってなに？</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
      this.$router.push({
        name: 'vote',
        params: {
          routerPeopleNum: this.peopleNum,
        }
      })
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
  },
}
</script>

<style lang="scss" scoped>

.fontBold {
  font-size: 30px;
  font-weight: 600
}

.timeup {
  position: fixed;
  height: 100%;
  width: 100%;
}

#top {
  height: 100%;
  width: 100%;
  color: white;
  background-color: #E87E97;
}

.container {
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch; /* Needed to work on iOS Safari */
  background-color: #E87E97;
}
.area1 , .area2 {
  position: relative;
  scroll-snap-align: start;
  height: 100%;
}

.imgAndText {
  width: calc(100% - 24px * 2);
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

.titleText {
  margin-top: 32px;
  font-size: 32px;
  font-weight: 600;
}

.subText {
  margin-top: 16px;
  font-size: 14px;
}

.buttonWrapper {
  position: absolute;
  bottom: 30%;
  right: 0;
  left: 0;
  margin: auto;
  width: calc(100% - 24px * 2);
  .text {
    margin-left: 8px;
  }
}

.imgWrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 16px;

  img {
    width: 30px;
    margin: 4px 8px 0 8px;
  }
}

.takoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.takoJoin {
  transition: all 300ms ease;
}

.startButton {
  width: 100%;
  height: 50px;
  border:solid#F0D400;
  background-color: #F0D400;
  color:white;
  border-radius: 30px;
  font-weight:bold;
  margin-top: 64px;
}

.bottomTextWrapper, .topTextWrapper {
  position: absolute;
  bottom: 24px;
  width: 100%;
  font-size: 14px;
  text-align: center;
  color:rgba(253, 253, 253, 0.6);
}

.bottomText, .topTextWrapper{
  margin-top: 8px;
}

.topTextWrapper {
  top: 24px;
}

form, input {
  width: 100%;
  outline: none;
}

.input-range[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: rgba(253, 253, 253, 0.6);
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

@keyframes fadeIn {
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

.abc {
    animation-name: fadeIn;
    animation-duration: 1s;
    animation-timing-function: ease;
    //animation-delay: 2s;
    //animation-iteration-count: 3;
}

</style>