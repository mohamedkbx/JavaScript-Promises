function getAllPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      return response.json();
    })
    .then((json) => {
      const postList = document.querySelector(".posts");
      postList.innerHTML = "";
      json.forEach((post) => {
        postList.innerHTML += `<div class="post">
          <h2 class="post__title">${post.title}</h2>
          <hr />
          <p class="post__body">
           ${post.body}
          </p>
        </div>`;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
function getAllUsers() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          reject("Error fetching data");
        }
        return response.json();
      })
      .then((json) => {
        const userList = document.querySelector(".users");
        userList.innerHTML = "";
        json.forEach((user) => {
          userList.innerHTML += `<div class="user-id" onclick="userClick(${user.id},this)">
              <h2 class="user__name">${user.name}</h2>
              <h3 class="user__Email">${user.email}</h3>
            </div>>`;
        });
        resolve();
      });
  });
}

function userClick(userId, element) {
  getAllPosts(userId);
  let selected = document.getElementsByClassName("selected");
  for (item of selected) {
    item.classList.remove("selected");
  }
  element.classList.add("selected");
}

getAllUsers()
  .then(() => getAllPosts(1))
  .catch((error) => {
    console.log(error);
  });
