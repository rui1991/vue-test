<template>
  <div class="echarts">
    <h2>Echarts 图表</h2>
    <el-radio-group v-model="tab" style="margin-bottom: 30px;">
      <el-radio-button label="0">0</el-radio-button>
      <el-radio-button label="1">1</el-radio-button>
      <el-radio-button label="2">2</el-radio-button>
      <el-radio-button label="3">3</el-radio-button>
    </el-radio-group>
    <Chart :parOption="option" id="chart1" :domWidth="domWidth"></Chart>
    <Chart :parOption="option" id="chart2" :domWidth="domWidth"></Chart>
    <Chart :parOption="option" id="chart3" :domWidth="domWidth"></Chart>
  </div>
</template>

<script>
// 引入chart
import Chart from '@/components/chart'
export default{
  data () {
    return {
      tab: '0',
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '工时统计',
            type: 'pie',
            radius: ['45%', '65%'],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{b} : {c}'
                },
                labelLine: {show: true}
              }
            },
            label: {
              normal: {
                show: true,
                position: 'outside',
                // position: 'inside',
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'bold'
                },
                formatter: '{b}\n{d}%'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 15,
                length2: 10,
                lineStyle: {}
              }
            },
            data: []
          }
        ],
        color: ['#b7dd73', '#ffdb8a']
      },
      list: [
        {
          work: 12,
          task: 50
        },
        {
          work: 18,
          task: 26
        },
        {
          work: 15,
          task: 15
        },
        {
          work: 16,
          task: 30
        }
      ],
      domWidth: document.documentElement.clientWidth
    }
  },
  created () {

  },
  mounted () {
    // 获取浏览器窗口宽度
    window.onresize = () => {
      const domWidth = document.documentElement.clientWidth
      this.domWidth = domWidth
    }
  },
  methods: {

  },
  components: {
    Chart
  },
  watch: {
    tab (newVal, oldVal) {
      const num = Number.parseInt(newVal)
      const chartData = [
        {
          value: this.list[num].work,
          name: '工单工时'
        },
        {
          value: this.list[num].task,
          name: '巡检任务'
        }
      ]
      this.option.series[0].data = chartData
    }
  }
}
</script>

<style lang="less" scoped>
  .echarts{
    width: 60%;
    margin: 0 auto;
  }
</style>
