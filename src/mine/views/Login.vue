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

    <div class="login-select">
      <span class="login-item">
        <img :src="Phone" alt>
      </span>
      <span class="login-item">
        <img :src="weiBo" alt>
      </span>
      <span class="login-item">
        <img :src="weChat" alt>
      </span>
      <span class="login-item">
        <img :src="QQ" alt>
      </span>
      <span class="login-item">
        <img :src="xiaoMi" alt>
      </span>
    </div>

    <div class="nav-login" @click="login">
      <div class="login" >登录/注册</div>
    </div>

    <div class="tab">
      <span class="tab-item">
        <img :src="comment" alt>
        <div class="text">跟帖</div>
      </span>
      <span class="tab-item">
        <img :src="collection" alt>
        <div class="text">收藏</div>
      </span>
      <span class="tab-item">
        <img :src="history" alt>
        <div class="text">历史</div>
      </span>
    </div>

     <div class="line"></div>

    <div class="list">
      <span class="list-left">我的关注</span>
      <span class="list-right">用户/主题</span>
    </div>
    <div class="list">
      <span class="list-left">我的消息</span>
      <span class="list-right">评论/通知</span>
    </div>
    <div class="list">
      <span class="list-left">阅读公益</span>
      <span class="list-right">小金钱 大公益</span>
    </div>
     <div class="list">
      <span class="list-left">金币商城</span>
      <span class="list-right">全国流量免费兑</span>
    </div>
    <div class="list">设置</div>
  </div>
</template>

<script>
export default {
  name: "login",
  
  data() {
    return {
      dayNight: require("../../../public/img/ar8.png"),
      signIn: require("../../../public/img/aur.png"),
      Phone: require("../../../public/img/auh.png"),
      weiBo: require("../../../public/img/auj.png"),
      weChat: require("../../../public/img/auk.png"),
      QQ: require("../../../public/img/aui.png"),
      xiaoMi: require("../../../public/img/auf.png"),
      comment: require("../../../public/img/aqc.png"),
      collection: require("../../../public/img/aqf.png"),
      history: require("../../../public/img/aue.png"),
      from: null
    }
  },
   
  methods: {
            login() { 
                this.$emit('login') 
                // 路由跳转
                if (this.from) {
                  // eslint-disable-next-line 
                    // console.log(this.from.path)
                    this.$router.replace(this.from.path)
                }
                else {
                    this.$router.replace('/mine')
                }
            }
        },
        
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.from = from
            })
        },
        beforeRouteLeave(to, from, next) {
            this.from = null
            next()
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

  .nav-login {
    position: relative;
    display: flex;
    width: 100%;
    height: 30px;
    margin: 10px 0;

    .login {
      width: 120px;
      height: 30px;
      font-size: 15px;
      line-height: 30px;
      text-align: center;
      border-radius: 10px;
      margin-left: 110px;
      color: rgb(249, 249, 250);
      background-color: rgb(241, 12, 12);
    }
  }

  .login-select {
    position: relative;
    margin: 10px 0;
    display: flex;
    width: 100%;
    height: 50px;

    .login-item {
      flex: 1;
      img {
            width: 50px;
            height: 50px;
      }
    }
  }

  .tab {
    display: flex;
    width: 100%;
    height: 50px;
    left: 0;
//     border: 1px solid #ccc;

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

