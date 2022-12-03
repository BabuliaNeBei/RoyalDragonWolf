// 1) Написать функцию, вычисляющую кол-во пробелов в строке.

// function probel(string) {
//   return string.split(" ").length - 1;
// }
// console.log(probel("Это строка где очень много слов"));

// 2) Написать функцию, которая посчитает кол-во слов в строке.

// function currentWords(string) {
//   return string.split(" ").length;
// }
// console.log(currentWords("Это строка где очень много слов"));

// 3) Написать полифил к функции array.silce. (реализовать руками).

// const polifilSlice = (globalmassiv, startIndex, endIndex) => {
//   let newArr = [];
//   for (let i = startIndex; i <= endIndex; i++) {
//     newArr.push(globalmassiv[i]);
//   }
//   console.log(newArr);
// };
// polifilSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, 9);

// 4) Написать функцию, вычисляющую сумму чисел в диапазоне от start до end.

// const currSumm = (start, end) => {
//   let summ = 0;
//   for (let i = start; i < end; i++) {
//     summ += i;
//   }
//   return summ;
// };
// console.log(currSumm(1, 9));

// 5) Написать функцию, сортирующую массив в порядке возрастания или убывания (тип задаётся динамически, т.е. я должен иметь возможность выбрать либо возр. либо убыв. и ваша функция должна подстроиться).

let arr = [4, 23, 25, 87, 5, 68, 98, 12, 2, 50];

// let sortirovka = (vibor) => {
//   if (vibor == "ubivanie") {
//     arr.sort((a, b) => b - a); //ubivanie
//   } else if (vibor == "vozrastanie") {
//     arr.sort((a, b) => a - b); //vozrastanie
//   }
//   console.log(arr);
// };

// sortirovka("ubivanie");
