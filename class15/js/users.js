const urlUsers = "https://jsonplaceholder.typicode.com/users";

const listOfUsers = document.querySelector("#listOfUsers");

fetch(urlUsers)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(usuario =>{
            const li = document.createElement("li");
            li.textContent = usuario.name;
            listOfUsers.append(li);
        });
    });