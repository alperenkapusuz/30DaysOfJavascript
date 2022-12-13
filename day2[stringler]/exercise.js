let Challenge = "30 Days Of Javascript";
console.log(Challenge);
console.log(Challenge.length);
console.log(Challenge.toUpperCase());
console.log(Challenge.toLowerCase());
console.log(Challenge.substring(0, 2));
console.log(Challenge.substring(3));
console.log(Challenge.includes("Script"));
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(","));
console.log(Challenge.replace("Javascript", "Python"));
console.log(Challenge.charAt(15));
console.log(Challenge.charCodeAt(11));
console.log(Challenge.indexOf("a"));
console.log(Challenge.lastIndexOf("a"));
let cumle = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(cumle.indexOf("çünkü"));
console.log(cumle.lastIndexOf("çünkü"));
console.log(cumle.search("çünkü"));
console.log(Challenge.trim());
console.log(Challenge.startsWith("3"));
console.log(Challenge.endsWith("t"));
console.log(Challenge.match("a"));
console.log(Challenge.repeat(2));

console.log("------lvl2------");

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(parseInt("10"));
console.log(parseFloat("9.8") == 10);
console.log("python".includes("on"));
console.log("jargon".includes("on"));
console.log("Umarım bu kurs jargonla dolu değildir.".includes("on"));

var sayi = Math.random() * 50;
console.log(Math.floor(sayi) + 50);

let string = "Javascript";
console.log(string[Math.floor(Math.random() * string.length)]);

let ifade = "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır";
console.log(ifade.substring(37, 11));
