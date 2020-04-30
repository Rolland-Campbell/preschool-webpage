<template>
  <div class="home container-fluid">
    <main class="row">
      <div class="col-md-3 owlStyle">
        <img src="../assets/redOwl2.png" alt="redowl" class="owlRed" />
      </div>
      <div class="col-12 col-md-6">
        <HomeCarousel class="homeCarousel" />
      </div>
      <div class="col-md-3">
      </div>
      <div class="col-md-2"></div>
      <div class="col-12 col-md-8 homeText">
        <h3 class="text-center">Welcome to the Tree House learning Center</h3>
        <p>Our program is based on current research and imperically tested teaching practices in Reggio Emillia. This is
          a city in Italy well-known for it's revolutionary ideas on how to help children reach their maximum potential.
          We present an inquiry based and student led curriculum that exceeds current state and federal education
          standards.</p>
        <p>Our goal is to exceed your expectations with our superior approach to teaching while giving your child the
          opportunity to be extraordinary.</p>
        <p>We offer full day and half day classes for children aged 3 months - 5 years. Read About our available classes
          here.</p>
        <p></p>
        <p>
          <u>
            <b>Class Size:</b>
          </u>
        </p>
        <p>Our class size is smaller than the recommended state standards. Our maximum enrollment for the center is 36
          and we have four to five teachers each day.</p>
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
    </main>
    <AdminModal id="admin-modal" />
  </div>
</template>

<script>
  import HomeCarousel from "../components/Home-carousel";
  import AdminModal from "../components/Admin-Modal";

  export default {
    name: "home",
    computed: {
      admin() {
        return this.$store.state.admin;
      }
    },
    components: {
      HomeCarousel,
      AdminModal
    }
  };
</script>

<style scoped>
  .home {
    background-color: cornflowerblue;
    min-height: 100%;
    background-image: url(../assets/clouds.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    overflow-y: auto;
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

  @media only screen and (max-width: 600px) {

    .owlStyle,
    .moveOwl,
    .littleOwl,
    .homeCarousel,
    .owlRed {
      display: none;
    }
  }

  .homeText {
    margin-top: 4vh;
    justify-content: center;
    align-self: center;
    color: black;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    z-index: 1;
  }

  @media only screen and (max-width: 600px) {

    .row,
    .homeText {
      background-image: none;
      background-color: cornflowerblue;
      color: white;
      text-shadow: 1px 1px black;
      text-align: center;
    }
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
    top: 145px;
    padding: 0px;
  }
</style>