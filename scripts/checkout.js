function validateForm() {
    var x = document.forms["myForm"]["fName", "lName", "eMail","city", "adress", "zipCode"].value;
    if (x == "") {
        alert("All textfields needs to be filled out with the exception of phonenumber and comments");
        return false;
    }
}