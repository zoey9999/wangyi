<template>
      <div class="attention">
            <div class="nav">
                  <span @click="backBtn">
                        <img :src="backImg" width="20px" height="20px">
                  </span>
                  <span class="nav-title">易起捐</span>
                  
            </div>
            <div class="contain">
                        <img :src="anyoneImg"  width="100%">
                  
            </div>
      </div>
</template>

<script>
export default {
      name:'readpublic',
      data() {
            return{
                  anyoneImg:require('../../public/img/public.jpg'),
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
      }
</style>

