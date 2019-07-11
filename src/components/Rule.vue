<template>
  <div id="rule">
    <div class="container">
      <div class="closeBtn" v-on:click="$emit('off')">×</div>
        <div class="exContainer">
          <img src="../assets/ex1.png"/>
          <div class="text">1. 参加人数を選ぶ</div>
        </div>
        <div class="exContainer">
          <img src="../assets/ex2.png"/>
          <div class="text">2. アリorナシをキメる</div>
          <div class="text">終わったら次の人へスマホを渡す</div>
        </div>
        <div class="exContainer">
          <img src="../assets/ex3.png"/>
          <div class="text">3. 候補を食べたい順に並び替える</div>
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
  }
}
</script>

<style lang="scss" scoped>
#rule {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .87);

    display: flex;
    justify-content: center; //row
}

.container {
    width: calc(100% - 48px);
    //background-color: antiquewhite;

    overflow: scroll;
}

.exContainer {
    display: flex;
    align-items: center;
    justify-content: center;  //row
    flex-direction: column;  //col
}

img {
    width: 70%;
    margin-top: 8vh;
}

.text {
    margin-top: 4vh;
    font-weight: 600;
}

.closeBtn {
    position: fixed;
    top: 12px;
    right: 24px;
    font-size: 50px;
    font-weight: 600;
    transition: all 100ms ease;
}

.closeBtn:active {
    transform: scale(1.3, 1.3);
}
</style>