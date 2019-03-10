<template>
  <div class="home">
    <div class="nav-title">
      <div class="nav">
        <img :src="wangYi" class="imgwangyi">
        <router-link to="/search" tag="span">
          <input type="text">
          <div class="lunbo" >
              <transition-group name="slider">
                  <div class="supports-item" v-for="(s,index) in toutiao" :key="index" v-show="index === supportsIndex">
                      <span class="supports-desc">{{s.title}}</span>
                  </div>
              </transition-group>
          </div>
          
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

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      toutiao: [],
      supportsIndex: 0,
      timer: null,
      wangYi: require("../../public/img/az3.9.png"),
      zhiBo: require("../../public/img/skin1_news_main_live_icon.png")
    }
  },
  created() {
    // https://www.apiopen.top/journalismApi
    this.axios.get("/toutiao").then(response => {
      let res = response.data;
      if (res) {
        this.toutiao = res.T1348647853363;
      }
    });
  },
   watch: {
            toutiao(item) {
                // 清除旧的计时器
                if (this.timer) {
                    clearInterval(this.timer)
                }
                    this.timer = setInterval(() => {
                        this.supportsIndex++
                        if (this.supportsIndex >= item.length) { // 轮播到最后一张
                            this.supportsIndex = 0 //回到第一张
                        }
                    }, 1000)

            }
        },
}
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

    .lunbo{
       width: 180px;
      height: 17px;
      position:absolute;
      top:15px;
      left:90px;
      overflow: hidden;

      .supports-item {
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #fff;
            }

            .slider-enter {
                transform: translateY(100%);
            }

            .slider-enter-active,
            .slider-leave-active {
                transition: all 0.5s linear;
            }

            .slider-enter-to,
            .slider-leave {
                transform: translateY(0);
            }

            .slider-leave-to {
                transform: translateY(-100%);
            }

            .supports-desc {
                color: #fff;
            }
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

