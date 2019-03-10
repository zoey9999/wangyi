<template>
  <div id="app">
    <news-footer :news="news"></news-footer>
  </div>
</template>

<script>
import NewsFooter from "./home/components/NewsFooter";

export default {
  name: "app",
  data(){
    return{
      news:{},

    }
  },
 
  components: {
    NewsFooter
  }
};
</script>
<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

