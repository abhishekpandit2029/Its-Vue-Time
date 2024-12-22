<template>
  <h1>Life cycle</h1>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return { count: 0 };
  },

  //   beforeCreate() {
  //     alert("before create called");
  //   },
  //   created() {
  //     alert("creatd called");
  //   },

  //   beforeMount() {
  //     alert("before mount called");
  //   },
  //   mounted() {
  //     alert("mounted called");
  //   },

  //   beforeUpdate() {
  //     alert("before updated called");
  //   },
  //   updated() {
  //     alert("updated called");
  //   },

  beforeUnmount() {
    alert("before unmount called");
  },
  unmounted() {
    alert("unmounted called");
  },
};
</script>
