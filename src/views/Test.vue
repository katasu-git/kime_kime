<template>
  <div id="test">
      <div>残り時間 {{ leftTime }} 秒</div>
      <div>now turn is {{ turn }}</div>
      <div class="test"><p>表示する情報を切り替える => {{ foodList[`${this.dispListNum}`].name }}</p>
          <button class="goodBtn" v-on:click="addToGood(dispListNum)">Good</button>
          <button class="badBtn" v-on:click="addToBad()">Bad</button>
      </div>
      <div v-for="user in users">opinion => {{ user }}</div>
      <button v-show="nextBtnFlag" class="nextBtn" v-on:click="advanceTurn()">NEXT</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
        turn: 5, //let
        peopleNum: 5, //const
        winFoodList: [],
        leftTime: 10,
        dispListNum: 0,
        nextBtnFlag: true,
        voteEndFlag: false,
        foodList: {
            0: {
                num: 0,
                name: 'SUSHI',
                img: '',
                vote: 0,
                rank: 0,
            },
            1: {
                num: 1,
                name: '魚介・海鮮',
                img: '',
                vote: 0,
                rank: 0
            },
            2: {
                num: 2,
                name: 'おでん',
                img: '',
                vote: 0,
                rank: 0
            },
            3: {
                num: 3,
                name: '定食',
                img: '',
                vote: 0,
                rank: 0
            },
            4: {
                num: 4,
                name: 'そば',
                img: '',
                vote: 0,
                rank: 0
            },
            5: {
                num: 5,
                name: 'うどん',
                img: '',
                vote: 0,
                rank: 0
            },
            6: {
                num: 6,
                name: 'ラーメン',
                img: '',
                vote: 0,
                rank: 0,
            },
            7: {
                num: 7,
                name: '坦々麺',
                img: '',
                vote: 0,
                rank: 0
            },
            8: {
                num: 8,
                name: '丼もの',
                img: '',
                vote: 0,
                rank: 0
            },
            9: {
                num: 9,
                name: 'たこ焼き',
                img: '',
                vote: 0,
                rank: 0
            },
            10: {
                num: 10,
                name: 'お好み焼き',
                img: '',
                vote: 0,
                rank: 0
            },
            11: {
                num: 11,
                name: '韓国料理',
                img: '',
                vote: 0,
                rank: 0
            },
            12: {
                num: 12,
                name: '中華',
                img: '',
                vote: 0,
                rank: 0
            },
            13: {
                num: 13,
                name: 'イタリアン',
                img: '',
                vote: 0,
                rank: 0
            },
            14: {
                num: 14,
                name: 'カレー',
                img: '',
                vote: 0,
                rank: 0
            },
            15: {
                num: 15,
                name: 'ハンバーグ',
                img: '',
                vote: 0,
                rank: 0
            },
            16: {
                num: 16,
                name: 'ハンバーガー',
                img: '',
                vote: 0,
                rank: 0,
            },
            17: {
                num: 17,
                name: 'パエリア',
                img: '',
                vote: 0,
                rank: 0
            },
            18: {
                num: 18,
                name: 'オムライス',
                img: '',
                vote: 0,
                rank: 0
            },
            19: {
                num: 19,
                name: 'チーズフォンデュ',
                img: '',
                vote: 0,
                rank: 0
            },
            20: {
                num: 20,
                name: '焼肉',
                img: '',
                vote: 0,
                rank: 0
            },
            21: {
                num: 21,
                name: 'ステーキ',
                img: '',
                vote: 0,
                rank: 0
            },
            22: {
                num: 22,
                name: '焼き鳥',
                img: '',
                vote: 0,
                rank: 0
            },
            23: {
                num: 23,
                name: '串カツ',
                img: '',
                vote: 0,
                rank: 0
            },
            24: {
                num: 24,
                name: 'ローストビーフ丼',
                img: '',
                vote: 0,
                rank: 0
            },
            25: {
                num: 25,
                name: '鍋',
                img: '',
                vote: 0,
                rank: 0
            },
            26: {
                num: 26,
                name: 'すき焼き',
                img: '',
                vote: 0,
                rank: 0,
            },
            27: {
                num: 27,
                name: 'しゃぶしゃぶ',
                img: '',
                vote: 0,
                rank: 0
            },
            28: {
                num: 28,
                name: '居酒屋',
                img: '',
                vote: 0,
                rank: 0
            },
            29: {
                num: 29,
                name: 'とんかつ',
                img: '',
                vote: 0,
                rank: 0
            },
        },
        users: {  //どの料理にGoodを投票したかを数字で格納
            0: [],  //一人目
            1: [],
            2: [],
            3: [],
            4: [],
            5: []
        },
    }
  },
  created: function() {
      this.shuffleArray(this.listOfFood);
  },
  methods: {
      shuffleArray: function(array) {
          /*for(let i = array.length - 1; i > 0; i--) {
              let r = Math.floor(Math.random() * (i + 1));
              let tmp = array[i];
              array[i] = array[r];
              array[r] = tmp;
          }*/
      },
      addToGood: function(foodNum) {
          if(!this.nextBtnFlag) {
              if(this.dispListNum < Object.keys(this.foodList).length - 1) {
                  this.foodList[foodNum].vote++;
                  this.users[this.turn].push(this.foodList[foodNum].num);
                  this.dispListNum++;
              } else {
                  //時間内に判定が全て終わった場合の処理
                  this.nextBtnFlag = true;
              }
          }
      },
      addToBad: function() {
            if(!this.nextBtnFlag) {
                  if(this.dispListNum < Object.keys(this.foodList).length - 1) {
                      this.dispListNum++;
                    } else {
                        //時間内に判定が全て終わった場合の処理
                        this.nextBtnFlag = true;
                    }
            }
      },
      countDownTimer: function() {
            this.nextBtnFlag = false;
            var id = setInterval(() => {
                this.leftTime--;
                if(this.leftTime <= 0){　
                    clearInterval(id);　//タイマー停止
                    this.nextBtnFlag = true;
                }
            }, 1000);
      },
      advanceTurn: function(){
          console.log("hello");
          this.leftTime = 10;  //残り時間の初期化
          this.dispListNum = 0;  //リストの初期化
          this.turn--;  //次のターンに進める
          if(this.turn < 0) {
              //全員の投票が終わった時の処理
              this.countVote();
              this.voteEndFlag = ture;
          }
          this.countDownTimer();
      },
      countVote: function() {
          for(let i=0; i<=this.peopleNum; i++) {
            let voteArray = [];
            for(let j=0; j<this.users[i].length; j++) {
                voteArray.push(this.foodList[ this.users[i][j] ].vote);
            }
            //console.log("voteArray => " + voteArray);
            let max = Math.max.apply(null, voteArray);
            console.log("max => " + max);
            for(let k=0; k<this.users[i].length; k++) {
                if(this.foodList[ this.users[i][k] ].vote == max) {
                    this.winFoodList.push(this.foodList[ this.users[i][k] ]);
                    break;
                }
            }
          }
          for(let i=0; i<this.winFoodList.length; i++) {
              console.log("winner => " + this.winFoodList[i].name);
          }
      }
  }
 }
</script>

<style lang="scss" scoped>
#test {
  height: 100%;
  width: 100%;
  background-color: #FEFEFE;
  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

div {
    padding: 8px;
}

.imgAndText {
  width: calc(100% - 16px * 2);
  position: absolute;
  top: calc(50% - 16px * 10);
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}
button {
    width: 100px;
    height: 50px;
}
.goodBtn {
    background-color: lightgreen;
}

.badBtn {
    background-color: indianred;
}

.nextBtn {
    width: 100px;
    height: 50px;
    background-color: chocolate;
}
</style>