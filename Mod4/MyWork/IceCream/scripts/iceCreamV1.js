/*Description: window onload Init script to assign function on button for Ice cream Price calculator
 *Author: HartCode Programmer
 *Date:08/01/2019
 */

/* This function is called during window onload of the ice cream calculator page and 
 * assign function to the button
 * No parameters
 * Calls: function calcPrice
 */
"Use Strict";
window.onload = function() {
    let inputNoOfScoopsField = document.getElementById("inputNoOfScoops");
    let inputCheckboxHotFudgeField = document.getElementById("inputCheckboxHotFudge");
    let inputCheckboxSprinklesField = document.getElementById("inputCheckboxSprinkles");
    let inputCheckboxWhipCreamField = document.getElementById("inputCheckboxWhipCream");
    let errorMsgIdField = document.getElementById("errorMsgId");
    const calcPriceBtnField = document.getElementById("calcPriceBtn");
    calcPriceBtnField.onclick = function() {
        calcPrice(inputNoOfScoopsField, inputCheckboxHotFudgeField, inputCheckboxSprinklesField, inputCheckboxWhipCreamField, errorMsgIdField);
    };
}

/* This function calculates the monthly payment for the mortgage and Total cost of the mortage
 * Calls to: checkNumeric function
 * @param  inputNoOfScoopsField (string)        - Number of scoops entered from UI
 * @Param inputCheckboxHotFudgeField (string)   - UI checkbox for HotFudge
 * @Param inputCheckboxSprinklesField (string)  - UI checkbox for sprinkles
 * @Param inputCheckboxWhipCreamField (string)  - UI checkbox for whipCream
 * Called by: window.onload
 */
function calcPrice(inputNoOfScoopsField, inputCheckboxHotFudgeField, inputCheckboxSprinklesField, inputCheckboxWhipCreamField, errorMsgIdField) {
    // Assign/convert read string for calculation
    let noOfScoops = parseInt(inputNoOfScoopsField.value);
    let validateNum = false;
    validateNum = checkNumeric(noOfScoops);
    // Do not calculate if failed in number validation
    if (validateNum == true) {
        if (noOfScoops > 0) {
            switch (noOfScoops) {
                case 1:
                    price = 2.50;
                    break;
                case 2:
                    price = 3.75;
                    break;
                case 3:
                    price = 5;
                    break;
                default:
                    break;
            }
            // Add price for Toppings, if chosen
            if (inputCheckboxHotFudgeField.checked) {
                price += 1.25;
            }
            if (inputCheckboxSprinklesField.checked) {
                price += 0.25;
            }
            if (inputCheckboxWhipCreamField.checked) {
                price += 0.75;
            }
        }

        // calculation of monthly payment
        document.getElementById("priceResult").innerHTML = "Total : $ " + price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        // success message
        if (isNaN(price)) {
            document.getElementById("errorMsgId").innerHTML = "Error";
            $(errorMsgIdField).removeClass("badInput");
        } else {
            document.getElementById("errorMsgId").innerHTML = "Success";
            $(errorMsgIdField).removeClass("badInput");
        }

    } else {
        // clear out the monthly payment and total cost if failed in error condition
        document.getElementById("priceResult").innerHTML = " ";
    }
}

/* This function is to validate non numeric character at the starting of the field and set error flag
 * populate error message field
 * @param (number) - user entered number of Scoops   
 */
function checkNumeric(numScoops) {
    let errorMsg, isError = false;
    // set Error flag based on number validation
    if ((isNaN(numScoops) || (numScoops <= 0))) {
        errorMsg = "Enter valid number in 'How many Scoops field'";
        isError = true;
    } else if (numScoops >= 4) {
        errorMsg = "Valid number are 1 thru 3'";
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