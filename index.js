// Add your code here
function submitData(userName, userEmail) {
  const details = {
    name: userName,
    email: userEmail,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((response) => response.json())
    .then((data) => {
      const newId = document.createElement('p');
      newId.textContent = data.id;
      document.body.appendChild(newId);
    })
    .catch((error) => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = error.message;
      document.body.appendChild(errorMessage);
    });
}









