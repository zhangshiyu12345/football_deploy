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
           <div style="float:left;">当前赛季</div>
           <div style="display:flex;justify-content:space-around;margin-top: 10px;">
          
           <div style="">
             <div style="font-size:60px;text-align: center;">{{ this.win_count }}</div>
             <div style="font-size:20px;">比赛胜局</div>
           </div>
           <div>
             <div style="font-size:60px;text-align:center;">{{ this.equal_count }}</div>
             <div style="font-size:20px;">比赛平局</div>
           </div>
           <div>
             <div style="font-size:60px;text-align:center;">{{ this.loss_count }}</div>
             <div style="font-size:20px;">比赛败局</div>
           </div>
           </div> 
        </el-card>
        <el-card class="box-card4">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="成员" name="first">
              <el-table :data="tableData5" style="width: 100%">
                <el-table-column prop="position" label="位置" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="球队历史" name="second" style=" height:500px; scroll-snap-type: y mandatory;overflow-y: scroll;">
              <span style="font-size:20px;margin-left: 500px;font-weight: bolder;text-align: center;"><br/>发展历史</span>
              <div style="margin-top:20px;margin-bottom: 20px;">
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;足球起源于中国，早在2300多年前的战国时期，一些城市已经非常流行蹴鞠活动，蹴鞠当时已经作为国家军队训练士兵的重要体能和技巧训练项目。战国以来，蹴鞠历经千年发展，在唐宋时期达到顶峰，直至清代中期最终在中国逐渐消亡。'">
                </p>
                <h4 style="margin-bottom:5px;">民国时期</h4>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;&nbsp;1913年，第一届远东运动会（亚运会前身）在菲律宾首都马尼拉举行，这是中国足球队第一次参加正式国际比赛，最终获得亚军。从此，中国足球在亚洲鲜遇对手。1913年至1934年，远东运动会一共召开了10届，第一届获得亚军，21年间，中国队蝉联9届远东国家足球冠军。<br/>'">
                </p>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;当时的远东运动会，每逢中国足球队与日本队交战，动辄打出5比1，4比0的大比分。上海远东运动会，中国队5比0大胜日本队获得冠军，在日本举行的远东运动会上，中国队5比1战胜日本队再次获得冠军。为此，日本报纸的号外标题为，“中国足球铁军，堂堂十年连胜”。从此，“中国铁军”的赞誉不胫而走。<br/>'">
                </p>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;1936年8月，中国足球队参加第11届德国柏林奥运会，当时的中华全国体育协进会成立了足球选拔委员会，考察全国各地的顶尖足球选手。经过3个月的选拔，1936年4月，中国足球队22人名单正式公布，“亚洲球王”李惠堂、香港歌星谭咏麟的父亲谭江柏名列其中。然而，中国足球队的奥运之行却充满艰辛，差点儿因5万元而难以成行……为解燃眉之急，中华全国体育协进会的所有工作人员集体出动，分别向国民政府中央各院部、全国各省市地方政府寻求支持。经过一番在全国从上到下、铺天盖地式的“化缘行动”共筹集资金17万元，但仍缺5万元。又是一番紧急讨论，注定了中国足球队的第一次走向世界之旅多灾多难。协进会决定，足球队自筹资金，提前两个月到东南亚各国进行表演赛，以门票收入作为参加奥运会的费用。1936年5月，中国队从上海出发，转战越南、印尼、缅甸、印度等国，在两个月的27场比赛中，24胜3平，不少当地华侨甚至焚香拜佛，欢迎中国队的到来。<br/>'">
                </p>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;为了节约经费，在两个月的旅途中，乘船时选择最低等的舱位，住宿则找最便宜的旅馆里最便宜的房间，有时床位不够还需打地铺。到达“卖艺地点”后，大家不是担心强队不与中国队比赛，就是害怕天公不作美，导致雨天无法比赛，因为这样都难以吸引大量观众，减少门票收入。更滑稽的是，为了防止当地主办单位从中作弊，比赛时，替补球员都要到赛场的各个入口处“监票”。当时，还有个不成文的规定，获胜一方可获得更多的门票收入，所以，主力队员一场不落地把27场比赛踢完，即使有伤病或体力难支，也要咬牙坚持。整个东南亚之旅，中国队共获得近20万港币的收入。到达印度孟买后，中国队给因经费短缺而滞留国内的中国奥运会代表团汇去5万元，解决了整个中国奥运会代表团的经费问题。双方在孟买会合后，一起前往德国首都柏林。 德国柏林奥运会足球赛制一开始就直接抽签踢淘汰赛，若首场告负便打道回府。一路历尽磨难，中国队首场便对阵英国队。不过，英国人的情报工作做得好，中国队东南亚之行的骄人战绩，他们早有耳闻，李惠堂的名声，也早已传至英伦三岛，为此英国王室特地给英国足球队发来专电以资鼓励。<br/>'">
                </p>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;1936年8月6日下午5点半，中国队第一次亮相世界赛场，与英国队在柏林康姆逊球场狭路相逢。当时的比赛观众多达万人。比赛一开始，早已洞悉中国队虚实的英国队便严密看防李惠堂，使其纵有绝技也难以施展。上半场，中国队攻势凌厉，一次下底传中后的破门，可惜被裁判吹为越位。两队以0比0结束上半场后，中场休息时，在场的西方记者纷纷在广播中感叹，中国队出人意料，不同凡响。下半场，双方易地再战，由于在东南亚连续征战，再加上抵达柏林后舟车劳顿，中国队逐渐体力不支，最终以0比2告负，就此结束了中国足球在世界赛场的“首演”。尽管输给英国队，但脚下技术、战术素养丝毫不弱。赛后，中国队的表现引起欧洲各足球强国的关注，英国报纸也对中国队评价极高，于是，欧洲各国邀请中国队前去比赛的电报接连飞来。在法国巴黎，中国队战平法国职业联赛中的强队巴黎红星队，李惠堂技惊四座。赛后的晚宴上，红星队的总经理拿着工作合同直接找到李惠堂，让他留在巴黎，并许以优厚待遇。当时，国际奥委会禁止职业球员参加奥运会。李惠堂一口回绝道：“我还要继续代表中国参加奥运会。”<br/>在英国伦敦，中国队战平英国职业联赛冠军球队哥灵顿队，观战的阿森纳队主教练指着李惠堂惋惜地说道：“要是你再年轻10岁就好了，我一定把你留在阿森纳队，无论如何也不让你回中国。”　'">
                </p>
              </div>
              <h4>现代发展</h4>
              <div>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;中国队长期以来一直在争取在亚洲地区获得锦标，在亚洲杯、亚运会等亚洲级别的赛事中取得过不错的成绩，在世界杯亚洲区预选赛中出线过一次。足球运动在中国很受欢迎，大约有3千万观众收看了2002年世界杯足球赛里中国参加的比赛。收看2004年亚洲杯足球赛决赛的观众甚至超过了这个数字。<br/>'">
                </p>
                <p v-html="'&nbsp;&nbsp;&nbsp;2005年，中国赢得了2005年东亚足球锦标赛的男子组冠军和澳门东亚运动会的男子足球项目金牌。<br/>'"></p>
                <p
                  v-html="'&nbsp;&nbsp;&nbsp;在2010年2月10日的东亚四强赛上，中国3-0完胜韩国，打破32年逢韩不胜的魔咒。2010年2月14日，2010年第4届东亚锦标赛在日本东京国立霞丘竞技场鸣金收兵。经过三轮共六场比赛的激烈争夺，最终中国队以2胜1平且“零失球”的不败战绩，夺得了本届赛事的冠军。<br/>'">
                </p>
                <p v-html="'&nbsp;&nbsp;&nbsp;2022年2月6日，中国女足在2022印度女足亚洲杯决赛中3-2击败韩国队，时隔16年再夺女足亚洲杯冠军。'"></p>
              </div>
            </el-tab-pane>
          </el-tabs>
         
        </el-card>
        </div>

          </div>
        </el-tab-pane>


        

      <el-tab-pane label="个人" v-if="roles == 'user'">
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
      </el-tab-pane>
    </el-tabs>
    
     
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
      token: '',
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
      }],
      tableData4: [{
            proper: '成立时间',
            value: '1880年',
          }, {
            proper: '所属地区',
            value: '纽约(美国)',
          }, {
            proper: '主场馆',
            value: '伊蒂哈德球场'
          },{
            proper: '现任主教练',
            value: '瓜迪奥拉',
          }, {
            proper: '知名人物',
            value: '孔帕尼 图雷 席尔瓦 德布劳内',
          }, {
            proper: '主要荣誉',
            value: '1次联赛冠军  8次足总杯冠军  8次联赛杯冠军',
          }, {
            proper: '主席',
            value: '卡尔杜恩',
          }, {
            proper: '拥有者',
            value: '城市足球集团',
          }
      ],
      tableData5: [],
      tabPosition: 'top',
      tream_emblem: '',
      win_count:0,
      loss_count:0,
      equal_count:0,
      members:'',
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
                temp['position'] = result.data[j].position
                temp['name'] = result.data[j].username
                this.tableData5.push(temp)
            }
            
         }
         this.members = members
         
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