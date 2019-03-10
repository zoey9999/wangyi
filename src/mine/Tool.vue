<template>
      <div>
             <div class="nav">
                  <span @click="backBtn">
                        <img :src="backImg" width="20px" height="20px">
                  </span>
                  <span class="nav-title">设置</span>
                  
            </div>

            <div>
                  <div class="list">
                        <span class="list-left">账号设置</span>
                  </div>
                  <div class="list">
                        <span class="list-left">阅读设置</span>
                        <span class="list-right">字体.字号.语言等</span>
                  </div>
                  <div class="list">
                        <span class="list-left">个性换肤</span>
                        <span class="list-right">官方经典</span>
                  </div>
                  <div class="list">
                        <span class="list-left">仅 WI-FI网络加载图片</span>
                  </div>
                  <div class="list">关于</div>
            </div>
      </div>
</template>

<script>
export default {
      name :'tool',
       data() {
            return{
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

       .list{
            width: 90%;
            height: 50px;
            line-height: 50px;
            margin: 0 auto;
            border-bottom: 1px solid #ccc;
            .list-right{
                  display: inline-block;
                  color: #ccc;
                  float: right;
                  font-size: 14px;
            }
            }
</style>
