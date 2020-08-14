var validate = () => {
    var surName = document.patientregistration.surName;
    var givenName = document.patientregistration.givenName;
    var dateofBirth = document.patientregistration.dateofBirth;
    var placeofResidence = document.patientregistration.placeofResidence;
    var occupation = document.patientregistration.occupation;
    

    //validating username
    if (surName.value.length == ""){
        surName.style.border = '5px solid red';
        // alert("User elements should not be empty");
}
        else {
            username.style.border = '5px solid green';
        }
    if (surName.value.length < 1 || username.value.length > 16){
        surName.style.border = '1px solid red';
        document.getElementById("message").innerHTML="This field is required";
        // document.getElementById("message").style="color: red, font-size: 5px".innerHTML="invalid"
        document.getElementById("message").style =
                "color: red; font-family:Arial, Helvetica, sans-serif; font-size: 8px;";
        document.getElementById("star").innerHTML="*";
        document.getElementById("star").style =
                "color: red; font-family:Arial, Helvetica, sans-serif; font-size: 8px;";

            
        // alert("User name should be between 5 & 12");
}
        else{
            surName.style.border = '5px solid green';
        }
    }

    