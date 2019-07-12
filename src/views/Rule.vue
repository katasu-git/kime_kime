<template>
  <div id="rule">
    <div class="container fadeIn">
      <h1><p>How To Use</p>
          <p>KimeKime</p>
      </h1>
      <div class="closeBtn" v-on:click="goToTopPage()">×</div>
        <div class="exContainer mt8vh">
          <img loading="lazy" src="../assets/ex1.png"/>
          <div class="text">1. 参加人数を選ぶ</div>
        </div>
        <div class="exContainer mt8vh">
          <img loading="lazy" src="../assets/ex2.png"/>
          <div class="text">2. アリorナシをキメる</div>
          <div class="text fs12">終わったら次の人へスマホを渡す</div>
        </div>
        <div class="exContainer mt8vh">
          <img loading="lazy" src="../assets/ex3.png"/>
          <div class="text mb8vh">3. 候補を食べたい順に並び替える</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'rule',
  data () {
    return {
    }
  },
  methods: {
    goToTopPage: function() {
      setTimeout(() => {
          this.$router.push({
          name: 'top',
        })
      }, 200);
    }
  }
}
</script>

<style lang="scss" scoped>

.fs12 {
    font-size: 12px;
}

.mb8vh{
  margin-bottom: 8vh;
}

.mt8vh {
  margin-top: 8vh;
}

#rule {
    height: 100%;
    width: 100%;
    background-color: rgba(232, 126, 151, 1);
    color: white;

    display: flex;
    justify-content: center; //row
}

.container {
    height: 100%;
    width: calc(100% - 48px);
    opacity: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;  //ios
}

.exContainer {
    display: flex;
    align-items: center;
    justify-content: center;  //row
    flex-direction: column;  //col
}

img {
    width: 60%;
}

.text {
    margin-top: 4vh;
    font-weight: 600;
}

.closeBtn {
    position: fixed;
    top: 26px;
    right: 24px;
    width: 36px;
    height: 36px;
    color: #F0D400;
    border: solid 3px #F0D400;
    border-radius: 50px;
    font-size: 36px;
    font-weight: 600;
    transition: all 100ms ease;

    display: flex;
    align-items: center;
    justify-content: center;
}

.closeBtn:active {
    transform: scale(1.3, 1.3);
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
  animation-duration: .7s;
  animation-timing-function: ease;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}
</style>