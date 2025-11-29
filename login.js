document.getElementById("loginBtn").addEventListener("click", function(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if(email === "admin@gmail.com" && pass === "admin1234"){
        alert("Login success");
        window.location.href = "admin.html";
    }
    else{
        alert("Wrong email or password");
    }


})