
function passwordConf(){
    let password1 = document.getElementById("pw1").value;
    let password2 = document.getElementById("pw2").value;

               if (password1===password2) {
              alert("Password Mismatch");
                } else {
                alert("Password Matched!");
                    }
}