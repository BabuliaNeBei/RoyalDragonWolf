const request = async (url) => {
  let result = await fetch(url);
  return result;
};

let pr = new Promise((res, rej) => {
  request("https://jsonplaceholder.typicode.coms/posts/1").then((data) => {
    try {
      if (data.status >= 400) {
        throw new Error("this adress is incorrect!");
      } else {
        res(data.json());
      }
    } catch (err) {
      rej(err.message);
    }
  });
});

pr.then((data) =>
  console.log(
    `id пользователь - ${data.userId} \nid записи - ${data.id} \nЗаголовок - ${data.title}`
  )
).catch((err) =>
  console.log(
    `id пользователь - ${data.userId} \nid записи - ${data.id} \nЗаголовок - ${data.title}`
  )
);
