<template>
  <div class="meetUs container-fluid">
    <main class="row">
      <div class="col-8 offset-2 meetText">
        <div class="row">
          <div class="col-12">
            <!-- top card -->
            <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/Tana.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Tana Campbell</h5>
                    <p class="card-text">Owner / Operator</p>
                    <p>Hi!  My name is Tana Campbell and I am the owner and director of The TreeHouse.  Opening this preschool has been a vision of mine for a long time.  I am dedicated to making your child's time at preschool be one of the best experiences of their lives.  I have dedicated all of my time to creating exciting activities for your child to participate in all day long.  It is my mission to make them feel safe and loved each day that they are in my care.</p>
                    <p>I have earned a Masters Degree in Early Childhood Special Education and a Bachelor of Arts in Accountancy- Both from Boise State.  Go Broncos!</p>
                    <p>My husband, Rolland, and I have three children.  Natasha, Kennedy, and Titan.  We have lived in Idaho all of our lives. Our immediate family lives very close to us and we are blessed to see them on a regular basis. We are active members in our community and in our church.</p>
                    <p>I look forward to meeting you soon!</p>
                    <p>Sincerely,</p>
                    <p>Tana Campbell</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
          <!-- card 2 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/michelle.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Michelle Metcalf Flennoy</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Michelle ... </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
          <!-- card 3 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/Tari.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Tari White</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Tari..</p>
                  </div>
                </div>
              </div>
            </div>
          <!-- card 4 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/Briona.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Briona Flennoy</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Briona..</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- card 5 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/Aryka.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Aryka Flennoy</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Aryka..</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- card 6 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/teacherNone.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Kobe</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Kobe..</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- card 7 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/teacherNone.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Miah</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Miah..</p>
                  </div>
                </div>
              </div>
            </div>
             <!-- card 8 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/teacherNone.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Ashley</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Ashley..</p>
                  </div>
                </div>
              </div>
            </div>
             <!-- card 9 -->
          <div class="card mb-3">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="../assets/teacherNone.png" class="card-img" alt="owner pic">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Britney</h5>
                    <p class="card-text">Teacher</p>
                    <p>Hi, I am Britney..</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- add card above here -->
          </div>
          </div>
        </div>
    </main>
  </div>
</template>

<script>

export default {
  name: "meetUs",
  components: {}
};
</script>

<style scoped>
.meetUs {
  background-color: cornflowerblue;
  height: 100%;
}

.meetText {
  justify-content: center;
  align-self: center;
  color: white;
  padding-top: 10px
}

.card-img {
  height: 100%;
  width: 100%
}

.card-body {
  color: black;
}

p {
  font-size: 12px;
}
</style>