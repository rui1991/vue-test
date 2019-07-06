<template>
  <div class="bar">
    <h2>{{ mes }}</h2>
    <el-button type="primary" @click="translateMessage">翻译</el-button>
    <el-button type="primary" @click="switcherChange">切换</el-button>
    <p style="line-height: 30px; font-size: 14px; color: #f60;" v-show="txtState">我是一行文字！</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default{
  data () {
    return {

    }
  },
  created () {

  },
  computed: {
    ...mapState('movies', [
      'mes',
      'txtState'
    ])
    // ...mapState('movies', {
    //   mes: state => state.mes,
    //   txtState: state => state.txtState
    // })
  },
  methods: {
    ...mapActions('movies', [
      'changeMes',
      'switcherState'
    ]),
    // ...mapActions('movies', {
    //   changeMes: 'changeMes',
    //   switcherState: 'switcherState'
    // }),
    translateMessage () {
      this.changeMes('你好 世界！')
    },
    switcherChange () {
      this.switcherState()
    }
  }
}
</script>

<style lang="less" scoped>
.bar{

}
</style>
