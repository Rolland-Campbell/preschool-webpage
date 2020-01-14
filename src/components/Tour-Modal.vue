<template>
  <div class="modal" :id="id" tabindex="-1" role="dialog">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title text-center">Request a Tour</h4>
        <form>
          <div class="form-group">
            <label for="exampleInputName">Tell us who you are</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Full Name"
              v-model="templateParams.name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="templateParams.email"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputChildsName">What is your child's name?</label>
            <input
              type="text"
              class="form-control"
              id="kidsName"
              placeholder="Child's Name"
              v-model="templateParams.child"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputChildsName">Enter a number we can contact you with</label>
            <input
              type="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              class="form-control"
              id="tel"
              maxlength="12"
              placeholder="Phone Number 123-456-7890"
              v-model="templateParams.phone"
            />
            <label for="start" class="mt-4 mr-4">What day works for you?</label>
            <input
              type="date"
              id="start"
              name="trip-start"
              min="2020-01-01"
              max="2030-12-31"
              v-model="templateParams.date"
            />
            <br />
            <label class="mt-4 mr-4" for="appt">Choose a time that works for you</label>
            <input
              type="time"
              id="appt"
              name="appt"
              min="08:00"
              max="18:00"
              v-model="templateParams.time"
            />
            <br />
            <small>Nap time is from 12 - 3. Please choose a time before or after.</small>
          </div>
        </form>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="requestTour()"
            data-dismiss="modal"
          >Send Request</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "tour-modal",
  props: ["id"],
  data() {
    return {
      templateParams: {}
    };
  },
  computed: {},
  methods: {
    requestTour() {
      emailjs.send("gmail", "template_xaCzjuqB", this.templateParams).then(
        function(response) {
          alert("SUCCESS! Email sent", response.status, response.text);
        },
        function(error) {
          alert("FAILED...", error);
        }
      );
    }
  },
  components: {}
};
</script>


<style scoped>
</style>