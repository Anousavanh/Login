
    function handleSubmit() {
        let login = document.getElementById("login").value;
        let password = document.getElementById("password").value;
        if(login == "user" && password == "user"){
            window.location.href = "userpage.html";
        }
        else if(login == "admin" && password == "admin"){
            window.location.href = "admin.html";
        }
        else{
            window.location.href = "failpage.html";
        }
    }

    function RegSubmit() {
        let Email = document.getElementById("Email").value;
        let password = document.getElementById("password").value;
        let Repassword = document.getElementById("Repassword").value;
        window.location.href = "ui.html";
    }

    function SignupSubmit() {
        window.location.href = "register.html";
        
    }