<template>
  <div class="zhibo">
    <div class="livenav">
      <div class="back" @click="goback">返回</div>
      <!-- <img src="" alt=""> -->
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
      live: []
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
    goback() {
      this.$router.back()
    }
  }
};
</script>
<style lang="scss" scoped>
  .zhibo{
    .livenav{
      width: 100%;
      height: 40px;
      position: fixed;
      background-color: #cccccc;
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
