/*Description: window onload Init script to assign function on button for Car Rental calculator
 *Author: HartCode Programmer
 *Date:08/05/2019
 */

/* This function is called during window onload of the car(t) Rental calculator page and 
 * assign function to the button
 * No parameters
 * Calls: function checkUserInput(), resetForm()
 */
"Use Strict";
window.onload = function() {
    let inputPostalCodeField = document.getElementById("inputPostalCode");
    let errorMsgIdField = document.getElementById("errorMsgId");
    let resultField = document.getElementById("result");

    const validateBtnField = document.getElementById("validateBtn");
    const resetBtnField = document.getElementById("resetBtn");
    resetBtnField.onclick = resetForm;

    validateBtnField.onclick = function() {
        let validateUserInput = false;
        // Assign/convert read string for calculation
        let inputPostalCode = inputPostalCodeField.value;
        errorMsgId = errorMsgIdField.value;

        // validate User input
        validateUserInput = checkUserInput(inputPostalCode, errorMsgIdField);
        if (!validateUserInput) {
            resultField.innerHTML = " ";
        } else {
            let isPostalCodeValid = getValidPostalCode(inputPostalCode);
            // Publish the result to document
            if (isPostalCodeValid) {
                resultField.innerHTML = "Valid postal code";
            } else {
                resultField.innerHTML = "Invalid postal code";
            }

            // success message
            if (resultField.innerHTML == " ") {
                document.getElementById("errorMsgId").innerHTML = "Error";
                $(errorMsgIdField).removeClass("badInput");
            } else {
                document.getElementById("errorMsgId").innerHTML = "Success";
                $(errorMsgIdField).removeClass("badInput");
            }
        }
    };

    /* Function is to reset the results section in the hotel page
     *  @param = None
     * Uses the field defined with in onload function
     * Calls to None
     */

    function resetForm() {
        resultField.innerHTML = " ";
        errorMsgIdField.innerHTML = " ";
    }
}

/* Function is to validate the postal code and return true or false
 * @param = inputPostalCode (string) - it is postal code
 * Uses the field defined with in onload function
 * Calls to None
 */

function getValidPostalCode(inputPostalCode) {
    canadianZipCodePattern = /^[A-Z]\d[A-Z]\s\d[A-Z]\d$/;
    if (canadianZipCodePattern.test(inputPostalCode) == true) {
        return true;
    } else {
        return false;
    }
}


/* This function is to validate non numeric character at the starting of the field and set error flag
 * populate error message field
 * @param (number) - user entered postal code 
 * @param (string) - Error message field to build appropriate error message
 */
function checkUserInput(inputPostalCode, errorMsgIdField) {
    let errorMsg, isError = false;

    // set Error flag based on number validation
    if (inputPostalCode == " ") {
        errorMsg = "Enter postal code";
        isError = true;
    } else {
        isError = false;
    }
    // Set attribute and content for para tag - Error message / Success
    if (isError == true) {
        document.getElementById("errorMsgId").innerHTML = errorMsg;
        $(errorMsgIdField).addClass("badInput");
    } else {
        return true;
    }
}