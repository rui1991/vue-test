<template>
  <div class="home">
    <h1 class="title">欢迎来到首页</h1>
    <el-button type="primary" @click="getRequest">获取</el-button>
    <el-button type="primary" @click="sendRequest">发送请求</el-button>
    <br>
    <Bar></Bar>
    <Foo></Foo>
  </div>
</template>

<script>
// 引入基础配置
import Bar from '@/components/bar'
// 引入选择地址
import Foo from '@/components/foo'
export default{
  name: 'home',
  data () {
    return {
      name: ' WR'
    }
  },
  created () {

  },
  components: {
    Bar,
    Foo
  },
  computed: {

  },
  methods: {
    getRequest () {
      let params = {
        userName: 'ZGVuZw%3D%3D',
        userPwd: 'ODg0Mzc4YWJj'
      }
      params = this.$qs.stringify(params)
      this.$axios({
        method: 'post',
        url: '/api/user/doLogin',
        data: params
      }).then((res) => {
        if (res.data.result === 'Sucess') {
          console.log(res.data.data1)
          this.$message({
            message: '请求成功！',
            type: 'success'
          })
        }
      }).catch(() => {
        this.$message({
          showClose: true,
          message: '服务器连接失败！',
          type: 'error'
        })
      })
    },
    sendRequest () {
      let params = {
        type: '0',
        user_phone: '13697114686',
        user_pwd: '123456'
      }
      params = this.$qs.stringify(params)
      this.$axios({
        method: 'post',
        url: '/api/v3.2/login',
        data: params
      }).then((res) => {
        if (res.data.result === 'Sucess') {
          console.log(res.data.data1)
          this.$message({
            message: '恭喜你，登录成功！',
            type: 'success'
          })
        }
      }).catch(() => {
        this.$message({
          showClose: true,
          message: '服务器连接失败！',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  .title{
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    text-align: center;
  }
}
</style>
