<template>
    <div>
        <mt-radio title="性别" :options="[{label:'男',value:'1'},{label:'女',value:'0'},{label:'保密',value:'-1'}]" v-model="gender"></mt-radio>
    </div>
</template>
<script>
export default {
    data(){
        return {
            gender:"1"
        }
    }
}
</script>