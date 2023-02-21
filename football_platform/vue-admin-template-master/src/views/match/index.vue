<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height:40px;">全部比赛</span>
      <el-button type="primary" style="float:right; margin-left: 10px;" @click="Search()">搜索</el-button> 
      <el-input v-model="input" style="float: right; width: 250px;" placeholder="请输入相应赛季"></el-input>
    </div>
    
    <div class="cont" style="width:100%;height:650px;scroll-snap-type: y mandatory;overflow-y: scroll;">
    <el-card style="margin:20px 0; margin-left: 15px;" v-for="match in match_data">
      <el-container>
        <el-aside width="200px" style="height:150px; width:150px; font-size:40px;display: flex; background-color: gold;" v-if="match.outcome == '胜'">
          <span style="margin-top: 50px;margin-left: 50px;">{{ match.outcome }}</span>
          <span style="font-size:12px;width:50px;">{{ match.name }}第{{ match.match_id }}场</span>
        </el-aside>
        <el-aside width="200px" style="height:150px; width:150px; font-size:40px;display: flex; background-color: red;" v-else-if="match.outcome == '败'">
          <span style="margin-top: 50px;margin-left: 50px;">{{ match.outcome }}</span>
          <span style="font-size:12px;width:50px;">{{ match.name }}第{{ match.match_id }}场</span>
        </el-aside>
        <el-aside width="200px" style="height:150px; width:150px; font-size:40px;display: flex; background-color: grey;" v-else-if="match.outcome == '平'">
          <span style="margin-top: 50px;margin-left: 50px;">{{ match.outcome }}</span>
          <span style="font-size:12px;width:50px;">{{ match.name }}第{{ match.match_id }}场</span>
        </el-aside>
       <el-container>
          <el-main style="height:150px;display: flex;overflow: hidden;background-color: aliceblue;">
               <span style="margin-left:50px;"><img style="height:150px;" :src="tream_emblem" ></span>
               <span style="margin-top: 50px;margin-left: 200px;font-size: 25px;">{{ football_tream }}</span>
               <span style="margin-top: 50px;margin-left: 100px;font-weight: bold;font-size: 40px;margin-right: 10px;">{{ match.ownScore }}</span>
               <span style="margin-top: 50px;font-weight: bold;font-size: 40px;margin-right: 10px;">-</span>
               <span style="margin-top: 50px;font-weight: bold;font-size: 40px;">{{ match.opponentScore }}</span>
               <span style="margin-top: 50px;margin-left: 100px;font-size: 25px;">{{ match.opponent_id }}</span>
               <span style=""><img style="height:150px;width: 150px;margin-left: 200px;" :src="match.tream_emblem" ></span>
               <span style="margin-left:-10px;">
               <el-button type="text" style="margin-top: 50px;margin-left: 20px;" @click="dialogVisible = true; handle(match.match_id);">比赛详情</el-button> 
               </span>
               <!--对话框-->
               <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
              <span>
                <el-upload class="upload-demo" drag 
                     :before-upload="BeforeAvatarUpload"
                     :http-request="UploadFile"
                     :file-list="fileList" 
                     :headers="headers"
                     limit=1
                     action="https://jsonplaceholder.typicode.com/posts/" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传passingevents.xlsx</div>
                </el-upload>
              </span>

              <span>
                <el-upload class="upload-demo" drag 
                     :before-upload="BeforeAvatarUpload"
                     :http-request="UploadFile2"
                     :file-list="fileList2" 
                     :headers="headers"
                     limit=1
                     action="https://jsonplaceholder.typicode.com/posts/" multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传fullevents.xlsx文件</div>
                </el-upload>
              </span>

              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false; skip();">确 定</el-button>
              </span>
               </el-dialog>

              

          </el-main>
        </el-container>
      </el-container>
    </el-card>
    </div>

  </el-card>
</template>
  
<script>
import { mapGetters } from 'vuex'
import { uploadtreamFile, uploadplayerFile } from '@/api/tream'
import jQuery from 'jquery'
  export default {
  
    data() {
      return {
        match_data: '',
        status: false,
        count:0,
        input: '',
        data: '',
        dialogVisible: false,
        fileList: [],
        fileList2: [],
        fileList3: [],
        headers: {
        'Content-Type': 'multipart/form-data'
        },
        confirm:false,
        confirm1:false,
        confirm2:false,
        match_id:'',
        tream_emblem:'',
      }
    },
    methods:{
      Token(){
        return this.$store.getters.token;
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
                     result.data[i].outcome = '胜'
                 }else if(result.data[i].outcome == 1){
                     result.data[i].outcome = '败'
                 }else{
                     result.data[i].outcome = '平'
                 }
                 result.data[i]['tream_emblem'] = ''
           }
           this.match_data = result.data;
           this.data = result.data;
        }
      },
      async TreamData(){
        let result1 = await this.$API.tream.AllTreamInfo(this.token)
        if(result1.status == 200){
          console.log(result1.data)
          var count  = 0
          for(var i = 0;i < this.match_data.length;i++){
             for(var j = 0;j < result1.data.length;j++){
                if(this.match_data[i].opponent_id == result1.data[j].name){
                   //alert(this.match_data[i].opponent_id)
                   this.match_data[i].tream_emblem = result1.data[j].tream_emblem
                }
                if(this.$store.getters.football_tream == result1.data[j].name){
                   this.tream_emblem = result1.data[j].tream_emblem
                }
             }
          }
        }
      },
      
      Search(){
        var _this=this
        this.match_data = this.data.filter(function(item){
         if(this.input == ''){
            return true;
         }
         else if(item.name == _this.input){
             return true;
         }
        })
      },
      handle(match_id){
        this.match_id = match_id
      },
      skip(){
        if(this.confirm == true && this.confirm1 == true){
            this.$router.push({name:'Process',params:{match_id:this.match_id}})
        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      BeforeAvatarUpload(file){
       const isLt2M = file.size / 1024 /1024 /1024 < 2;
       console.log(file.size)
       if(!isLt2M){
         this.$message('上传的文件大小不可以超过4MB');
       }
       return isLt2M
      },
      UploadFile(file){
      console.log(file)
      let data = new FormData()
      data.append('file', file.file)
      console.log(data)
      uploadtreamFile(data).then(response => {
         if(response.data.code == 200){
            this.confirm = true
            this.$message('passingevents.xlsx文件上传成功');
         }else{
             this.$message('passingevents.xlsx上传失败');
         }
      })
      },
      UploadFile2(file){
      console.log(file)
      let data = new FormData()
      data.append('file', file.file)
      console.log(data)
      uploadtreamFile(data).then(response => {
         if(response.data.code == 200){
            this.confirm1 = true
            this.$message('fullevents.xlsx文件上传成功');
         }else{
             this.$message('fullevents.xlsx上传失败');
         }
      })
      },
    },
    mounted(){
      this.token = this.Token()
      this.MatchData(this.token)
      this.TreamData()
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
.el-aside {
  background-color: #D3DCE6;
  height: 50px;
  text-align: center;
  line-height: 50px;
}

.el-main {
  background-color: #E9EEF3;
  height:50px;
  text-align: center;
  line-height: 50px;
  padding: 0;
}

.el-header{
  background-color: #B3C0D1;
  text-align: center;
  line-height: 30px;
} 
</style>
  
  