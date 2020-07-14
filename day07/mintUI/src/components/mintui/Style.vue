<template>
    <div>
        <mt-header title="中国移动"></mt-header>
        <mt-navbar v-model="active">
            <mt-tab-item id="a">首页</mt-tab-item>
            <mt-tab-item id="b">业务</mt-tab-item>
            <mt-tab-item id="c">优惠</mt-tab-item>
            <mt-tab-item id="d">我的</mt-tab-item>
        </mt-navbar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"a"
        }
    }
}
</script>