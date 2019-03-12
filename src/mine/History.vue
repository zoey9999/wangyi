<template>
  <div class="myhistory">
    <div class="nav">
      <span @click="backBtn">
        <img :src="backImg" width="20px" height="20px">
      </span>
      <span class="nav-title">阅读历史</span>
    </div>
    <div class="contain">
      <div class="box"  v-show="!$store.state.HaveSee">
        <img :src="anyoneImg" width="180px" height="180px">
        <div class="text">暂无阅读历史</div>
      </div>
      <div>
      <div v-for="(item,index) in initialList" :key='index' class="item-list" @click="toDetail(item)">
            <div class="item-title">
                    <span class="num">{{index+1}} </span> 
                    <span class="title">{{item.title}}</span>
            </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from "vuex";
export default {
  name: "myhistory",
  data() {
    return {
      anyoneImg: require("../../public/img/au5.png"),
      backImg: require("../../public/img/agz.png")
    };
  },
  methods: {
    backBtn() {
      this.$router.back();
    },
     toDetail(params) {
      this.searchVal=''
      this.$router.push({
        name:'detail',
        params
      })
    }
  },
  computed: {
    initialList() {
      return this.$store.state.HaveSee;
    }
  }
};
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
.contain {
  width: 100%;
  height: 100%;
  .box {
    text-align: center;
    margin: auto auto;
    .text {
      margin: 15px 0;
      color: #5a5a5a;
    }
  }

  .item-list{
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #ccc;
        line-height: 45px;
        white-space: nowrap;
        .num{
          display: inline-block;
          margin: auto 10px;
          height: 45px;
          color: rgb(94, 93, 93);
          vertical-align: top;
        }
        .title{
          display: inline-block;
          width: 70%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
  }
}
</style>

