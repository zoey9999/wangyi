<template>
  <div class="home">
    <div class="nav-title">
      <div class="nav">
        <img :src="wangYi" class="imgwangyi">
        <router-link to="/search" tag="span">
          <input type="text" placeholder="请查找热点新闻">
        </router-link>

        <router-link tag="span" to="/home/zhibo">
          <img :src="zhiBo" class="imgzhibo">
        </router-link>
        
      </div>

      <div class="title-select">
        <router-link tag="div" to="/" class="tab-item">
          <span class="text">头条</span>
        </router-link>
        <router-link tag="div" to="/home/jingxuan" class="tab-item">
          <span class="text">精选</span>
        </router-link>
        <router-link tag="div" to="/home/yule" class="tab-item">
          <span class="text">娱乐</span>
        </router-link>
        <router-link tag="div" to="/home/qiche" class="tab-item">
          <span class="text">汽车</span>
        </router-link>
      </div>

      <div></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      wangYi: require("../../public/img/az3.9.png"),
      zhiBo: require("../../public/img/skin1_news_main_live_icon.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  top: 0;
  left: 0;
  
  .nav {
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    background-color: rgb(233, 48, 48);

    .imgwangyi {
      width: 47px;
      height: 25px;
    }

    .imgzhibo {
      width: 30px;
      height: 30px;
      margin-top: 5px;
    }

    input {
      width: 69%;
      height: 30px;
      margin: 5px 10px;
      vertical-align: top;
      border-radius: 10px;
      border-width: 0;
      background-color: rgb(233, 71, 21);
      text-align: center;
    }
  }

  .title-select {
    display: flex;
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    line-height: 30px;

    .tab-item {
      flex: 1;
      height: 100%;
      color: #969696;
    }

    .active {
      color: #d23c00;
    }

    .tab-item{
      display: inline-block;
      width: 100%;
      height: 25px;
      line-height: 30px;
      font-size: 25px;
      text-align: center;
    }

    .tab-item .text {
      display: inline-block;
      height: 12px;
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>

