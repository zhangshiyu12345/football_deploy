<template>
  <div class="dashboard-container" style="margin-top:5px;">
    <el-tabs type="border-card">
      <el-tab-pane label="球队">
        <div style="display: flex; justify-content: flex-start;">
            <div>
        <el-card class="box-card1">
          <div class="demo-image" style="margin-left:75px">
            <el-image style="width: 150px; height: 200px" :src="this.tream_emblem" :fit="fit"></el-image>
            <div class="demo-intro" style="margin-top:15px; margin-left: 28px;">
              <div class="introduction">{{ football_tream }}队</div>
            </div>
          </div>

         <!--分割线-->
         <el-divider></el-divider>

        <el-table :data="tableData4" style="width: 100%">
          <el-table-column prop="proper" width="180">
          </el-table-column>
          <el-table-column prop="value" width="115">
          </el-table-column>
        </el-table>
         
        </el-card>
          </div>
        <div style="margin-left:15px;">
        <el-card class="box-card3">
           <div style="float:left;">{{ this.last_match.name }}</div>
           <div style="display:flex;justify-content:space-around;margin-top: 10px;">
          
           <div style="">
             <div style="font-size:60px;text-align: center;color: gold;">{{ this.win_count }}</div>
             <div style="font-size:20px;">比赛胜局</div>
           </div>
           <div>
             <div style="font-size:60px;text-align:center; color: grey;">{{ this.equal_count }}</div>
             <div style="font-size:20px;">比赛平局</div>
           </div>
           <div>
             <div style="font-size:60px;text-align:center; color:red;">{{ this.loss_count }}</div>
             <div style="font-size:20px;">比赛败局</div>
           </div>
           </div> 
        </el-card>
        <el-card class="box-card4">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="成员" name="first" style="">
              <div style="scroll-snap-type: y mandatory;overflow-y: scroll;height:535px;">
              <el-table  border :data="tableData5" style="width: 100%">
                <el-table-column prop="position" label="位置" width="573">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="573">
                </el-table-column>
              </el-table>
              </div>
            </el-tab-pane>
            
          </el-tabs>
         
        </el-card>
        </div>

          </div>
        </el-tab-pane>


        

      <el-tab-pane label="球员" v-if="roles == 'user'">
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
              <div class="introduction"><i>球队: </i>{{ football_tream }}</div>
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
              <div style="margin-top:5px;color:blue">{{ this.last_match.name }}</div>
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
                  <div style="font-size:30px; line-height: 100%; text-align: center; margin-top:25px;">{{ this.offen_efficiency }}</div>
                </el-card>
              </div>

             
            </el-tab-pane>
          </el-tabs>
        </el-card>
             </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    
     
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from 'echarts'
import jQuery from 'jquery'
export default {
  name: 'Dashboard',
  data(){
     return{
      size: '',
      activeName: 'first',
      token: '',
      tableData4: [{
            proper: '成立时间',
            value: '',
          }, {
            proper: '所属地区',
            value: '',
          }, {
            proper: '主场馆',
            value: ''
          },{
            proper: '现任主教练',
            value: '',
          }, {
            proper: '知名人物',
            value: '',
          }, {
            proper: '主要荣誉',
            value: '',
          }, {
            proper: '主席',
            value: '',
          }, {
            proper: '拥有者',
            value: '',
          }
      ],
      tableData5: [],
      tabPosition: 'top',
      tream_emblem: '',
      win_count:0,
      loss_count:0,
      equal_count:0,
      members:'',
      tream:'',
      history: '',
      last_match: '',
      pass_score:this.$store.getters.pass_football / 115,
      hotshot_score:this.$store.getters.hotshot / 3,
      speed_score:this.$store.getters.speed_num / 105,
      run_score:this.$store.getters.run_distance / 4.5,
      body_score:this.$store.getters.heart_avg * 1.2,
      erupt_score:(this.$store.getters.sprint_num * 0.45 + this.$store.getters.sprint_distance * 0.55) / 10,
      ability:(this.$store.getters.pass_football * 0.21 + this.$store.getters.hotshot * 0.23 + this.$store.getters.speed_num * 0.09 + this.$store.getters.join_time * 0.05 + this.$store.getters.sprint_distance * 0.05 + this.$store.getters.speed_num * 0.09 + this.$store.getters.heart_avg * 0.15 + this.$store.getters.run_distance * 0.13) / (5000 / 100),
      offensive_efficiency:0,
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    indexMethod(index) {
        return index * 2;
    },
    Token(){
        return this.$store.getters.token;
    },
    async TreamInfo(){
      let result1 = await this.$API.tream.treaminfo(this.token,this.$store.getters.football_tream)
      if(result1.status == 200){
        this.tream_emblem = 'http://127.0.0.1:8000' + result1.data['tream_emblem']
        this.tream = result1.data
        this.tableData4[0]['value'] = result1.data.founding_time
        this.tableData4[1]['value'] = result1.data.area
        this.tableData4[2]['value'] = result1.data.home_hall
        this.tableData4[4]['value'] = result1.data.famous_person
        this.tableData4[5]['value'] = result1.data.main_honor
        this.tableData4[6]['value'] = result1.data.chairman
        this.tableData4[7]['value'] = result1.data.owner
        this.history = result1.data.tream_history
      }
    },
    async MatchData(){
        //alert(this.$store.getters.football_tream)
        let result = await this.$API.tream.matchinfo(this.token)
        if(result.status == 200){
           console.log(result.data)
           for(var i = 0;i < result.data.length;i++){
                 if(result.data[i].side == 0){
                     result.data[i].side = '主'
                 }else{
                     result.data[i].side = '客'
                 }
                 if(result.data[i].outcome == 0){
                     this.win_count++
                 }else if(result.data[i].outcome == 1){
                     this.loss_count++
                 }else{
                     this.equal_count++
                 }
                 result.data[i]['tream_emblem'] = ''
                 
           }
           this.match_data = result.data;
           this.data = result.data;
           this.last_match = result.data[result.data.length - 1]
        }
    },
    async UsersDara(){
      let result = await this.$API.user.AllUserInfo(this.token)
      if(result.status == 200){
         console.log(result.data)
         var members = []
         console.log(result.data.length)
         for(var j = 0; j < result.data.length; j++){
            console.log(result.data[j].football_tream)
            if(result.data[j].football_tream == this.$store.getters.football_tream && result.data[j].roles == 1){
                members.push(result.data[j])
                var temp = {}
                if(result.data[j].position == '0'){
                   result.data[j].position = '中锋'
                }
                if(result.data[j].position == '1'){
                   result.data[j].position = '边锋'
                }
                if(result.data[j].position == '2'){
                   result.data[j].position = '前腰'
                }
                if(result.data[j].position == '3'){
                   result.data[j].position = '后腰'
                }
                if(result.data[j].position == '4'){
                   result.data[j].position = '中前卫'
                }
                if(result.data[j].position == '5'){
                   result.data[j].position = '左前卫'
                }
                if(result.data[j].position == '6'){
                   result.data[j].position = '右前卫'
                }
                if(result.data[j].position == '7'){
                   result.data[j].position = '中后卫'
                }
                if(result.data[j].position == '8'){
                   result.data[j].position = '左后卫'
                }
                if(result.data[j].position == '9'){
                   result.data[j].position = '右后卫'
                }
                if(result.data[j].position == '10'){
                   result.data[j].position = '门将'
                }
                temp['position'] = result.data[j].position
                temp['name'] = result.data[j].username
                this.tableData5.push(temp)
            }
            if(result.data[j].football_tream == this.$store.getters.football_tream && result.data[j].roles == 2){
              this.tableData4[3]['value'] = result.data[j].username
            }
            
         }
         this.members = members
         if(this.hotshot_score >= 90){
           this.offen_efficiency = '高'
         }else if(this.hotshot_score >= 60 && this.hotshot_score < 90){
           this.offen_efficiency = '中'
         }else{
           this.offen_efficiency = '低'
         }
         
      }
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
      'football_tream',
      'pass_football',
      'hotshot',
      'speed_num',
      'join_time',
      'sprint_distance',
      'run_distance',
    ])
  },
  mounted(){
    this.token = this.Token()
    this.UsersDara()
    this.TreamInfo()
    this.MatchData()
    let Score1 = echarts.init(this.$refs.score1);
    
    Score1.setOption({
      title: [{
        text: this.$store.getters.hotshot ,
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
        text:'射门',
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
          data: [this.$store.getters.hotshot / 2], //1度代表2次射门
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
        text: this.$store.getters.pass_football,
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
        text: '传球',
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
          data: [this.$store.getters.pass_football / 100],//1度代表100个传球
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
        text: this.$store.getters.speed_num ,
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
        text:'加速次数',
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
          data: [this.$store.getters.speed_num / 100], //1度代表100次加速次数
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
        text: this.$store.getters.join_time ,
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
        text:'上场时长(分钟)',
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
          data: [this.$store.getters.join_time / 20], //1度代表20分钟
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
        text: this.$store.getters.sprint_distance ,
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
        text:'冲刺距离(公里)',
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
          data: [this.$store.getters.sprint_distance],
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
        text: this.$store.getters.run_distance ,
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
        text:'跑动距离(公里)',
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
          data: [this.$store.getters.run_distance / 3], //1度为3公里
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
        text: this.$store.getters.heart_avg + '%' ,
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
        text:'平均心率',
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
          data: [this.$store.getters.heart_avg * 2.25], //x = (180 / 80) * heart_avg
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
        text: this.$store.getters.sprint_num ,
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
        text:'冲刺次数',
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
          data: [this.$store.getters.sprint_num / 20], //1度代表冲刺20次
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
          { name: '爆发力', max: 100 },
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
              value: [Math.round(this.pass_score), Math.round(this.hotshot_score), Math.round(this.body_score), Math.round(this.erupt_score), Math.round(this.speed_score), Math.round(this.run_score)],
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
        text: Math.round(this.ability),
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
          value: this.ability,
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
  .box-card3{
    width: 1190px;
    height: 150px;
    margin-left: 5px;
  }
  .box-card4{
    width: 1190px;
    height: 620px;
    margin-left: 5px;
    margin-top: 30px;
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