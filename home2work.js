// 1 напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

// const objectCheck = (element) => {
//   console.log(element instanceof Object && !Array.isArray(element));
//   function lskdfmg() {
//     console.log(element);
//   }
//   lskdfmg();
// };
// objectCheck(2);

// 2 Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].

// let user = {
//   name: "John",
//   age: 30,
// };

// let entries = Object.entries(user);
// console.log(entries);

// 3 Напишите функцию, которая возвращает новый объект без указанных значений.

// const data = { a: 1, b: 2, c: 3 };

// const without = (object, ...args) => {
//   let n = {};
//   for (let prop in object) {
//     if ([...args][0] !== prop && [...args][1] !== prop) {
//       n[prop] = object[prop];
//     }
//   }
//   console.log(n);
// };
// without(data, "a", "b");

// 4 Nапишите функцию, которая делает поверхностную проверку объекта на пустоту.
// const data = { a: 2, b: undefined };
// const data2 = { a: undefined };

// const isEmpty = (object) => {
//   const objValues = Object.values(object);
//   if (objValues.filter((el) => !!el).length > 0) {
//     return false;
//   } else {
//     return true;
//   }
// };
// console.log(isEmpty(data2));

// 5 Напишите функцию, которая поверхностно сравнивает два объекта.

// const data = { a: "1", b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// const isEqual = (firstObject, secondObject) => {
//   console.log(JSON.stringify(firstObject) == JSON.stringify(secondObject));
//   //   console.log(JSON.stringify(firstObject));
//   for (let key in firstObject) {
//     if (firstObject[key] !== secondObject[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// isEqual(data, data2);

// 6 Напишите функцию, которая вызывает метод массива на заданный путь объекта.

// const data = {
//   a: { b: [1, 2, 3] },
// };

// const invoke = (object, path, func, args) => {
//   const splittedPath = path.split(".");

//   //   const target = splittedPath.reduce((acc, key) => {
//   // acc = acc[key] ? acc[key] : object[key];
//   // console.log(acc);
//   // return acc;
//   //   }, {});

//   return object[splittedPath[0]][splittedPath[1]][func](...args);
// };
// console.log(invoke(data, "a.b", "splice", [1, 2]));

// ----------------------------------------------------------------

// 1) Написать функцию, которая, после промежутка в 4 секунды возвращает объект, в котором есть поле, являющееся массивом, где каждый элемент - это объект с тремя полями (Элементов
//     должно быть не менее пяти. Т.е. 5 объектов, в каждом из которых 3 поля).
//     Отловить момент выполнения этой функции и вывести в консоль сообщение - promise resolved + поле нашего объекта, которое является массивом объектов.

// const users = {
//   salam: [
//     {
//       name: "Kirill",
//       userName: "sfdvdsb",
//       password: "123qwe",
//     },
//     {
//       name: "Arnold",
//       userName: "kdsfnbig",
//       password: "789yui",
//     },

//     {
//       name: "Edik",
//       userName: "lldfvbmd",
//       password: "0987lihd",
//     },
//     {
//       name: "masha",
//       userName: "lsdfnbiurb",
//       password: "0987654321",
//     },
//     {
//       name: "Misha",
//       userName: "sldfnbignbn",
//       password: "mnh456",
//     },
//   ],
// };
// const func = (users) => {
//   const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//       res(users);
//     }, 4000);
//   });
//   return promise;
// };
// func(users).then((result) =>
//   console.log("promise resolved", Object.keys(result)[0])
// );

// 2) Написать функцию delay которая выполняет задержку в 3 секунды. Составить цепочку промисов, состоящую из пяти промисов. (сначала выполняется первый промис, затем второй,
//     затем 3-ий и тд.)

// const delay = () =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, 3000);
//   });

// delay()
//   .then(() => {
//     console.log(1);
//     return delay();
//   })
//   .then(() => {
//     console.log(2);
//     return delay();
//   })
//   .then(() => {
//     console.log(3);
//     return delay();
//   })
//   .then(() => {
//     console.log(4);
//     return delay();
//   })
//   .then(() => {
//     console.log(5);
//     return delay();
//   });
// const delay2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("vipolnilsya vtoroi promis");
//     res(delay3);
//   }, 4000);
// });
// const delay3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("vipolnilsya tretiy promis");
//     res(delay4);
//   }, 5000);
// });
// const delay4 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("vipolnilsya chetvertiy promis");
//     res(delay5);
//   }, 6000);
// });
// const delay5 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("Done!");
//     res();
//   }, 7000);
// });

// 3) Написать функцию, которая принимает на вход callback. В колбэке описать асинхронность (задержка 2 секунды),
// в которой в консоль выводится сообщение - this is callback

// const Asinch = (cb) => {
//   cb();
// };
// Asinch(() => {
//   setTimeout(() => {
//     console.log("this is callback");
//   }, 2000);
// });

// 4) Написать функцию, которая принимает на вход callback. В колбэке описать асинхронность (задержка 4 секунды). Внутри callback-функции вызвать метод resolve() и передать туда
// любое число. Когда промис выполнится, в функции, которая вызывает callback, возвести переданное число в 4 степень.

// new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(4), 4000);
// }).then(function (result) {
//   console.log(result ** 4);
// // });

// const myFunction = async (callBack) => {
//   let result = await callBack();
//   console.log(result ** 4);
//   return result ** 4;
// };

// myFunction(
//   () =>
//     new Promise((res, rej) => {
//       setTimeout(() => res(2), 4000);
//     })
// );

// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// async function f() {
//   let result = await wait();
//   console.log(result);
// }

// f();

// kljlh
