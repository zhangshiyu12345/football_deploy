<template>
  <div style="width:96%;">
    <el-card style="margin:20px 0; margin-left: 15px;">
      <!--计数器-->
      <label style="margin-right:10px;">年龄</label>
      <el-input-number v-model="num1" @change="handleChange" :min="8" :max="40" label="描述文字" style="margin-left:5px;"></el-input-number>
      <span style="margin:0 10px;">-</span>
      <el-input-number v-model="num2" @change="handleChange" :min="8" :max="40" label="描述文字"></el-input-number>

      <!--计数器---->
      <label style="margin-left: 50px; margin-right: 10px;">身高</label>
      <el-input-number v-model="num3" @change="handleChange1" :min="100" :max="250" label="描述文字" style="margin-left:5px;"></el-input-number>
      <span style="margin:0 10px;">-</span>
      <el-input-number v-model="num4" @change="handleChange1" :min="100" :max="250" label="描述文字"></el-input-number>

      
      <el-input v-model="search" class="inp1" size="medium" placeholder="搜索姓名,位置,性别" />
      <el-button type="primary" @click="KeySearch" class="btn1">搜索</el-button>
    </el-card>


    <el-card style="margin-left: 15px;">
      <div>
        <el-table :data="tableData1" border  stripe style="width: 100%">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column prop="username" label="姓名" width="135">
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="135">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="135">
          </el-table-column>
          <el-table-column prop="stature" label="身高" width="135">
          </el-table-column>
          <el-table-column prop="body" label="身体" width="135">
          </el-table-column>
          <el-table-column prop="pass_football" label="传球" width="135">
          </el-table-column>
          <el-table-column prop="hotshot" label="射门" width="135">
          </el-table-column>
          <el-table-column prop="defend" label="防守" width="135">
          </el-table-column>
          <el-table-column prop="speed" label="速度" width="135">
          </el-table-column>
          <el-table-column prop="control" label="盘带" width="135">
          </el-table-column>
          <el-table-column prop="position" label="位置" width="135">
          </el-table-column>
          <el-table-column prop="score" label="总评" width="190">
          </el-table-column>
        </el-table>
      </div>
    </el-card>

  </div>
</template>

<script>
  export default{
    name:'table',
    data(){
      return{
        num1:8,
        num2:40,
        num3:100,
        num4:250,
        search: '',
        tableData1: [{
        },],
        tableData2:[]
      }
    },
    mounted(){
      this.UsersData(this.Token)

    },
    methods:{
     async UsersData(token){
       let result = await this.$API.user.AllUserInfo(token)
       if(result.status == 200){
          var position = ['前锋','左边锋','右边锋','前腰','中前卫','中后卫','左后卫','右后卫','门将']
          var tableData = result.data;
          for(var i=0;i<tableData.length;i++){
            tableData[i].sex = tableData[i].sex ? '男' : '女'
            tableData[i].position = position[tableData[i].position]
          }
          this.tableData1 = tableData
          this.tableData2 = tableData
          console.log(tableData)
       }
     },
     Token(){
      return this.$store.getters.token;
     },
     KeySearch(){
        var _this=this
        this.tableData1 = this.tableData2.filter(function(item){
         if(_this.search == ''){
             return true;
         }else{
             if(item.username == _this.search){
                return true;
             }else if(item.sex == _this.search){
                return true;
             }else if(item.position == _this.search){
                return true;
             }
         }
      })
     },
     handleChange(value) {
      var _this=this
      this.tableData1 = this.tableData2.filter(function(item){
         if(item.age>=_this.num1&&item.age<=_this.num2){
             return true;
         }
      })
     },
     handleChange1(value){
      var _this=this
      this.tableData1 = this.tableData2.filter(function(item){
         if(item.stature>=_this.num3&&item.stature<=_this.num4){
          return true;
         }
      })
     }
    },
       
  }
</script>

<style>
  .el-table th{
    width: 180px;
  }
  .inp1{
    width: 350px;
    height: 40px;
    margin-left: 70px;
  }
  .btn1{
   
    margin-left: 5px;
    
  }
  
</style>