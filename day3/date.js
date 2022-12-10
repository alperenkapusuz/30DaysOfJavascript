const date = new Date();
// console.log(date.getFullYear());

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDate(),
  hour = date.getHours(),
  minute = date.getMinutes(),
  second = date.getSeconds(),
  dayNumber = date.getDay();

let months = [
  "Ocak",
  "Subat",
  "Mart",
  "Nisan",
  "Mayis",
  "Haziran",
  "Temmuz",
  "Agustos",
  "Eylul",
  "Ekim",
  "Kasim",
  "Aralik",
];

let days = [
  "Pazar",
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

let humanReadebleDate = `${day} ${months[month]} ${year}, ${days[dayNumber]} , ${hour}:${minute}:${second}`;

console.log(humanReadebleDate);
