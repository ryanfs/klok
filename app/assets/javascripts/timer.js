// this one is a little buggy but implements the minutes
// https://codepen.io/_Billy_Brown/pen/dbJeh

window.onload = function () {
  // momentjs stuff
  let timestrings = document.getElementsByClassName("timestring");
  for (let element of timestrings) {
      element.textContent = moment(element.textContent).format('lll');
  }

//via https://codepen.io/cathydutton/pen/GBcvo

  let seconds = 00;
  let tens = 00;
  let minutes = 00;
  let appendTens = document.getElementById("tens")
  let appendSeconds = document.getElementById("seconds")
  let appendMinutes = document.getElementById("minutes")
  let buttonStart = document.querySelector('[data-clock="start"]')
  let buttonStop = document.querySelector('[data-clock="stop"]')
  // let buttonReset = document.getElementById('button-reset');
  let Interval ;

  buttonStart.onclick = function(event) {
    event.preventDefault();
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    let hiddenStartTimeInput = document.querySelector('[data-startinput="hidden"]');
    let stopClockButton = document.querySelector('[data-clock="stop"]')
    let startClockButton = document.querySelector('[data-clock="start"]')
    hiddenStartTimeInput.value = new Date;
    stopClockButton.classList.remove("hidden");
    startClockButton.classList.add("hidden");
  }

  buttonStop.onclick = function() {
    clearInterval(Interval);
  }

  // buttonReset.onclick = function() {
  //   clearInterval(Interval);
  //   tens = "00";
  //   seconds = "00";
  //   appendTens.innerHTML = tens;
  //   appendSeconds.innerHTML = seconds;
  // }

  function startTimer () {
    tens++;

    if (tens < 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("tick");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + seconds;
    }

    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }
  }

}
