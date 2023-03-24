// called when submit is clicked

function checkForm() {
        // get form into variable
    var theForm = document.getElementById("myForm");
    
        // get length of form
    var formLength = theForm.elements.length;
    
        // loop and look for empty values
        for (var index=0; index < formLength; index++) {
    
            // check empty & display error if needed
            if (theForm.elements[index].value == "") {
    
                document.getElementById("errorMsg").innerHTML = "Please complete all fields below";
                theForm.elements[index].focus();
                return; // stops loop
            } else {
                // clear old errors
                document.getElementById("errorMsg").innerHTML = "";
    
            }
        }
    }
    