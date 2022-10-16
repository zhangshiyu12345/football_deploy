<template>
  <div class="dashboard-container">
    <div style="display: flex; justify-content: flex-start;">

      <div>
        <el-card class="box-card1">
          <div class="demo-image" style="margin-left:75px">
            <el-image style="width: 150px; height: 150px" :src="avatar" :fit="fit"></el-image>
            <div class="demo-intro" style="margin-top:15px; margin-left: 28px;">
              <div class="introduction"><i>姓名：</i>{{ username }}</div>
              <div class="introduction"><i>性别: </i>{{ sex }}</div>
              <div class="introduction"><i>年龄: </i>{{ age }}岁</div>
              <div class="introduction"><i>位置: </i>{{ position }}</div>
            </div>
          </div>

          <!--分割线-->
          <el-divider></el-divider>

          <!--雷达图-->
          <div class="charts1" ref="charts1"></div>
        </el-card>
      </div>

      <div style="margin-left:15px;">
        <el-card class="box-card2">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="摘要" name="first">
              <!--仪表盘-->
              <div class="gauge1" ref="gauge1"></div>

              <div>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="score1" ref="score1"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="score2" ref="score2"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="score3" ref="score3"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="score4" ref="score4"></div>
                  </el-col>
                </el-row>
              </div>

              <div>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <div class="score5" ref="score5"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="score6" ref="score6"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="score7" ref="score7"></div>
                  </el-col>
                  <el-col :span="6">
                    <div class="score8" ref="score8"></div>
                  </el-col>
                </el-row>
              </div>

            </el-tab-pane>
            <el-tab-pane label="属性" name="second">
              <div style="display:flex; justify-content:flex-start;">
                <div class="table1">
                  <el-table border :data="tableData" stripe style="width: 100%" :row-style="{height: '63px'}">
                    <el-table-column prop="property" width="224" show-header="false">
                    </el-table-column>
                    <el-table-column prop="score" width="350">
                    </el-table-column>
                  </el-table>
                </div>

                <div class="table2">
                  <el-table border :data="tableData1" stripe style="width: 100%" :row-style="{height: '63px'}">
                    <el-table-column prop="property" width="224" show-header="false">
                    </el-table-column>
                    <el-table-column prop="score" width="350">
                    </el-table-column>
                  </el-table>
                </div>

              </div>

            </el-tab-pane>

            <el-tab-pane label="特征" name="third">
              <div class="card-list1" style="display:flex; justify-content:flex-start;">

                <el-card class="box-card" style="width:250px; height:200px; margin-left: 25px;">
                  <div slot="header" class="clearfix">
                    <span style="font-size:20px; text-align: center; margin: auto 85px;">身高</span>
                  </div>
                  <div style="font-size:30px; line-height: 100%; text-align: center; margin-top:25px;">{{stature}}cm</div>
                </el-card>

                <el-card class="box-card" style="width:250px; height:200px; margin-left: 25px;">
                  <div slot="header" class="clearfix">
                    <span style="font-size:20px; text-align: center; margin: auto 85px;">体重</span>
                  </div>
                  <div style="font-size:30px; line-height: 100%; text-align: center; margin-top:25px;">{{weight}}kg</div>
                </el-card>

                <el-card class="box-card" style="width:250px; height:200px; margin-left: 25px;">
                  <div slot="header" class="clearfix">
                    <span style="font-size:20px; text-align: center; margin: auto 85px;">年龄</span>
                  </div>
                  <div style="font-size:30px; line-height: 100%; text-align: center; margin-top:25px;">{{age}}岁</div>
                </el-card>

                <el-card class="box-card" style="width:250px; height:200px; margin-left: 25px;">
                  <div slot="header" class="clearfix">
                    <span style="font-size:20px; text-align: center; margin: auto 67px;">进攻效率</span>
                  </div>
                  <div style="font-size:30px; line-height: 100%; text-align: center; margin-top:25px;">高</div>
                </el-card>
              </div>

              <div class="card-list2" style="display:flex; justify-content:flex-start;margin-top: 10px;">

                 <el-card class="box-card" style="width:250px; height:200px; margin-left: 25px;">
                  <div slot="header" class="clearfix">
                    <span style="font-size:20px; text-align: center; margin: auto 67px;">防守效率</span>
                  </div>
                  <div style="font-size:30px; line-height: 100%; text-align: center; margin-top:25px;">中等</div>
                </el-card>

              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>

    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
