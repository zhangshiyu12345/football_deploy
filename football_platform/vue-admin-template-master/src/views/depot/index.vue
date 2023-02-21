<template>
    <el-tabs type="border-card" class="box-card">
      <el-card class="box-card1">
       <img style="width:470px;text-align: center;margin-top: -30px;margin-left: -20px;" :src="this.data.A_img" />
      </el-card>

      <el-card class="box-card2">
       <img :src="this.data.G_img" style="width:470px;text-align:center;margin-top: -30px;margin-left: -20px;" />
      </el-card>

      <el-card class="box-card3">
       <img :src="this.data.IR_img" style="width:470px;text-align:center;margin-top: -30px;margin-left: -20px;" />
      </el-card>

      <el-card class="box-card4">
       <img :src="this.data.TEMP_img" style="width:470px;text-align:center;margin-top: -30px;margin-left: -20px;" />
      </el-card>
    </el-tabs>
</template>
    
<script>
import { mapGetters } from 'vuex'
import jQuery from 'jquery'
    export default {
    
    data() {
        return{
         token:'',
         data: this.$route.params.data
        }
    },
    methods:{
      Token(){
        return this.$store.getters.token;
      },
    },
    mounted(){
      this.token = this.Token()
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
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card1 {
    width: 480px;
    height: 350px;
    margin-left: 200px;
    overflow: hidden;
  }
  .box-card2 {
    width: 480px;
    height: 350px;
    margin-left: 800px;
    margin-top: -350px;
    overflow: hidden;
  }
  .box-card3 {
    width: 480px;
    height: 350px;
    overflow: hidden;
    margin-left: 200px;
    margin-top: 40px;
  }
  .box-card4 {
    width: 480px;
    height: 350px;
    margin-left: 800px;
    margin-top: -350px;
    overflow: hidden;
  }
  </style>
    
    