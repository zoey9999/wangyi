<template>
      <div class="yule">
            <div class="container" ref="wrapper">
                  <div>
                  <div v-for="(newsitem,index) in yule" :key="index" class="news-item" @click="yuleDetail(newsitem)">
                  <div class="tap-item">
                        <div class="news-title">{{newsitem.title}}</div>
                        <div class="news-detail">{{newsitem.source}}</div>
                        <span class="news-detail">{{newsitem.mtime}}</span>
                        <span class="news-detail">{{newsitem.replyCount}}跟帖</span>
                  </div>
                  <div class="show-img">
                        <img :src="newsitem.imgsrc" width="110px"  height='75px'>
                  </div>
                  </div>
                  </div>
            </div>
            <router-view></router-view>
      </div>
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "yule",
  data() {
    return {
      yule: []
    };
  },

  created() {
    this.axios.get('/yule')
              .then(response => {
                  let res = response.data
                  if (res) {
                      this.yule = res.T1348648517839
                       this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.wrapper, {
                          click: true
                        });
                      });
                  }
              })
  },
  methods: {
    yuleDetail(params){
      this.$router.push({name:'detail',params})
    }
  }

};
</script>
<style lang="scss" scoped>
.yule {

  .container {
    position: relative;
    width: 100%;
    height: 545px;
    overflow: hidden;

    .news-item {
      margin-top: 20px;
      width: 100%;
    }
    .tap-item{
      width: 70%;
      display: inline-block;
    }
    .news-title {
      margin:10px 10px;
      letter-spacing: 2px;
      line-height: 22px;
    }
    .show-img{
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

