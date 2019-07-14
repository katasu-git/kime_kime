<template>
  <div id="test">
    <div v-on:click="pushedHoshi()">HOSHI★</div>
    <div id="modalContainer">
      <div class="modal">
        <div class="closeBtn" v-on:click="pushedBtn()">×</div>
        <p id="bar">ここに文章が入るよ</p>
      </div>
    </div>
  </div>
</template>

<script>
import TimeUp from "../components/TimeUp"
export default {
  name: 'test',
  data () {
    return {
    }
  },
  methods: {
    pushedBtn: function() {
      console.log("hello");
      var bar = document.getElementById('modalContainer');
      bar.style.display = 'none';
    },
    pushedHoshi: function() {
      console.log("hello");
      var bar = document.getElementById('modalContainer');
      bar.style.display = 'flex';
    }
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
}

#modalContainer {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .87);

  display: flex;
  align-items: center; //中央
  justify-content: center; //たて
  display: none;
}

.modal {
  position: relative;
  width: 50%;
  height: 50%;
  background-color: white;
  border-radius: 5px;

  display: flex;
  align-items: center; //中央
  justify-content: center; //たて
}

.closeBtn {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 50px;
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

@keyframes slideIn {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
}

.slideIn {
  animation-name: slideIn;
  animation-duration: .8s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
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