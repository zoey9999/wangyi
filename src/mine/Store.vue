<template>
      <div class="attention">
            <div class="nav">
                  <span @click="backBtn">
                        <img :src="backImg" width="20px" height="20px">
                  </span>
                  <span class="nav-title">金币商城</span>
                  
            </div>
            <div class="contain">
                        <img :src="storeImg"  width="100%">
                  
            </div>
            <div class="tab">
                  <span class="tab-item">
                        <img :src="myImg" >
                        <div class="text">我的商城</div>
                  </span>
                  <span class="tab-item">
                        <img :src="signImg">
                        <div class="text">签到</div>
                  </span>
                  <span class="tab-item" @click="readPulic">
                        <img :src="readImg">
                        <div class="text">阅读公益</div>
                  </span>
                   <span class="tab-item">
                        <img :src="biImg">
                        <div class="text">金币任务</div>
                  </span>
            </div>
      </div>
</template>

<script>
export default {
      name:'store',
      data() {
            return{
                  backImg: require("../../public/img/agz.png"),
                  storeImg:require('../../public/img/store.jpg'),
                  myImg:require('../../public/img/att.png'),
                  signImg: require("../../public/img/aeu.png"),
                  readImg: require("../../public/img/aer.png"),
                  biImg: require("../../public/img/aev.png")
            }
      },
      methods: {
            backBtn() {
                  this.$router.back();
            },
            readPulic() {
                  this.$router.push({name:'readpublic'})
            }
      }
}
</script>
<style lang="scss" scoped>
      .nav {
            width: 100%;
            height: 50px;
            border: 1px solid #cccccc;
            background-color: white;
            line-height: 50px;
            img {
                  margin: auto 12px;
            }
            .nav-title {
                  margin-left: 20px;
                  font-size: 19px;
            }
      }
      .contain{
            width: 100%;
            height: 100%;
      }
      .tab {
      display: flex;
      width: 100%;
      height: 75px;
      left: 0;

      .tab-item {
            flex: 1;
            text-align: center;
            text-decoration: none;

            img {
                  width: 40px;
                  height: 40px;
      }
            .text {
                  text-decoration: none;
                  font-size: 12px;
      }
      }

  }
</style>

