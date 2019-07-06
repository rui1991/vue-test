<template>
  <div class="list">
    <el-button type="primary" @click="getOrg">获取</el-button>
    <br>
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      check-strictly
      node-key="id"
      ref="tree"
      @check-change="orgCheckChange"
      @node-click="orgNodeClick"
      :props="defaultProps">
    </el-tree>
  </div>
</template>

<script>
export default{
  name: 'tree',
  data () {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 4',
            children: [{
              id: 9,
              label: '三级 9'
            }, {
              id: 10,
              label: '三级 10'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 5',
            disabled: true
          }, {
            id: 6,
            label: '二级 6'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 7'
          }, {
            id: 8,
            label: '二级 8'
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      orgId: '',
      orgName: ''
    }
  },
  created () {

  },
  methods: {
    orgCheckChange (data, checked, self) {
      if (checked === true) {
        this.orgId = data.id
        this.orgName = data.label
        this.$refs.tree.setCheckedKeys([data.id])
      } else {
        if (this.orgId === data.id) {
          this.$refs.tree.setCheckedKeys([data.id])
        }
      }
    },
    orgNodeClick (data, node, self) {
      console.log(node.checked)
      if (data.disabled) return
      this.orgId = data.id
      this.orgName = data.label
      this.$refs.tree.setCheckedKeys([data.id])
    },
    getOrg () {
      console.log(this.orgName)
      console.log(this.orgId)
    }
  },
  beforeRouteLeave (to, from, next) {
    // 设置下一个路由的 meta
    if (to.path === '/news') {
      to.meta.keepAlive = false
    }
    next()
  }
}
</script>

<style lang="less">
.list{

}
</style>
