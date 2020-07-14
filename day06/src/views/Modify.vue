<template>
    <div>
        <h4>姓名：{{this.$store.state.username}}</h4>
        <h4>年龄：{{$store.state.age}}</h4>
        <button @click="increment(1)">增加年龄</button>
        <button @click="increment(-1)">减少年龄</button>
        <button @click="increment(5)">每次加5岁</button>
        <button @click="increment(-5)">每次减5岁</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations(['age_increment_mutation']),
        increment(i){
            //this.$store.commit('age_increment_mutation',i)
            this.age_increment_mutation(i);
        },
    }
}
</script>