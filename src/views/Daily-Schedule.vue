<template>
  <div class="daily-schedule container-fluid">
    <main class="row">
      <div class="col-md-3"></div>
      <div class="col-12 col-md-6">
        <DailyScheduleCarousel />
      </div>
      <div class="col-md-3"></div>
      <div class="col-8 offset-2 dailyText">
        <p>We use a play based curriculum that focuses on each students needs and developmental abilities.  In this sensory activity we are waking up the mind by touching and manipulating squishy spaghetti!  We are developing fine motor skills by using the tongs and working on our communication skills by working in a group.</p>
        
        <p><u><b>Class Size:</b></u></p>
        <p>Our class size is smaller than the recommended state standards. Our maximum enrollment for the center is 36 and we have four to five teachers each day.</p>
        <p><u><b>Hours:</b></u></p>
        <p>Monday-Friday 6:30am - 6:00 pm</p>
        <p>Yes! We accept ICCP</p>
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
</style>