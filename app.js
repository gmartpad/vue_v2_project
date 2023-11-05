new Vue({
  el: "#vue-app",
  data: {
    name: "Gabriel",
    job: "Ninja"
  },
  methods: {
    greet: function(timeOfDay) {
      return `Good ${timeOfDay}, ${this.name}`
    }
  }
})