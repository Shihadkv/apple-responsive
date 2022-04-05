var attempt = 3;
function validate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "bshihad@gmail.com" && password == "12345") {
        alert("Login successfully");
        window.location = "index.html";
        return false;
    }
    else {
        attempt--;
        alert("You have left " + attempt + " attempt;");
        if (attempt == 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}