<template>
  <div>
    <!-- HTML binding -->
    <div v-html="htmlContent"></div>

    <!-- Conditional class binding -->
    <h3 :class="{ textcolor: colorFull }">Child component props: {{ name }}</h3>
    <h3>User object: {{ user.name }}</h3>
    <button v-on:click="getUserData()">Call Function</button>
    <button v-on:click="getChildData(childname)">got child data</button>

    <br /><br />
    <input type="text" name="" ref="inputref" />
    <button v-on:click="getinputdata">ref button</button>

    <h1>dallar - {{ getresult }}</h1>

    <!-- watcher -->
    <h1>count - {{ count }}</h1>
    <button v-on:click="count = count + 1">+</button>
    <button v-on:click="count = count - 1">-</button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    name: String,
    user: Object,
    getUserData: Function,
    getChildData: Function,
    htmlContent: {
      type: String,
      default: "<p style='color: red;'>This is raw HTML content</p>",
    },
  },
  data() {
    return {
      childname: "got child....................",
      colorFull: true,
      dollar: 100,
      count: 0,
      rs: 80,
      discount: 20,
    };
  },
  methods: {
    getinputdata() {
      this.$refs.inputref.focus();
      let val = this.$refs.inputref.value;
      alert(val);
    },
  },

  // for complex operatin use computed property, it works like usememo or usecallback form react. it used cache
  computed: {
    getresult() {
      return this.dollar * this.rs - this.discount;
    },
  },

  // this will watch/observe you properties, if its change then you can perform some action its like useEffect from react.
  watch: {
    count(val, prev) {
      if (val > 5) alert("stop couting", prev);
    },
  },
};
</script>

<style scoped>
.textcolor {
  color: red;
}
</style>
