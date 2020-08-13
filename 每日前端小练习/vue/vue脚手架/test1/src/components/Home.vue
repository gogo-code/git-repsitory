<template>
<div>
  <h2>我是首页</h2>
  <p>hello</p>
  <!-- 注意这里有home前有/ -->
  <router-link to="/home/news">新闻</router-link>
  <router-link to="/home/message">消息</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
