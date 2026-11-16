const api = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(a + b);
    }, 3000);
  });
};

console.log("A");

async function getData() {
  try {
    console.log("B");

    let x = 10;
    let y = 20;

    const ans = await api(x, y);

    console.log(ans);
  } catch (e) {
    console.log("Error", e);
  }
}

console.log("C");
getData();
console.log("D");
