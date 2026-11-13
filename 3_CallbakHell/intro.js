function getUser(username, onSuccess, onFailure) {
  setTimeout(() => {
    if (username === "ABC") {
      onSuccess({
        name: "ABC_xyz",
        id: "32323232432",
      });
    } else {
      onFailure("No user found");
    }
  }, 3000);
}
function getPost(userid, onSuccess, onFailure) {
  setTimeout(() => {
    if (userid) {
      onSuccess({
        caption: "Trip to Male",
        id: "4343433434",
      });
    } else {
      onFailure("No post found");
    }
  }, 3000);
}
function getComment(postId, onSuccess, onFailure) {
  setTimeout(() => {
    if (postId) {
      onSuccess({
        comment: "Superb",
        id: "554344332",
      });
    } else {
      onFailure("No comment found");
    }
  }, 3000);
}

console.log("Start");
getUser(
  "ABC",
  (user) => {
    console.log("User Details", user);
    getPost(
      user.id,
      (post) => {
        console.log("Posts", post);
        getComment(
          post.id,
          (comment) => {
            console.log("Comments", comment);
          },
          (error) => {
            console.log("Error", error);
          },
        );
      },
      (error) => {
        console.log("Error", error);
      },
    );
  },
  (error) => {
    console.log("Error", error);
  },
);
