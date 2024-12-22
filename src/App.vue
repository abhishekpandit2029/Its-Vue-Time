<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
  <UserProfile /> -->

  <router-link to="/">Home</router-link>
  <router-link to="/login">login</router-link>
  <router-link to="/logout">logout</router-link>
  <router-link to="/profile/abhishek">profile</router-link>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import UserProfile from "./components/UserProfile.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // UserProfile,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
