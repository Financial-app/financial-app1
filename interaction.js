function validateForm() {
    var x = document.forms["myForm"]["emailSend"].value;
    if (x == "") {
        alert("email must have conent");
        return false;
        text="no conetent";
    }
    else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
  