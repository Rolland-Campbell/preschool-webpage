<template>
  <div class="staffPage container-fluid">
    <div class="row">
      <!-- Tana -->
      <div class="cards col-md-4">
        <img src="../assets/tana2.jpg" alt="">
        <h5>Tana Campbell</h5>
        <p>Director</p>
      </div>
      <!-- Michelle -->
      <div class="cards col-md-4">
        <img src="../assets/michelle2.jpg" alt="">
        <h5>Michelle Metcalf Flennoy</h5>
        <p>Manager</p>
      </div>
      <!-- Teri -->
      <div class="cards col-md-4">
        <img src="../assets/terri2.jpg" alt="">
        <h5>Tari White</h5>
        <p>Teacher</p>
      </div>
      <!-- Briona -->
      <div class="cards col-md-4">
        <img src="../assets/Briona.png" alt="">
        <h5>Briona Flennoy</h5>
        <p>Teacher</p>
      </div>
      <!-- Aryka -->
      <div class="cards col-md-4">
        <img src="../assets/Aryka.png" alt="">
        <h5>Aryka Flennoy</h5>
        <p>Teacher</p>
      </div>
      <!-- Kobe -->
      <div class="cards col-md-4">
        <img src="../assets/teacherNone.png" alt="">
        <h5>Kobe</h5>
        <p>Teacher</p>
      </div>
      <!-- Miah -->
      <div class="cards col-md-4">
        <img src="../assets/teacherNone.png" alt="">
        <h5>Miah</h5>
        <p>Teacher</p>
      </div>
      <!-- Ashley -->
      <div class="cards col-md-4">
        <img src="../assets/ashley2.jpg" alt="">
        <h5>Ashley</h5>
        <p>Teacher</p>
      </div>
      <!-- Britney -->
      <div class="cards col-md-4">
        <img src="../assets/Brittney2.jpg" alt="">
        <h5>Britney</h5>
        <p>Teacher</p>
      </div>
      <!-- New teacher here -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'staff',
  };
</script>
<style scoped>
  .staffPage {
    background-color: cornflowerblue;
    min-height: 100vh;
  }

  .cards {
    display: grid;
    justify-items: center;
    color: white;
    text-shadow: 1px 1px black;
  }

  img {
    margin: 10px;
    height: 30vh;
    width: 40%;
    border-radius: 30px;
    border: 3px solid;
    border-color: white;
  }
</style>