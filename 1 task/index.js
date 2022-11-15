const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let seconds = 60;

const createTimerAnimator = setInterval(function () {
  var minutes = Math.floor(seconds/60)
  var tseconds = seconds % 60
  var hours = Math.floor(minutes/60)
  minutes = minutes%60
  if (seconds <= 0) {
    seconds = 0
    alert("Время закончилось");
} else {
  let strTimer = `${Math.trunc(hours)}:${Math.trunc(minutes)}:${tseconds}`;
  timerEl.innerHTML = strTimer;
}
--seconds;
}, 1000)


inputEl.addEventListener('input', () => {
  inputEl.value = Number(inputEl.value.replace(/[^0-9,\s]/g,""));
});

buttonEl.addEventListener('click', () => {
  seconds = Number(inputEl.value)
  console.log('кнопка', seconds)

  createTimerAnimator(seconds)

  inputEl.value = '';
});
