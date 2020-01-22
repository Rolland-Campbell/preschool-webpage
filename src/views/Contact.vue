<template>
  <main class="contact container-fluid">
    <div class="row">
      <div class="col-12 contactText">
        <img src="../assets/preschool.png" alt="preschool" />
        <img src="../assets/map.png" alt="map" />
        <p>
          <u>
            <b>Mailing Address</b>
          </u>
        </p>
        <p>1831 E Overland Rd. Meridian, ID. 83642</p>
        <br />
        <p>
          <u>
            <b>Email Address:</b>
          </u>
        </p>
        <a href="mailto:tana@thetreehousepreschool.com">tana@thetreehousepreschool.com</a>
        <p>
          <br />
          <u>
            <b>Telephone Number</b>
          </u>
        </p>
        <p>(208)895-7964</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "contact",
  components: {}
};
</script>

<style scoped>
a {
  color: white;
}

.contact {
  background-color: cornflowerblue;
  min-height: 100vh;
}

.contactText {
  text-align: center;
  color: white;
  padding-top: 20px;
}

img {
  height: 300px;
  max-width: 100%;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
}
</style>