<template>
  <div class="about">
    <main class="row">
      <div class="col-md-3"></div>
      <div class="col-12 col-md-6">
        <AboutCarousel />
      </div>
      <div class="col-md-3"></div>
      <div class="col-8 offset-2 aboutText mt-3">
        <p
          class="aboutIntro"
        >All of our classes have hands-on activities that are developmentally appropriate for each stage of your young child's life. Our specially trained teachers plan intentional activities each day designed to help your child grow socially and cognitively. Be sure to visit our Daily Schedule to get a great idea of what your child's day will look like.</p>

        <div id="accordion" class="cardBorder">
          <div class="card" data-toggle="collapse" data-target="#collapseOne">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <img src="../assets/sprout.png" class="icons" alt="sprout" />
                <button
                  class="btn btn-link"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >Sprouts (15 months - 2 years)</button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <p
                  class="collapseText"
                >As soon as your little Sprout starts walking they can move into one of our preschool classes. Once a child begins to walk they are developmentally ready to start learning a whole new set of skills. We make sure we do not miss this new window of development and allow them to participate in the Math/Science curriculum, Music and Dance class, and Art Room activities. During these classes your child will be exposed to many hands-on and sensory activities intentionally created to help your child grow physically, socially, and intellectually.</p>
              </div>
            </div>
          </div>
          <div class="card" data-toggle="collapse" data-target="#collapseTwo">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <img src="../assets/acorn.png" class="icons" alt="acorn" />
                <button
                  class="btn btn-link collapsed"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >Acorns (2 - 3 Year Old Preschool)</button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                <p
                  class="collapseText"
                >Our 2-3 Year Old Preschool class is offered Monday through Friday. The preschool class runs all day, but the morning time focuses on state education standards for parents who opt for the half day program. The curriculum for this class encorporates the performing and liberal arts. It is through these arts that your child will grow socially, physically, and intellectually. Your child will love the daily music and art time, as well as the hands-on science and math activities. We will be watching polywogs grow into frogs this fall and we look forward to hatching baby chicks in the spring!</p>
                <p
                  class="collapseText"
                >We keep the day interesting by moving to different rooms throughout the day. The children do not spend the bulk of their time in any one classroom.</p>
              </div>
            </div>
          </div>
          <div class="card" data-toggle="collapse" data-target="#collapseThree">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <img src="../assets/oak.png" class="icons" alt="oaks" />
                <button
                  class="btn btn-link collapsed"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >Oaks (Pre - Kindergarten)</button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                <p
                  class="collapseText"
                >This class will prepare your child for Kindergarten! We offer new and fun activites every day of the week. The class keeps your child busy all day long, but we focus on acedemics and Kindergarten readiness in the morning for children who only participate in the half day program. We follow the state standards to make sure each child will meet or exceed the expectations for Kindergarten. Your child will spend time each day focusing on early literacy skills, math/science experiments, music, and dance, as well as a myriad of other fun and developmentally appropriate activities. All classes have hands-on activities that keep the children engaged and intrigued.</p>
              </div>
            </div>
          </div>
        </div>
        <p class="m-4 aboutIntro">
          Visit our
          <router-link to="/daily-schedule" class="linkColor">
            <u>Daily Schedule</u>
          </router-link>to see what a typical day may look like for your child
        </p>
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
  min-height: 100vh;
  background-image: url(../assets/flowerBackground.jpg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}

.aboutText {
  justify-content: center;
  align-self: center;
  color: white;
}

.aboutIntro {
  background-color: pink;
  color: black;
  border-radius: 20px;
  padding: 15px;
}

.linkColor {
  color: black;
}

.icons {
  height: 100px;
  width: 100px;
}

.collapseText {
  color: black;
}

.cardBorder {
  border: 10px;
  border-style: solid;
  border-color: pink;
  border-radius: 20px;
}

.btn-link {
  color: black;
}
</style>