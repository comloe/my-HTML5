<template>
  <div>
    <mt-header title="用户注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <mt-field
        type="text"
        label="用户名"
        placeholder="请输入用户名"
        v-model="uname"
        @blur.native.capture="verifyUname"
        :state="stateUname"
      ></mt-field>
      <mt-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        v-model="upwd"
        @blur.native.capture="verifyUpwd"
        :state="stateUpwd"
      ></mt-field>
      <mt-field
        type="password"
        label="确认密码"
        placeholder="请输入确认密码"
        v-model="upwd_2"
        @blur.native.capture="verifyUpwd_2"
        :state="stateUpwd_2"
      ></mt-field>
      <mt-field
        type="email"
        label="电子邮箱"
        placeholder="请输入电子邮箱"
        v-model="email"
        @blur.native.capture="verifyEmail"
        :state="stateEmail"
      ></mt-field>
      <mt-button size="large" type="primary" @click="btn" @keydown.13="btn">快速注册</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      upwd_2: "",
      email: "",
      stateUname: "",
      stateUpwd: "",
      stateUpwd_2: "",
      stateEmail: ""
    };
  },
  methods: {
    verifyUname() {
      let rgeUname = /^[0-9a-zA-Z_]{6,12}$/;
      this.stateUname = rgeUname.test(this.uname) ? "success" : "error";
      return rgeUname.test(this.uname);
    },
    verifyUpwd() {
      let regUpwd = /^[0-9a-zA-Z_]{8,20}$/;
      if (this.upwd != "") {
        this.stateUpwd = regUpwd.test(this.upwd) ? "success" : "error";
      }
      return regUpwd.test(this.upwd);
    },
    verifyUpwd_2() {
      if (this.upwd_2 != "") {
        this.stateUpwd_2 = this.upwd_2 == this.upwd ? "success" : "error";
      }
      return this.upwd_2 == this.upwd;
    },
    verifyEmail() {
        let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z]+.com$/;
      if (this.email != "") {
        this.stateEmail = regEmail.test(this.email) ? "success" : "error";
      }
      return regEmail.test(this.email);
    },
    btn() {
      this.verifyUname() &&
      this.verifyUpwd() &&
      this.verifyUpwd_2() &&
      this.verifyEmail()
        ? alert("1")
        : alert("2");
    }
  }
};
</script>