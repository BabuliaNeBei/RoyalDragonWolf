let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   1) Написать функцию, которая находит сумму элементов массива.

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// let sumArr = () => {
//   console.log(
//     arr.reduce((previous, current) => {
//       return previous + current;
//     })
//   );
// };
// sumArr();

// 2) Написать функцию, которая делит массив на 2 части и возвращает вторую половину.

// let half = Math.ceil(arr.length / 2);
// let firstHalf = arr.slice(0, half);
// let secondHalf = arr.slice(-half);

// console.log(secondHalf);
// let arrayDivider = (arr) => {
//   console.log(arr[0]);
//   return arr.slice(arr.length / 2);
// };
// console.log(arrayDivider([1, 2, 3, 4, 5, 6, 7, 8]));

// 3) Написать функцию, которая конкатенирует 4 массива.

// let arr1 = [1, 1, 1, 1];
// let arr2 = [2, 2, 2, 2];
// let arr3 = [3, 3, 3, 3];
// let arr4 = [4, 4, 4, 4];

// console.log(arr1.concat(arr2, arr3, arr4));
// console.log(arr1);

// 4) Написать функцию, которая принимает массив, где каждый элемент - число, а вовзращает массив, где каждый элемент - 'Элемент = ' + число первоначального массива.
// let func = (arr) => {
//   return arr.map((el) => {
//     return "Element = " + el;
//   });
// };
// console.log(func(arr));

// 5) Применить метод массива forEach, который каждую итерацию выводитв консоль сообщение о том, какой сейчас элемент массива учавствуетв  переборе.

// arr.forEach((el, index) => {
//   console.log(`perebiraetsya element: ${el} s indexom: ${index}`);
// });

// let func = (a, func1) => {
//   func1(a);
// };

// func(1, (b) => {
//   console.log(b);
// });
// 6) Написать функцию, котрая разбивает строку на буквы.

// let arr1 = "massivbukv";
// console.log(arr1.split(""));

// 7) Написать функцию, которая из элементов массива конструирует строку и между каждым эелемнтом массива вставляет символ амперсанда.

// let arr5 = [1, 2, 3, 4];
// console.log(arr5.join("&"));

// 1) Написать функцию, которая возвращает первые 30 чисел в *ряду Фибоначчи*.

// let fibonacci_series = function (n) {
//   if (n === 1) {
//     return [0, 1];
//   } else {
//     let s = fibonacci_series(n - 1);
//     s.push(s[s.length - 1] + s[s.length - 2]);
//     return s;
//   }
// };

// console.log(fibonacci_series(30));

// 2) 2 в 15 степени = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.
//    Какова сумма цифр числа 2 в 30 степени? (Высчитать программой)

// let stepen = () => {
//   let num = 2 ** 30;
//   console.log(num);
//   let str = "" + num;
//   console.log(str);
//   let splitStr = str.split("");
//   console.log(splitStr);
//   let numbers = splitStr.map((el) => +el);
//   console.log(numbers);
//   return numbers.reduce((prev, current) => prev + current);
// };
// console.log(stepen());

// perevernutaya stroka

let stroka = (word) => {
  let myWord = word.split("");
  for (let i = 0; i < myWord.length / 2; i++) {
    let buffer = myWord[i];
    myWord[i] = myWord[myWord.length - 1 - i];
    myWord[myWord.length - 1 - i] = buffer;
  }
  console.log(myWord);
};

stroka("123456");
