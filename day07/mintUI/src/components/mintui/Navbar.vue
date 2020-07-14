<template>
    <div>
        <mt-navbar v-model="active">
            <mt-tab-item id="sh">生活</mt-tab-item>
            <mt-tab-item id="xw">新闻</mt-tab-item>
            <mt-tab-item id="yx">游戏</mt-tab-item>
            <mt-tab-item id="car">汽车</mt-tab-item>
            <mt-tab-item id="play">娱乐</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="active" :swipeable="true">
            <mt-tab-container-item id="sh">
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
                AAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<br>
            </mt-tab-container-item>
            <mt-tab-container-item id="xw">
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
            </mt-tab-container-item>
            <mt-tab-container-item id="yx">
                CCCCcccccccccccccccccccccccccccccccccccccccccc<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
                BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB<br>
            </mt-tab-container-item>
            <mt-tab-container-item id="car">
                DDDDdddddddddddddddddddddddddddddddddddddddddd<br>
            </mt-tab-container-item>
            <mt-tab-container-item id="play">
                FFFFfffffffffffffffffffffffffffffffffffffffff<br>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"car"
        }
    }
}
</script>