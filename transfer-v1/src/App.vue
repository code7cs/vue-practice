<template>
  <div id="app">
    <Home></Home>
    <Main></Main>
  </div>
</template>

<script>
import Home from "@/components/Home";
import Main from "@/components/Main";
export default {
  name: "app",
  components: {
    Home,
    Main
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
