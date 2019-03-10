<template>
  <div class="talk-about">
    <div class="nav">
      <div class="nav-tilte">
        <div class="tilte">推荐</div>
      </div>
      <span class="nav-search">
        <img :src="imgSearch">
      </span>
    </div>
    <router-view></router-view>
    <div>
      <img :src="imgTag" alt="" width="100%">
    </div>
    <div class="talk-container">
      <div class="novel-item" v-for="(item,index) in novel" :key="index" @click="novelDetail(item)">
        <div class="imgCover"><img :src="item.book_cover" width="70px" height="90px"></div>
        <div class="itemflex">
          <div class="bookname">{{item.bookname}}</div>
          <div class="book-info">{{item['book_info']}}</div>
          <div class="class-name">{{item['class_name']}}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "talkabout",
  data() {
    return {
      novel: [],
      imgSearch: require("../../public/img/a6v.png"),
      imgTag: require("../../public/img/novel.jpg")
    };
  }, 
  created() {
      this.axios.get('https://www.apiopen.top/novelApi')
          .then(response => {
              let res = response.data
              if (res) {
                  this.novel = res.data
                  // console.log("this.novel",this.novel)
              }
          })

  },
  methods: {
    novelDetail(params){
      this.$router.push({name:'noveldetail',params})
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;

  .nav-tilte {
    width: 85%;
    margin-top: 15px;
    background-color: white;

    .tilte {
      top: 10px;
      color: rgb(82, 79, 79);
      font-size: 20px;
       margin-left: 40%;
    }
  }
  .act.active {
    color: rgb(247, 8, 8);
  }
  .nav-search {
    position: absolute;
    right: 5px;
    top: 15px;

    img {
      width: 25px;
      height: 25px;
    }
  }
}

.talk-container{
  margin: 30px auto;
  width: 90%;
  .novel-item{
    margin: 15px 0;
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .imgCover{
    flex: 0 0 90px;

  }
  .book-info,
  .class-name{
    color: rgb(102, 101, 101);
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 4px;
    margin:8px 0;
  }
  .book-info{
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>

