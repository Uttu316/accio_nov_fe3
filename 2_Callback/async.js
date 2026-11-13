console.log("A");

setTimeout(() => {
  console.log("B");
}, 3000);

setTimeout(() => {
  console.log("C");
}, 2000);

setTimeout(() => {
  console.log("D");
}, 2000);

setTimeout(() => {
  console.log("E");
}, 20);

setTimeout(() => {
  console.log("F");
}, 50);
setTimeout(() => {
  console.log("G");
}, 0);
setTimeout(() => {
  console.log("H");
});
console.log("I");
