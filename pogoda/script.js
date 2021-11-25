let min = -50;
let max = 60;
let timerId;
let weatherNow = document.querySelector(".weatherNow");
let startRandom = document.querySelector(".startRandom");
function start() {
  timerId = setInterval(function randTemperature() {
    weatherNow.textContent = Math.floor(
      (rand = min + Math.random() * (max + 1 - min))
    );
  }, 2000);
  function stop() {
    clearInterval(timerId);
  }
  stopRandom.addEventListener("click", stop);
}
startRandom.addEventListener("click", start);
let stopRandom = document.querySelector(".stopRandom");

