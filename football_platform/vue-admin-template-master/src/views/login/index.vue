<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
      label-position="left">
      <div class="title-container">
        <h3 class="title">登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text"
          tabindex="1" auto-complete="on" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType"
          placeholder="Password" name="password" tabindex="2" auto-complete="on" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin">登录</el-button>
      <div class="tips">
        <el-button type="text" @click="dialogFormVisible = true">球员注册</el-button>
        <el-button type="text" @click="dialogFormVisible1 = true">教练注册</el-button>
        <!-- <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span> -->
      </div>
    </el-form>
    <el-dialog title="球员注册" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="体重(公斤)" prop="weight">
          <el-input v-model.number="ruleForm.weight"></el-input>
        </el-form-item>
        <el-form-item label="身高(cm)" prop="stature">
          <el-input v-model.number="ruleForm.stature"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="位置" prop="position">
          <el-select v-model="ruleForm.position" placeholder="请选择位置">
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
        <el-form-item label="球队名称" prop="football_tream">
          <el-input v-model="ruleForm.football_tream" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="tel" v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" autocomplete="off"></el-input>
          <el-button  :plain="true" @click.stop="sendVerificationCode" v-if="show">发送验证码</el-button>
          <el-button  :plain="true" v-if="!show" disabled >{{count}}秒后重发</el-button>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false; submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="教练注册" :visible.sync="dialogFormVisible1">
      <el-form :model="ruleForm1" status-icon :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm1.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="ruleForm1.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm1.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="球队名称" prop="football_tream">
          <el-input v-model="ruleForm1.football_tream" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="tel" v-model="ruleForm1.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm1.code" autocomplete="off"></el-input>
          <el-button  :plain="true" @click.stop="sendVerificationCode1" v-if="show">发送验证码</el-button>
          <el-button  :plain="true" v-if="!show" disabled >{{count}}秒后重发</el-button>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm1.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="ruleForm1.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible1 = false; submitForm1('ruleForm1');CreaTream();">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { validUsername } from '@/utils/validate'
import { createUser, SendPhone  } from '@/api/user'
import {  createtream } from '@/api/tream'
export default {
  name: 'Login',
  data() {
    var validateEmail = (rule, value, callback) => {
        let temp = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/
        if (value && (!(temp).test(value))) {
          callback(new Error('请输入正确的邮箱'))
        } else {
          callback()
        }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '' || value.length < 7) {
        callback(new Error('请输入大于8位的密码'));
      } else {
        if (this.ruleForm.checkPassword !== '') {
          this.$refs.ruleForm.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value != this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
    };
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
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入有效的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 7) {
        callback(new Error('请输入大于8位的密码'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
    }
    const validateTream = (rule, value, callback) => {
      if(value == ''){
        callback(new Error('请输入您所在球队'))
      }
    }
    return {
      show:true,
      count: '',
      timer:null,
      loginForm: {
        username: 'admin',
        password: '12345678'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      ruleForm: {
          username: '',
          email: '',
          password: '',
          checkPassword: '',
          age: '',
          weight: '',
          stature: '',
          sex: '',
          position: '',
          phone: ' ',
          code: ' ',
          football_tream: '',
          roles:0,
      },
      ruleForm1:{
          phone:'',
          username:'',
          code:'',
          password:'',
          checkPassword:'',
          email:'',
          sex:'',
          football_tream:'',
          roles:2,
      },
      data2:{
          name:'',
      },
      rules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入用户名' }
        ],
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { required: true, validator: checkAge, trigger: 'blur' }
        ],
        weight: [
          { required: true, validator: validateWeight, trigger: 'blur'}
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        position: [
          { required: true, message: '请选择位置', trigger: 'change' }
        ],
        stature: [
          { required: true, validator:validateStature, trigger: 'blur'}
        ],
        phone: [
          { required: true, validator:validatePhone, trigger: 'blur'}
        ],
        football_tream: [
          { required: true, validator:validateTream, trigger: 'blur'}
        ],
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      dialogFormVisible1: false,
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitForm(formName) {
      createUser(this.ruleForm).then(response => {
        console.log(response)
        if (response.status == 201) {
          this.$message({
            message: '用户创建成功。',
            type: 'success'
          });
        } else {
          this.$message({
            message: '用户创建失败',
            type: 'error'
          });
        }
      })
    },
    submitForm1(formName) {
      createUser(this.ruleForm1).then(response => {
        console.log(response)
        if (response.status == 201) {
          this.$message({
            message: '用户创建成功。',
            type: 'success'
          });
        } else {
          this.$message({
            message: '用户创建失败',
            type: 'error'
          });
        }
      })
    },
    CreaTream(){
      this.data2.name = this.ruleForm1.football_tream
      createtream(this.data2).then(response => {
        console.log(response)
        if (response.status == 200) {
          this.$message({
            message: '球队创建成功。',
            type: 'success'
          });
        } else {
          this.$message({
            message: '球队创建失败',
            type: 'error'
          });
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    sendVerificationCode(){
      let TIME_COUNT = 60
      if(!this.timer){
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if(this.count > 0 && this.count <= TIME_COUNT){
            this.count--;
          }else{
            this.show = true;
            clearInterval(this.timer)
            this.timer = null
          }
        },1000);
        this.getCode();
      }
    },
    sendVerificationCode1(){
      let TIME_COUNT = 60
      if(!this.timer){
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if(this.count > 0 && this.count <= TIME_COUNT){
            this.count--;
          }else{
            this.show = true;
            clearInterval(this.timer)
            this.timer = null
          }
        },1000);
        this.getCode1();
      }
    },
    getCode(){
       var data = {}
       data['phone'] = this.ruleForm.phone
       SendPhone(data).then(response => {
        if(response.status == 200){
          this.$message({
          showClose: true,
          message: '发送短信成功，请注意接收',
          type: 'success'
         });
        }else{
        this.$message({
          showClose: true,
          message: '发送短信失败或短信已发送，请稍后尝试',
          type: 'error'
      });
        }
       })
    },
    getCode1(){
       var data = {}
       data['phone'] = this.ruleForm1.phone
       SendPhone(data).then(response => {
        if(response.status == 200){
          this.$message({
          showClose: true,
          message: '发送短信成功，请注意接收',
          type: 'success'
         });
        }else{
        this.$message({
          showClose: true,
          message: '发送短信失败或短信已发送，请稍后尝试',
          type: 'error'
      });
        }
       })
    },
  }
}
</script>
<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;
@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  background: url('http://127.0.0.1:8000/media/images/football.jpeg') no-repeat;
  background-size: 100% 100%;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
