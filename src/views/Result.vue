<template>
  <div id="result">
    <div class="container">
      <div class="area1">
        <div class="food">
          <div>一位に輝いたのは...</div>
          <div class="number">獲得ポイント : {{ winner.point }}pt</div>
          <img class="foodimg" v-bind:src="winner.img" />
          <p class="foodname">{{ winner.name }}</p>
          <p class="foodcomment">{{ winner.comment }}</p>
        </div>
      </div>
      <div class="buttonWrapper">
          <div id="searchMap" v-on:click="openMap(winner.name)">「{{ winner.name }}」をGoogle Mapで検索</div>
          <div id="again"><router-link to="/">初めからやり直す</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

export default {
  name: 'result',
  data () {
    return {
        winner: 'winner',
    }
  },
  created: function() {
    this.winner = this.$route.params.routerWin;
    if(this.winner != undefined) {
    } else {
      //からの場合は初期値を設定
      this.winner = { num: 0, name: 'すし', comment:'日本が世界に誇る和食、SUSHI',
                        rank:1, point:23, img:require('../assets/food/sushi.svg'), flag:false};
    }
  },
  methods: {
    openMap: function(name) {
      setTimeout(function() {
        window.open(`https://maps.google.co.jp/maps?q=${name}`);
      }, 200);
    }
  }
}
</script>

<style lang="scss" scoped>
a, a:visited {
  color: #484848;
}

#result {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
    background-color: #E87E97;
    color: #606060;
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
  background-color: #FEFEFE;
}

.area2 {
    border-radius: 43px 43px 0 0;
}

.nearShop {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 16%;
  font-size: 12px;
  color: rgba($color: #000000, $alpha: .54)
}

.area2 {
    margin-top: -20%;
    background-color: #F0D400;
    .text {
      color: #606060;
      font-weight: bold;
    }
}

.img {
    width: 45%;
}

.takoFace, .takoLeg {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}

.takoLeg {
    bottom: 0;
}

.timerSpace {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 24px * 2);
    height: calc(100% - 76% - 24px * 2);
}

.timerIcon {
    height: 40px;
}

.text, .leftTime {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 14px;
}

.leftTime {
    font-size: 32px;
    font-weight: 600;
}

.number{
  font-size:24px;
  font-weight:bold;
  margin-top: 16px;
}

.food{
  position: absolute;
  width: 100%;
  right: 0;
  bottom: 40%;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.foodimg{
    margin-top: 32px;
    height: 70px;
}

.foodname{
    margin-top: 16px;
  font-size: 30px;
  font-weight: bold;
}

.foodcomment{
    margin-top: 8px;
  font-size: 14px;
}

.shop{
  position:absolute;
  width: calc(100% - 24px * 2);
  right:0;
  left:0;
  margin:auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#shopphoto {
  width: 40vw;
  height: 40vw;
  margin-top: 32px;
}

#shopname {
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
}

.buttonWrapper {
  width: calc(100% - 24px * 2);
  position: absolute;
  right: 0;
  bottom: 10%;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

#searchMap{
    width: 100%;
    height: 50px;
    border: solid 0px #F0D400;
    background-color: #F0D400;
    color: #484848;
    font-size: 12px;
    font-weight: 600;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 100ms ease;
    outline: none;
}

#searchMap:active {
    transform: scale(1.1, 1.1);
}

#again{
  margin-top: 32px;
  font-size: 12px;
  border-style:none;
  color:rgba(0, 0, 0, 0.54);
}

</style>
