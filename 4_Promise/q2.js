const getData = (userid) => {
  return new Promise((resolve, reject) => {
    console.log("A");
    setTimeout(() => {
      if (userid.includes("X")) {
        resolve("Ok");
      } else {
        reject("oops");
      }
      console.log("C");
    }, 3000);
  });
  console.log("D");
};
console.log("B");

getData("xyz")
  .then((val) => {
    console.log(val);
  })
  .finally(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.log("Error", e);
  });
console.log("E");
