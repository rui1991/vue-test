<template>
  <div class="date">
    <div class="block">
      <span class="demonstration">不大于本月</span>
      <el-date-picker
        v-model="value1"
        type="month"
        placeholder="选择月"
        value-format="yyyy-MM"
        :clearable="false"
        :picker-options="pickerOptions1">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">不小于本月</span>
      <el-date-picker
        v-model="value2"
        type="month"
        placeholder="选择月"
        value-format="yyyy-MM"
        :clearable="false"
        :picker-options="pickerOptions2">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      value1: '2019-04',
      value2: '2019-04',
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      pickerOptions2: {
        disabledDate (time) {
          return time.getTime() < Date.now()
        }
      }
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.date{
  margin-top: 30px;
}
</style>
