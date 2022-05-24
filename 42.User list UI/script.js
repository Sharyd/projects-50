const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];

input.addEventListener("input", function (event) {
  dataFilter(event.target.value);
});

async function getData() {
  try {
    const allUsers = await fetch("https://randomuser.me/api?results=50");

    const data = await allUsers.json();
    console.log(data);
    result.innerHTML = "";

    if (!allUsers.ok) throw new Error(`${data.message} ${allUsers.status}`);

    data.results.forEach(function (user) {
      const li = document.createElement("li");

      li.innerHTML = `
          <img src ="${user.picture.large}" alt= "${user.name.first}">
          <div class="user-information">
                <h3>${user.name.first} ${user.name.last} </h3>
                <p> ${user.location.city}, ${user.location.country} </p>
          
          
          </div>
          `;
      result.appendChild(li);

      userList.push(li);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

getData();

function dataFilter(inputText) {
  userList.forEach(function (oneUser) {
    if (oneUser.textContent.toLowerCase().includes(inputText.toLowerCase())) {
      oneUser.classList.remove("hide");
    } else {
      oneUser.classList.add("hide");
    }
  });
}
