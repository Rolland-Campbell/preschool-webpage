<template>
  <main class="parentHandbook container-fluid">
    <div class="row">
      <div class="col-md-2 owlAdj">
        <img src="../assets/owl2.png" class="owlPic" />
      </div>
      <div class="col-12 col-md-8 handbookText">
        <p>
          <u>
            <b>Hours of Operation</b>
          </u>
        </p>
        <p>Monday thru Friday 6:30 am – 6:00 pm</p>
        <p>
          <u>
            <b>Scheduled Holiday Closures:</b>
          </u>
        </p>
        <p>New Years Day, Memorial Day, 4th of July, Labor Day, Thanksgiving Day and the Friday after, Christmas Eve,
          and Christmas Day.</p>
      </div>
    </div>
    <div class="row">
      <div id="accordion" class="col-12 col-md-8 offset-md-2">
        <div class="card">
          <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
            <h5>
              <button class="btn btn-link">
                <h4 class="heading">Parent Communication</h4>
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <p>Our goal is to create open lines of communication right from the beginning. Please tell us everything
                you can think of that will help your child thrive at The TreeHouse. We want to hear your comments and
                concerns, and promise to use your thoughts to help us create a more perfect atmosphere for everyone at
                the center. Children 12 months and under will go home each day with a note outlining their day including
                daily activities, temperament, and food ins and outs.</p>
              <p>Please let us know if there are major events occurring in the family, such as a sudden death in the
                family, divorce, or moving, as these events often result in a different temperament in your child.
                Sometimes this can be a very scary (or exciting) time for your child; our staff is trained in helping
                children express these emotions in socially acceptable ways without even mentioning the event.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Check In / Check Out:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              <p>Please check your child in and out at the computer each day and then make sure that your child’s
                teacher is aware of their arrival. Please notify us each time someone other than the child’s legal
                guardians will be picking them up. If we do not have prior notification, we will not release the child
                to them. Remind that person to bring identification with them.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Billing Policies:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
              <p>Tuition will be billed every two weeks on Monday. Payment is due on or before the Monday that the
                billing is processed. You may pay for more than two weeks at a time, or you may sign up for Automatic
                Withdrawal to make paying on time easier. A $10 late charge will be added to your bill if your payment
                is not made on time. You will be required to sign up for Auto Pay if you are late with your payment 3
                times in one year.</p>
              <router-link to="/rates" class="linkColor">
                Here is a link to the current
                <u>Rates</u>
              </router-link>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Positive Behavior System (PBS):</h4>
              </button>
            </h5>
          </div>
          <div id="collapseFour" class="collapse">
            <div class="card-body">
              <p>A trained staff member will handle all behavior concerns. If a minor issue occurs the trained staff
                member (not the teacher in charge of the class) will join the child and review rules and expectations
                for the school. If behaviors continue a PBS plan will be created specifically for that child. Parents
                will be involved in all aspects of the PBS plan. We do not send children to “time out” unless it is
                preplanned as part of their PBS plan as we do not feel it is an effective way to teach young children
                appropriate ways to communicate and socialize. We always look for alternative ways to say, “No.” We do
                this by offering choices and turning what they want to do into an acceptable activity. We pride
                ourselves on having open lines of communication between parents and teachers, so please don’t hesitate
                to talk to us regarding any concerns or comments you have.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingFive" data-toggle="collapse" data-target="#collapseFive">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Sick Child Policy:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseFive" class="collapse">
            <div class="card-body">
              <p>Under no circumstances may a parent bring a sick child to the TreeHouse. Idaho State law requires that
                a child be removed from the learning center if a child shows the following signs of illness:</p>
              <dl>
                <li>Diarrhea</li>
                <li>Vomiting 2 or more times within a 24 hour period. (Please do not bring your child to the center if
                  they have vomited during the night.)</li>
              </dl>
              <p>We make every effort to keep all of our surfaces cleaned and sanitized and we have a regular routine
                for washing hands and keeping noses clean. You can help us keep illnesses out of the TreeHouse too by
                not bringing your child to the center when they are sick.</p>
              <p>Please inform us in writing of any medication that the child needs to take during the day. Forms will
                be available at the front desk. Please give the note and medication to a staff member, do not leave it
                in the child’s bag or backpack.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingSix" data-toggle="collapse" data-target="#collapseSix">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Meals:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseSix" class="collapse">
            <div class="card-body">
              <p>We offer breakfast, lunch and two snacks during the day.</p>
              <p>Breakfast will be served between 8am and 9am.</p>
              <p>We will let you know if your child doesn’t eat a specified food particularly well, you may send
                something from home for them to eat on those days. If your child has a lot of dietary restrictions we’ll
                need you to bring a lunch and snack for them daily.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingSeven" data-toggle="collapse" data-target="#collapseSeven">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Vacation:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseSeven" class="collapse">
            <div class="card-body">
              <p>Families are charged a daily rate of $25. You are welcome to take vacations through out the year, just
                add up the number of days your child will be in our care and multiply by $25.</p>
              <p>We do not offer credits for unexpected absences or absences due to illness.</p>
            </div>
          </div>
        </div>
        <!-- new card -->
        <div class="card mt-2">
          <div class="card-header" id="headingEight" data-toggle="collapse" data-target="#collapseEight">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Personal Belongings:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseEight" class="collapse">
            <div class="card-body">
              <p>Please label all personal belongings including jackets, gloves, and hats. We ask that your child not
                bring toys or special items to school due to the fact that the child often feels territorial over them
                and to keep them from getting lost or broken. Your teacher will notify you about special share days.</p>
              <p>Please label all bottles, milk, sippy cups, and extra clothing.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2">
          <div class="card-header" id="headingNine" data-toggle="collapse" data-target="#collapseNine">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Infants and Toddlers:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseNine" class="collapse">
            <div class="card-body text-left">
              <dt>Please bring</dt>
              <li>Large sleeve of diapers (you will be notified when the diapers are running low)</li>
              <li>Several changes of clothing</li>
              <li>Bottle and/or sippy cup that can stay at the center</li>
              <li>Diaper rash cream</li>
              <li>Blanket that can stay all week, we will send it home on Friday</li>
              <br />
              <p class="text-center">You do not need to bring a diaper bag each day since we will have everything we
                need stored at the center.</p>
            </div>
          </div>
        </div>
        <!-- new card -->

        <div class="card mt-2 mb-5">
          <div class="card-header" id="headingTen" data-toggle="collapse" data-target="#collapseTen">
            <h5>
              <button class="btn btn-link collapsed">
                <h4 class="heading">Field Trips:</h4>
              </button>
            </h5>
          </div>
          <div id="collapseTen" class="collapse">
            <div class="card-body">
              <p>Students going into Kindergarten through the 4th grade may participate in summer field trips. A
                calendar of summer events with pricing for each trip will be provided in May.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "parentHandbook",
    components: {}
  };
</script>

<style scoped>
  .parentHandbook {
    background-color: cornflowerblue;
    min-height: 100vh;
    background-image: url(../assets/bubbles.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  #accordion {
    margin-top: 3vh;
    padding: 0px;
  }

  .handbookText {
    margin-top: 3vh;
    background-color: white;
    border-radius: 20px;
    justify-content: center;
    align-self: center;
    color: black;
    padding-top: 10px;
  }

  @media only screen and (max-width: 600px) {
    .handbookText {
      margin-top: 3vh;
      border-radius: 0px;
      text-align: center;
    }
  }

  .btn-link {
    color: black;
  }

  .owlPic {
    height: 100px;
    width: 100px;
    transform: rotate(120deg);
  }

  .card {
    text-align: center;
  }

  .owlAdj {
    margin-left: -15px;
  }
</style>