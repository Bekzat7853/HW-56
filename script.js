const getPastry = async () => {
  let url = "http://localhost:1717/pastry";

  const res = await fetch(url);
  const pastry = await res.json();

  return pastry;
};

const $users = document.querySelector("#users");

const renderPastry = async () => {
  let book = await getPastry();

  book.forEach((item) => {
    const $userTable = document.createElement("table");
    $userTable.classList.add("users-block");
    $userTable.innerHTML = `
            <tr>
              <td>${item.name}</td>
              <td>${item.ingredients}</td>
              <td>${item.inStock}</td>
            </tr>
        `;

    $users.append($userTable);
  });
};

renderPastry();
