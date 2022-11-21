
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