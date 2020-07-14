<template>
    <div>
        <mt-header title="西北玄天一片云" fixed>
            <router-link slot="left" to="/">
                <mt-button><img src="../../assets/images/download.png" slot="icon"></mt-button>
            </router-link>
            <mt-button slot="right" icon="more"></mt-button>
        </mt-header>
        <div class="container">
            <p v-for="(num,n) in 50" :key="n">{{num}}</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
 .container{
     margin-top: 40px;
 }
</style>