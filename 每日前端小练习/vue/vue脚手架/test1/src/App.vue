<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!-- <router-link to="/home" tag="button" replace >首页</router-link>
    <router-link to="/about" tag="button" replace >关于</router-link> -->
    <!-- <button @click="linkToHome">首页</button>
    <button @click="linkToAbout">关于</button> -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId:'001'
    }
  },
  methods: {
    linkToHome() {
      this.$router.push('/home')

    },
    linkToAbout() {
      this.$router.push('/about')
    }
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
