<template>
  <div class="tagList">
    <h1 class="title">Tag页面</h1>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      @close="handleClose(tag)"
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default{
  name: 'tag',
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  created () {

  },
  methods: {
    handleClose (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  }
}
</script>

<style lang="less">
  .title{
    color: red;
  }
  .tagList{
    width: 360px;
    margin: 20px auto;
    .el-tag{
      margin: 0 5px;
    }
  }
</style>
