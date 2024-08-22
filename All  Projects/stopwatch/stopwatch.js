let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

document.getElementById('start-button').addEventListener('click', startStopwatch);
document.getElementById('stop-button').addEventListener('click', stopStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);

function startStopwatch() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
  clearInterval(intervalId);
}

function updateDisplay() {
  document.getElementById('hours').textContent = pad(hours);
  document.getElementById('minutes').textContent = pad(minutes);
  document.getElementById('seconds').textContent = pad(seconds);
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

