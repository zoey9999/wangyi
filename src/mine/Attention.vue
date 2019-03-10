<template>
      <div class="attention">
            <div class="nav">
                  <span @click="backBtn">
                        <img :src="backImg" width="20px" height="20px">
                  </span>
                  <span class="nav-title">用户</span>
                  
            </div>
            <div class="contain">
                  <div class="box">
                        <img :src="anyoneImg"  width="180px" height="180px">
                        <div class="text">还未关注任何人</div>
                  </div>
                  
            </div>
      </div>
</template>

<script>
export default {
      name:'attention',
      data() {
            return{
                  anyoneImg:require('../../public/img/au5.png'),
                  backImg: require("../../public/img/agz.png")
            }
      },
      methods: {
            backBtn() {
                  this.$router.back();
            }
      }
}
</script>
<style lang="scss" scoped>
      .nav {
            width: 100%;
            height: 50px;
            border: 1px solid #cccccc;
            background-color: white;
            line-height: 50px;
            img {
                  margin: auto 12px;
            }
            .nav-title {
                  margin-left: 20px;
                  font-size: 19px;
            }
      }
      .contain{
            width: 100%;
            height: 100%;
            .box{
                  text-align: center;
                  margin: auto auto;
                  .text{
                        margin: 15px 0 ;
                        color: #5a5a5a;
                  }
            }
      }
</style>

