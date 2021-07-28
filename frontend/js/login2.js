
function validate()
{
    
    var useremail = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if(useremail == "admin@gmail.com" && password == "admin")
    {
        alert("login successfull");
        return false;
    }
    else{
        alert("Invalid Credentials");
    }

}