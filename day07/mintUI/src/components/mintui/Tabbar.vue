<template>
  <div>
    <div class="container">
      <p v-for="(k,i) of 50" :key="i">{{k}}</p>
    </div>
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="a">
        首页
        <img src="../../assets/images/home_enable.png" alt slot="icon" v-if="active=='a'">
        <img src="../../assets/images/home_disable.png" alt="" slot="icon" v-if="active!='a'">
      </mt-tab-item>
      <mt-tab-item id="b">
        购物车
        <img src="../../assets/images/cart_disable.png" alt slot="icon" v-if="active!='b'">
        <img src="../../assets/images/cart_enable.png" alt slot="icon"  v-if="active=='b'">
      </mt-tab-item>
      <mt-tab-item id="c">
        我的
        <img src="../../assets/images/me_disable.png" alt slot="icon" v-if="active!='c'">
        <img src="../../assets/images/me_enable.png" alt slot="icon"  v-if="active=='c'">
        
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "a"
    };
  }
};
</script>
<style scoped>
.container {
  margin-bottom: 56px;
}
</style>