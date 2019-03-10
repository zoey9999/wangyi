<template>
  <div class="zhibo">
    <div class="nav">
                  <span @click="backBtn">
                        <img :src="backImg" width="20px" height="20px">
                  </span>
                  
            </div>

    <div class="select">
      <div v-for="(item,index) in live" :key="index">
        <div class="live-item">
          <img :src="item.image" width="100%" height="100%">
            <!-- <img :src="playBtn" class="play-btn"> -->
            <div class="roomName">{{item.roomName}}</div>
            <span class="source">{{item.source}}</span>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: "zhibo",
  data() {
    return {
      live: [],
      backImg: require("../../public/img/agz.png"),
    };
  },
  created() {
    this.axios.get("/zhibo").then(response => {
      let res = response.data;
      if (res) {
        this.zhibo = res;
        this.future = res.future;
        //eslint-disable-next-line
        // console.log("this.future", this.future);

        this.live = res.live_review;
        //eslint-disable-next-line
        // console.log("this.live", this.live);

      }
    });
  },
  methods:{
    backBtn() {
      this.$router.back()
    }
  }
};
</script>
<style lang="scss" scoped>
  .zhibo{
    .nav {
            width: 100%;
            height: 50px;
            border: 1px solid #cccccc;
            background-color: white;
            line-height: 50px;
            img {
                  margin: auto 12px;
            }
      }
    .select{
      
      img{
        margin-top: 20px;
      }
      .roomName{
      line-height: 40px;
      }
      .source{
          color: #616060;
          font-size: 13px;
          line-height: 20px;
      }
    }
    
  }
</style>
