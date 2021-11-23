<template>
    <div id="nav"></div>
    <Header></Header>
    <router-view />
    <Footer></Footer>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
    name: "App",
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
#app {
    font-family: "PT Serif", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
body {
    padding: 0px;
    margin: 0px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
