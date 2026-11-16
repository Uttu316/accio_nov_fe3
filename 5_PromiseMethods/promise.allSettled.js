const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
}); //resolve,3sec,A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
}); //reject,2sec,B

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
}); //resolve,1.5sec,C

const p = Promise.allSettled([p1, p2, p3]);

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log(err);
});
