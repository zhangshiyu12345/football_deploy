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
       token:'',
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
</style>
  
  