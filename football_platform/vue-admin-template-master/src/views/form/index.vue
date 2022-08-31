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

            <el-form-item label="用户名" style="width:550px;" prop="username">
              <el-input v-model="form.username" placeholder="" />
            </el-form-item>

            <el-form-item label="位置" style="width:550px;" prop="position">
              <el-select v-model="form.position" placeholder="">
                <el-option label="前锋" value="0"></el-option>
                <el-option label="左边锋" value="1"></el-option>
                <el-option label="右边锋" value="2"></el-option>
                <el-option label="前腰" value="3"></el-option>
                <el-option label="中前卫" value="4"></el-option>
                <el-option label="中后卫" value="5"></el-option>
                <el-option label="左后卫" value="6"></el-option>
                <el-option label="右后卫" value="7"></el-option>
                <el-option label="门将" value="8"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="年龄" style="width:550px;" prop="age">
              <el-input v-model="form.age" placeholder="" />
            </el-form-item>

            <el-form-item label="体重" style="width:550px;" prop="weight">
              <el-input v-model="form.weight" placeholder="" />
            </el-form-item>

            <el-form-item label="身高" style="width:550px;" prop="stature">
              <el-input v-model="form.stature" placeholder="" />
            </el-form-item>


            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button @click="onCancel">清空</el-button>
            </el-form-item>
          </el-form>
        </el-col>

        <el-col :span="5">
          <div class="demo-image__preview">
            <el-image style="width: 300px; height: 300px" :src="form.avatar" >
            </el-image>
          </div>
        </el-col>

      </el-row>
    </el-card>

  </div>
</template>

<script>
import axios from "axios"
import { uploadImage, updateInfo } from '@/api/user'
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
    return {
      releseList:{
					logo:''
			},
			isHidden:true,
      form:{

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
      fileList: [],
      AvatarUrl: 'http://127.0.0.1:8000/api/avatar/',
      filename: 'default.jpg',
      file: '',
    }
  },
  methods: {
    onSubmit() {
      let data = {}
      data['weight'] = this.form.weight
      data['stature'] = this.form.stature
      data['age'] = this.form.age
      data['username'] = this.form.username
      let id = this.form.id
      let result = updateInfo(data,id)
      console.log(result)
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
          console.log(result.data)
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

    }
  },
  mounted(){
    //获取个人用户信息
    this.UserInfoData(this.Token());
    //console.log(this.Token());
    //console.log(this.$API)
  }
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

