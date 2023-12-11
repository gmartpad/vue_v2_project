Vue.component("greeting", {
  template: "<p>Hey there, I am a {{ name }}. <button v-on:click='changeName'>Change name</button></p>",
  data: function() {
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'Mario'
    }
  }
})

var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One",
    name: "Gabriel",
    job: "Ninja",
    website: "https://www.google.com",
    websiteTag: '<a href="https://www.google.com">Google Tag</a>',
    age: 23,
    x: 0,
    y: 0,
    keyboardName: '',
    keyboardAge: '',
    computedA: 0,
    computedB: 0,
    computedAge: 20,
    classAvailable: false,
    nearby: false,
    conditionalError: false,
    conditionalSuccess: false,
    loopCharacters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    loopNinjas: [
      { name: 'Ryu', age: 25 },
      { name: 'Yoshi', age: 35 },
      { name: 'Ken', age: 55 }
    ]
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
    },
    logName: function(event) {
      console.log('logName')
    },
    logAge: function(event) {
      console.log('logAge')
    }
  },
  computed: {
    addToA: function() {
      return this.computedA + this.computedAge
    },
    addToB: function() {
      return this.computedB + this.computedAge
    },
    compClasses: function() {
      return {
        available: this.classAvailable,
        nearby: this.nearby
      }
    },
    greetComputed: function() {
      return "This is from app one"
    }
  }
})

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
    output: "your fav food"
  },
  methods: {
    changeTitle: function() {
      one.title = "New One Title"
    },
    readRefs: function() {
      this.output = this.$refs.input.value
    }
  },
  computed: {
    greet: function() {
      return "This is from app two"
    }
  }
})

two.title = "Changed from outside"

