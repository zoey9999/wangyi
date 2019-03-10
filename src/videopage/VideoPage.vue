<template>
  <div>
    <div class="video-container" ref="wrapper">
      <div>
         <div v-for="(item,index) in videoList" :key="index" >
          <div class="video-item"  :class="isindex?'noshow':'show'" v-show="item.data.playUrl">
                <!-- :poster="item.cover"  :poster="item.data.cover['feed']"-->
            <video :src="item.data.playUrl" width="100%" height="100%"  controls ref='videostop' @click="stopVideo(index)">
            </video>
            <div class="title-item">
              <span class="title">{{item.data.title}}</span>
              
            </div>
            
          </div>
       </div> 
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "videopage",
  data() {
    return {
      videoList: [],
      playBtn: require("../../public/img/a2q.png"),
      isindex:-1
    };
  },
  created() {
      this.axios.get('https://api.apiopen.top/videoRecommend?id=127398')
          .then(response => {
              let res = response.data
              if (res) {
                  this.videoList = res.result
                  // eslint-disable-next-line 
                  console.log("this.videoList",this.videoList)

                   this.$nextTick(() => {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                      click: true
                    });
                  });
              }
          })
  },
  methods: {
    stopVideo(){
      this.$refs.videostop.pause
    }
  }
  
}
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 40px;
  // position: fixed;
  border: 1px solid #ccc;
  background-color: #ccc;

  .nav-title {
    margin: 2px 3px;
  }
}
.video-container {
  width: 100%;
  height: 580px;
  overflow: hidden;

  .video-item {
    margin-bottom: 10px;
    position: relative;
    height:211px;

    .title-item{
      position: absolute;
      z-index: 10;
      top: 30px;
    }
   
    .title{
      color: white;
      font-size: 20px;

    }
    
  }
}
</style>
