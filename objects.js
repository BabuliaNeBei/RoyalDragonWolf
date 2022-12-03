// let user = {
//   name: "Mark",
//   secondName: "Volk",
//   age: "28",
// };

// const values = (obj) => {
//   let newValues = Object.values(obj);
//   for (let i = 0; i < newValues.length; i++) {
//     console.log(`pered nami zna4enie polia - ${newValues[i]}`);
//   }
// };
// values(user);

let users = ["Mark", "Vlad", "Sergey", "Vito"];

let randomObjValue = (obj) => {
  //   console.log(Math.random());
  console.log(obj[Math.round(Math.random() * (obj.length - 1 - 0))]);
};
randomObjValue(users);
