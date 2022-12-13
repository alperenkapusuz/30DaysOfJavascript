let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo);
//------------
let js = "Javascript";
let py = "Python";
console.log(js == py);
//------------
let lightOn = true;
let lightOff = false;
console.log(lightOn == lightOff);
//------------
let nums = [1, null, "alperen", true, undefined];

console.log(nums);
//------------
nums[1] = 2;
//------------
console.log(nums);

let nums2 = [1, 2, 3];
let nums3 = [1, 2, 3];
console.log(nums2 == nums3); //false dondurur
//------------
let userOne = {
  name: "Alperen",
  surname: "Kapusuz",
};

let userTwo = {
  name: "Sefa",
  surname: "Kapusuz",
};

console.log(userOne == userTwo); //false dondurur
// Kuralımız ilkel olmayan veri turlerini karşılaştırmıyoruz
//------------
// Peki ilkel olmayan veriler ne zaman esit olur ?
let strings = ["alperen", "kapusuz", "sivas"];
let strings2 = strings;
console.log(strings == strings2);

//------------

const PI = Math.PI;
console.log(PI);

//En yakın sayıya yuvarlama
console.log(Math.round(PI));
console.log(Math.round(9.81));
console.log(Math.floor(PI)); // taban sayıya yuvarlar
console.log(Math.ceil(PI)); // tavan sayıya yuvarlar
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // en kucuk sayıyı bulur
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // en buyuk sayıyı bulur
console.log(Math.random()); // random sayı uretir 0 ile 0.999 arası
console.log(Math.floor(Math.random() * 11)); // 0 ile 10 arası random sayı üretir
console.log(Math.abs(-10)); // negatif sayıyı pozitif yapar
console.log(Math.sqrt(25)); // bir sayının kokunu alir
console.log(Math.pow(3, 2)); // ussu alır
console.log("-------------------------------");
let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 11;
console.log(numBtnZeroAndTen);
let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor);

console.log("------ STRINGS ------");
let name = "Alperen";
let surname = "Kapusuz";
let fullname = name + " " + surname; // + burada addition operator olarak kullanıldı
console.log(fullname); // bu yontem eskide kaldı

let expression = "expression";
let data = `String literal text ${expression}`;
console.log(data);

let a = 4;
let b = 5;
console.log(`${a + b}`);
console.log(`${a} is greater than ${b} : ${a > b}`);

console.log("----STRING METHOD----");
// length
console.log("alperen".length);
let name2 = "sefa";
console.log(name2.length);
console.log(name2[1]);
console.log(name2[name2.length - 1]);
console.log("alperen".toUpperCase());
console.log("ALPEREN".toLowerCase());
let string = "Javascript";
console.log(string.substr(4, 6));
let country = "Turkey";
console.log(country.substr(1, 2)); // ___.substr(bir indexten başla, x kadar karakter al)
let name3 = "alperen kapusuz";
console.log(name3.split(" "));

// aradıgımız ifade var mı gecip gecmedigini anlamak icin includes kullanabiliriz
// case sensitive'dir buyuk kucuk dikkat et
let string3 = "30 days Of Javascript";
console.log(string3.includes("days"));
console.log(string3.includes("Java"));
console.log(string3.includes("of"));
console.log(string3.includes(" "));

let string2 = "30 days of javascript";
console.log(string2.replace("javascript", "react-native"));
console.log(string2.replace("javascript", "react"));
console.log(string2);

let string4 = "30 days of javascript";
console.log(string4.charAt(3));

console.log(string4.indexOf("j"));

console.log(string4.startsWith("3"));

// bir veri turunu baska bir bir veri turune degisme Casting

let num = "10";
let numInt = parseInt(num);
console.log(typeof numInt);
console.log(typeof num);
console.log(typeof +"5");
