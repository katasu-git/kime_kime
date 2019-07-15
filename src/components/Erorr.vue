<template>
  <div id="erorr" class="fadeIn">
      <div class="container">
      <div class="area1">
        <div class="wrapper">
          <img class="takoImg binding" src="../assets/tako.png" />
          <p class="fs20 fw600 mt4vh">エラー発生です</p>
          <p class="fs12">キメキメ中はリロードしないでください</p>
        </div>
        <div class="buttonWrapper">
            <button v-on:click="goTopPage()">トップに戻る</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "erorr",
    data() {
        return {
        }
    },
    methods: {
        goTopPage: function() {
            setTimeout(() => {
                this.$router.push({
                name: 'top'
            })
            }, 300);
        },
    }
}
</script>

<style lang="scss" scoped>

#erorr {
    opacity: 0;
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    color: #FEFEFE;
    background-color: #FEFEFE;
    border: solid 0 #FEFEFE;
    border-radius: 43px 43px 0 0;
    //transform: translateY(100%);
}

.container {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: white;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch; /* Needed to work on iOS Safari */
    background-color: rgba(72,72,72,.95);
}
.area1 {
    position: relative;
    scroll-snap-align: start;
    height: 100%;
}

.wrapper {
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

.bottomText {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    text-align: center;
    color: white;
}

.buttonWrapper {
    width: calc(100% - 24px * 2);
    position: absolute;
    bottom: 8vh;
    right: 0;
    left: 0;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center; //中央
    justify-content: center; //たて
}

button {
    width: 100%;
    height: 50px;
    border:solid#F0D400;
    background-color: #F0D400;
    border-style:#F0D400;
    color:#484848;
    border-radius: 30px;
    font-weight:bold;
    transition: all 100ms ease;
    outline: none;
}

button:active {
    transform: scale(1.1, 1.1);
}

@keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
}

.fadeIn {
    animation-name: fadeIn;
    animation-duration: .5s;
    animation-timing-function: ease;
    animation-delay: .1s;
    animation-fill-mode: forwards;
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

.mb2vh {
  margin-bottom: 2vh;
}

</style>
