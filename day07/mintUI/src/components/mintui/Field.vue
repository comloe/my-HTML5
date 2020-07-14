<template>
    <div>
        <mt-field type="text" label="用户名" placeholder="请输入用户名" v-model="uname" :state="zt" :attr="{maxlength:'10',autocomplete:'on'}"></mt-field>
        <mt-field type="password" label="密码" placeholder="请输入密码" v-model="upwd" :attr="{maxlength:'10',autocomplete:'off'}"></mt-field>
        <mt-field type="password" label="确认密码" placeholder="请再次输入密码" v-model="upwd_2"></mt-field>
        <mt-button type="primary" size="large" @click="btn" @keydown="btn">注册</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"",
            upwd:"",
            upwd_2:"",
            zt:""
        }
    },
    methods:{
        btn(){
            let regUname=/^[a-zA-Z_0-9]{6,12}$/;
            if(regUname.test(this.uname)){
                console.log('合法的用户名');
            }else{
                console.log('请输入合法的用户名')
                return false;
            }
            let regUpwd=/^[a-zA-z0-9_]{8,20}$/
            if(regUname.test(this.upwd)){
                console.log('合法的密码');
            }else{
                console.log('请输入合法的密码')
                return false;
            }
            if(this.upwd==this.upwd_2){
                console.log('俩次密码一致');
            }else{
                console.log('俩次密码不一致')
                return false;
            }
        }
    }
}
</script>