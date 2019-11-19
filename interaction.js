function validateForm() {
    var x = document.forms["myForm"]["first name"].value;
    if (x == "" || x==null) {
        alert("email must have content");
        return false;
    }
    else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
  