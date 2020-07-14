
<template>
    <div>
        <mt-cell title="飞行模式" label="禁止通话">
            <img src="../../assets/images/fly.png" alt="" slot="icon">
            <mt-switch v-model="flyModel"></mt-switch>
        </mt-cell>
        <mt-cell title="无线局域网" isLink>
            <img src="../../assets/images/network.png" alt="" slot="icon">未连接
        </mt-cell>
        <mt-cell title="蓝牙" isLink to="/">
            <img src="../../assets/images/blue.png" alt="" slot="icon">
        </mt-cell>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flyModel:false
        }
    }
}
</script>