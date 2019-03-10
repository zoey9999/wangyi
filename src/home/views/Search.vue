<template>
  <div class="search">
    <div class="nav">
      <span class="back" @click="backBtn">
        <img :src="backBtnimg" width="15px" height="20px">
      </span>
      <input type="text" placeholder="搜你感兴趣的热搜" @input="changeVal" v-model="searchVal">
      <span class="search-text" @click="sendMsg">搜索</span>
    </div>

    <div class="contain">
          <ul>
                <div v-show="showHot">
                      <!-- af4.png  af5.png -->
                      <div class="hot">
                            <span class="fire"><img :src="fire" width="20px" height="20px"></span>
                            <span><img :src="resouImg" width="80px" height="20px"></span>
                        </div>
                      <div class="item-list" v-for="(item,index) in toutiao" :key="index" @click="totoutiaoDetail(item)">
                             <div class="item-title">
                               <span class="num">{{index+1}} </span> 
                               <span class="title">{{item.title}}</span>
                               <span></span>
                              </div>
                      </div>
                </div>
                <li v-for="(item,index) in arrList" :key="index" class="hot-item" @click="toDetail(item)">
                      <div class="item-title">{{item.title}}</div>
                </li>
          </ul>
    </div> 
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      searchVal:'',
      showHot:true,
      toutiao: [],
      backBtnimg: require("../../../public/img/a4x.png"),
      fire: require("../../../public/img/af4.png"),
      resouImg: require("../../../public/img/af5.png")
    };
  },
  created() {
    // https://www.apiopen.top/journalismApi
    this.axios.get("/toutiao").then(response => {
      let res = response.data;
      if (res) {
        this.toutiao = res.T1348647853363;
      }
    });
  },
  methods: {
    backBtn() {
      this.$router.back();
    },
    sendMsg() {},
    changeVal(e) {
          if(e.target.value.length !==0) {
                this.searchVal=e.target.value
                this.showHot= false
          }else {
                this.showHot = true
          }
    },
    totoutiaoDetail(params){
       this.$router.push({
        name:'detail',
        params
      })
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
    // eslint-disable-next-line
        arrList() {
              let searchVal=this.searchVal
              let arr=[]
              if(searchVal){
                          for(let i=0; i<this.toutiao.length; i++){
                                let str=String(this.toutiao[i].title)
                                if(str.search(searchVal)> -1) {
                                      arr.push(this.toutiao[i])
                                }
                          }
                    return arr
              }
        }
  }
};
</script>
<style lang="scss" scoped>
.search {
  .nav {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;

    .back {
      width: 30px;
      height: 25px;
      margin: 6px 6px;
      display: inline-block;
    }
    input {
      width: 70%;
      height: 25px;
      margin: 5px 6px;
      vertical-align: top;
      border-radius: 15px;
      border: 1px solid #ccc;
      outline: medium;
      text-align: center;
    }
    .search-text {
      width: 30px;
      height: 30px;
      line-height: 30px;
    }

  }
  .hot{
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #ccc;
      line-height: 50px;

      .fire{
            margin: 0 10px;
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