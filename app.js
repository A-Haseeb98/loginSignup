function signup(){

var name = document.getElementById('name').value;
var email = document.getElementById('signEmail').value;
email = email.toLowerCase();
var password = document.getElementById('signPassword').value;

user = ({ userName: name, userEmail: email, userPassword: password })
document.getElementById('name').value = "";
document.getElementById('signEmail').value = "";
document.getElementById('signPassword').value = "";
const Http = new XMLHttpRequest();
const url = 'https://login-signup-98.herokuapp.com';
// const url = 'http://localhost:5000';

Http.open("POST", url + '/signup');
Http.setRequestHeader("Content-Type", "application/json");
Http.send(JSON.stringify(user));

Http.onreadystatechange = (e) => {
   console.log(Http.responseText)
    document.getElementById('response').innerHTML = Http.responseText;
}

return false

}

function login(){
    var uEmail = document.getElementById('logEmail').value
    var uPassword = document.getElementById('logPassword').value

    const Http = new XMLHttpRequest();
    const url = 'https://login-signup-98.herokuapp.com';
    // const url = 'http://localhost:5000';

    Http.open("POST", url + '/login');
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({ email: uEmail, pass: uPassword }));
    document.getElementById('logEmail').value = ""
    document.getElementById('logPassword').value = ""
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
        document.getElementById('result').innerHTML = Http.responseText;
    }
    return false;
}

