<template>
  <div id="top">
    <div class="container">
      <div class="area1">
        <div class="imgAndText">
          <img class="takoImg binding" src="../assets/tako.png" />
          <p class="titleText fadeIn">ばんめしキメキメ</p>
          <p class="subText fadeIn">くだらないことで、ぐだらない</p>
        </div>
        <div class="bottomTextWrapper op0 fadeInLast">
          <div class="bottomText">スワイプして参加人数を選択</div>
          <div class="bottomText fontBold">👇</div>
        </div>
      </div>
      <div class="area2">
        <div class="pinkAreaTop">
            <div class="fontBold">👆</div>
            <div class="">トップにもどる</div>
        </div>
        <div class="buttonWrapper">
          <div class="text">参加人数</div>
          <div class="imgWrapper">
            <div class="takoContainer" v-for="tako in takoNum">
              <div class="num" :style="{'opacity' : returnOp(tako) }">{{ tako }}</div>
              <img class="takoJoin" src="../assets/takoPink.png"
                :style="{'opacity': returnOp(tako) }" />
            </div>
          </div>
          <form method="post" onsubmit="return false;" action="">
            <input v-model="peopleNum" type="range" class="input-range" step="1"　min=3 max=6>
          </form>
          <button  v-on:click="goVotePage()" class="startButton">はじめる</button>
        </div>
        <div class="pinkAreaBottom">
          <div class="">使い方を見る</div>
          <div class="fontBold">👇</div>
        </div>
      </div>
      <div class="area3">
        <div class="exContainer">
          <img class="example" src="../assets/ex1.png"/>
          <p>1. 参加人数を選ぶ</p>
        </div>
      </div>
      <div class="area4">
        <div class="exContainer">
          <img class="example" src="../assets/ex2.png"/>
          <p>2. アリ・ナシをキメる</p>
          <p>終わったらスマホを次の人へ渡す</p>
        </div>
      </div>
      <div class="area5">
        <div class="exContainer">
          <img class="example" src="../assets/ex3.png"/>
          <p>3. 食べたい順番に並び替える</p>
        </div>
        <div class="bottomTextWrapper">
          <a href="/" class="bottomText">トップにもどる</a>
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
      setTimeout(() => {
          this.$router.push({
          name: 'vote',
          params: {
            routerPeopleNum: this.peopleNum,
          }
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
  },
}
</script>

<style lang="scss" scoped>
a, a:visited {
  color: white;
}

.op0 {
  opacity: 0;
}

.fontBold {
  font-size: 20px;
  font-weight: 600
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
.area1 , .area2, .area3, .area4, .area5{
  position: relative;
  scroll-snap-align: start;
  height: 100%;
}

.area2 {
  background-color: #FEFEFE;
  color: #484848;
}

.pinkAreaTop, .pinkAreaBottom {
  width: 100%;
  height: 10%;
  background-color: #E87E97;
  color: white;
  border: solid 0 #E87E97;
  border-radius: 0 0 43px 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.pinkAreaBottom {
  position: absolute;
  bottom: 0;
  border-radius: 43px 43px 0 0;
}

.area3, .area4, .area5 {
  display: flex;
  justify-content: center;
  font-weight: 600;
}

.area4, .area5 {
  margin-top: -30%;
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
  opacity: 0;
}

.subText {
  margin-top: 16px;
  font-size: 14px;
  opacity: 0;
}

.buttonWrapper {
  position: absolute;
  bottom: 30%;
  right: 0;
  left: 0;
  margin: auto;
  width: calc(90% - 24px * 2);
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
    margin: 4px 4px 0 4px;
  }
}

.takoContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #E87E97;
}

.takoJoin {
  transition: all 300ms ease;
}

.startButton {
  width: 100%;
  height: 50px;
  border:solid#F0D400;
  background-color: #F0D400;
  border-radius: 30px;
  font-weight:bold;
  margin-top: 64px;
  transition: all 100ms ease;
  outline: none;
}

.startButton:active {
  transform: scale(1.1, 1.1);
}

.bottomTextWrapper, .topTextWrapper {
  position: absolute;
  bottom: 24px;
  width: 100%;
  font-size: 14px;
  text-align: center;
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

.exContainer {
    width: calc(100% - 24px * 2);
    height: 75%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
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
    //animation-delay: 2s;
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

.fadeIn, .fadeInLast {
  animation-name: fadeIn;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 1.2s;
  animation-fill-mode: forwards;
}

.fadeInLast {
  animation-delay: 1.8s;
}

.example{
  width:200px;
  margin:30px;
}

</style>