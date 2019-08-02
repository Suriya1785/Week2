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
    const inputDepartureCityField = document.getElementById("inputDepartureCity");
    let inputArrivalCityField = document.getElementById("inputArrivalCity");
    let inputTravelDateField = document.getElementById("inputTravelDate");
    let errorMsgIdField = document.getElementById("errorMsgId");
    let PossibleFlightListField = document.getElementById("PossibleFlightList");
    const ShowAvailableFlightBtnField = document.getElementById("ShowAvailableFlightBtn");

    ShowAvailableFlightBtnField.onclick = function() {
        let validateUserInput = false;
        // Assign/convert read string for calculation
        let departureCity = inputDepartureCityField.value;
        let arrivalCity = inputArrivalCityField.value;
        errorMsgId = errorMsgIdField.value;
        let travelDate = new Date(inputTravelDate.value);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let listOfFlights = [
            { flightNo: "A241", dep: "BDL", arr: "LAS", timeDepart: "8:00 AM", daysFlown: "SUSA", cost: 350 },
            { flightNo: "141", dep: "BDL", arr: "JFK", timeDepart: "8:00 AM", daysFlown: "SUMOTUWETHFRSA", cost: 250 },
            { flightNo: "A231", dep: "BDL", arr: "JFK", timeDepart: "12:00 AM", daysFlown: "SUMOTUWESA", cost: 450 },
            { flightNo: "B221", dep: "BDL", arr: "JFK", timeDepart: "3:00 AM", daysFlown: "SUMOWESA", cost: 550 },
            { flightNo: "EA221", dep: "CHK", arr: "JFK", timeDepart: "5:00 AM", daysFlown: "SUWESA", cost: 750 },
            { flightNo: "EH321", dep: "JFK", arr: "BDL", timeDepart: "8:00 AM", daysFlown: "SUSA", cost: 500 },
        ];

        // validate User input
        validateUserInput = checkNumeric(departureCity, arrivalCity, errorMsgIdField, travelDate);
        if (!validateUserInput) {
            PossibleFlightListField.innerHTML = " ";
        } else {
            let day = travelDate.getDay();
            let selectDay = (days[day].substring(0, 2)).toUpperCase();
            let printOutput;
            console.log("selectDay");
            let possibleFlights = getAvailableFlights(listOfFlights, departureCity, arrivalCity, selectDay);

            // Publish the result to document and concatenate the output
            printOutput = ("FlightNo    -    Departure   -    Arrival    -    TimeDepart   -   DaysFlown   -    Cost    " + "<br />");
            for (let i = 0; i < possibleFlights.length; i++) {
                console.log("Departure City:" + possibleFlights[i].dep + " Arrival City:" + possibleFlights[i].arr + " Flight No:" + possibleFlights[i].flightNo + " Date:" + possibleFlights[i].timeDepart + " Cost:" + possibleFlights[i].cost);
                printOutput = printOutput + ("    " + possibleFlights[i].flightNo + "    " + possibleFlights[i].dep + "    " + possibleFlights[i].arr +
                    "    " + possibleFlights[i].timeDepart + "    " + possibleFlights[i].daysFlown + "    " + possibleFlights[i].cost + "<br />");
            }
            PossibleFlightListField.innerHTML = printOutput;
            // success message
            if (possibleFlights.innerHTML == "") {
                document.getElementById("errorMsgId").innerHTML = "Error";
                $(errorMsgIdField).removeClass("badInput");
            } else {
                document.getElementById("errorMsgId").innerHTML = "Success";
                $(errorMsgIdField).removeClass("badInput");
            }
        }
    };
}

/*Function to calculate the base car rental based on the car type chosen
 * @param carType (dropdown) - selected car type
 */
function getAvailableFlights(listOfFlightsObj, departureCity, arrivalCity, dayflown) {
    let listOfAvailableFlights = [];
    let indexOfAvailableFlights = listOfAvailableFlights.length;
    for (let i = 0; i < listOfFlightsObj.length; i++) {
        if (listOfFlightsObj[i].dep == departureCity && listOfFlightsObj[i].arr == arrivalCity) {
            console.log(listOfFlightsObj[i].dep);
            console.log(listOfFlightsObj[i].arr);
            console.log(listOfFlightsObj[i].flightNo);
            console.log(listOfFlightsObj[i].timeDepart);
            console.log(listOfFlightsObj[i].daysFlown);
            let daysflown = listOfFlightsObj[i].daysFlown;
            console.log(daysflown);
            if (((listOfFlightsObj[i].daysFlown).indexOf(dayflown)) != -1) {
                listOfAvailableFlights[indexOfAvailableFlights] = listOfFlightsObj[i];
                indexOfAvailableFlights++;
            }

        }
    }
    return listOfAvailableFlights;
}


/* This function is to validate non numeric character at the starting of the field and set error flag
 * populate error message field
 * @param (number) - user entered number of Scoops   
 */
function checkNumeric(departure, arrival, errorMsgIdField, travelDate) {
    let errorMsg, isError = false;
    // set Error flag based on number validation
    if (departure == "") {
        errorMsg = "Enter departure city";
        isError = true;
    } else if (arrival == "") {
        errorMsg = "Enter arrival city";
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