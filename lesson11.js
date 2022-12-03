// 1. Переверните число задом наперед

// function reverseNumber(n) {
//   n = n + "";
//   return n.split("").reverse().join("");
// }

// console.log(reverseNumber(258961));

// 2. Проверьте, является ли переданная строка палиндромом или нет

// function myResult(str) {
//   for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//     if (str[i] != str[j]) return false;
//   }
//   return true;
// }

// console.log(myResult("sakasd"));

// 3. Вернуть переданную строку с буквами в алфавитном порядке

// function alphavitSort(str) {
//   return str.split("").sort().join("");
// }

// console.log(alphavitSort("asighvoiwuehvosidufhbwieuhaaainvwoi"));

// 4. Найти самое длинное слово в строке

// const findLongestWord = function (str) {
//   let arrStr = str.split(" ");
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < arrStr.length; i += 1) {
//     wordLength = arrStr[1].length;

//     if (arrStr[i].length > wordLength) {
//       longestWord = arrStr[i];

//       return longestWord;
//     }
//   }
// };

// console.log(
//   findLongestWord("One of the most famous statues in the world stands")
// );

// function findLongestWord(str) {
//   let strSplit = str.split(" ");
//   let longestWord = 0;
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function findLongestWord(str) {
//   let longestWord = str.split(" ").sort(function (a, b) {
//     return b.length - a.length;
//   });
//   return longestWord[0].length;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// 5. Подсчитать количество гласных в строке

// function vowel_count(str1) {
//   let vowel_list = "aeiouAEIOU";
//   let vcount = 0;

//   for (let i = 0; i < str1.length; i++) {
//     if (vowel_list.indexOf(str1[i]) !== -1) {
//       vcount += 1;
//     }
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox jumped over the lazy dog"));

// 6. Проверьте, является ли число простым или нет

// function test_prime(n) {
//   if (n === 1) {
//     return false;
//   } else if (n === 2) {
//     return true;
//   } else {
//     for (var x = 2; x < n; x++) {
//       if (n % x === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// console.log(test_prime(2));

// 7. Найти элементы массива, которые больше указанного числа

// 8. Найти первый неповторяющийся символ в строке

// function firstNonRepeatedCharacter(string) {
//   for (let i = 0; i < string.length; i++) {
//     let c = string.charAt(i);
//     if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//       return c;
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeatedCharacter("abbcbbad"));

// Задача: в строке: 'fbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fПfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fрfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fиfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fвfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fеfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fт' зашифровано поcлание. Соль в строке: 'fbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876f'.

// let sol = (stroka) => {
//   let per = stroka.split("fbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876f");

//   if (!per[0]) {
//     per.shift();
//   }

//   return per;
//   // .slice(1);
// };
// console.log(
//   sol(
//     "9fbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fПfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fрfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fиfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fвfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fеfbnq8734gf9gwelrfb12o876g4fqh34fo783qgh4fovb34876fт"
//   )
// );

// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23.

// Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

// let fn = () => {
//   let buffer = [];
//   for (let i = 0; i < 1000; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       buffer.push(i);
//     }
//   }
//   console.log(buffer);
//   let summBuf = buffer.reduce((prev, curr) => prev + curr);
//   console.log(summBuf);
// };
// fn();

// let chet = () => {
//   for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0 && i > 10) {
//       console.log(i ** 2);
//     }
//   }
// };
// chet();

let arrRevers = (str) => {
  let letters = str.split("");
  let newStr = [];
  for (let i = letters.length - 1; i >= 0; i--) {
    newStr.push(letters[i]);
    // console.log(newStr);
  }
  console.log(newStr.join(""));
};
arrRevers("royalDragonWolf");
