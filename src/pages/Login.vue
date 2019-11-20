<template>
  <div class="login-box">
    <p class="tips" v-if="show">账户或密码错误</p>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <van-button type="primary" size="large" @click="login">登陆</van-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      show: false
    };
  },
  methods: {
    login() {
      /* 
        将登陆状态放置于缓存中，并更新vuex置于isLogin:true
        FIXME:退出登录后，再次登录进入个人主页请求头没有Authorization
      */
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.ob.code == 0) {
            // 提示用户密码输错
            this.show = true;
          } else {
            this.show = false;
            this.$toast.success("登陆成功");
            
            this.$store.dispatch("getUserInfo").then(res=>{
              // 调转页面
              this.$router.push({
                path:'/user',
                query:{
                  nickname:res.nickname
                }
              })
            }).catch(error=>{
              console.log(error)
            })
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.tips {
  color: firebrick;
  padding: 0.16rem 0.42rem;
}
</style>
