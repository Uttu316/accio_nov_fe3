const p = new Promise((resolve, reject) => {
  //sync function
  //async task
  setTimeout(() => {
    if ("X" < "Y") {
      resolve("Big");
    } else {
      reject("Small");
    }
  }, 3000);
});

p.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log("Error", error);
});
