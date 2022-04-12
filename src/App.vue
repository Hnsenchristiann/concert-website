<template>
  <div id="app">
    <sidebar />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    Sidebar
  }
}
</script>

<style>

</style>
