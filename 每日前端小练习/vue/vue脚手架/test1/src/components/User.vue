<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户的相关信息</p>
  <h2>{{userId}}</h2>
</div>
</template>

<script>
export default {
  name:'User',
  computed: {
    userId() {
      // route指的是当前活跃的路由，活跃状态指的是你当前使用的组件
      return this.$route.params.userId   
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>

</style>
