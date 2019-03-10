<template>
      <div class="jingxuan">
            <div class="container" ref="wrapper">
                  <div>
                        <div v-for="(newsitem,index) in jingxuan" :key="index" class="news-item" @click="jingDetail(newsitem)">
                              <div class="tap-item">
                                    <div class="news-title">{{newsitem.title}}</div>
                                    <div class="news-detail">{{newsitem.source}}</div>
                                    <span class="news-detail">{{newsitem.mtime}}</span>
                                    <span class="news-detail">{{newsitem.replyCount}}跟帖</span>
                              </div>
                              <div class="show-img" v-show="newsitem.imgsrc">
                                    <img :src="newsitem.imgsrc" width="110px"  height='75px'>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>


<script>
// import NewsFooter from "./components/NewsFooter"
import BScroll from "better-scroll";
export default {
  name: "jingxuan",
  data() {
    return {
      jingxuan: []
    };
  },

  created() {
    this.axios.get('/jingxuan')
              .then(response => {
                  let res = response.data
                  if (res) {
                      this.jingxuan = res.T1467284926140
                       this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.wrapper, {
                          click: true
                        });
                      });
                  }
              })
              
  },
  methods: {
    jingDetail(params){
      this.$router.push({name:'detail',params})
    }
  }

};
</script>
<style lang="scss" scoped>
.jingxuan{

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
      width: 30%;
      display: inline-block;
    }
    .news-detail {
      margin-left: 10px;
      font-size: 12px;
      color: rgb(112, 110, 110);
    }
  }
}
</style>

