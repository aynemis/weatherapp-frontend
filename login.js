// Insert your code here
document.querySelector('#register').addEventListener('click', function (){
    fetch("https://weatherapp-backend-fctd.vercel.app/users/signup", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: document.querySelector('#registerName').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result){
            window.location.assign("https://weatherapp-backend-fctd.vercel.app/frontend/index.html")
            console.log("user saved in DB")
            return true
        }else{
            console.log('erreur')
        }
    })
})


document.querySelector('#connection').addEventListener('click', function (){
    fetch("https://weatherapp-backend-fctd.vercel.app/users/signin", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: document.querySelector('#connectionEmail').value,
            password: document.querySelector('#connectionPassword').value,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result){
            window.location.assign("https://weatherapp-backend-fctd.vercel.app/frontend/index.html")
            console.log("user logged in")
            return true
        }else{
            console.log('erreur')
        }
    })
})