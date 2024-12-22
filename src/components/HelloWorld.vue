<template>
  <div class="hello">
    <h3>{{ msg }}</h3>

    <!--two way binding -->
    <h3>{{ count }}</h3>
    <h3>{{ naming }}</h3>
    <input type="text" v-model="count" />

    <input type="text" v-model.lazy="naming" />
    <!-- trim wil remove space -->
    <!-- <input type="text" v-model.trim="naming" /> -->
    <br /><br />

    <!-- get input field value -->
    <input type="text" placeholder="enter email" v-model="email" />
    <input type="text" placeholder="enter password" v-model="password" />
    <button v-on:click="getData()">get values</button>
    <br /><br />

    <!-- its will be similar for checkbox -->
    <label for="react">react</label>
    <input type="checkbox" value="react" v-model="technology" id="react" />
    <label for="next">next</label>
    <input type="checkbox" value="next" v-model="technology" id="next" />
    <label for="node">node</label>
    <input type="checkbox" value="node" v-model="technology" id="node" />
    <h3>selected tech : {{ technology }}</h3>

    <!-- if else -->
    <h3 v-if="show">show this</h3>
    <h3 v-else>dont show this</h3>

    <!-- for loop -->
    <ul>
      <li v-for="item in technology" :key="item">{{ item }}</li>
    </ul>

    <ChildComponent
      name="Abhishek Pandit"
      :user="user"
      :getChildData="getUserData"
    />

    <!-- slot example -->
    <SlotCompo>
      <template v-slot:slot1><h1>Software developer</h1></template>
      <template v-slot:slot2><h1>Abhishek pandit</h1></template>
    </SlotCompo>

    <!-- teleport component example  -->
    <teleport to="#fotter"><FooterCompo /></teleport>

    <!-- life cycle -->
    <LifeCycle v-if="show" />
    <button v-on:click="show = !show">show/hide</button>
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent.vue";
import SlotCompo from "./SlotCompo.vue";
import FooterCompo from "./FotterCompo.vue";
import LifeCycle from "./LifeCycle.vue";

export default {
  name: "HelloWorld",
  components: { ChildComponent, SlotCompo, FooterCompo, LifeCycle },
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
      naming: "",
      email: null,
      password: null,
      technology: [],
      show: true,
      user: {
        name: "anuj",
        email: "anuj@gmail.com",
      },
    };
  },
  methods: {
    getData() {
      console.log(this.email, this.password);
    },
    getUserData(data) {
      alert(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
