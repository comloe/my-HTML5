<template>
    <div>
        <h4>姓名：{{this.$store.state.username}}</h4>
        <h4>年龄：{{$store.state.age}}</h4>
        <button @click="btn">获取WEB服务器数据</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['get_server_data']),
        btn(){
            //分发Action(调用Vuex中Action内的方法)
            this.get_server_data();
        }
    }
}
</script>