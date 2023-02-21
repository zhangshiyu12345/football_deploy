<template>
  <div class="app-container">
    <el-card class="box-card" style="width:1550px;">
      <div slot="header" class="clearfix">
        <span>更改个人信息</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="15">
          <el-form ref="form" status-icon :model="form" :rules="rules" label-width="140px">

            <el-form-item label="头像">
              <el-upload 
              :auto-upload="ture" 
              style="width:550px;" 
              class="upload-demo" 
              action="string"
              :http-request="UploadImage"
              :on-preview="handlePreview" 
              :on-remove="handleRemove" 
              :before-remove="beforeRemove" 
               multiple 
              :limit="1"
              :on-exceed="handleExceed" 
              :file-list="fileList" 
              :before-upload="BeforeAvatarUpload"
              accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
              >
                <el-button size="small" type="primary" >点击上传</el-button>
                <div slot="tip" class="el-upload__tip">上传图片不超过2MB</div>
              </el-upload>
            </el-form-item>

            <el-form-item label="球队队徽" v-if="this.roles == 'coach'">
              <el-upload 
              :auto-upload="ture" 
              style="width:550px;" 
              class="upload-demo" 
              action="string"
              :http-request="UploadImage1"
              :on-preview="handlePreview" 
              :on-remove="handleRemove" 
              :before-remove="beforeRemove" 
               multiple 
              :limit="1"
              :on-exceed="handleExceed" 
              :file-list="fileList" 
              :before-upload="BeforeAvatarUpload"
              accept=".jpg,.jpeg,.png,.JPG,.JPEG,.PNG"
              >
                <el-button size="small" type="primary" >点击上传</el-button>
                <div slot="tip" class="el-upload__tip">上传图片不超过2MB</div>
              </el-upload>
            </el-form-item>

            <el-form-item label="用户名" style="width:550px;" prop="username">
              <el-input v-model="form.username" placeholder="" />
            </el-form-item>

            <el-form-item label="位置" style="width:550px;" prop="position" v-if="this.roles == 'user'">
              <el-select v-model="form.position" placeholder="">
                <el-option label="中锋" value="0"></el-option>
                <el-option label="边锋" value="1"></el-option>
                <el-option label="前腰" value="2"></el-option>
                <el-option label="后腰" value="3"></el-option>
                <el-option label="中前卫" value="4"></el-option>
                <el-option label="左前卫" value="5"></el-option>
                <el-option label="右前卫" value="6"></el-option>
                <el-option label="中后卫" value="7"></el-option>
                <el-option label="左后卫" value="8"></el-option>
                <el-option label="右后卫" value="9"></el-option>
                <el-option label="门将" value="10"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="年龄" style="width:550px;" prop="age" v-if="this.roles == 'user'">
              <el-input v-model="form.age" placeholder="" />
            </el-form-item>

            <el-form-item label="体重" style="width:550px;" prop="weight" v-if="this.roles == 'user'">
              <el-input v-model="form.weight" placeholder="" />
            </el-form-item>

            <el-form-item label="身高" style="width:550px;" prop="stature" v-if="this.roles == 'user'">
              <el-input v-model="form.stature" placeholder="" />
            </el-form-item>

            <el-form-item label="球队" style="width:550px;" prop="football_tream" v-if="this.roles == 'coach'">
              <el-input v-model="form.football_tream" placeholder="" />
            </el-form-item>


            <el-form-item v-if="this.roles == 'user'">
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button @click="onCancel">清空</el-button>
            </el-form-item>

            <el-form-item v-if="this.roles == 'coach'">
              <el-button type="primary" @click="onSubmit1">提交</el-button>
              <el-button @click="onCancel">清空</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="5">
          <div class="demo-image__preview">
            <el-image style="width: 300px; height: 300px" :src="this.form.avatar" >
            </el-image>
          </div>
        </el-col>

        <el-col :span="5" v-if="this.roles == 'coach'">
          <div class="demo-image__preview">
            <el-image style="width: 300px; height: 300px" :src="this.tream_emblem" >
            </el-image>
          </div>
        </el-col>

      </el-row>
    </el-card>
    <el-card class="box-card" style="width:1550px;margin-top:20px;">
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <el-form :model="form1" status-icon :rules="rules1" ref="form1" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码" prop="oldpass">
          <el-input type="password"  v-model="form1.oldpass" autocomplete="off" style="width:550px;"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpass">
          <el-input type="password" v-model="form1.newpass" autocomplete="off" style="width:550px;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit3('form1')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios"
