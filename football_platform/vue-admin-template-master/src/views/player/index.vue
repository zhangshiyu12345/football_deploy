<template>
  <el-card class="box-card">

    <div style="display: flex; justify-content: center;">
      <div>
        <el-image style="width: 250px; height: 250px" :src="avatar"></el-image>
        <div style="margin-top:10px;">
          <el-input v-model="input1" placeholder="搜索球员姓名" class="inp1"></el-input>
          <el-button type="primary" @click="UserInfoData1">搜索</el-button>
        </div>
      </div>

      <div style="margin-left:200px;">
        <el-image style="width: 250px; height: 250px" :src="avatar1"></el-image>
        <div style="margin-top:10px;">
          <el-input v-model="input2" placeholder="搜索球员姓名" class="inp2"></el-input>
          <el-button type="primary" @click="UserInfoData2">搜索</el-button>
        </div>
      </div>
    </div>

    <!--分割线-->
    <el-divider></el-divider>

    <el-table :data="tableData" stripe style="width: 100%" :cell-style="cellStyle">
      <el-table-column prop="title" width="480" show-header="false">
        
      </el-table-column>
      <el-table-column prop="score1" width="480" show-header="false">
         <template slot-scope="scope">
          <span :style="{color:scope.row.score1 > scope.row.score2 ?'green':'black' }">
            {{scope.row.score1}}
          </span>
          <i class="el-icon-top" :style="{display:scope.row.score1 > scope.row.score2 ?'inline':'none',color:scope.row.score1 > scope.row.score2 ?'green':'black' }"></i>
          <span :style="{display:scope.row.score1 > scope.row.score2 ?'inline':'none',color:scope.row.score1 > scope.row.score2 ?'green':'black'}">{{scope.row.score1 - scope.row.score2}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="score2" width="480" show-header="false">
        <template slot-scope="scope">
          <span :style="{color:scope.row.score1 < scope.row.score2 ?'green':'black' }">
            {{scope.row.score2}}
          </span>
          <i class="el-icon-top" :style="{display:scope.row.score1 < scope.row.score2 ?'inline':'none',color:scope.row.score1 < scope.row.score2 ?'green':'black' }"></i>
          <span :style="{display:scope.row.score1 < scope.row.score2 ?'inline':'none',color:scope.row.score1 < scope.row.score2 ?'green':'black' }">{{scope.row.score2 - scope.row.score1}}</span>
        </template>
      
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {

  data() {
    return {
      tableData:[{
          title: '身体',
          score1: '0',
          score2: '0'
        },{
          title: '爆发力',
          score1: '0',
          score2: '0'
        },{
          title: '速度',
          score1: '0',
          score2: '0'
        },{
          title: '射门',
          score1: '0',
          score2: '0'
        },{
          title: '盘带',
          score1: '0',
          score2: '0'
        },{
          title: '传球',
          score1: '0',
          score2: '0'
        },],
      input1: '',
      input2: '',
      avatar: 'http://127.0.0.1:8000/media/avatar/default.jpg',
      avatar1: 'http://127.0.0.1:8000/media/avatar/default.jpg',
      token: '',
      user:'',
    }
  },
  methods:{
    async UserInfoData1(){
       let result = await this.$API.user.UserInfo(this.token,this.input1)
       if(result.status == 200){
           this.user = result.data
           this.avatar = 'http://127.0.0.1:8000' + result.data.avatar
           this.tableData[0].score1 = Math.round(result.data.heart_avg * 1.2)
           this.tableData[1].score1 = Math.round((result.data.sprint_num * 0.45 + result.data.sprint_distance * 0.55) / 10)
           this.tableData[2].score1 = Math.round(result.data.speed_num / 105)
           this.tableData[3].score1 = Math.round(result.data.hotshot / 3)
           this.tableData[4].score1 = Math.round(result.data.run_distance / 4.5)
           this.tableData[5].score1 = Math.round(result.data.pass_football / 115)
       }
    },
    async UserInfoData2(){
       let result = await this.$API.user.UserInfo(this.token,this.input2)
       if(result.status == 200){
          this.avatar1 = 'http://127.0.0.1:8000' + result.data.avatar
          this.tableData[0].score2 = Math.round(result.data.heart_avg * 1.2)
          this.tableData[1].score2 = Math.round((result.data.sprint_num * 0.45 + result.data.sprint_distance * 0.55) / 10)
          this.tableData[2].score2 = Math.round(result.data.speed_num / 105)
          this.tableData[3].score2 = Math.round(result.data.hotshot / 3)
          this.tableData[4].score2 = Math.round(result.data.run_distance / 4.5)
          this.tableData[5].score2 = Math.round(result.data.pass_football / 115)
       }
    },
    Token(){
      return this.$store.getters.token;
    },
  },
  mounted(){
    this.token = this.Token()
  },
}
</script>

<style>
  .box-card {
    width: 1540px;
    height: 800px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .inp1{
    width: 180px;
    margin-right: 5px;
  }
  .inp2{
    width: 180px;
    margin-right: 5px;
  }
  .black{
    color:black;
  }
  .green{
    color: green;
  }
</style>

