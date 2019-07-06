<template>
  <div id="app">
    <div class="app-nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/news">News</router-link>
      <router-link to="/Tree">Tree</router-link>
      <router-link to="/personal">Personal</router-link>
      <router-link to="/tag">Tag</router-link>
      <router-link to="/qrcode">Qrcode</router-link>
      <router-link to="/tableEle">TableEle</router-link>
      <router-link to="/echarts">Echarts</router-link>
      <router-link to="/date">Date</router-link>
      <router-link to="/sidebar">Sidebar</router-link>
    </div>
    <!--<router-view/>-->
    <!--<keep-alive include="news">-->
      <!--<router-view/>-->
    <!--</keep-alive>-->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {

}
.app-nav{
  height: 60px;
  line-height: 60px;
  text-align: center;
}
a{
  margin: 0 10px;
}
.router-link-active{
  color: #f60;
}
</style>
