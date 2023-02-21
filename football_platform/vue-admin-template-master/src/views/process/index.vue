<template>
    <el-tabs type="border-card" class="box-card" v-loading="loading"  element-loading-background="rgb(255, 255, 255)">
      <span style="margin-left:449px; margin-top: 5px;">{{ football_tream }}队</span>
      <el-button type="text" style="margin-left:10px;" @click="dialogVisible1 = true">分析</el-button> 
      <el-dialog title="数据分析" :visible.sync="dialogVisible1"  :before-close="handleClose1">
        <span>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="传球网络" name="first">
              <img style="height:500px;" src="http://127.0.0.1:8000/media/images/1.png">
            </el-tab-pane>
            <el-tab-pane label="拓扑距离矩阵" name="third">
                <img src="http://127.0.0.1:8000/media/images/2.png" >
            </el-tab-pane>
            <el-tab-pane label="时间比图" name="fourth">
                <img src="http://127.0.0.1:8000/media/images/3.png" > 
            </el-tab-pane>
            <el-tab-pane label="球场区域跑动图" name="five">
                <img style="height:500px;" src="http://127.0.0.1:8000/media/images/4.png" > 
            </el-tab-pane>
            <el-tab-pane label="聚类分析" name="six">
                <img :src="this.outcome" > 
            </el-tab-pane>
            <el-tab-pane label="时间聚类结果" name="seven">
                <img style="height:500px;" src="http://127.0.0.1:8000/media/images/5.png" > 
            </el-tab-pane>
          </el-tabs>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
        </span>
      </el-dialog>
      <span style="margin-left:200px;">{{ this.matchinfo.opponent_id }}队</span>
      <el-button type="text" style="margin-left:10px;" @click="dialogVisible2 = true">分析</el-button>
      <el-dialog title="数据分析" :visible.sync="dialogVisible2" width="100%" :fullscreen = "fullscreen" :before-close="handleClose1">
        <span>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="传球网络" name="first">
                <img src="http://127.0.0.1:8000/media/images/1.png">
            </el-tab-pane>
            <el-tab-pane label="拓扑距离矩阵" name="third">
                <img src="http://127.0.0.1:8000/media/images/2.png" >
            </el-tab-pane>
            <el-tab-pane label="时间比图" name="fourth">
                <img src="http://127.0.0.1:8000/media/images/3.png" > 
            </el-tab-pane>
            <el-tab-pane label="球场区域跑动图" name="fourth">
                <img src="http://127.0.0.1:8000/media/images/4.png" > 
            </el-tab-pane>
            <el-tab-pane label="K-means聚类" name="five">
                <img :src="this.outcome" > 
            </el-tab-pane>
          </el-tabs>
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
        </span>
      </el-dialog>
      <div class="football_court" style="background:url('http://127.0.0.1:8000/media/images/football_court.jpeg') no-repeat;background-size: 100% 100%;width: 1100px;height: 687px;margin-left: 169px;margin-top: 50px;overflow: hidden;">
        <!-- 1队门将 -->
        <ul style="list-style-type:none;margin-top: 305px;margin-left: 12px;">
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color: blueviolet;">{{ this.member1_G }}</li>
        </ul>

         <!--1队后卫-->
         <ul class="full_back1" style="list-style-type:none;margin-top: -390px;margin-left: 140px;">
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">1</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">2</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">3</li>
          
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">4</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">5</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">6</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">7</li>
          
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">8</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">9</li>
         
        </ul>
          
         <!--1队中锋 -->
         <ul class="centre-forward1" style="list-style-type:none;margin-top: -690px;margin-left: 270px;">
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">1</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">2</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">3</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">4</li>
        
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">5</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">6</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">7</li>
        
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">8</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">9</li>
         
        </ul>

        <!-- 1队前锋 -->
        <ul class="playmaker1" style="list-style-type:none;margin-top: -690px;margin-left: 400px;">
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">1</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">2</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">3</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">4</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">5</li>
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">6</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">7</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">8</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">9</li>
          
        </ul>
        
        <!--２队门将-->
        <ul style="list-style-type:none;margin-top: -394px;margin-left: 925px;">
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color: blueviolet;">{{ this.member2_G }}</li>
        
        </ul>
        
         <!--2队后卫-->
        <ul class="full_back2" style="list-style-type:none;margin-top: -389px;margin-left: 801px;">
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">1</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">2</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">3</li>
          
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">4</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">5</li>
         
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">6</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">7</li>
          
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">8</li>
         
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:aqua;">9</li>
         
        </ul>

         <!--2队中锋 -->
         <ul class="centre-forward2" style="list-style-type:none;margin-top: -690px;margin-left: 675px;">
         
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">1</li>
        
        
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">2</li>
        
         
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">3</li>
        
        
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">4</li>
       
         
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">5</li>
        
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">6</li>
        
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">7</li>
       
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">8</li>
        
         <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:blanchedalmond;">9</li>
        
       </ul>

        <!-- 2队前锋 -->
        <ul class="playmaker2" style="list-style-type:none;margin-top: -690px;margin-left: 545px;">
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">1</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">2</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">3</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">4</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">5</li>
          
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">6</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">7</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">8</li>
         
          <li style="line-height: 75px;text-align: center;width:75px;height:75px;border-radius:50%;background-color:coral;">9</li>
          
        </ul>
        
        


        
      </div>
    </el-tabs>
