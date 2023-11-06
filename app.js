new Vue({
  el: "#vue-app",
  data: {
    name: "Gabriel",
    job: "Ninja",
    website: "https://www.google.com",
    websiteTag: '<a href="https://www.google.com">Google Tag</a>'
  },
  methods: {
    greet: function(timeOfDay) {
      return `Good ${timeOfDay}, ${this.name}`
    }
  }
})