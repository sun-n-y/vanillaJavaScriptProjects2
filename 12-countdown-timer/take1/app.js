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

let futureDate = new Date(2023, 5, 22, 13, 0, 0);
// let futureDate = new Date();

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
