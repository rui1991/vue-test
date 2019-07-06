<template>
  <div class="table">
    <i style="font-size: 24px; color: blue;" class="el-icon-s-grid"></i>
    <el-transfer
      filterable
      ref="myTransfer"
      :filter-method="filterMethod"
      filter-placeholder="请输入姓名"
      v-model="checkCrew"
      :props="props"
      :titles="['人员列表', '已选择']"
      :data="dataTable">
    </el-transfer>
    <br>
    <br>
    <el-button type="success" @click="getClick">获取</el-button>
    <el-button type="success" @click="emptyClick">清空</el-button>
    <br>
    <br>
    <el-table :data="tableData" id="table" row-key="id" border style="width: 300px;">
      <el-table-column type="index" fixed width="50" label="序号"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column label="操作" width="70">
        <template slot-scope="scope">
          <i style="font-size: 24px; color: blue;" class="el-icon-menu"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
export default{
  name: 'tableEle',
  data () {
    return {
      dataTable: [
        {
          name: '张三',
          id: 1,
          sector: '安保'
        },
        {
          name: '李四',
          id: 2,
          sector: '安保'
        },
        {
          name: '王五',
          id: 3,
          sector: '维修'
        },
        {
          name: '张三三',
          id: 4,
          sector: '维修'
        },
        {
          name: '张姗姗',
          id: 5,
          sector: '安保'
        }
      ],
      props: {
        label: 'name',
        key: 'id'
      },
      checkCrew: [3, 6],
      filterMethod (query, item) {
        return item.name.indexOf(query) > -1
      },
      tableData: [
        {
          name: '张三',
          id: 1
        },
        {
          name: '李四',
          id: 2
        },
        {
          name: '王五',
          id: 3
        },
        {
          name: '张三三',
          id: 4
        },
        {
          name: '张姗姗',
          id: 5
        }
      ]
    }
  },
  created () {

  },
  mounted () {
    this.rowDrop()
  },
  methods: {
    getClick () {
      const dataTable = this.dataTable
      const checkCrew = this.checkCrew
      let crewArr = []
      checkCrew.forEach(itemValue => {
        let temp = dataTable.find((item, index, array) => {
          return itemValue === item.id
        })
        crewArr.push(temp)
      })
      console.log(checkCrew)
      console.log(crewArr)
    },
    emptyClick () {
      if (this.$refs.myTransfer) {
        // 清空左边搜索
        this.$refs.myTransfer.$children['0']._data.query = ''
        // 清空右边搜索
        this.$refs.myTransfer.$children['3']._data.query = ''
      }
    },
    // 行拖拽
    rowDrop () {
      const tbody = document.querySelector('#table tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd ({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.table{
  margin-top: 20px;
}
</style>
