console.log("C");
let x = 20;
export const y = 30;
var z = 10;

export function sum(a, b) {
  return a + b;
}

const Main = (title) => {
  const el = document.createElement("h2");
  el.innerHTML = title;
  document.body.append(el);
};

export default Main;
