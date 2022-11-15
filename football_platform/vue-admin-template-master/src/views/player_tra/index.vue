<template>
    <el-tabs type="border-card" class="box-card">
      
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
        }
    },
    methods:{
      Token(){
        return this.$store.getters.token;
      },
      async PlayerData(){
        let result = await this.$API.tream.playerdata(this.token,this.match_id)
        if(result.status = 200){
          console.log(result.data)
        }
      },
    },
    mounted(){
      this.token = this.Token()
      this.PlayerData()
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
    
    