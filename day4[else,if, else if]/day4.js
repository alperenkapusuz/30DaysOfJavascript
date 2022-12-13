const age = prompt("Enter your age: ");
if (age >= 18) {
  alert("You are old enough to drive.");
} else {
  alert(`You are left with ${18 - year} years to drive.z`);
}

//-------

const myAge = 21;
const yourAge = prompt("Enter your age: ");
if (yourAge > myAge) {
  alert(`You are ${yourAge - myAge} years older than me`);
} else if (yourAge == myAge) {
  alert(`You are equals than me`);
} else {
  alert(`You are ${myAge - yourAge} years youngre than me`);
}

//-----
const num = prompt("Enter number: ");
if (num % 2 == 0) {
  alert(`${num} is an even number`);
} else {
  alert(`${num} is an odd number`);
}

//-----
const note = prompt("Enter note: ");
if (note > 80 && note < 100) {
  alert(`a`);
} else if (note > 70 && note < 89) {
  alert(`b`);
} else if (note > 60 && note < 69) {
  alert(`c`);
} else if (note > 50 && note < 59) {
  alert(`d`);
} else if (note > 0 && note < 49) {
  alert(`f`);
}

//------
