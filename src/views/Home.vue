<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 col-md-4">
        <HomeCarousel />
      </div>
      <div class="col-12 col-md-8 introText">
        <p
          class="text-white p-3"
        >Welcome to the Treehouse Learning Center! We have a nuturing and loving environment provided for your child. We look forward to spending time with your child. Our curriculm is setup to get them be prepared for their journey of today's education system. We pride ourselves in giving our students a rich education in a carefree loving space.</p>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCarousel from "../components/Home-carousel";

export default {
  name: "home",
  components: {
    HomeCarousel
  }
};
</script>

<style scoped>
.home {
  background-color: cornflowerblue;
  height: 100%;
}

.introText {
  justify-content: center;
  align-self: center;
}
</style>