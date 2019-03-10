<template>
  <div class="novel">
    <div class="nav">
      <span @click="backBtn">
        <img :src="backImg" width="20px" height="20px">
      </span>
      <span class="nav-title">书籍详情</span>
    </div>

    <div class="nav-contail">
      <div class="title-contail">
        <div class="imgCover">
          <img :src="item.book_cover" width="100px" height="130px">
        </div>
        <div class="itemflex">
          <div class="bookname">{{item.bookname}}</div>
          <div class="text">作者: {{item.author_name}}</div>
          <div class="text">字数: {{item.size}}字</div>
          <div class="text">点击: {{item.num_click}}次</div>
        </div>
      </div>

      <div class="box-flex">
        <div class="box">
          <div class="redbox">{{item.price}}/千字</div>
        </div>
        <div class="box">
          <div class="redbox">立即阅读</div>
        </div>
        <div class="box">
          <div class="redbox">加入书架</div>
        </div>
      </div>
      <div class="newtopic">最新章节: {{item.topic}}</div>

      <div class="line"></div>
      <div class="jianjie">内容简介:</div>
      <div class="introduction">{{item.introduction}}</div>
      <div class="class-name">分类: {{item['class_name']}}</div>

      <div class="w"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "noveldetail",
  data() {
    return {
      backImg: require("../../public/img/agz.png")
    };
  },
  computed: {
    item: function() {
      return this.$route.params;
    }
  },
  methods: {
    backBtn() {
      this.$router.back();
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
    margin-left: 10px;
    font-size: 19px;
  }
}

.nav-contail {
  width: 90%;
  margin: 10px auto;

  .title-contail {
    width: 100%;
    height: 140px;
    // margin: 15px 0;
    display: flex;
    border-bottom: 1px solid #ccc;
    .imgCover {
      flex: 0 0 110px;
    }
    .bookname {
      font-size: 18px;
    }
    .text {
      color: rgb(102, 101, 101);
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 2px;
      margin: 8px 0;
    }
  }
}

.box-flex {
  display: flex;
  .box {
    flex: 1;
    .redbox {
      widows: 110px;
      height: 30px;
      margin: 10px 10px;
      border: 1px solid red;
      line-height: 31px;
      text-align: center;
      border-radius: 5px;
      color: red;
    }
  }
}

.newtopic,
.class-name {
  color: rgb(102, 101, 101);
  font-size: 13px;
  line-height: 13px;
  margin: 8px 0;
}

.line {
  width: 100%;
  height: 5px;
  background-color: rgb(219, 217, 217);
}
.jianjie {
  margin: 10px 5px;
  font-size: 20px;
}
.introduction {
  line-height: 26px;
}
.w{
      width: 100%;
      height: 50px;
}
</style>

