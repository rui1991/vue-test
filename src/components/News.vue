<template>
  <div class="news">
    <h1 class="title">欢迎来到消息模块</h1>
    <div class="add">
      <span>人员</span>
      <el-input v-model="name" placeholder="请输入姓名" style="width: 120px; margin-right: 10px;"></el-input>
      <el-input v-model="age" placeholder="请输入年龄" style="width: 120px; margin-right: 10px;"></el-input>
      <el-button type="primary" icon="el-icon-circle-plus-outline" :disabled="addDisabled" @click="addClick">添加</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 50%">
      <el-table-column
        type="index"
        width="50"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="message"
        label="基本信息"
        width="180">
      </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.date | filterDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <i class="el-icon-delete" style="color: red; font-size: 24px; cursor: pointer;" @click="delClick(scope.$index)"></i>
        </template>
      </el-table-column>
    </el-table>
    <p style="height: 35px; line-height: 35px; color: #686868;">此列表数据保存在{{ modName }}模块</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default{
  name: 'news',
  data () {
    return {
      name: '',
      age: '',
      addDisabled: true
    }
  },
  created () {

  },
  computed: {
    ...mapState('moduleA', {
      modName: state => state.name
    }),
    ...mapGetters('moduleA', [
      'tableData'
    ])
  },
  filters: {
    filterDate (date) {
      if (!date) { return '' }
      let value = new Date(date)
      let year = value.getFullYear()
      let month = value.getMonth() + 1 + ''
      month = month.padStart(2, '0')
      let day = value.getDate() + ''
      day = day.padStart(2, '0')
      let hour = value.getHours() + ''
      hour = hour.padStart(2, '0')
      let minutes = value.getMinutes() + ''
      minutes = minutes.padStart(2, '0')
      let seconds = value.getSeconds() + ''
      seconds = seconds.padStart(2, '0')
      return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    }
  },
  methods: {
    ...mapActions('moduleA', {
      add: 'addCrew',
      del: 'delCrew'
    }),
    addClick () {
      const item = {
        name: this.name,
        age: this.age,
        date: new Date()
      }
      this.add(item)
      this.name = ''
      this.age = ''
    },
    // 删除
    delClick (index) {
      this.$confirm('是否要删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.del(index)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  watch: {
    name (newVal, oldVal) {
      if (newVal) {
        this.addDisabled = false
      } else {
        this.addDisabled = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
.news{
  .title{
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    text-align: center;
  }
  .add{
    text-align: left;
    margin-bottom: 20px;
    span{
      margin-right: 10px;
    }
  }
}
</style>
