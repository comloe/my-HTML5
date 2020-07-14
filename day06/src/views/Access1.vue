<template>
    <div>
        <h1>访问数据--页面1</h1>
        <h4>姓名：{{username}}</h4>
        <h4>年龄：{{age}}</h4>
        <h4>性别：{{$store.state.sex?"男":"女"}}</h4>
        <h4 v-for="(friend,i) of friends" :key="i">他的朋友 姓名：{{friend.uname}}，年龄：{{friend.age}}，地址：{{friend.address}}</h4>
    </div>    
</template>
<script>
//Vuex的辅助函数
import {mapState} from 'vuex';
export default {
    computed:{
       ...mapState(['username','age','friends'])
    }
}
</script>
