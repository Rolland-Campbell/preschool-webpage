<template>
  <div class="home-carousel mt-3">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/Valteach.png" class="d-block photos" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/noodles.png" class="d-block photos" alt="classroom" />
        </div>
        <div class="carousel-item">
          <img src="../assets/playingblocks.png" class="d-block photos" alt="..." />
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
  name: "home-carousel",
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
  border-radius: 15px;
  height: 400px;
  width: 100%;
}

.home-carousel {
  border: 6px;
  border-color: white;
  border-style: solid;
  border-radius: 20px;
}
</style>