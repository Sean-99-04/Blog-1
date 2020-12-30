const day1 = new Date();

const weekDay = (day) => {
  const weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };
  return weekDays[day.getDay()];
};

const monthDay = (day) => {
  day = day.getDate().toString();
  if (day.match(/^1\d$/)) {
    day = `${day}th`;
    return day;
  } else if (day.match(/^\d[4-9]|0$/)) {
    day = `${day}th`;
    return day;
  } else if (day.match(/^\d1$/)) {
    day = `${day}st`;
    return day;
  } else if (day.match(/^\d2$/)) {
    day = `${day}nd`;
    return day;
  } else if (day.match(/^\d3$/)) {
    day = `${day}rd`;
    return day;
  }
};

const month = (month) => {
  const monthObj = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };
  return monthObj[month.getMonth()];
};

const minutes = (minutes) => {
  minutes = minutes.getMinutes();
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
    return minutes;
  }
};

const formatDate = (date) => {
  return `${weekDay(date)}, ${monthDay(date)} ${month(
    date
  )}, ${date.getFullYear()} at ${date.getHours()}:${minutes(date)}`;
};

module.exports = formatDate;
