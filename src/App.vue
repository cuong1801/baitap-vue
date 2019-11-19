<template>
  <div id="app">
    <div>
      <h1>QUẢN LÝ NHÂN VIÊN</h1>
    </div>
    <router-view/>
    <router-link tag="a" class="nav-link" :to="{path: '/employee2'}">Cách 2</router-link>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import EmployeeApp2 from "@/components/EmployeeApp2.vue";

export default {
  name: 'App',
  components: {
    EmployeeApp2
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
