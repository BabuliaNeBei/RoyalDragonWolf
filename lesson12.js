// const responseOfServer = {
//   data: [
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//     {
//       nameOrg: "apple",
//       unp: 1234791823,
//       wtat: 315,
//     },
//   ],
// };

// const mapResponseFromServer = (organizations) => {
//   return organizations.map((el) => {
//     return `<div> ${el.nameOrg} ${el.unp} ${el.wtat}</div>`;
//   });
// };
// console.log(mapResponseFromServer(responseOfServer.data));

// const mapOrganizationsToDomElements = (ogranizations) => {
//   let root = document.getElementById("root");
//   for (let i = 0; i < ogranizations.length; i++) {
//     let element = document.createElement(`div`);
//     element.innerHTML = `${ogranizations[i].nameOrg} ${ogranizations[i].unp}`;
//     element.setAttribute("style", "color:red; background-color: black");
//     root.appendChild(element);
//   }
// };
// mapOrganizationsToDomElements(responseOfServer.data);

// const medicaments = [
//   {
//     mark: "Noshpa",
//     year: 1995,
//     dangerPoint: 5,
//   },
//   {
//     mark: "Drotaverin",
//     year: 1995,
//     dangerPoint: 2,
//   },
//   {
//     mark: "Drotaverin-gidrohlorid",
//     year: 1995,
//     dangerPoint: 2,
//   },
//   {
//     mark: "Omega-3",
//     year: 2022,
//     dangerPoint: 0,
//   },
//   {
//     mark: "VitaminC",
//     year: 2009,
//     dangerPoint: 2,
//   },
//   {
//     mark: "Teraflu",
//     year: 2017,
//     dangerPoint: 9,
//   },
//   {
//     mark: "Drotaverin-neo",
//     year: 1999,
//     dangerPoint: 10,
//   },
// ];

// const serchElements = (medicaments, cb) => {
//   return medicaments.filter((el) => cb(el));
// };

// const cb = (medicament) => {
//   return medicament.mark.includes("Drotaverin");
// };
// console.log(serchElements(medicaments, cb));

alert("Hello, lets play угадай число!!!");

let randomNumber = Math.round(Math.random() * (10 - 1) + 1);
console.log(randomNumber);
let popitki = 0;
while (true) {
  let userNumber = prompt("Vvedite chislo");

  if (userNumber == randomNumber) {
    alert(`You win!!!! 
    kolichestvo popitok = ${popitki}`);
    break;
  } else if (userNumber > randomNumber) {
    alert("Vashe chislo bolwe");
  } else {
    alert("Vashe chislo menwe");
  }
  popitki++;
}
