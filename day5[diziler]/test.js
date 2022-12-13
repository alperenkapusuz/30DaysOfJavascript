const arr = Array(8).fill("X"); // doldurma
//----
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList); // birleştirme
//----
const numbers = [1, 2, 4];
console.log(numbers.indexOf(2)); // indexi gosterir
//----
const numbers2 = [1, 2, 3, 4, 6, 7, 8];
console.log(numbers2.lastIndexOf(1)); // indexi gösterir yoksa -1 dondurur
//----
const numbers3 = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers3.includes(8)); // varsa true yoksa false dondurur
//----
const numbers4 = [1, 2, 3, 4, 5, 6, 7];
console.log(Array.isArray(numbers4)); // array mi değil mi kontrol eder
//----
const names3 = [1, 2, 3];
names3.toString(); // stringe çevirir => '1,2,3'
//----
const numbers5 = [1, 2, 3];
numbers.join(); // ekleme işi yapar => join() ise '1,2,3' join(' <herhangi bir karakter> ') ise '1 <herhangi bir karakter> 2 <herhangi bir karakter> 3'
//----
const numbers6 = [1, 2, 3, 4, 5];
numbers6.slice(0, 3); // 0. indexten başla 3'e kadar al
//----
const numbers7 = [1, 2, 3, 4, 5];
numbers6.splice(); // eleman silme
numbers6.splice(1, 2, "Alperen", "Kapusuz"); // 1. ve 2. elemanları sil yerlerine 'Alperen' ve 'Kapusuz' koy
//----
let names = ["alperen", "sefa", "sevim", "irfan"];
names.push("merve"); // sona eleman ekler
//----
let names2 = ["alperen", "sefa", "sevim", "irfan"];
names.pop(); // sondaki elemanı siler 'irfan' verisi silindi
//----
let names4 = ["alperen", "sefa", "sevim", "irfan"];
names.shift(); // bastaki elemanı siler 'alperen' verisi silindi
//----
let names5 = ["sefa", "sevim", "irfan"];
names.shift("unshift"); // basa eleman ekler 'alperen' verisi eklendi
//-----
let names6 = ["sefa", "sevim", "irfan"];
names.reverse(); // dizi tepetaklak olur ['irfan', 'sevim', 'sefa']
//-----
const alphabet = ["b", "a", "c", "d", "h", "e", "f", "g"];
alphabet.sort(); // diziyi alfabetik olarak sıralar