export default {
  name: 'Dashboard',
  data(){
     return{
      size: '',
      activeName: 'first',
      tableData: [{
          score: '84',
          property: '加速',
        }, {
          score: '77',
          property: '射门',
        }, {
          score: '75',
          property: '远射',
        }, {
          score: '70',
          property: '点球',
        },{
          score: '75',
          property: '短传',
        },{
          score: '67',
          property: '视野',
        },{
          score: '60',
          property: '弧线',
        },{
          score: '80',
          property: '盘带',
        },{
          score: '84',
          property: '敏捷',
        },{
          score: '77',
          property: '平衡',
        },{
          score: '40',
          property: '铲断',
        }],
      tableData1:[{
          score: '83',
          property: '冲刺速度',
      },{
          score: '78',
          property: '射门力量',
      },{
          score: '77',
          property: '抢点',
      },{
         score: '70',
         property: '凌空抽射',
      },{
         score: '64',
         property: '长传',
      },{
         score: '70',
         property: '传中',
      },{
         score: '35',
         property: '任意球',
      },{
         score: '80',
         property: '反应',
      },{
         score: '76',
         property: '人盯人',
      },{
         score: '45',
         property: '滑铲',
      },{
        score: '80',
        property: '控球',
      }]
     }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    indexMethod(index) {
        return index * 2;
    },
  },
  computed: {
    ...mapGetters([
      'username',
      'roles',
      'avatar',
      'weight',
      'stature',
      'age',
      'position',
      'sex',
    ])
  },
  mounted(){
    let Score1 = echarts.init(this.$refs.score1);
    Score1.setOption({
      title: [{
        text: 162 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'步频',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [162],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
 
    })
    
    let Score2 = echarts.init(this.$refs.score2);
    Score2.setOption({
      title: [{
        text: 150,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      }, {
        text: '射门',
        left: 'center',
        top: '55%',
        textStyle: {
          color: '#2892E8',
          fontSize: 14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [150],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })

    let Score3 = echarts.init(this.$refs.score3)
    Score3.setOption({
      title: [{
        text: 140 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'传球',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [140],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })

    let Score4 = echarts.init(this.$refs.score4);
    Score4.setOption({
      title: [{
        text: 140 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'传球',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [140],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })

    let Score5 = echarts.init(this.$refs.score5);
    Score5.setOption({
      title: [{
        text: 143 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'灵活性',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [143],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })

    let Score6 = echarts.init(this.$refs.score6)
    Score6.setOption({
      title: [{
        text: 130 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'防守',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [130],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })

    let Score7 = echarts.init(this.$refs.score7)
    Score7.setOption({
     title: [{
        text: 140 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'体格',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [140],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })

    let Score8 = echarts.init(this.$refs.score8)
    Score8.setOption({
      title: [{
        text: 140 ,
        textStyle: {
          color: '#28BCFE',
          fontSize: 20
        },
        subtext: '数据占比',
        subtextStyle: {
          color: '#fff',
          fontSize: 20
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
      },{
        text:'体格',
        left:'center',
        top:'55%',
        textStyle:{
          color:'#2892E8',
          fontSize:14
        }
      }],
      angleAxis: {
        // 起始角度，180 也可以是 225
        startAngle: 180,
        max: 360,
        clockwise: true, // 逆时针
        // 隐藏刻度线
        show: false
      },
      radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false

        },
        axisTick: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '100%', //图形大小
      },
      series: [
        {
          type: 'bar',
          z: 2,
          // 数值
          data: [140],
          showBackground: true,
          backgroundStyle: {
            color: 'transparent'
          },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: '#25BFFF'
                }, {
                  offset: 1,
                  color: '#5284DE'
                }]),
              shadowBlur: 5,
              shadowColor: '#2A95F9'
            }
          }
        },
        {
          type: 'bar',
          z: 1,
          // 需要的圆环跨度大小，可以是180,270等
          data: [180],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 10,
          barGap: '-100%',
          itemStyle: {
            normal: {
              opacity: 1,
              color: '#093368'
            }
          }
        },
      ],
    })
    //初始化echarts实例
    let RadarChart = echarts.init(this.$refs.charts1);
    //配置数据
    RadarChart.setOption({
      title: {
        text: '各项得分'
      },
      color: ['#56A3F1'],
      legend: {
        data: ['得分']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: '传球', max: 100 },
          { name: '射门', max: 100 },
          { name: '身体', max: 100 },
          { name: '防守', max: 100 },
          { name: '速度', max: 100 },
          { name: '盘带', max: 100 }
        ],
        name: {
          textStyle: {
            fontSize: 16,
            color: ['green'],
          }
        },
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          emphasis: {
            lineStyle: {
              width: 4
            }
          },
          areaStyle: {},
          data: [
            {
              value: [100, 93, 50, 90, 70, 60],
              name: '得分',
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                  {
                    color: 'rgba(255, 145, 124, 0.1)',
                    offset: 0
                  },
                  {
                    color: 'rgba(63, 72, 204, 0.9)',
                    offset: 1
                  }
                ])
              },
              label: {
                show: true,
                formatter: function (params) {
                  return params.value;
                }
              }
            },
          ]
        }
      ],
    })
    let Gauge1 = echarts.init(this.$refs.gauge1);
    Gauge1.setOption({
      title: {
        text: '75',
        textStyle: {
          color: '#01c4a3',
          fontSize: 40
        },
        subtext: '能力(100分)',
        subtextStyle: {
          color: '#909090',
        },
        itemGap: -10, // 主副标题距离
        left: 'center',
        top: 'center'
      },
      angleAxis: {
        max: 100, // 满分
        clockwise: false, // 逆时针
        // 隐藏刻度线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      radiusAxis: {
        type: 'category',
        // 隐藏刻度线
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      },
      polar: {
        center: ['50%', '50%'],
        radius: '140%' //图形大小
      },
      series: [{
        type: 'bar',
        data: [{
          name: '能力得分',
          value: 75,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                offset: 0,
                color: '#aaf14f'
              }, {
                offset: 1,
                color: '#0acfa1'
              }])
            }
          },
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 25,
        barGap: '-100%', // 两环重叠
        z: 2,
      }, { // 灰色环
        type: 'bar',
        data: [{
          value: 100,
          itemStyle: {
            color: '#e2e2e2',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 5,
            shadowOffsetY: 2
          }
        }],
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 25,
        barGap: '-100%', // 两环重叠
        z: 1
      }]
    })
    
   
  }
  }
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card1{
    width: 340px;
    height: 800px;
  }
  .box-card2{
    width: 1190px;
    height: 800px;
    margin-left: 5px;
  }
  .el-divider {
  background-color: #b0b0b0;
  position: relative;
  }
  .charts1{
   width: 300px;
   height: 380px;
   margin-top: 50px;
  }
  .gauge1{
    width: 400px;
    height: 300px;
    margin-left: 300px;
  }
  .score1{
    width: 287px;
    height: 300px;
  }
  .score2{
    width: 287px;
    height: 300px;
  }
  .score3{
    width: 287px;
    height: 300px;
  }
  .score4{
    width: 287px;
    height: 300px;
  }
  .score5{
    width: 287px;
    height: 300px;
    margin-top: -100px;
  }
  .score6{
    width: 287px;
    height: 300px;
    margin-top: -100px;
  }
  .score7{
    width: 287px;
    height: 300px;
    margin-top: -100px;
  }
  .score8{
    width: 287px;
    height: 300px;
    margin-top: -100px;
  }
  .table1{
    width: 574px;
    height: 700px;
  }
  .table2{
    width: 574px;
    height: 700px;
  }
  .el-table th{
    display: none;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>