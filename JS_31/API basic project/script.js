// logic 
// we will use 2 functions. one when we click a button and to get the details from the API
// and another to display the user details on the card

document.querySelector('#button').addEventListener('click', function() {
  let xhr = new XMLHttpRequest();
  let url = 'https://api.github.com/users/kaustubhya'

  // open a connection
  xhr.open('GET', url, true);

  // work on the states
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // 200 -> OK success status
      let data = JSON.parse(xhr.responseText);
      // string to json

      // function called that displays the user details on the card
      displayUserDetails(data);
    }
  };
  xhr.send();
});

function displayUserDetails(user) {
  let userDetailsDiv = document.querySelector('#user-details');

  userDetailsDiv.innerHTML = `
  <img src="${user.avatar_url}" alt="${user.name}">
  <h2>${user.name}</h2>
  <p>Followers: ${user.followers}</p>
  `
}