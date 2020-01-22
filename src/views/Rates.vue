<template>
  <main class="rates container-fluid">
    <div class="row">
      <div class="col-12 col-md-4">
        <img src="../assets/preschoolcartoon.jpg" class="kids" />
      </div>
      <div class="col-12 col-md-8 ratesText">
        <p>
          <u>
            <b>Rates</b>
          </u>
        </p>
        <p>Our classes are full of acedemic and engaging activities Monday through Friday. We offer a full-day, year round preschool program. Our curriculum focuses on state education standards from 9 am- 12 pm in order to ensure success for students who only participate in the half day program.</p>
        <p>Parents who only need part-time care or wish only to participate in the half-day preschool program may choose the days of the week that work best for their family (please call to reserve your days). Our preschool and pre-K classes run year round, 5-days each week.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 mt-5">
        <table class="table ratesText">
          <thead>
            <tr>
              <th scope="col">Class Name</th>
              <th scope="col">Monthly (Full Time)</th>
              <th scope="col">Daily Rate</th>
              <th scope="col">Preschool Only (9:00 am - 12:00 pm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sprouts</th>
              <td>$500 / month</td>
              <td>$25 / day</td>
              <td>$15 / day</td>
            </tr>
            <tr>
              <th scope="row">Acorns</th>
              <td>$500 / month</td>
              <td>$25 / day</td>
              <td>$15 / day</td>
            </tr>
            <tr>
              <th scope="row">Oaks</th>
              <td>$500 / month</td>
              <td>$25 / day</td>
              <td>$15 / day</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row bottomRow">
      <div class="col-12 col-md-8 mt-5 text-center">
        <p>Sprouts (2-3 Year Old Preschool)</p>
        <p>Acorns (3 months- 2 years)</p>
        <p>Oaks (Pre-Kindergarten)</p>
      </div>
      <div class="col-12 col-md-4 text-center">
        <img src="../assets/owlMoon.jpg" class="bottomOwl" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "rates",
  components: {}
};
</script>

<style scoped>
.rates {
  background-color: white;
  min-height: 100vh;
}

.ratesText {
  justify-content: center;
  align-self: center;
  color: black;
  padding: 40px;
}

.kids {
  height: 100%;
  width: 100%;
}

.bottomOwl {
  height: 200px;
  width: 200px;
  border-radius: 50%;
}
</style>