<template>
  <div id="result">
    <div class="container">
      <div class="area1">
        <img class="img takoFace" src="../assets/takoFaceRev.png" />
        <div class="food">
                <div class="number">獲得ポイント : {{ winner.point }}pt</div>
                <img class="foodimg" v-bind:src="winner.img" />
                <p class="foodname">{{ winner.name }}</p>
                <p class="foodcomment">{{ winner.comment }}</p>
        </div>
        <div class="nearShop">近くにオススメのお店が見つかりました</div>
      </div>
      <div class="area2">
        <div class="text">ー</div>
        <div class="text">上にスワイプしてお店を表示</div>
        <div class="shop">
          <!-- <img id="shopphoto" :src="returnImg(shops[0].photo.pc.l)">
          <p id="shopname">{{ shops[0].name }}</p> -->
        </div>
        <div class="buttonWrapper">
          <!-- <div id="openMap"
            v-on:click="openMap(shops[0].name)">
              このお店をGoogle Mapで開く</div> -->
          <div id="searchMap" v-on:click="openMap(winner.name)">「{{ winner.name }}」をGoogle Mapで検索</div>
          <div id="again"><router-link to="/">トップページにもどる</router-link></div>
        </div>
        <img class="img takoLeg" src="../assets/takoLegRev.png" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default {
  name: 'result',
  data () {
    return {
        winner: 'winner',
        shops: [],
        latitude: 34.662933,  //初期値はとりあえず難波駅
        longitude: 135.502295,  //初期値はとりあえず難波駅
        range: 3, //1:300m, 2:500m, 3:1000m, 4:2000m, 5:3000m
        order: 4, //1:名前順, 2:ジャンル順, 3:エリア順, 4:おススメ順(距離順)
        count: 1, //店を何軒取得するか,
        nums: []
    }
  },
  mounted: function() {
    //navigator.geolocation.getCurrentPosition(this.runGetLoc, this.showError);
    //this.getRestaurant();
  },
  created: function() {
    this.winner = this.$route.params.routerWin;
    if(this.winner != undefined) {
      //console.log("heeeeeeeeeeeeeeey");
    } else {
      //からの場合は初期値を設定
      this.winner = { num: 0, name: 'すし', comment:'日本が世界に誇る和食、SUSHI',
                    rank:1, point:23, img:require('../assets/food/sushi.png'), flag:false};
    }
  },
  methods: {
    returnImg: function(img_url) {
      return img_url;
    },
    openMap: function(name) {
        window.open(`https://maps.google.co.jp/maps?q=${name}`);
    },
    runGetLoc: function(position) {
      this.latitude =  position.coords.latitude;
      this.longitude =  position.coords.longitude;
      this.getRestaurant();
    },
    showError: function(message) {
      alert("error! " + message + " 位置情報の取得を許可して下さい！");
    },
    getRestaurant: function() {
      this.shops = [];  //配列の初期化
      const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=71474e498509e907&lat=${this.latitude}&lng=${this.longitude}&range=${this.range}&keyword=${this.winner.name}&order=${this.order}&count=${this.count}&format=jsonp`
      axios({
          url: url,
          adapter: jsonpAdapter,
          callbackParamName: 'callback'
      }).then((res) => {
        const arrayLength = res.data.results.shop.length
        for(let i=0; i<arrayLength; i++) {
          this.shops.push(res.data.results.shop[i]);
          this.nums.push(i);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#result {
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
  bottom: 24px;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

#openMap, #searchMap{
    width: 100%;
    height: 50px;
    border:solid#CC667D;
    background-color: #CC667D;
    border-style:#CC667D;
    color:white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#searchMap{
  margin-top: 16px;
  border:solid 0 white;
  background-color: white;
  border-style:white;
  color:#484848;
}

#again{
  margin-top: 32px;
  font-size: 12px;
  border-style:none;
  color:rgba(0, 0, 0, 0.54);
}
</style>
