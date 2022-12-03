let date = new Date().toLocaleString();
console.log(date);

let vremya = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
};
vremya().then(() => {
  console.log(new Date().toLocaleString());
});
