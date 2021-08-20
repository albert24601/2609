const password1 = document.getElementById("pw1").value;
const password2 = document.getElementById("pw2").value;
const form = document.getElementById("loginForm").value;

form.addEventListener('submit', (e) =>{
    if (password1!=password2) {
        alert("Password Mismatch")
    } else {
        alert("Password Matched!")
    }})
