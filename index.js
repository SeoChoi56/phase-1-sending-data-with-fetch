// Add your code here
function submitData(myName, myEmail) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: myName,
            email: myEmail
        })
    })
    .then(res => res.json())
    .then(function(data) {document.querySelector("body").append(data.id)})
    .catch(function(error) {
        alert("Unauthorized Access");
        console.log(error.message);
        document.querySelector("body").append(error.message)
    })
    
}

submitData("seo", "42WallabyWAY@gmail.com");