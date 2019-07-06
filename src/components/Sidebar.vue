<template>
  <div class="sidebar">
    <el-container>
      <el-header style="background-color: antiquewhite; text-align: center; line-height: 60px;">Header</el-header>
      <el-container>
        <el-aside width="240px" style="background-color: rgb(238, 241, 246)">
          <el-menu
            :unique-opened="true"
            text-color="#fff"
            background-color="#2f4055"
            active-text-color="#fff">
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2" class="submenu-item">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3" class="submenu-item">
              <template slot="title"><i class="el-icon-message"></i>导航二</template>
              <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-3">
                <template slot="title">选项3</template>
                <el-menu-item index="3-3-1">选项3-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4" class="submenu-item">
              <template slot="title"><i class="el-icon-message"></i>导航三</template>
              <el-menu-item-group>
                <el-menu-item index="4-1">选项1</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="4-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="4-3">
                <template slot="title">选项3</template>
                <el-menu-item index="4-3-1">选项3-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main style="background-color: #f1f1f1;">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default{
  name: 'sidebar',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less">
  .sidebar{
    height: 620px;
    .el-container{
      height: 100%;
      border: 1px solid #ccc;
    }
    .el-submenu__title{
      background-color: #2f4055 !important;
    }
    .el-menu-item-group .el-menu-item-group__title{
      padding: 0;
    }
    .submenu-item .el-menu-item{
      background-color: #253344 !important;
    }
    .is-active{
      background: #1d2c3e !important;
    }
    .el-icon-arrow-down:before {
      content: "\E60E";
    }
    .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{
      transform: rotateZ(90deg);
    }
  }
</style>
