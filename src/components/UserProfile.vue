<template>
  <div>
    <h1>Profile Component - interpolation {{ 10 + 12 }}</h1>
    <h1>{{ getName("Ethan") }} - {{ email }} - {{ mobile }}</h1>
    <h1>my email - {{ getData().email }}</h1>
    <!-- <h1>{{ email }} - {{ (mobile = 123) }}</h1> -->
    <!-- we cant do this in angular, it will change all values for mobile -->
    <button v-on:click="handleClick()">Click me</button><br /><br />
    <button v-on:dblclick="handleClick()">double Click me</button>
    <br /><br />
    <h1>count {{ count }}</h1>
    <button v-on:click="increase()">increase</button>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "UserProfile",
  props: {
    msg: String,
  },
  data() {
    return {
      email: "abhishek@gmail.com",
      mobile: 1231231230,
      count: 0,
    };
  },
  methods: {
    getName(name) {
      return `Abhishek ${name}`;
    },
    getData() {
      return {
        email: this.email,
      };
    },
    handleClick() {
      alert("handle click called");
    },
    increase() {
      this.count = this.count + 1;
    },
  },
  mounted() {
    const route = useRoute();
    alert(JSON.stringify(route.params));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
