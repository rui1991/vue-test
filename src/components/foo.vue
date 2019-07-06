<template>
  <div class="foo">
    <h2>{{ count }}</h2>
    <div style="padding: 10px;">
      <input type="button" value="+" @click="addCountNum">
      <input type="button" value="-" @click="minusCountNum">
    </div>
    <el-input style="width: 120px;" v-model="price"></el-input>
    <p style="line-height: 30px; font-size: 14px;">{{ switchPrice }}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default{
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  computed: {
    // ...mapState(
    //   {
    //     count: state => state.feeds.count
    //   }
    // )
    ...mapState('feeds', {
      count: state => state.count
    }),
    price: {
      get () {
        return this.$store.state.feeds.price
      },
      set (value) {
        this.$store.commit('feeds/setPrice', value)
      }
    },
    ...mapGetters('feeds', [
      'switchPrice'
    ])
  },
  methods: {
    // ...mapActions({
    //   add: 'feeds/addCount',
    //   minus: 'feeds/minusCount'
    // }),
    ...mapActions('feeds', {
      add: 'addCount',
      minus: 'minusCount'
    }),
    addCountNum () {
      this.add()
    },
    minusCountNum () {
      this.minus()
    }
  }
}
</script>

<style lang="less" scoped>
.foo{
  .title{
    height: 45px;
    line-height: 45px;
    font-size: 18px;
  }
}
</style>
