<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'App'
  }
</script>


<style lang="less">
  @import './style/variables';
  @import './style/element-ui';
  @import './style/common';
  @import './style/scrollBar';
</style>
