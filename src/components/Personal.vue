<template>
  <div class="personal">
    <el-button type="primary" @click="getCheckedIds">获取</el-button>
    <br>
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      check-strictly
      node-key="id"
      ref="tree"
      :props="defaultProps">
    </el-tree>
    <!--<el-tree-->
      <!--:data="data"-->
      <!--show-checkbox-->
      <!--default-expand-all-->
      <!--check-strictly-->
      <!--node-key="id"-->
      <!--ref="tree"-->
      <!--:props="defaultProps"-->
      <!--@check-change="orgCheckChange">-->
    <!--</el-tree>-->
  </div>
</template>

<script>
export default{
  name: 'personal',
  data () {
    return {
      data: [
        {
          id: 1,
          label: '企业名称',
          parent_id: 0,
          organize_type: 1,
          children: [
            {
              id: 2,
              label: '分公司A',
              parent_id: 1,
              organize_type: 2,
              children: [
                {
                  id: 8,
                  label: '项目A-A',
                  parent_id: 2,
                  organize_type: 3,
                  children: [
                    {
                      id: 9,
                      label: '安保部',
                      parent_id: 8,
                      organize_type: 4
                    },
                    {
                      id: 10,
                      label: '维修部',
                      parent_id: 8,
                      organize_type: 4
                    }
                  ]
                },
                {
                  id: 11,
                  label: '项目A-B',
                  parent_id: 2,
                  organize_type: 3,
                  children: [
                    {
                      id: 12,
                      label: '安保部',
                      parent_id: 11,
                      organize_type: 4
                    },
                    {
                      id: 13,
                      label: '维修部',
                      parent_id: 11,
                      organize_type: 4
                    }
                  ]
                },
                {
                  id: 14,
                  label: '安保部',
                  parent_id: 2,
                  organize_type: 4
                }
              ]
            },
            {
              id: 3,
              label: '分公司B',
              parent_id: 1,
              organize_type: 2,
              children: [
                {
                  id: 15,
                  label: '项目B-A',
                  parent_id: 3,
                  organize_type: 3,
                  children: [
                    {
                      id: 16,
                      label: '安保部',
                      parent_id: 15,
                      organize_type: 4
                    },
                    {
                      id: 17,
                      label: '维修部',
                      parent_id: 15,
                      organize_type: 4
                    }
                  ]
                },
                {
                  id: 18,
                  label: '项目B-B',
                  parent_id: 3,
                  organize_type: 3
                }
              ]
            },
            {
              id: 4,
              label: '企业项目A',
              parent_id: 1,
              organize_type: 3,
              children: [
                {
                  id: 19,
                  label: '安保部',
                  parent_id: 4,
                  organize_type: 4
                },
                {
                  id: 20,
                  label: '维修部',
                  parent_id: 4,
                  organize_type: 4
                }
              ]
            },
            {
              id: 5,
              label: '企业项目B',
              parent_id: 1,
              organize_type: 3
            },
            {
              id: 6,
              label: '测试部',
              organize_type: 4
            },
            {
              id: 7,
              label: '开发部',
              parent_id: 1,
              organize_type: 4
            }
          ]
        }
      ],
      orgId: '',
      orgName: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {
    const treeData = this.initDisOrgTree(JSON.parse(JSON.stringify(this.data)))
    this.data = treeData
  },
  methods: {
    // 初始化处理地址树
    initDisOrgTree (treeData) {
      treeData.forEach(item => {
        if (item.organize_type === 4) {
          item.disabled = true
        }
        if (item.children) {
          this.initRecOrgTree(item.children)
        }
      })
      return treeData
    },
    initRecOrgTree (data) {
      data.forEach(item => {
        if (item.organize_type === 4) {
          item.disabled = true
        }
        if (item.children) {
          this.initRecOrgTree(item.children)
        }
      })
    },
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
    // 获取选中ID
    getCheckedIds () {
      const nodesData = this.$refs.tree.getCheckedNodes()
      const keysData = this.$refs.tree.getCheckedKeys()
      console.log(nodesData)
      console.log(keysData)
      let ids = []
      let names = []
      const firmNode = nodesData.find(item => {
        return item.organize_type === 1
      })
      if (firmNode) {
        ids.push(firmNode.id)
        names.push(firmNode.label)
      } else {
        nodesData.forEach(node => {
          const parentId = node.parent_id
          const state = keysData.find(id => {
            return id === parentId
          })
          if (state === undefined) {
            ids.push(node.id)
            names.push(node.label)
          }
        })
      }
      console.log(ids)
      console.log(names)
    }
  }
}
</script>

<style lang="less" scoped>
.personal{
  margin-top: 20px;

}
</style>
