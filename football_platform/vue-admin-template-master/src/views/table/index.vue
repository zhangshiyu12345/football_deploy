<template>
  <div>
    <el-card style="margin:20px 0px;">
      <!--选择器1-->
      <span style="">位置</span>
      <el-select v-model="value1" multiple placeholder="请选择" style="width:250px; margin-left: 10px;">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <!--选择器2-->
      <span style="margin-left: 20px;">性别</span>
      <el-select v-model="value2" multiple collapse-tags style="margin-left: 10px; width:250px;" placeholder="请选择">
        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <!--选择器3-->
      <span style="margin-left: 20px;">身高</span>
      <el-select v-model="value3" multiple collapse-tags style="margin-left: 10px; width:250px;" placeholder="请选择">
        <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <!--选择器4-->
      <span style="margin-left: 20px;">年龄</span>
      <el-select v-model="value4" multiple collapse-tags style="margin-left: 10px; width: 250px;" placeholder="请选择">
        <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>


    </el-card>


    <el-card>
      <div>
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="username" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="180">
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="180">
        </el-table-column>
        <el-table-column prop="stature" label="身体" width="180">
        </el-table-column>
        <el-table-column prop="weight" label="射门" width="180">
        </el-table-column>
        <el-table-column prop="weight" label="防守" width="180">
        </el-table-column>
        <el-table-column prop="weight" label="速度" width="180">
        </el-table-column>
        <el-table-column prop="weight" label="盘带" width="180">
        </el-table-column>
        <el-table-column prop="position" label="位置" width="180">
        </el-table-column>
        <el-table-column prop="score" label="总评" width="180">
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
        options1:
        [{
          value: '选项1',
          label: '前锋'
        }, {
          value: '选项2',
          label: '左边锋'
        }, {
          value: '选项3',
          label: '右边锋'
        }, {
          value: '选项4',
          label: '前腰'
        }, {
          value: '选项5',
          label: '中前卫'
        },{
          value: '选项6',
          label: '中后卫',
        },{
          value: '选项7',
          label: '左后卫',
        },{
          value: '选项8',
          label: '右后卫',
        },{
          value: '选项9',
          label: '门将',
        }],
        options2: [{
          value: '选项1',
          label: '男',
        },{
          value: '选项2',
          label: '女',
        }],
        options3: [{
          value: '选项1',
          label: '160 - 165',
        },{
          value: '选项2',
          label: '166 - 170',
        },{
          value: '选项3',
          label: '171 - 175',
        },{
          value: '选项4',
          label: '176 - 180',
        },{
          value: '选项5',
          label: '181 - 185',
        },{
          value: '选项6',
          label: '186 - 190',
        }],
        options4:[{
          value: '选项1',
          label: '18',
        },{
          value: '选项2',
          label: '19',
        },{
          value: '选项3',
          label: '20',
        },{
          value: '选项４',
          label: '21',
        },{
          value: '选项5',
          label: '22',
        },{
          value: '选项6',
          label: '23',
        },{
          value: '选项7',
          label: '24',
        },{
          value: '选项8',
          label: '25',
        },{
          value: '选项9',
          label: '26',
        },{
          value: '选项10',
          label: '27',
        },{
          value: '选项11',
          label: '28',
        },{
          value: '选项12',
          label: '29',
        }],
        value1: [],
        value2: [],
        value3: [],
        value4: [],
        tableData: [{
          username: 'zhang1',
          sex: '男',
          age: '19',
          stature: '180',
          weight: '79',
          position: '前峰',
          score: '80',
        },]
      }
    },
    mounted:{
      
    },
  }
</script>

<style>
 .el-table th{
    width: 180px;
  }
</style>