const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDay = () => {
  const date = new Date();
  const str =
    dayNames[date.getDay()] +
    ", " +
    date.getDate() +
    " " +
    monthNames[date.getMonth()];
  return str;
};

export const formatTime = (date = new Date()) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
