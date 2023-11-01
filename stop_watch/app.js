let time = 0;
let running = false;
let timeInterval;

const hrs = document.querySelector(".hr");
const mins = document.querySelector(".min");
const secs = document.querySelector(".sec");

const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");

const updateDisplay = () => {
  const sec = time % 60;
  const min = Math.floor((time / 60) % 60);
  const hr = Math.floor(time / 3600);
  secs.innerHTML = sec < 10 ? `0${sec}` : sec;
  mins.innerHTML = min < 10 ? `0${min}` : min;
  hrs.innerHTML = hr < 10 ? `0${hr}` : hr;
};

const increaseTime = () => {
  time += 1;
  updateDisplay();
};

startBtn.addEventListener("click", () => {
  if (!running) {
    startBtn.innerHTML = "Stop";
    running = true;
    timeInterval = setInterval(increaseTime, 1000);
  } else {
    startBtn.innerHTML = "Resume";
    running = false;
    clearInterval(timeInterval);
  }
});

resetBtn.addEventListener("click", () => {
  time = 0;
  updateDisplay();
  startBtn.innerHTML = "Start";
  running = false;
  clearInterval(timeInterval);
});
