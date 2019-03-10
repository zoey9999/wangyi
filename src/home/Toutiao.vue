<template>
  <div class="toutiao">
    <div class="container" ref="toutiaowrapper">
      <div>
        <div
          v-for="(newsitem,index) in toutiao"
          :key="index"
          class="news-item"
          @click="toutiaoDetail(newsitem)"
        >
          <div class="tap-item">
            <div class="news-title">{{newsitem.title}}</div>
            <div class="news-detail">{{newsitem.source}}</div>
            <span class="news-detail">{{newsitem.mtime}}</span>
            <span class="news-detail">{{newsitem.replyCount}}跟帖</span>
          </div>
          <div class="show-img">
            <img :src="newsitem.imgsrc" width="110px" height="75px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "toutiao",

  data() {
    return {
      toutiao: []
    };
  },

  created() {
    this.axios.get("/toutiao").then(response => {
      let res = response.data;
      if (res) {
        this.toutiao = res.T1348647853363;
        // eslint-disable-next-line
        // console.log(this.toutiao);
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.toutiaowrapper, {
            click: true
          });
        });
      }
    });
  },
  methods: {
    toutiaoDetail(params) {
      this.$router.push({ name: "detail", params });
    }
  }
};
</script>
<style lang="scss" scoped>
.toutiao {
  .container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;

    .news-item {
      margin-top: 20px;
      width: 100%;
    }
    .tap-item {
      width: 70%;
      display: inline-block;
    }
    .news-title {
      margin: 10px 10px;
      letter-spacing: 2px;
      line-height: 22px;
    }
    .show-img {
      display: inline-block;
      width: 30%;
    }
    .news-detail {
      margin-left: 10px;
      font-size: 12px;
      color: rgb(112, 110, 110);
    }
  }
}
</style>

