<template>
  <div class="home container-fluid">
    <main class="row">
      <div class="col-12 col-md-3"></div>
      <div class="col-12 col-md-6">
        <HomeCarousel />
      </div>
      <div class="col-12 col-md-3"></div>
      <div class="col-8 offset-2 homeText mt-4">
        <p>Our program is based on current research and imperically tested teaching practices in Reggio Emillia. This is a city in Italy well-known for it's revolutionary ideas on how to help children reach their maximum potential. We present an inquiry based and student led curriculum that exceeds current state and federal education standards.</p>
        <p>Our goal is to exceed your expectations with our superior approach to teaching while giving your child the opportunity to be extraordinary.</p>
        <p>We offer full day and half day classes for children aged 3 months - 5 years. Read About our available classes here.</p>
        <p></p>
        <p>
          <u>
            <b>Class Size:</b>
          </u>
        </p>
        <p>Our class size is smaller than the recommended state standards. Our maximum enrollment for the center is 36 and we have four to five teachers each day.</p>
        <p>
          <u>
            <b>Hours:</b>
          </u>
        </p>
        <p>Monday-Friday 6:30am - 6:00 pm</p>
        <p>Yes! We accept ICCP</p>
      </div>
      <div class="col-12 toe"></div>
    </main>
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
  background-image: url(../assets/owlbackground.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.homeText {
  justify-content: center;
  align-self: center;
  color: black;
  background-color: cornflowerblue;
  border-radius: 20px;
  padding: 20px;
}

.toe {
  height: 10vh;
}
</style>