//1
const array = [];
//2
const array2 = Array(6);
//3
console.log(array[0], array[3], array[6]);
//4
const mixedDataTypes = ["alperen", 1, true, undefined, false, 2.2, NaN];
//5
const ItCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//6
console.log(ItCompanies);
//7
console.log(ItCompanies.length);
//8
console.log(
  ItCompanies[0],
  ItCompanies[(ItCompanies.length - 1) / 2],
  ItCompanies[ItCompanies.length - 1]
);
//9
console.log(ItCompanies.join(" "));
//10
console.log(ItCompanies.join(" ").toLocaleUpperCase());
//11
console.log(ItCompanies.join(" ").concat(" are big IT companies"));
//12
const company = prompt("enter company: ");
if (ItCompanies.includes(company)) {
  alert(`the ${company} has been`);
} else {
  alert(`the ${company} hasn't been`);
}
//13
//14
console.log(ItCompanies.sort());
//15
console.log(ItCompanies.reverse());
//16
console.log(ItCompanies.slice(0, 3));
//17
console.log(ItCompanies.slice(ItCompanies.length - 3));
//18
console.log(ItCompanies.shift());
//19
ItCompanies.slice(ItCompanies.pop());
//20
ItCompanies.splice("");
//21
