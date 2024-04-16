const clock = document.getElementById('clock')
// or document.querySelector('#clock')

// Now we need a constantly changing digital clock
// let date = new Date();
// console.log(date.toLocaleTimeString())

// Now to let the method run continously after fixed periods of time, use:

// Syntax => setInterval(function() {}, time in ms)

setInterval(function() {
  let date = new Date();
  // console.log(date.toLocaleTimeString())

  // instead of updating the console, we update the DOM
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);


