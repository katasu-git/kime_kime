<template>
  <div id="timeup">
    <div class="container">
      <p class="text">あなたの番は終わり！</p>
      <img v-bind:class="{rotate: isActive}" src="../assets/timeEnd.png" />
      <p class="text">次の人にスマホを渡してね</p>
    </div>
    <div class="buttonWrapper">
      <button v-on:click="$emit('adv'), rotateImg()">次の人、準備OK！</button>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name: "timeup",
    data() {
        return {
          isActive: false,
        }
    },
    methods: {
      rotateImg: function() {
        console.log("hey");
        this.isActive = true;
        setTimeout(() => {
          this.isActive = false;
        }, 1000);
      }
    }
}
</script>

<style lang="scss" scoped>

#timeup {
  position: absolute;
  bottom: 0;
  height: 76%;
  width: 100%;
  color: #484848;
  background-color: #FEFEFE;
  border: solid 0 #E87E97;
  border-radius: 43px 43px 0 0;
  //transform: translateY(100%);
}

.container {
  width: calc(100% - 24px * 2);
  position: absolute;
  bottom: 30%;
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  //justify-content: center; //たて
}

.text {
  margin-top: 8vh;
  font-weight: 600;
}

img {
  height: 20vh;
  margin-top: 8vh;
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
  color:white;
  border-radius: 30px;
  font-weight:bold;
  transition: all 100ms ease;
  outline: none;
}

button:active {
  transform: scale(1.1, 1.1);
}

.rotate {
  animation: rotate .2s ease 1;
  animation-fill-mode: forwards;
}

@keyframes rotate {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(180deg);
    }
}

</style>
