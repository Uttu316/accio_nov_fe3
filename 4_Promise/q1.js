console.log("A");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("B");
    if ("A" < "B") {
      resolve("Hello");
    } else {
      reject("Bye");
    }
  }, 3000);
  console.log("C");
});

p.then((value) => {
  console.log(value);
})
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("End");
  });
console.log("D");
