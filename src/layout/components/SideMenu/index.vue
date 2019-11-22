<template>
  <div>
    菜单
  </div>
</template>

<script>
import {queryMenu} from '@/api/menu.js'
export default {
  name: 'SideMenu',
  data(){
    return{

    }
  },
  created(){
    queryMenu().then(res=>{
      console.log("res===",res);
    })
  }
}
</script>

<style>

</style>