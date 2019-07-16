<template>
    <div id="vote">
        <div class="timerSpace">
            <img  v-on:click="countDownTimer()" class="timerIcon" src="../assets/timer.png" />
            <div class="text">残り時間</div>
            <div class="leftTime">{{ leftTime }}<span class="fs12">秒</span></div>
        </div>
        <div class="Choice2">
            <img class="img takoFace" src="../assets/takoLeg.png" />
            <img class="img takoLeg" src="../assets/takoFace.png" />
            <div class="food" v-bind:class="{foodFadeInGood: goodBtnFlag, foodFadeInBad: badBtnFlag}">
                <div class="number">No.{{ foodList[`${this.dispListNum}`].num + 1 }}</div>
                <img class="foodimg" v-bind:src="foodList[`${this.numbers[this.dispListNum]}`].img" />
                <p class="foodname">{{ foodList[`${this.numbers[this.dispListNum]}`].name }}</p>
                <p class="foodcomment">{{ foodList[`${this.numbers[this.dispListNum]}`].comment }}</p>
            </div>
            <div class="votebutton" onclick="vote">
                <img id="bad" v-on:click="addToBad()" src="../assets/badBtn.png" />
                <img id="good" v-on:click="addToGood(dispListNum)" src="../assets/goodBtn.png" />
            </div>
            <div class="kimeAndNext">キメて次の料理に進む</div>
        </div>
        <div class="timeup" v-bind:class="{ slideIn: isActive, slideOut: !isActive }">
            <TimeUp @adv="advanceTurn"></TimeUp>
        </div>
        <Erorr v-if="erorrFlag"></Erorr>
    </div>
</template>

<script>
import TimeUp from "../components/TimeUp"
import Erorr from "../components/Erorr"
import FoodList from "../foodList"
import { setTimeout } from 'timers';

export default {
    name: 'vote',
    data () {
        return {
            turn: 1, //let
            peopleNum: 1, //const
            winFoodList: [],
            leftTime: 10,
            dispListNum: 0,
            numbers: [],
            nextBtnFlag: false,
            isActive: false,
            goodBtnFlag: false,
            badBtnFlag: false,
            erorrFlag: false,
            foodList: '',
            users: {  //どの料理にGoodを投票したかを数字で格納
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
            },
        }
    },
    methods: {
        shuffleArray: function() {
            let array = [];
            for(let i=0; i<30; i++) {
                array.push(i);
            }
            for(let i = array.length - 1; i > 0; i--) {
                let r = Math.floor(Math.random() * (i + 1));
                let tmp = array[i];
                array[i] = array[r];
                array[r] = tmp;
            }
            console.log("hello");
            return array;
        },
        addToGood: function(foodNum) {
            try {
                this.goodBtnFlag = true;
                setTimeout(()=> {
                    if(!this.nextBtnFlag) {
                        if(this.dispListNum < Object.keys(this.foodList).length - 1) {
                            this.foodList[foodNum].vote++;
                            this.users[this.turn].push(this.foodList[foodNum].num);
                            this.dispListNum++;
                        } else {
                            //時間内に判定が全て終わった場合の処理
                            this.isActive = true;
                            this.nextBtnFlag = true;
                        }
                    }
                }, 300);
                setTimeout(()=> {
                    this.goodBtnFlag = false;
                }, 800);
            } catch(e) {
                console.log("エラーが発生" + e.message);
                this.erorrFlag = true;
            }
        },
        addToBad: function() {
            this.badBtnFlag = true;
            setTimeout(()=> {
                if(!this.nextBtnFlag) {
                    if(this.dispListNum < Object.keys(this.foodList).length - 1) {
                        this.dispListNum++;
                    } else {
                        //時間内に判定が全て終わった場合の処理
                        this.isActive = true;
                        this.nextBtnFlag = true;
                    }
                }
            }, 300);
            setTimeout(()=> {
                this.badBtnFlag = false;
            }, 800);
        },
        countDownTimer: function() {
            this.nextBtnFlag = false;
            var id = setInterval(() => {
                this.leftTime--;
                if(this.leftTime <= 0){　
                    clearInterval(id);　//タイマー停止
                    this.isActive = true;
                    this.nextBtnFlag = true;
                }
            }, 1000);
        },
        advanceTurn: function(){
            this.leftTime = 10;  //残り時間の初期化
            this.dispListNum = 0;  //リストの初期化
            this.turn--;  //次のターンに進める
            if(this.turn < 1) {
                //全員の投票が終わった時の処理
                this.countVote();
                setTimeout(() => {
                    this.$router.push({
                    name: 'ranking',
                    params: {
                        routerWinFood: this.winFoodList,
                        routerPeopleNum: this.peopleNum
                    }
                    })
                }, 200);
            }
            setTimeout(() => {
                this.isActive = false;
            }, 200);
            setTimeout(() => {
                this.countDownTimer();
            }, 400);
        },
        countVote: function() {
            for(let i=1; i<this.peopleNum; i++) {
                let voteArray = [];
                for(let j=1; j<this.users[i].length; j++) {
                    //あるユーザが投票した食べ物の得票数を配列に格納
                    voteArray.push(this.foodList[ this.users[i][j] ].vote);
                }
                //得票の最大値を算出
                for(let z=0; z<100; z++) {
                    let max = Math.max.apply(null, voteArray);
                    for(let k=0; k<this.users[i].length; k++) {
                        if(this.foodList[ this.users[i][k] ].vote == max && !this.foodList[ this.users[i][k] ].listFlag) {
                            this.winFoodList.push(this.foodList[ this.users[i][k] ]);
                            this.foodList[ this.users[i][k] ].listFlag = true;
                            break;
                        }
                    }
                    if(this.winFoodList.length < i+1) {
                        //自分の意見が反映されていないor被っている
                        voteArray.splice(voteArray.indexOf(max), 1);
                    } else {
                        break;
                    }
                }
            }
        }
    },
    created: function() {
          this.foodList = FoodList.returnFoodList();
          this.numbers = this.shuffleArray();
          this.peopleNum = this.$route.params.routerPeopleNum;
          this.turn = this.$route.params.routerPeopleNum;
          this.countDownTimer();
    },
    components: {
        TimeUp: TimeUp,
        Erorr: Erorr
    }
 }
