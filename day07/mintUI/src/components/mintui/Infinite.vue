<template>
  <div>
    <div indinite-scroll-distance="10" v-infinite-scroll="isData" infinite-scroll-disabled="busy">
      <p v-for="(v,i) in a" :key="i" >{{v}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 30,
      busy:false
    };
  },
  methods: {
    isData() {
      this.$indicator.open({
        text:"客官请稍后！！",
        spinnerType:"fading-circle"
      })
      this.busy=true;
      setTimeout(()=>{
      this.a += 30;
      this.busy=false
      this.$indicator.close();
      },5000)
    }
  }
};
</script>
