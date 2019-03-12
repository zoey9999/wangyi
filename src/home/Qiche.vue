<template>
      <div class="qiche">
            <div class="container" ref="wrapper">
                  <div>
                  <div v-for="(newsitem,index) in qiche" :key="index" class="news-item" @click="qicheDetail(newsitem)">
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
  name: "qiche",
  data() {
    return {
      comlect: false,
      qiche: []
    };
  },

  created() {
    this.axios.get('/qiche')
              .then(response => {
                // console.log(response)
                  let res = response.data
                  // if (res) {
                      this.qiche = res.list
                       this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.wrapper, {
                          click: true
                        });
                      });
                  // }
              })
  },
  methods: {
    qicheDetail(params){
      this.$store.commit("BecomeHave", params)
      this.$router.push({name:'detail',params})
    }
  }
};
</script>
<style lang="scss" scoped>
.qiche {

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

