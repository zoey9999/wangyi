<template>
  <div class="mine">
    <div class="nav-top">
      <span class="day-night">
        <img :src="dayNight" alt>
        <span class="text">夜间</span>
      </span>
      <span class="sign-in">
        <img :src="signIn" alt>
        <span class="text">签到</span>
      </span>
    </div>
<!-- a01.png -->
    <div class="touxiang">
      <span class="user"><img :src="touxiangImg" alt=""></span>
      <span class="user title">
        <div class="username">南风拂过念你的笑靥</div>
        <div class="usernick">跟帖局科员</div>
      </span>
    </div>

    <div class="tab">
      <span class="tab-item" @click="gentie">
        <img :src="comment" alt>
        <div class="text">跟帖</div>
      </span>
      <span class="tab-item" @click="mycollection">
        <img :src="collection" alt>
        <div class="text">收藏</div>
      </span>
      <span class="tab-item" @click="myhistory">
        <img :src="history" alt>
        <div class="text">历史</div>
      </span>
    </div>

    <div class="line"></div>

    <div class="list" @click="attention">
      <span class="list-left">我的关注</span>
      <span class="list-right">用户/主题</span>
    </div>
    <div class="list" @click="mymsg">
      <span class="list-left">我的消息</span>
      <span class="list-right">评论/通知</span>
    </div>
    <div class="list" @click="readpublic">
      <span class="list-left">阅读公益</span>
      <span class="list-right">小金钱 大公益</span>
    </div>
     <div class="list" @click="store">
      <span class="list-left">金币商城</span>
      <span class="list-right">全国流量免费兑</span>
    </div>
    <div class="list" @click="tool">设置</div>
  </div>
</template>

<script>
export default {
  name: "mine",
  props: ['login'],
  data() {
    return {
      dayNight: require("../../public/img/ar8.png"),
      signIn: require("../../public/img/aur.png"),
      comment: require("../../public/img/aqc.png"),
      collection: require("../../public/img/aqf.png"),
      touxiangImg: require("../../public/img/a01.png"),
      history: require("../../public/img/aue.png")
    };
  },
 beforeRouteEnter(to, from, next) {
            next(vm => {
                if (!vm.login) { //还未登陆
                    vm.$router.replace('/login')
                }
            })
        } ,
        methods: {
          gentie() {
            this.$router.push({name:'mygentie'})
          },
          mycollection() {
            this.$router.push({name:'collection'})
          },
          myhistory() {
            this.$router.push({name:'myhistory'})
          },
          attention() {
            this.$router.push({name:'attention'})
          },
          mymsg() {
            this.$router.push({name:'mymsg'})
          },
          readpublic() {
            this.$router.push({name:'readpublic'})
          },
          store() {
            this.$router.push({name:'store'})
          },
          tool() {
            this.$router.push({name:'tool'})
          }
        }
}
</script>

<style lang="scss" scoped>
  
  .nav-top {
        width: 100%;
        height: 35px;
        display: inline-block;

    .day-night,
    .sign-in{
      display: inline-block;
      margin-top: 10px;
      width: 85px;
      height: 32px;
      text-align: center;
      border: 1px solid #cccccc;
      border-radius: 10px;

      img {
          width: 20px;
          height: 20px;
      }
      .text{
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
    }
    }
    .sign-in {
      margin-left: 45%;
      
    }
  }

  .touxiang{
    width: 100%;
    height:100px;
    margin: 10px 0;
    .user{
      display: inline-block;
      margin: 10px 10px;
    }
    .title{
      line-height: 30px;
    }
    .username{
      font-size: 18px;
    }
    .usernick{
      font-size: 13px;
      color:rgb(155, 152, 152);
    }
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
            width: 30px;
            height: 30px;
     }
      .text {
            text-decoration: none;
            font-size: 12px;
            color: rgb(97, 94, 94);
      }
    }
  }
  .line{
    width: 100%;
    height: 4px;
    background-color: #e6e3e3;
  }

  .list{
    width: 90%;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    border-bottom: 1px solid #ccc;
    .list-right{
      display: inline-block;
      color: #ccc;
      float: right;
      font-size: 14px;
    }
  }
</style>

