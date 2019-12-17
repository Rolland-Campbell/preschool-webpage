<template>
  <div class="contact container-fluid">
    <main class="row">
      <div class="col-md-3"></div>
      <div class="col-8 offset-2 contactText">
        <img src="../assets/preschool.png" alt="preschool" class="preschoolPic">
        <img src="../assets/map.png" alt="map" class="mapPic">
        <p><u><b>Mailing Address</b></u></p>
        <p>1831 E Overland Rd. Meridian, ID. 83642</p>
        <p><u><b>Email Address:</b></u></p>
        <p>tana@thetreehousepreschool.com</p>
        <p><u><b>Telephone Number</b></u></p>
        <p>(208)895-7964</p>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "contact",
  components: {}
};
</script>

<style scoped>
.contact {
  background-color: cornflowerblue;
  height: 100%;
}

.contactText {
  justify-content: center;
  align-self: center;
  color: white;
  padding-top: 20px;
}

.preschoolPic {
  height: 400px;
  width: 800px;
  padding: 5px;
}
.mapPic{
  height: 400px;
  width: 800px;
  padding: 5px;
}
</style>