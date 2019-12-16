<template>
  <div class="about">
  <main class="row">
      <div class="col-md-3"></div>
      <div class="col-12 col-md-6">
        <AboutCarousel />
      </div>
      <div class="col-md-3"></div>
      <div class="col-8 offset-2 aboutText">
        <p>All of our classes have hands-on activities that are developmentally appropriate for each stage of your young child's life.  Our specially trained teachers plan intentional activities each day designed to help your child grow socially and cognitively.  Be sure to visit our Daily Schedule to get a great idea of what your child's day will look like.</p>

        <p><b><u>Sprouts (15 months - 2 Years</u></b></p>
        <p>As soon as your little Sprout starts walking they can move into one of our preschool classes. Once a child begins to walk they are developmentally ready to start learning a whole new set of skills.  We make sure we do not miss this new window of development and allow them to participate in the Math/Science curriculum, Music and Dance class, and Art Room activities.  During these classes your child will be exposed to many hands-on and sensory activities intentionally created to help your child grow physically, socially, and intellectually. </p>

        <p><b><u>Acorns (2 - 3 Year Old Preschool)</u></b></p>
        <p>Our 2-3 Year Old Preschool class is offered Monday through Friday.  The preschool class runs all day, but the morning time focuses on state education standards for parents who opt for the half day program.  The curriculum for this class encorporates the performing and liberal arts.  It is through these arts that your child will grow socially, physically, and intellectually.  Your child will love the daily music and art time, as well as the hands-on science and math activities.  We will be watching polywogs grow into frogs this fall and we look forward to hatching baby chicks in the spring!</p>
        <p>We keep the day interesting by moving to different rooms throughout the day.  The children do not spend the bulk of their time in any one classroom.</p>

        <p><b><u>Oaks (Pre - Kindergarten)</u></b></p>
        <p>This class will prepare your child for Kindergarten!  We offer new and fun activites every day of the week.  The class keeps your child busy all day long, but we focus on acedemics and Kindergarten readiness in the morning for children who only participate in the half day program.  We follow the state standards to make sure each child will meet or exceed the expectations for Kindergarten.  Your child will spend time each day focusing on early literacy skills, math/science experiments, music, and dance, as well as a myriad of other fun and developmentally appropriate activities.  All classes have hands-on activities that keep the children engaged and intrigued. </p>

        <p>Visit our Daily Schedule to see what a typical day may look like for your child</p>
      </div>
    </main>
  </div>
</template>

<script>
import AboutCarousel from "../components/About-carousel";

export default {
  name: "about",
  components: {
    AboutCarousel
  }
};
</script>

<style scoped>
.about {
  background-color: cornflowerblue;
  height: 100%;
}

.aboutText {
  justify-content: center;
  align-self: center;
  color: white;
}
</style>