import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import News from '@/components/News'
// import Tree from '@/components/tree'
// import Personal from '@/components/Personal'
// import Tag from '@/components/Tag'
// import Qrcode from '@/components/Qrcode'
// import TableEle from '@/components/TableEle'
// import Echarts from '@/components/Echarts'
// import Date from '@/components/Date'
// import Sidebar from '@/components/Sidebar'
const Home = () => import(/* webpackChunkName: "group-foo" */ '@/components/Home')
const News = () => import(/* webpackChunkName: "group-foo" */ '@/components/News')
const Tree = () => import(/* webpackChunkName: "group-foo" */ '@/components/Tree')
const Personal = () => import(/* webpackChunkName: "group-foo" */ '@/components/Personal')
const Tag = () => import(/* webpackChunkName: "group-foo" */ '@/components/Tag')
const Qrcode = () => import(/* webpackChunkName: "group-foo" */ '@/components/Qrcode')
const TableEle = () => import(/* webpackChunkName: "group-foo" */ '@/components/TableEle')
const Echarts = () => import(/* webpackChunkName: "group-foo" */ '@/components/Echarts')
const Date = () => import(/* webpackChunkName: "group-foo" */ '@/components/Date')
const Sidebar = () => import(/* webpackChunkName: "group-foo" */ '@/components/Sidebar')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: Qrcode,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/tableEle',
      name: 'tableEle',
      component: TableEle,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: Echarts,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/date',
      name: 'date',
      component: Date,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path: '/sidebar',
      name: 'sidebar',
      component: Sidebar,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
})
