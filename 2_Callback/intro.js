console.log("A");

function sum(x, y, action) {
  let a = 2;

  console.log("B");
  const o = action(a + x, y - a) + action(y + a, x - a);

  return o;
}
function mul(x, y) {
  console.log("C");
  return x * y;
}

const ans = sum(5, 4, mul);

console.log(ans);
console.log("D");
