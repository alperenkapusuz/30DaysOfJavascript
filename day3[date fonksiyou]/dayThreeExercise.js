const firstName = "Alperen";
const lastName = "Kapusuz";
const country = "Turkiye";
const city = "Sivas";
let age = 21;
let isMarried = false;
let year = 2022;

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

console.log("10" == 10);

//--------

const base = prompt("Enter base: ");
const height = prompt("Enter height: ");
alert("The area of the triangle is : " + 0.5 * base * height);

//------
const a = prompt("Enter side a: ");
const b = prompt("Enter side b: ");
const c = prompt("Enter side c: ");
alert(
  "The perimeter of the triangle is : " +
    (parseInt(a) + parseInt(b) + parseInt(c))
);

//----
const uzunluk = prompt("Enter height: ");
const genislik = prompt("Enter width: ");
alert("Cevre : " + 2 * (parseInt(uzunluk) + parseInt(genislik)));

//------

const yaricap = prompt("Enter yaricap: ");
alert("alan: " + Math.PI * parseInt(yaricap) * parseInt(yaricap));
alert("cevre : " + 2 * Math.PI * parseInt(yaricap));

//-----
const x = prompt("x : ");
const y = prompt("y : ");
alert("y = 2x - 2 x kesme noktası:" + (parseInt(y) + 2) / 2);
alert("y = 2x - 2 y kesme noktası:" + (parseInt(x) * 2 + 2));
//-----

const degerX = prompt("x: ");
alert(
  "y = x^2 + 6x + 9 , y degeri: " +
    (parseInt(degerX) ** 2 + 6 * parseInt(degerX) + 9)
);

//---
const degerXX = prompt("Enter hours: ");
const degerY = prompt("Enter rate per hour: ");
alert("Your weekly earning is: " + parseInt(degerXX) * parseInt(degerY));

//---

const name = "alperen";
name.length > 7 ? "adınız uzun" : "adınız kısa";

//---

const name2 = "Alperen";
const name3 = "Kapusuz";
name2 > name3
  ? `Your first name, ${name2} is longer than your family name, ${name3}`
  : `Your first name, ${name2} is equals your family name, ${name3}`;

//----

const myAge = 250;
const yourAge = 25;
myAge > yourAge
  ? `I am ${myAge} years older than you.`
  : `I am ${myAge} years younger than you.`;
