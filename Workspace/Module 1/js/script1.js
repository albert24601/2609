function login(){
    let user = document.getElementById("user").value;
    let pwd = document.getElementById("pwd").value;
    
    
     if(user === "admin" && pwd === "secret"){
        alert("You have successfully signed in");
    }else{
        alert("Log-in failed");
    }

}