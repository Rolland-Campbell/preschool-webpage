<template>
  <div class="modal" :id="id" tabindex="-1" role="dialog">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title text-center">Admin Login</h4>
        <form>
          <div class="form-group">
            <label for="exampleInputName">Password Required</label>
            <input type="text" class="form-control" id="password" v-model="password" />
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
      password: ""
    };
  },
  computed: {},
  methods: {
    adminLogin() {
      this.$store.dispatch("adminLogin", this.password);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>