<template>
  <div class="daily-schedule-carousel mt-4">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/noodles.png" class="d-block photos" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/playingblocks.png" class="d-block photos" alt="classroom" />
        </div>
        <div class="carousel-item">
          <img src="../assets/Valteach.png" class="d-block photos" alt="..." />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "daily-schedule-carousel",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.photos {
  height: 300px;
  width: 100%;
  border-radius: 15px;
}

.daily-schedule-carousel {
  border: 6px;
  border-color: white;
  border-style: solid;
  border-radius: 20px;
}
</style>