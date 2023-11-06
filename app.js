new Vue({
  el: "#vue-app",
  data: {
    name: "Gabriel",
    job: "Ninja",
    website: "https://www.google.com",
    websiteTag: '<a href="https://www.google.com">Google Tag</a>',
    age: 23,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(timeOfDay) {
      return `Good ${timeOfDay}, ${this.name}`
    },
    add: function(inc) {
      this.age += inc
    },
    subtract: function(dec) {
      this.age -= dec
    },
    updateXY: function(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
})