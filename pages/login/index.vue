<template>
  <div class="login">
    <div class="login-content">
      <el-input type="text" v-model="username" auto-complete="off" placeholder="请输入密码"></el-input>
      <el-input type="password" v-model="password" auto-complete="off" aria-placeholder="请输入密码" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="login">提交</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login (rediect) {
      axios.post('/frontLogin', {username: this.username, password: this.password}).then((result) => {
        const data = result.data
        if (data.success) {
          this.$store.commit('setUserId', data.userId)
          this.$router.push('/')
        } else {
          this.$message.error(data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less">
.login {
  width: 100%;
  .login-content{
    width: 50%;
    margin: 0 auto;
    text-align: center;
    .el-input{
      margin:  10px 0;
    }
  }
}
</style>

