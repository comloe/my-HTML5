<template>
    <div>
        <img v-lazy='img' v-for="(img,i) of images" :key="i">
    </div>
</template>
<script>
export default {
    data(){
        return{
            images:[
                require('../../assets/images/1.jpg'),
                require('../../assets/images/2.jpg'),
                require('../../assets/images/3.jpg'),
                require('../../assets/images/4.jpg'),
                require('../../assets/images/5.jpg'),
                require('../../assets/images/6.jpg'),
                require('../../assets/images/7.jpg'),
            ]
        }
    }
}
</script>
<style scoped>
    img{
        width: 100%;
    }
</style>