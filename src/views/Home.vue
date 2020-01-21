<template>
  <div class="home container-fluid">
    <main class="row">
      <div class="col-md-3 owlStyle">
        <img src="/site-pictures/redOwl2.png" alt="redowl" class="owlRed" />
      </div>
      <div class="col-12 col-md-6">
        <HomeCarousel />
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-2"></div>
      <div class="col-12 col-md-8 homeText mt-4 carouselIndex">
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
      <div class="col-md-2 moveOwl">
        <img src="../assets/littleowl.png" class="littleOwl" alt="owl" />
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
  background-image: url(../assets/clouds.jpg);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.owlRed {
  height: 300px;
  width: 300px;
}

.owlStyle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.homeText {
  justify-content: center;
  align-self: center;
  color: black;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
}

.carouselIndex {
  z-index: 1;
}

.littleOwl {
  margin-top: 100px;
  height: 200px;
  width: 200px;
  transform: rotate(90deg);
}

.moveOwl {
  margin-left: -90px;
  z-index: 0;
}

.toe {
  height: 10vh;
}
</style>