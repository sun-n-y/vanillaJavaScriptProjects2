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
const items = document.querySelectorAll('.deadline h4');

//date
const futureDate = new Date(2023, 5, 23, 12, 0, 0);

const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = format1(futureDate.getMinutes());
const amPm = format2(hour);

//format
function format1(value) {
  if (value < 10) {
    return (value = `0${value}`);
  } else {
    return value;
  }
}

function format2(value) {
  if (value < 12) {
    return (value = `am`);
  } else {
    return (value = `pm`);
  }
}

giveaway.innerHTML = `Giveaway Ends On ${day}, ${date} ${month} ${year}, ${hour}:${minute}${amPm}`;
