<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  name: "FooterCompo",
  data() {
    return { count: 0 };
  },
  async mounted() {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    console.log("json placeholder", data);
  },
};
</script>
