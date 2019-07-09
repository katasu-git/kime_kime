<template>
  <div id="timeup">
    <div class="imgAndText">
      <p class="titleText">あなたの番は終わり！</p>
      <img class="sunadokeiImg" src="../assets/timeEnd.png" />
      <p class="message">次の人にスマホを渡してね</p>
    </div>
    <div class="buttonWrapper">
      <button v-on:click="$emit('adv')" class="startButton">準備OK！</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "timeup",
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

#timeup {
  height: 100%;
  width: 100%;
  color: white;
  background-color: #E87E97;
}

.imgAndText {
  width: calc(100% - 24px * 2);
  position: absolute;
  bottom: 30%;
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

.sunadokeiImg {
  width:  150px;
  margin-top: 50px;
}

.titleText {
  top: 0px;
  font-size: 20px;
  font-weight: 600;
}

.message {
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
}

.buttonWrapper {
  width: calc(100% - 24px * 2);
  position: absolute;
  bottom: 10%;
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

.startButton {
  width: 100%;
  height: 50px;
  border:solid#F0D400;
  background-color: #F0D400;
  border-style:#F0D400;
  color:white;
  border-radius: 30px;
  font-weight:bold;
}
</style>
