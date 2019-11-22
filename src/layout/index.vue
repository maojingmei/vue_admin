<template>
  <div>
    <SideMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
import {SideMenu} from './components'
export default {
  name: 'Layout',
  components: {
    SideMenu
  }
}
</script>

<style>

</style>