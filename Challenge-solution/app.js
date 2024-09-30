function getAllPosts(userId = 1) {
  let request = new XMLHttpRequest();
  request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  request.responseType = "json";
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      const postList = document.querySelector(".posts");
      postList.innerHTML = "";
      posts.forEach((post) => {
        postList.innerHTML += `<div class="post">
          <h2 class="post__title">${post.title}</h2>
          <hr />
          <p class="post__body">
           ${post.body}
          </p>
        </div>`;
      });
    }
  };
}
function getAllUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.setRequestHeader("Content-Type", "application/json");
  request.send();
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      const userList = document.querySelector(".users");
      userList.innerHTML = "";
      users.forEach((user) => {
        userList.innerHTML += `<div class="user-id" onclick="userClick(${user.id},this)">
          <h2 class="user__name">${user.name}</h2>
          <h3 class="user__Email">${user.email}</h3>
        </div>>`;
      });
    }
  };
}

function userClick(userId, element) {
  getAllPosts(userId);
  let selected = document.getElementsByClassName("selected");
  for (item of selected) {
    item.classList.remove("selected");
  }
  element.classList.add("selected");
}
getAllPosts();
getAllUsers();
