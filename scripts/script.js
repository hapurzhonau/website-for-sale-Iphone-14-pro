const timer = document.querySelector(".timer");
let min = 59;
let sec = 59;
let timerId = setInterval(() => {
  z();
}, 1000);
function z() {
  sec--;
  if (sec == 0 && min != 0) {
    min--;
    sec = 59;
  }
  if (min == 0 && sec == 0) {
    clearInterval(timerId);
  }
  timer.textContent = `${min}m:${sec}s`;
}
