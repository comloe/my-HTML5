<template>
    <div>
        <h1>访问数据--页面2</h1>
        <h4>姓名：{{this.$store.state.username}}</h4>
        <h4>年龄：{{$store.state.age}}</h4>
        <h4>性别：{{$store.state.sex?"男":"女"}}</h4>
        <h3 v-for="(friend,i) of $store.state.friends" :key="i"> 姓名：{{friend.uname}}，年龄：{{friend.age}}，地址：{{friend.address}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>