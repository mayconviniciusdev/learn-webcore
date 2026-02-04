let digitalElement = document.querySelector('.digital-time');
let secondElement = document.querySelector('.hand-second');
let minuteElement = document.querySelector('.hand-minute');
let hourElement = document.querySelector('.hand-hour');

function fixZero(time) {return time < 10 ? `0${time}` : time};

function updateClock() {
  let now  = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
  
  let secondDeg = ((360 / 60) * second) - 90;
  secondElement.style.transform = `rotate(${secondDeg}deg)`;

  let minuteDeg = (minute * 6) + (second * 0.1) - 90;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;

  let hourDeg = ((360 / 12) * hour) + (minute * 0.5) - 90;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();