<template>
  <div class="qrcode">
    <h2>二维码页面</h2>
    <!--<vue-qr :text="value" :size="200" :margin="0" :logoMargin="2" id="qrcode"></vue-qr>-->
    <div id="qrcode">
      <vue-qr :text="item.value" :logoSrc="logo" :size="200" :margin="0" :logoMargin="2" v-for="item in values" :key="item.id"></vue-qr>
    </div>
    <el-button type="primary" @click="createPic">生成二维码</el-button>
    <el-button type="primary" @click="savePic">保存图片</el-button>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default{
  name: 'qrcode',
  data () {
    return {
      values: [],
      bgSrc: require('../assets/tu.jpg'),
      myLogo: require('../assets/logo.png'),
      logo: require('../assets/bc.png'),
      // value: 'http://www.weixun365.cn/',
      value: 'http://szydak.eicp.net:82/posdet/#/details?proid=1&posid=6027',
      initQCode: 'https://www.baidu.com',
      shareUrl: 'https://www.baidu.com',
      qrCodeSize: 120
    }
  },
  created () {

  },
  mounted () {

  },
  components: {
    VueQr
  },
  methods: {
    createPic () {
      this.values = [
        {
          id: 1,
          value: 'https://www.baidu.com',
          name: '百度'
        },
        {
          id: 2,
          value: 'http://szydak.eicp.net:82/posdet/#/details?proid=1&posid=6027',
          name: 'VUE'
        },
        {
          id: 3,
          value: 'http://element-cn.eleme.io',
          name: 'Element-ui'
        }
      ]
    },
    savePic () {
      const eles = document.querySelectorAll('#qrcode img')
      for (let i = 0; i < this.values.length; i++) {
        const iconUrl = eles[i].src
        let a = document.createElement('a')
        let event = new MouseEvent('click')
        a.download = this.values[i].name
        a.href = iconUrl
        a.dispatchEvent(event)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.qrcode{

}
</style>
