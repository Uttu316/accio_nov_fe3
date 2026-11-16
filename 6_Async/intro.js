console.log("A");
async function getData() {
  console.log("B");
  return "hello";
}
console.log("C");
const v = getData();

v.then((x) => {
  console.log(x);
});

console.log("D");
