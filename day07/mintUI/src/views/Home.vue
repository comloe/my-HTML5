<template>
  <div>
    <mt-header title="前端WEB">
      <div slot="right" v-if="!$store.state.isLogined">
        <router-link to="/login" class="a">登录</router-link>
        <router-link to="/register" class="a">注册</router-link>
      </div>
      <div slot="right" v-else>
          <mt-button @click="logout">
            注销
          </mt-button>
      </div>
    </mt-header>
    <mt-navbar v-model="active" :fixed="a">
      <mt-tab-item :id="key.id" v-for="(key,i) of categories" :key="i">{{key.category_name}}</mt-tab-item>
    </mt-navbar>
    <div class="parent" indinite-scroll-distance="50" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-immediate-check="true`">
      <mt-tab-container v-model="active" class="container">
        <mt-tab-container-item :id="key.id" v-for="(key,i) of categories" :key="i">
          <div class="info-item" v-for="(article,i) of articles" :key="i">
            <div class="info-item-head">
              <router-link :to="`/details/${article.id}`">{{article.subject}}</router-link>
            </div>
            <div class="info-item-content">
              <div class="info-item-img" v-show="article.image!=null">
                <router-link :to="`/details/${article.id}`"><img v-lazy="article.image" /></router-link>
              </div>
              <div class="info-item-des">{{article.description}}</div>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="floot" fixed>
      <mt-tab-item id="home">
        <img src="../assets/images/home_enable.png" alt slot="icon" v-if="floot=='home'" />
        <img src="../assets/images/home_disable.png" alt slot="icon" v-else />
        首页
      </mt-tab-item>
      <mt-tab-item id="me">
        <img src="../assets/images/me_enable.png" alt slot="icon" v-if="floot=='me'" />
        <img src="../assets/images/me_disable.png" alt slot="icon" v-else />
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      active: 1,
      floot: "home",
      categories: [],
      articles: [],
      page:1,
      busy:false,
      a:false,
      pagecount:0
    };
  },
  methods:{
    ...mapMutations(["logout_mutation"]),
    logout(){
      this.logout_mutation();
    },
    loadData(){
      this.$indicator.open("别着急....");
      this.busy=true;
       this.axios
      .get("/article", { params: { cid: this.active,page:this.page } })
      .then(results => {
        let data = results.data.result;
        this.pagecount=results.data.pagecount
        data.forEach(item => {
          if (item.image != null) {
            item.image = require("../assets/images/articles/" + item.image);
          }
         this.articles.push(item);
        });
        this.$indicator.close();
       this.busy=false;
      })
    },
    loadMore(){
      this.page++;
      if(this.page<=this.pagecount){
        this.loadData();
        this.a=true;
      }
    }
  },
  watch:{
    active(){
      this.articles=[];
      this.a=false
      this.page=1;
      this.loadData();
    }
  },
  mounted() {
    this.axios.get("/categories").then(result => {
      this.categories = result.data;
    });
   this.loadData();
  }
};
</script>
<style scoped>
.a {
  text-decoration: none;
  color: #fff;
  padding-right: 10px;
}
.container {
  margin-top: 10px;
  padding: 0 20px;
  overflow: hidden;
}
.parent {
  width: 100%;
  margin-bottom: 55px;
}
.info-item {
  border-bottom: 0.5px solid #d3d3d3;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.info-item-head > a {
  text-decoration: none;
  color: #000;
  line-height: 22px;
  font-size: 16px;
  font-weight: 600;
}
.info-item-content {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-right: 20px;
}
.info-item-img img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
  margin-right: 10px;
}
.info-item-des {
  height: 72px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #444;
}
</style>

