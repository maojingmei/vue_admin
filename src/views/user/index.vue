<template>
  <el-table
    :data="userList"
    border
    style="width: 60%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserList',
  data(){
    return{
      userList: [],
    }
  },
  created(){
    this.getUserListData()
  },
  methods: {
    getUserListData(){
      axios
        .get('http://yapi.demo.qunar.com/mock/31838/users/list')
        .then(response => this.userList = response.data.userInfo)
  
    }
  }
}
</script>

<style scoped lang='scss'>
  
</style>