import { uploadImage, updateInfo } from '@/api/user'
import { uploademblem } from "@/api/tream";
import { Avatar } from "element-ui";
export default {
  data() {
    var validateWeight = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的体重'));
      } else {
        callback();
      }
    };
    var validateStature = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的身高'));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的用户名'));
      } else {
        callback();
      }
    };
    var validateAge = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入您的年龄'));
      } else {
        callback();
      }
    };
    var validateoldpass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
    };
    var validatenewpass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else {
          callback();
        }
    };
    return {
      releseList:{
					logo:''
			},
			isHidden:true,
      form:{
      },
      form1:{
      },
      rules:{
        username: [
          { required: true, validator: validateUsername, trigger: 'blur' }
        ],
        position: [
          { required: true, message: '请选择位置', trigger: 'change' }
        ],
        age: [
          { required: true, validator: validateAge, trigger: 'blur' }
        ],
        weight: [
          { required: true, validator: validateWeight, trigger: 'blur'}
        ],
        stature: [
          { required: true, validator:validateStature, trigger: 'blur'}
        ],
      },
      rules1:{
        oldpass: [
          { validator: validateoldpass, trigger: 'blur' }
        ],
        newpass: [
          { validator: validatenewpass, trigger: 'blur' }
        ],
      },
      fileList: [],
      fileList1: [],
      AvatarUrl: 'http://127.0.0.1:8000/api/avatar/',
      filename: 'default.jpg',
      file: '',
      tream_emblem:'',
      roles:'',
      file1:'',
      filename1:'default.jpg',
    }
  },
  methods: {
    async onSubmit() {  //异步函数
      let data = {}
      data['weight'] = this.form.weight
      data['stature'] = this.form.stature
      data['age'] = this.form.age
      data['username'] = this.form.username
      data['position'] = this.form.position
      data['phone'] = this.form.phone
      data['password'] = this.form.password
      data['flag'] = 0
      let id = this.form.id
      //let result = updateInfo(data,id)
      let result =  await this.$API.user.updateInfo(data,id) //在异步函数中调用异步函数
      console.log(result)
       if(result.status == 200){
        this.$message({
            type: 'success',
            message: '更新个人信息成功!'
          });
        this.UserInfoData(this.Token())
       }
      
    },
    async onSubmit1(){
      let data = {}
      data['username'] = this.form.username
      data['football_tream'] = this.form.football_tream
      data['phone'] = this.form.phone
      data['password'] = this.form.password
      data['flag'] = 1
      let id = this.form.id
      let result =  await this.$API.user.updateInfo(data,id) //在异步函数中调用异步函数
      console.log(result)
       if(result.status == 200){
        console.log(result.data)
        this.$message({
            type: 'success',
            message: '更新个人信息成功!'
          });
        this.UserInfoData(this.Token())
       }
    },
    async onSubmit3(){
      let data = {}
      data['password'] = this.form1.oldpass
      data['newpass'] = this.form1.newpass
      data['phone'] = this.form.phone
      data['username'] = this.form.username
      data['flag'] = 2
      let id = this.form.id
      let result = await this.$API.user.updateInfo(data,id)
      if(result.status == 200){
        console.log(1111)
        console.log(result.data)
        this.$message({
            type: 'success',
            message: '更改密码成功!'
          });
        console.log(result.data['password'])
        this.UserInfoData(this.Token())
       }
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
    },
    handlePreview(file) {
        console.log(file);
    },
    handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
    },
    async UserInfoData(token){
       let result = await this.$API.user.getInfo(token)
       if(result.status == 200){
          this.form = result.data;
          this.form['avatar'] = 'http://127.0.0.1:8000' +  this.form['avatar']
          console.log(result.data)
          this.roles = this.form['roles']
       }
       let result1 = await this.$API.tream.treaminfo(token,this.form.football_tream)
       if(result1.status == 200){
        this.tream_emblem = 'http://127.0.0.1:8000' + result1.data['tream_emblem']
       }
    },
    Token(){
      return this.$store.getters.token;
    },
    BeforeAvatarUpload(file){
       const isLt2M = file.size / 1024 /1024 < 2;
       console.log(file.size)
       if(!isLt2M){
         this.$message('上传图片的大小不可以超过2MB');
       }
       return isLt2M
    },
    UploadImage(file){
      console.log(file)
      let data = new FormData()
      data.append('file', file.file)
      data.append('id', this.form.id)
      data.append('picture','avatar')
      console.log(data)
      uploadImage(data).then(response => {
         if(response.data.code == 200){
            this.form.avatar = 'http://127.0.0.1:8000/media/avatar/' + file.file.name
            this.filename = file.file.name
            this.file = file.file
         }else{
            this.$message('图片上传失败')
         }
      })
    },
    UploadImage1(file){
      console.log(file)
      let data = new FormData()
      data.append('file', file.file)
      data.append('picture','tream_emblem')
      console.log(data)
      uploademblem(data).then(response => {
         if(response.data.code == 200){
            this.tream_emblem = 'http://127.0.0.1:8000/media/tream/' + file.file.name
            this.filename1 = file.file.name
            this.file1 = file.file
         }else{
            this.$message('图片上传失败')
         }
      })
    }
  },
  mounted(){
    //获取个人用户信息
    this.UserInfoData(this.Token());
    //console.log(this.Token());
    //console.log(this.$API)
  },
}
</script>


<style scoped>
.line{
  text-align: center;
}
.text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 700px;
  }
</style>
