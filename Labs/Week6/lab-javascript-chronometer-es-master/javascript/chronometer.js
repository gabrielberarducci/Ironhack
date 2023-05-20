class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = null;
  }

  start() {
    this.intervalID = setInterval(() => {
      this.currentTime += 1;
      console.log(this.currentTime);}, 1000);
      return this.intervalID;
  }

  getMinutes() {
    return Math.floor((this.currentTime) / 60);
  }

  getSeconds() {
    return ((this.currentTime) % 60);
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalID);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

let crono = new Chronometer();
crono.start();
console.log(crono.getMinutes());