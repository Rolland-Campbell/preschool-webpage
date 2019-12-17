<template>
  <div class="rates container-fluid">
    <main class="row">
      <div class="col-md-3"></div>
      <div class="col-8 offset-2 ratesText">
        <p><u><b>Rates</b></u></p>
        <p>Our classes are full of acedemic and engaging activities Monday through Friday.  We offer a full-day, year round preschool program. Our curriculum focuses on state education standards from 9 am- 12 pm in order to ensure success for students who only participate in the half day program.</p>
        <p>Parents who only need part-time care or wish only to participate in the half-day preschool program may choose the days of the week that work best for their family (please call to reserve your days).  Our preschool and pre-K classes run year round, 5-days each week.</p>
      </div>
    <div class="col-10 offset-1">
        <table class="table">
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
<div class="col-12 text-white text-center">
<p>Sprouts (2-3 Year Old Preschool)</p>
<p>Acorns (3 months- 2 years)</p>
<p>Oaks (Pre-Kindergarten)</p>
</div>
<div class="row toe"></div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "rates",
  components: {}
};
</script>

<style scoped>
.rates {
  background-color: cornflowerblue;
  height: 100%
}

.ratesText {
  justify-content: center;
  align-self: center;
  color: white;
  padding-top: 10px;
}

.toe {
  height: 40vh
}
</style>