</script>

<style lang="scss" scoped>

#vote {
    z-index: 0;
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #E87E97;
    color: #484848;
}

.timeup {
  position: fixed;
  height: 100%;
  width: 100%;
}

.Choice2 {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 76%; // 620 / 812
    background-color: #FEFEFE;
    border: solid 0 #FEFEFE;
    border-radius: 43px 43px 0 0;
}

.timerSpace {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    margin: auto;
    width: calc(100% - 24px * 2);
    height: calc(100% - 76% - 24px * 2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.timerIcon {
    position: absolute;
    top: 0;
    left: 0;
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

.takoFace, .takoLeg {
    position: absolute;
    width: 45%;
    left: 0;
    right: 0;
    margin: auto;
}

.takoLeg {
    bottom: 0;
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

.votebutton{
  position:absolute;
  width:100%;
  height: 80px;
  right:0;
  bottom: 16%;
  left:0;
  margin:auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

#bad, #good{
    position: absolute;
    width:72px;
    transition: all 100ms ease;
    outline: none;
}

#bad {
    right: calc(50% + 24px);
}

#good {
    left: calc(50% + 24px);
}


#bad:active, #good:active{
  transform: scale(1.4, 1.4);
}

.kimeAndNext {
    position:absolute;
    width:100%;
    right:0;
    bottom: 8%;
    left:0;
    margin:auto;
    text-align: center;
    font-size: 14px;
}

@keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
}

.slideIn, .slideOut {
  animation-name: slideIn;
  animation-duration: .8s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

@keyframes slideOut {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
}

.slideOut {
  animation-name: slideOut;
}

.foodFadeInGood {
  animation: foodFadeInGood .7s ease 1;
  animation-fill-mode: forwards;
}

@keyframes foodFadeInGood {
    0% {
        opacity: 1;
    }
    40% {
        opacity: .5;
    }
    50% {
        opacity: 0;
        transform: translateX(250px);
    }
    60% {
        opacity: 0;
        transform: translateX(0);
    }
    90% {
        opacity: .6;
    }
    100% {
        opacity: 1;
    }
}

.foodFadeInBad {
  animation: foodFadeInBad .7s ease 1;
  animation-fill-mode: forwards;
}

@keyframes foodFadeInBad {
    0% {
        opacity: 1;
    }
    40% {
        opacity: .7;
    }
    50% {
        opacity: 0;
        transform: translateX(-250px);
    }
    60% {
        opacity: 0;
        transform: translateX(0);
    }
    90% {
        opacity: .6;
    }
    100% {
        opacity: 1;
    }
}

.fs12 {
    font-size: 12px;
}

</style>