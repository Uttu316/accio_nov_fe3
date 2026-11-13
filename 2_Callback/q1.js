function getUser(userid, onSuccess, onFailure) {
  console.log("A");

  if (userid.indexOf("A")) {
    onSuccess("Hello");
  } else {
    onFailure("Oops");
  }
  console.log("B");
}

getUser(
  "ABC",
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  },
);
console.log("C");
