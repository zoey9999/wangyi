<template>
  <div >
    <router-view :login='login' @login="login=true"></router-view>
    <div class="foot">
      <router-link tag="div" to="/" class="tab-item imgnav">
          <div class="text">首页</div>
        </router-link>
        <router-link tag="div" to="/videopage" class="tab-item imgvideo">
           <div class="text">视频</div> 
        </router-link>
        <router-link tag="div" to="/talkabout" class="tab-item imgtalk">
          <div class="text">小说</div>
        </router-link>
        <router-link tag="div" to="/mine" class="tab-item mineImg">
          <div class="text">我的</div>
        </router-link>
    </div>
  </div>
</template>
 
<script>
  export default { 
    name: "NewsFooter",
    data() {
      return{
        login:false
      }
    }
  }
</script>
<style lang="scss" scoped>
 .foot{
    position: fixed;
    display: flex;
    bottom: 0;
    height: 48px;
    width: 100%;
    overflow: hidden;
    background-color: white;
    .tab-item{
      flex:1;
      text-align: center;
      height: 100%;
      font-size: 15px;
      color: #7f7f7f;
    }
    .text{
        margin-top: 28px;
    }
    .imgnav{
      background: url("../../../public/img/atq.png") no-repeat center top;
      background-size:25px 25px;
    }
    .imgnav.active{
      background: url("../../../public/img/atr.png") no-repeat  top;
      background-size:25px 25px;
      color: red;
    }
    .imgvideo{
      background: url("../../../public/img/atw.png") no-repeat  top;
      background-size:25px 25px;
    }
    .imgvideo.active{
      background: url("../../../public/img/atx.png") no-repeat  top;
      background-size:25px 25px;
      color: red;
    }
    .imgtalk{
      background: url("../../../public/img/atk.png") no-repeat  top;
      background-size:25px 25px;
    }
    .imgtalk.active{
      background: url("../../../public/img/atl.png") no-repeat  top;
      background-size:25px 25px;
      color: red;
    }
    .mineImg{
      background: url("../../../public/img/ats.png") no-repeat  top;
      background-size:25px 25px;
    }
    .mineImg.active{
      background: url("../../../public/img/att.png") no-repeat  top;
      background-size:25px 25px;
      color: red;
    }
  }
</style>







