<template>
      <div class="view">
            <div class="nav">
                  <span class="back" @click="backBtn"><img :src="backBtnimg" width="15px" height="30px"></span>
                  <span class="gentie">{{data.priority}}人参与跟帖</span>
            </div>
            <div class="container">
                  <div class="title">{{data.ltitle}}</div>
                  <div class="time">{{data.mtime}}</div>
                  <div class="source">{{data.source}}</div>
                  <!-- <div>{{data.speciallogo}}</div> -->
                  <img :src="data.imgsrc" width="100%">
                  <div class="digest">{{data.digest}}</div>
            </div>
            <div class="w"></div>
      </div>
</template>

<script>
export default {
      name: "detail",
      data() {
            return {
                  backBtnimg: require("../../../public/img/a4x.png"),
            };
      },
      methods: {
            backBtn() {
                  this.$router.back()
            }
      },
      computed: {
            data: function() {
                  return this.$route.params
            }
      }
}
</script>
<style lang="scss" scoped>
      .view{
            .nav{
                  // position: fixed;
                  width: 100%;
                  height: 38px;
                  border: 1px solid #ccc;

                  .back{
                        margin-left: 10px;
                  }
                  .gentie{
                        float: right;
                        height: 25px;
                        line-height: 25px;
                        margin: 5px 10px;
                        border: 1px solid red;
                        border-radius: 10px;
                        font-size: 13px;
                        color: red;
                  }
            }

            .container{
                  width: 90%;
                  margin: 10px auto;
                  .title{
                        font-size: 30px;
                        font-weight: 20px;
                        margin: 10px 0;
                        line-height: 38px;
                        letter-spacing: 6px;
                  }
                  .time{
                        color: #ccc;

                  }
                  .time,
                  .source{
                        font-size: 13px;
                        line-height: 20px;
                  }
                  img{
                        margin: 20px 0;
                  }
                  .digest{
                        line-height: 30px;
                        letter-spacing: 5px;
                  }
            }
            .w{
                  width: 100%;
                  height: 50px;
            }
      }
</style>

