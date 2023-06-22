const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12,
];

//target elements
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 5, 22, 12, 10, 0);
// // let futureDate = new Date();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 0, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
let hour = hours[futureDate.getHours()];
let minute = futureDate.getMinutes();

let ampm;

if (minute < 10) {
  minute = `0${minute}`;
}

if (futureDate.getHours() >= 12) {
  ampm = 'pm';
} else {
  ampm = 'am';
}

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minute}${ampm}`;

//future time in mili seconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMinute);
  const secs = Math.floor((t % oneMinute) / oneSecond);

  const times = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      item = `0${item}`;
      return item;
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(times[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired" > Sorry, giveaway has ended</h4>`;
  }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
