<template>
  <div id="timeup">
    <div class="container">
      <p class="text">あなたの番は終わり！</p>
      <img src="../assets/timeEnd.png" />
      <p class="text">次の人にスマホを渡してね</p>
    </div>
    <div class="buttonWrapper">
      <button v-on:click="$emit('adv')">次の人、準備OK！</button>
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
  position: absolute;
  bottom: 0;
  height: 76%;
  width: 100%;
  color: #484848;
  background-color: #FEFEFE;
  border: solid 0 #E87E97;
  border-radius: 43px 43px 0 0;
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
}
</style>
