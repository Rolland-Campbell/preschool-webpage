<template>
  <div class="modal" :id="id" tabindex="-1" role="dialog">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title text-center">Admin Login</h4>
        <form>
          <div class="form-group">
            <label for="path">Password Required</label>
            <input type="text" class="form-control" id="path" v-model="path" />
            <label class="mt-3" for="name">User</label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="adminLogin()"
          data-dismiss="modal"
        >Verify</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "admin-modal",
  props: ["id"],
  data() {
    return {
      name: "",
      path: ""
    };
  },
  computed: {},
  methods: {
    adminLogin() {
      if (this.name == "Bud") {
        this.$store.dispatch("adminLogin", this.path);
      } else {
        alert("Sorry wrong login");
      }
      this.name = "";
      this.path = "";
    }
  },
  components: {}
};
</script>


<style scoped>
</style>