// Add your code here
function submitData(userName, userEmail){
    
    let details = {
    name: userName,
    email: userEmail,
    }

    const userDetails = {
        method : 'POST',
        headers :{
            "Content-Type" : 'application/json',
            "Accept" : "application/json"
        },
        body : JSON.stringify(details), 
    }     

    return fetch ("http://localhost:3000/users" , userDetails)
    .then(resp => resp.json())
    .then(userData => console.log(userData))
}







