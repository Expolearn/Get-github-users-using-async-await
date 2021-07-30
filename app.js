const fetch = require('node-fetch');

async function getUsers() {
  let response = await fetch("https://api.github.com/users");
  let data = await response.json();
  return data;
}

getUsers().then((user) => {
user.forEach(user => {
  console.log(user);
});
});