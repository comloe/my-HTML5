<template>
  <div>
    <div class="container">
      <!-- 顶部导航开始 -->
      <mt-header title="学前端，到学问">
          <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
      </mt-header>
      <!-- 顶部导航结束 -->
      <!-- 文章区域开始 -->
      <div>
        <!-- 文章头部开始 -->
        <div class="article-header">
            <div class="article-header-title">
                {{details.subject}}
            </div>
        </div>
        <!-- 文章头部结束 -->
        <!-- 作者信息开始 -->
        <div>
          <div>
            <img :src="`../assets/images/avatar/${details_author.avatar}`" alt="">
          </div>
        </div>
        <!-- 作者信息结束 -->
        <!-- 文章正文开始 -->
        <div class="article-content" v-html="details.content"></div>
        <!-- 文章正文结束 -->
      </div>
      <!-- 文章区域结束 -->
    </div>
  </div>
</template>
<script>
export default {
    props:["lid"],
    data(){
      return{
        details:[],
        details_author:[]
      }
    },
    mounted(){
        this.axios.get("/details?lid="+this.lid).then(result=>{
          this.details=result.data.results;
          this.details_author=result.data.res_author;
        })
    }
}
</script>
<style scoped>
.container{
  background:#f6f6f6;
  min-height: 100vh;
  width: 100%;
}
.article-header{
  margin-bottom: 10px;
  padding: 10px;
  background:#fff;
}
.article-header-title{
  font-size:20px;
  line-height: 1.75;
  color: #1a1a1a;
}
.article-content{
  margin-top: 10px;
  font-size: 17px;
  background:#fff;
  padding:10px;
  
}
</style>
<style>
.article-content{
  padding: 10px;
  line-height: 1.8em;
}
.article-content img{
  display: block;
  max-width: 100%;
}
</style>