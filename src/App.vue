<template>
  <div id="app container-fluid">
    <div class="row">
      <div class="col-12 col-md-3 logoCol">
        <router-link to="/">
          <img src="./assets/Treehouselogo.png" class="logo" alt="..." />
        </router-link>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About Our Classes</router-link>
            <router-link to="/parentHandbook">Parent Handbook</router-link>
            <router-link to="/daily-schedule">Daily Schedule</router-link>
            <router-link to="/rates">Rates</router-link>
            <router-link to="/contact">Contact Us</router-link>
            <router-link to="/staff">Our Staff</router-link>
            <button class="btn btn-primary m-2" data-toggle="modal" data-target="#tour-modal">Request a Tour</button>
          </ul>
        </div>
      </nav>

      <router-view />
    </div>
    <TourModal id="tour-modal" />
  </div>
</template>

<script>
  import TourModal from "./components/Tour-Modal";
  export default {
    name: "app",
    data() {
      return {};
    },
    computed: {},
    methods: {},
    components: { TourModal }
  };
</script>

<style>
  .app {
    min-height: 100vh;
  }

  .navbar-nav>a {
    padding: 20px;
    color: black;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    justify-content: space-between;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .logo {
    height: 150px;
    width: 300px;
  }

  .logoCol {
    display: flex;
    padding: 3px;
    justify-content: center;
  }

  .navCol {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: medium;
    overflow: auto;
  }
</style>