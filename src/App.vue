<template>
  <div id="app container-fluid">
    <div class="row">
      <div class="col-12 col-md-3 logoCol">
      <router-link to="/"><img src="./assets/Treehouselogo.png" class="logo" alt="..." />
</router-link>
      </div>
      <div class="col-12 col-md-9 navCol" id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About Our Classes</router-link>|
        <router-link to="/parentHandbook">Parent Handbook</router-link>|
        <router-link to="/daily-schedule">Daily Schedule</router-link>|
        <router-link to="/rates">Rates</router-link>|
        <router-link to="/contact">Contact Us</router-link>|
        <router-link to="/meetUs">Our Staff</router-link>
        
      </div>
      <router-view />
    </div>
  </div>
</template>

<style>
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
