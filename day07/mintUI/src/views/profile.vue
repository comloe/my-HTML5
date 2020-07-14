<template>
    <div>
        <mt-header title="个人资料">
            <router-link slot="left" to="/zhihu"><mt-button icon="back"></mt-button></router-link>
        </mt-header>
        <div>
            <div class="avater">
                <img src="../assets/images/avater/tx.jpg" alt="">
            </div>
            <div>昵称：xxxxxxx</div>
        </div>
    </div>
</template>
<style scoped>
    .avater{
        margin: 20px 0;
        text-align: center;
    }
    .avater>img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
</style>