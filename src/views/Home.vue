<template>
  <div class="home container-fluid">
    <div class="row">
      <HomeCarousel />
    </div>
    <div class="row justify-content-center">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <div class="row justify-content-center">
      <h1>Welcome to the Treehouse Preschool</h1>
    </div>
    <div class="row justify-content-center">
      <h3>Thank you for vising our page.</h3>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "../components/Home-carousel";

export default {
  name: "home",
  components: {
    HomeCarousel
  }
};
</script>

<style scoped>
.home {
  background-color: cornflowerblue;
  height: 100%;
}
</style>