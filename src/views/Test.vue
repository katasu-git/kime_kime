<template>
  <div id="test">
    <div class="text fadeIn">結果発表</div>
    <img class="jump" src="../assets/takoPink.png" />
    <div class="timeup" v-show="nextBtnFlag">
      <TimeUp></TimeUp>
    </div>
  </div>
</template>

<script>
import TimeUp from "../components/TimeUp"
export default {
  name: 'test',
  data () {
    return {
      nextBtnFlag: true
    }
  },
  components: {
    TimeUp: TimeUp,
  }
}
</script>

<style lang="scss" scoped>
#test {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; //中央
    justify-content: center; //たて
    background-color: pink;
}

.timeup {
  position: fixed;
  height: 100%;
  width: 100%;
}

img {
    width: 100px;
    margin-top: 32px;
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

@keyframes jump {
    70% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(-600px);
    }
}

.fadeIn {
    animation-name: fadeIn;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;  //終了状態を保持
    //animation-delay: 2s;
    //animation-iteration-count: 3;
}

.fadeOut {
    animation-name: fadeOut;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    //animation-delay: 2s;
    //animation-iteration-count: 3;
}

.jump {
  animation-name: jump;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-delay: 2s;
}

</style>