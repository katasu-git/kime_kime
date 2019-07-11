<template>
  <div id="rule">
    <div class="container">
        <div class="exContainer">
          <img src="../assets/ex1.png"/>
          <div class="text">1. 参加人数を選ぶ</div>
        </div>
        <div class="exContainer">
          <img src="../assets/ex2.png"/>
          <div class="text">2. 参加人数を選ぶ</div>
        </div>
        <div class="exContainer">
          <img src="../assets/ex3.png"/>
          <div class="text">3. 参加人数を選ぶ</div>
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
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .54);

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
</style>