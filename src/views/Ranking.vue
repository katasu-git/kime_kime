<template>
  <div id="ranking">
    <div class="timerSpace">
        <img  v-on:click="countDownTimer()" class="timerIcon" src="../assets/timer.png" />
        <div class="text">残り時間</div>
        <div class="leftTime">{{ leftTime }}秒</div>
    </div>
    <div class="whiteSpace">
        <img class="img takoFace" src="../assets/takoFaceRev.png" />
        <img class="img takoLeg" src="../assets/takoLegRev.png" />
        <div class="message">ドラッグして食べたい順に並び替え</div>
        <draggable class="listWrapper" v-model="foodList"
                element="ul" :animation="150">
            <div class="list" v-for="food in foodList" v-if="food.flag">
                    <div class="rank">{{ returnRank(food.num) }}</div>
                    <img class="foodImg" v-bind:src="food.img" />
                    <div class="foodName">{{ food.name }}</div>
                    <img class="burgerBtn" src="../assets/burgerBtn.png" />
            </div>
        </draggable>
    </div>
    <div class="timeup" v-show="TimeUpFlag">
      <TimeUp　@adv="advanceTurn"></TimeUp>
    </div>
  </div>
</template>

<script>
import router from "vue"
import TimeUp from "../components/TimeUp"
import draggable from 'vuedraggable'

export default {
  name: 'ranking',
  data () {
        return {
            leftTime: 10,
            turn: 1, //let
            peopleNum: 1, //const
            TimeUpFlag: false,
            foodList: [
                { num: 0, name: 'name', rank:0, point:0, img:'link', comment:'', flag:false},
                { num: 1, name: 'name', rank:0, point:0, img:'link', comment:'', flag:false },
                { num: 2, name: 'name', rank:0, point:0, img:'link', comment:'', flag:false },
                { num: 3, name: 'name', rank:0, point:0, img:'link', comment:'', flag:false },
                { num: 4, name: 'name', rank:0, point:0, img:'link', comment:'', flag:false },
                { num: 5, name: 'name', rank:0, point:0, img:'link', comment:'', flag:false },
            ],
            foodListBlank: [],
        }
    },
    created: function() {
        let winner = this.$route.params.routerWinFood;
        //console.log(winner);
        if(this.winner != undefined) {
            this.turn = this.$route.params.routerPeopleNum;
        } else {
            //からの場合は初期値を設定
            winner = [
                {
                    num: 21,
                    name: 'ステーキ',
                    img:require('../assets/food/steak.png'),
                    vote: 0,
                    rank: 0
                },
                {
                    num: 19,
                    name: 'チーズフォンデュ',
                    img:require('../assets/food/fondue.png'),
                    vote: 0,
                    rank: 0
                },
                {
                    num: 16,
                    name: 'ハンバーガー',
                    img:require('../assets/food/hamburger.png'),
                    vote: 0,
                    rank: 0,
                },
            ]
        }
        for(let i=0; i<winner.length; i++) {
            this.foodList[i].num = winner[i].num;
            this.foodList[i].name = winner[i].name;
            this.foodList[i].img = winner[i].img;
            this.foodList[i].comment = winner[i].comment;
            this.foodList[i].flag = true;
        }
        this.countDownTimer();
    },
    methods: {
        returnRank: function(num) {
              for(let i=0; i<10; i++) {
                  if(this.foodList[i].num == num) {
                    this.foodList[i].rank = i + 1;
                    return this.foodList[i].rank;
                }
            }
        },
        countDownTimer: function() {
            this.TimeUpFlag = false;
            var id = setInterval(() => {
                this.leftTime--;
                if(this.leftTime <= 0){　
                    clearInterval(id);　//タイマー停止
                    this.TimeUpFlag = true;
                }
            }, 1000);
        },
        advanceTurn: function(){
          this.leftTime = 10;  //残り時間の初期化
          this.turn--;  //次のターンに進める
          this.getPoint();  //順位に応じてポイント加算
          if(this.turn < 1) {
                //全員の投票が終わった時の処理
                this.$router.push({
                    name: 'result',
                    params: {
                        routerWin: this.getWinner()
                    }
                })
            }
            this.countDownTimer();
      },
        getPoint: function() {
            for(let i=0; i<this.foodList.length; i++) {
                let rank = this.foodList[i].rank
                switch (rank) {
                    case 1:
                        this.foodList[i].point += 3;
                        break;
                    case 2:
                        this.foodList[i].point += 2;
                        break;
                    case 3:
                        this.foodList[i].point += 1;
                        break;
                    default:
                        break;
                }
                //console.log(this.foodList[i].name + this.foodList[i].point);
            }
        },
        getWinner: function() {
            let winner = this.foodList[0];
            for(let i=0; i<this.foodList.length; i++) {
                if(this.foodList[i].point > winner.point) {
                    winner = this.foodList[i];
                }
            }
            return winner;
        }
    },
    components: {
        TimeUp: TimeUp,
        draggable: draggable
    }
}
</script>

<style lang="scss" scoped>
#ranking {
    height: 100%;
    width: 100%;
    background-color: #E87E97;
    color: #606060;
}

.timeup {
    position: fixed;
    height: 100%;
    width: 100%;
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

.whiteSpace {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 76%; // 620 / 812
    background-color: #FEFEFE;
    border: solid 0 #FEFEFE;
    border-radius: 43px 43px 0 0;
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

.message {
    margin-top: 18%;
    text-align: center;
}

ul {
    margin: 0;
    padding: 0;
}

.listWrapper {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.list {
    position: relative;
    height: 50px;
    width: calc(100% - 24px * 2);
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgba(0, 0, 0, .12);
}

.rank {
    font-size: 24px;
    font-weight: 900;
}

.foodImg {
    height: 30px;
    margin-left: 32px;
}

.foodName {
    margin-left: 16px;
    font-size: 20px;
    font-weight: 600;
}

.burgerBtn {
    position: absolute;
    right: 8px;
    height: 25px;
}
</style>