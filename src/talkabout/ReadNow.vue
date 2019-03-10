<template>
      <div>
             <div class="nav">
                  <span class="back" @click="backBtn"><img :src="backBtnimg" width="15px" height="30px"></span>
                  <span class="title">{{item.bookname}}</span>
            </div>
            <div class="text">内容{{item.introduction}}</div>
      </div>
</template>

<script>
export default {
      name: 'readnow',
      data() {
            return {
                  backBtnimg: require("../../public/img/a4x.png"),
            };
      },
      methods: {
            backBtn() {
                  this.$router.back()
            }
      },
      computed: {
            item: function() {
                  return this.$route.params
            }
      }
}
</script>
<style lang="scss" scoped>
      .nav{
            width: 100%;
            height: 38px;
            border: 1px solid #ccc;

            .back{
                  margin-left: 10px;      
            }
            .title{
                  display: inline-block;
                  margin:auto 20px;
                  font-size: 17px;
            }
      }
      .text{
            line-height: 40px;
            letter-spacing: 6px;
      }
</style>