</template>
    
<script>
import { mapGetters } from 'vuex'
import jQuery from 'jquery'
    export default {
    
    data() {
        return{
          match_id:this.$route.params.match_id,
          token:'',
          matchinfo:'',
          opponent_name:'',
          treams_member_dict:'',
          member1_G:'',
          member1_D:'',
          member1_M:'',
          member1_F:'',
          member2_G:'',
          member2_D:'',
          member2_M:'',
          member2_F:'',
          graph:'',
          dialogVisible1: false,
          dialogVisible2: false,
          activeName: 'first',
          imd: '',
          imd1: '',
          matrix: '',
          matrix1: '',
          outcome: '',
          outcome1: '',
          time_cart: '',
          time_cart1: '',
          tream: '',
          tream1: '',
          loading:true,
          fullscreen:true,
        }
    },
    methods:{
      Token(){
        return this.$store.getters.token;
      },
      async MatchData(token,match_id){
        let result = await this.$API.tream.matchdata(token,match_id)
        if(result.status == 200){
          console.log(result)
          this.matchinfo = result.data.data;
          this.opponent_name = result.data.data.opponent_id + '队'
          this.treams_member_dict = result.data.treams_member_dict // 双方球员(包括替换)
          this.graph = result.data.graph
          this.imd = result.data.graph.info.imd
          this.imd1 = result.data.graph.info1.imd
          this.matrix1 = result.data.graph.matrix1
          this.matrix = result.data.graph.matrix
          this.outcome = result.data.graph.outcome
          this.outcome1 = result.data.graph.outcome1
          this.tream = result.data.graph.tream1
          this.tream1 = result.data.graph.tream2
          this.time_cart = result.data.graph.time_cart
          this.time_cart1 = result.data.graph.time_cart1
          if(this.tream == this.matchinfo.opponent_id){  //限制左边的结果一直是一队的
          this.imd = result.data.graph.info1.imd
          this.imd1 = result.data.graph.info.imd
          this.matrix1 = result.data.graph.matrix
          this.matrix = result.data.graph.matrix1
          this.outcome = result.data.graph.outcome1
          this.outcome1 = result.data.graph.outcome
          this.tream = result.data.graph.tream1
          this.tream1 = result.data.graph.tream2
          this.time_cart = result.data.graph.time_cart1
          this.time_cart1 = result.data.graph.time_cart
          }

          //1队队员
          var member1 = Object.values(this.treams_member_dict)[0]
          var member1_name = Object.keys(this.treams_member_dict)[0]
          console.log(member1_name)
           //二队队员
          var member2 = Object.values(this.treams_member_dict)[1]
          var member2_name = Object.keys(this.treams_member_dict)[1]
          console.log(member2_name)
          if(member1_name == this.matchinfo.opponent_id ){     //限定左边一直是1队
              var temp = member1
              member1 = member2
              member2 = temp
          }
          
          //１队门将
          var temp1_D = []
          var temp1_M = []
          var temp1_F = []
          for(var i = 0;i < member1.length;i++)
          {
            if(member1[i].indexOf('G') != -1){
                 this.member1_G = member1[i];
            }
            if(member1[i].indexOf('D') != -1){
                 temp1_D.push(member1[i]);
            }
            if(member1[i].indexOf('M') != -1){
                 temp1_M.push(member1[i]);
            }
            if(member1[i].indexOf('F') != -1){
                 temp1_F.push(member1[i]);
            }
            if(member1[i] instanceof Array){
                if(member1[i][0].indexOf('G') != -1){
                 this.member1_G = member1[i][1];
                }
                if(member1[i][0].indexOf('D') != -1){
                 temp1_D.push(member1[i][1]);
                }
                if(member1[i][0].indexOf('M') != -1){
                 temp1_M.push(member1[i][1]);
                }
                if(member1[i][0].indexOf('F') != -1){
                 temp1_F.push('Huskies_F5');
                }
            }
          }
          //后卫 
          this.member1_D = temp1_D
          this.member1_D = this.member1_D.reverse()
          if(this.member1_D.length == 4){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 1){
                jQuery(".full_back1 li:eq(" + i + ")").text(this.member1_D[j++])
              }else{
                jQuery(".full_back1 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }
          if(this.member1_D.length == 5){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 1){
                jQuery(".full_back1 li:eq(" + i + ")").text(this.member1_D[j])
              }else{
                jQuery(".full_back1 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }

          //中锋
          this.member1_M = temp1_M
          this.member1_M = this.member1_M.reverse()
          if(this.member1_M.length == 3){
            jQuery(".centre-forward1 li:eq(0)").css("visibility","hidden")
            jQuery(".centre-forward1 li:eq(1)").css("visibility","hidden")
            jQuery(".centre-forward1 li:eq(3)").css("visibility","hidden")
            jQuery(".centre-forward1 li:eq(5)").css("visibility","hidden")
            jQuery(".centre-forward1 li:eq(7)").css("visibility","hidden")
            jQuery(".centre-forward1 li:eq(8)").css("visibility","hidden")

            jQuery(".centre-forward1 li:eq(2)").text(this.member1_M[0])
            jQuery(".centre-forward1 li:eq(4)").text(this.member1_M[1])
            jQuery(".centre-forward1 li:eq(6)").text(this.member1_M[2])
          }  
          if(this.member1_M.length == 4){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 1){
                jQuery(".centre-forward1 li:eq(" + i + ")").text(this.member1_M[j++])
              }else{
                jQuery(".centre-forward1 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }
          if(this.member1_M.length == 5){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 0){
                jQuery(".centre-forward1 li:eq(" + i + ")").text(this.member1_M[j++])
              }else{
                jQuery(".centre-forward1 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }

          //前锋
          this.member1_F = temp1_F
          this.member1_F = this.member1_F.reverse()
          if(this.member1_F.length == 3){
            jQuery(".playmaker1 li:eq(0)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(1)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(3)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(5)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(7)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(8)").css("visibility","hidden")

            jQuery(".playmaker1 li:eq(2)").text(this.member1_F[0])
            jQuery(".playmaker1 li:eq(4)").text(this.member1_F[1])
            jQuery(".playmaker1 li:eq(6)").text(this.member1_F[2])
          }
          if(this.member1_F.length == 2){
            jQuery(".playmaker1 li:eq(0)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(1)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(2)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(4)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(6)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(7)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(8)").css("visibility","hidden")

            jQuery(".playmaker1 li:eq(3)").text(this.member1_F[0])
            jQuery(".playmaker1 li:eq(5)").text(this.member1_F[1])
          }
          if(this.member1_F.length == 1){
            jQuery(".playmaker1 li:eq(0)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(1)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(2)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(3)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(5)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(6)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(7)").css("visibility","hidden")
            jQuery(".playmaker1 li:eq(8)").css("visibility","hidden")

            jQuery(".playmaker1 li:eq(4)").text(this.member1_F[0])
          }

         

          //二队门将
          //2队门将
          var temp2_D = []
          var temp2_M = []
          var temp2_F = []
          for(var i = 0;i < member2.length;i++)
          {
            if(member2[i].indexOf('G') != -1){
                 this.member2_G = member2[i];
            }
            if(member2[i].indexOf('D') != -1){
                 temp2_D.push(member2[i]);
            }
            if(member2[i].indexOf('M') != -1){
                 temp2_M.push(member2[i]);
            }
            if(member2[i].indexOf('F') != -1){
                 temp2_F.push(member2[i]);
            }
            if(member2[i] instanceof Array){
                if(member2[i][0].indexOf('G') != -1){
                 this.member2_G = member2[i][1];
                }
                if(member2[i][0].indexOf('D') != -1){
                 temp2_D.push(member2[i][1]);
                }
                if(member2[i][0].indexOf('M') != -1){
                 temp2_M.push(member2[i][1]);
                }
                if(member2[i][0].indexOf('F') != -1){
                 temp2_F.push(member2[i][1]);
                }
            }
          }

          //后卫 
          this.member2_D = temp2_D
          this.member2_D = this.member2_D.reverse()
          if(this.member2_D.length == 4){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 1){
                jQuery(".full_back2 li:eq(" + i + ")").text(this.member2_D[j++])
              }else{
                jQuery(".full_back2 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }
          if(this.member2_D.length == 5){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 1){
                jQuery(".full_back2 li:eq(" + i + ")").text(this.member2_D[j])
              }else{
                jQuery(".full_back2 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }
          
           //中锋
          this.member2_M = temp2_M
          this.member2_M = this.member2_M.reverse()
          if(this.member2_M.length == 3){
            jQuery(".centre-forward2 li:eq(0)").css("visibility","hidden")
            jQuery(".centre-forward2 li:eq(1)").css("visibility","hidden")
            jQuery(".centre-forward2 li:eq(3)").css("visibility","hidden")
            jQuery(".centre-forward2 li:eq(5)").css("visibility","hidden")
            jQuery(".centre-forward2 li:eq(7)").css("visibility","hidden")
            jQuery(".centre-forward2 li:eq(8)").css("visibility","hidden")

            jQuery(".centre-forward2 li:eq(2)").text(this.member2_M[0])
            jQuery(".centre-forward2 li:eq(4)").text(this.member2_M[1])
            jQuery(".centre-forward2 li:eq(6)").text(this.member2_M[2])
          }  
          if(this.member2_M.length == 4){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 1){
                jQuery(".centre-forward2 li:eq(" + i + ")").text(this.member2_M[j++])
              }else{
                jQuery(".centre-forward2 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }
          if(this.member2_M.length == 5){
            var j = 0
            for(var i = 0;i < 9;i++){
              if(i % 2 == 0){
                jQuery(".centre-forward2 li:eq(" + i + ")").text(this.member2_M[j++])
              }else{
                jQuery(".centre-forward2 li:eq(" + i + ")").css("visibility","hidden")
              }
            }
          }
          
           //前锋
          this.member2_F = temp2_F
          this.member2_F = this.member2_F.reverse()
          if(this.member2_F.length == 3){
            jQuery(".playmaker2 li:eq(0)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(1)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(3)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(5)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(7)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(8)").css("visibility","hidden")

            jQuery(".playmaker2 li:eq(2)").text(this.member2_F[0])
            jQuery(".playmaker2 li:eq(4)").text(this.member2_F[1])
            jQuery(".playmaker2 li:eq(6)").text(this.member2_F[2])
          }
          if(this.member2_F.length == 2){
            jQuery(".playmaker2 li:eq(0)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(1)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(2)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(4)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(6)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(7)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(8)").css("visibility","hidden")

            jQuery(".playmaker2 li:eq(3)").text(this.member2_F[0])
            jQuery(".playmaker2 li:eq(5)").text(this.member2_F[1])
          }
          if(this.member2_F.length == 1){
            jQuery(".playmaker2 li:eq(0)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(1)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(2)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(3)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(5)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(6)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(7)").css("visibility","hidden")
            jQuery(".playmaker2 li:eq(8)").css("visibility","hidden")

            jQuery(".playmaker2 li:eq(4)").text(this.member2_F[0])
          }


        }
        this.loading = false
      },
      handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
    mounted(){
      this.token = this.Token()
      this.MatchData(this.token,this.match_id)
      //this.loading = false
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
  }
    </script>
    
<style scoped>
  .box-card {
    width: 1540px;
    height: 800px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .item {
      margin: 4px;
    }
  </style>
    
    