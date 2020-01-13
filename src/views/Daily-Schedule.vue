<template>
  <div class="daily-schedule container-fluid">
    <main class="row">
      <div class="col-md-3"></div>
      <div class="col-12 col-md-6 carouselIndex">
        <DailyScheduleCarousel />
      </div>
      <div class="col-md-3 moveOwl">
        <img src="../assets/littleowl.png" class="littleOwl" alt="owl" />
      </div>
      <div class="col-8 offset-2 dailyText mt-3">
        <p>We use a play based curriculum that focuses on each students needs and developmental abilities. In this sensory activity we are waking up the mind by touching and manipulating squishy spaghetti! We are developing fine motor skills by using the tongs and working on our communication skills by working in a group.</p>
      </div>
      <div class="col-10 offset-1">
        <table class="table tableText">
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Sprouts</th>
              <th scope="col">Acorns</th>
              <th scope="col">Oaks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">6:30 - 8:00 am</th>
              <td>Free Choice</td>
              <td>Free Choice</td>
              <td>Free Choice</td>
            </tr>
            <tr>
              <th scope="row">8:00 - 9:00 am</th>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
            </tr>
            <tr>
              <th scope="row">9:00 - 9:30 am</th>
              <td>Music</td>
              <td>Home Room Meeting - Early Literacy</td>
              <td>Home Room Meeting - Early Literacy</td>
            </tr>
            <tr>
              <th scope="row">9:30 - 10:00 am</th>
              <td>Art</td>
              <td>Music</td>
              <td>Science</td>
            </tr>
            <tr>
              <th scope="row">10:00 - 10:30 am</th>
              <td>Science / Math</td>
              <td>Art</td>
              <td>Music and Movement</td>
            </tr>
            <tr>
              <th scope="row">10:30 - 11:00 am</th>
              <td>Snack</td>
              <td>Science / Math</td>
              <td>Free Choice / Snack</td>
            </tr>
            <tr>
              <th scope="row">11:00 - 11:30 am</th>
              <td>Sensory</td>
              <td>Free Choice / Snack</td>
              <td>Math</td>
            </tr>
            <tr>
              <th scope="row">11:30 - 12:00 pm</th>
              <td>Dance</td>
              <td>Dramatic Play / Cooking (Alternating Days)</td>
              <td>Organized Physical Fitness</td>
            </tr>
            <tr>
              <th scope="row">12:00 - 12:30 pm</th>
              <td>Lunch / Free Choice</td>
              <td>Lunch / Free Choice</td>
              <td>Lunch / Free Choice</td>
            </tr>
            <tr>
              <th scope="row">12:30 - 1:00 pm</th>
              <td>Lunch / Free Choice</td>
              <td>Lunch / Free Choice</td>
              <td>Lunch / Free Choice</td>
            </tr>
            <tr>
              <th scope="row">1:00 - 1:30 pm</th>
              <td>Rest Time</td>
              <td>Rest Time / Story Time</td>
              <td>Rest Time</td>
            </tr>
            <tr>
              <th scope="row">1:30 - 2:00 pm</th>
              <td>Rest Time</td>
              <td>Rest Time</td>
              <td>Rest Time</td>
            </tr>
            <tr>
              <th scope="row">2:00 - 2:30 pm</th>
              <td>Rest Time</td>
              <td>Rest Time</td>
              <td>Rest Time</td>
            </tr>
            <tr>
              <th scope="row">2:30 - 3:00 pm</th>
              <td>Rest Time</td>
              <td>Rest Time</td>
              <td>Early Literacy</td>
            </tr>
            <tr>
              <th scope="row">3:00 - 3:30 pm</th>
              <td>Organized Physical Fitness</td>
              <td>Dance</td>
              <td>Dramatic Play / Cooking (Alternating Days)</td>
            </tr>
            <tr>
              <th scope="row">3:30 - 4:00 pm</th>
              <td>Snack / Free Choice</td>
              <td>Snack / Free Choice</td>
              <td>Snack / Free Choice</td>
            </tr>
            <tr>
              <th scope="row">4:30 - 5:00 pm</th>
              <td>Dance</td>
              <td>Sensory</td>
              <td>Art</td>
            </tr>
            <tr>
              <th scope="row">5:00 - 5:30 pm</th>
              <td>Free Choice</td>
              <td>Free Choice</td>
              <td>Free Choice</td>
            </tr>
            <tr>
              <th scope="row">5:30 - 6:00 pm</th>
              <td>Free Choice</td>
              <td>Free Choice</td>
              <td>Free Choice</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import DailyScheduleCarousel from "../components/Daily-schedule-carousel";

export default {
  name: "daily-schedule",
  components: {
    DailyScheduleCarousel
  }
};
</script>

<style scoped>
.daily-schedule {
  background-color: cornflowerblue;
  height: 100%;
}

.dailyText {
  justify-content: center;
  align-self: center;
  color: white;
}

.tableText {
  color: white;
}

.littleOwl {
  margin-top: 100px;
  height: 200px;
  width: 200px;
  transform: rotate(45deg);
}

.moveOwl {
  margin-left: -70px;
  z-index: 0;
}

.carouselIndex {
  z-index: 1;
}
</style>