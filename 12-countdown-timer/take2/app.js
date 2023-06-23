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

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureDate.getTime() - currentTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const mins = Math.floor((t % oneHour) / oneMin);
  const secs = Math.floor((t % oneMin) / oneSec);

  const values = [days, hours, mins, secs];

  function format3(value) {
    if (value < 10) {
      return (value = `0${value}`);
    } else {
      return value;
    }
  }

  items.forEach(function (item, index) {
    item.textContent = format3(values[index]);
  });

  if (countDown < 1) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry, giveaway has ended.</h4>`;
  }
}

let countDown = setInterval(getRemainingTime, 1000);

getRemainingTime();
