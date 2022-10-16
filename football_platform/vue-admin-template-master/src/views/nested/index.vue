<template>
  <div class="app-container">
    <el-card class="box-card" style="width:1550px;">

      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="未读">
          <el-table :data="unread_list" style="width: 100%" :show-header="status" >
            <el-table-column prop="verb" >
            </el-table-column>
            <el-table-column prop="news" >
            </el-table-column>
            <el-table-column prop="timestamp" >
            </el-table-column>
            <el-table-column  align="right">
              <template slot-scope="scope" >
                <el-button size="mini" @click="handleRead(scope.$index, scope.row)">阅读</el-button>
              </template>
            </el-table-column>
            
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="已读">
          <el-table :data="read_list" style="width: 100%" :show-header="status" >
            <el-table-column prop="verb" >
            </el-table-column>
            <el-table-column prop="news" >
            </el-table-column>
            <el-table-column prop="timestamp" >
            </el-table-column>
            <el-table-column  align="right">
              <template slot-scope="scope" >
                <el-button size="mini" @click="handleRead(scope.$index, scope.row)">阅读</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
            
          </el-table>
        </el-tab-pane>
      </el-tabs>

      <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span v-html="content"></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      
    </el-card>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { deletenotice } from '@/api/user'
export default {
  data() {
    return {
      tabPosition: 'left',
      notices: '',
      unread_list:'',
      read_list: '',
      dialogVisible: false,
      title:'',
      content:'',
      token:'',
    }
  },
  methods:{
    async UserNoticeData(token){
       let result = await this.$API.user.getnotice(token)
       if(result.status == 200){
          this.notices = result.data
          var unread_list = []
          var read_list = []
          for(var i=0;i<this.notices.length;i++)
            if(this.notices[i].unread == true){
                this.notices[i].news = '您收到了来自'+this.notices[i].actor+'的通知'
                unread_list.push(this.notices[i])
            }else{
                this.notices[i].news = '您收到了来自'+this.notices[i].actor+'的通知'
                read_list.push(this.notices[i])
            }
          this.unread_list = unread_list
          this.read_list = read_list
          console.log(this.notices)
       }
    },
    Token(){
      return this.$store.getters.token;
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    async handleRead(index, row){
      this.dialogVisible = true
      var content = row['description']
      this.content = content.replace(/\\r\\n/g,'<br/>')
      this.title = row['verb']
      row['unread'] = false
      let result = await this.$API.user.updatenotice(row,row['id'])
      console.log(result)
      if(result.status == 200){
        console.log(result.data)
        this.UserNoticeData(this.token)
      }
    },
    handleDelete(index,row){
      deletenotice(row['id']).then(response => {
        console.log(response)
        if (response.data.status == 200) {
          this.$message({
            message: '删除消息成功',
            type: 'success'
          });
          this.UserNoticeData(this.token)
        } else {
          this.$message.error('删除失败');
        }
      })
     
    }
  },
  mounted(){
    //获取个人用户信息
    this.UserNoticeData(this.Token());
    this.token = this.Token();
    //console.log(this.Token());
    //console.log(this.$API)
  }
}
</script>



