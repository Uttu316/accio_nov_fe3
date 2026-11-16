const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Hey");
    }, 3000);
  });
};

async function getData() {
  try {
    console.log("A");

    const x = await api();

    console.log(x);
  } catch (e) {
    console.log("Error", e);
  }
}

getData();
