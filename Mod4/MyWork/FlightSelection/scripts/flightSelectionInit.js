/* Script to display the list of available flights
 * Author: HartCode programmer
 * Date: 08/01/2019
 */
"Use Script";
// inputs
let departureCity = "BDL";
let arrivalCity = "JFK";
let travelDate = "08/06/2019";
let possibleFlights;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let listOfFlights = [
    { flightNo: "A241", dep: "BDL", arr: "LAS", timeDepart: "8:00 AM", daysFlown: "SUSA", cost: 350 },
    { flightNo: "141", dep: "BDL", arr: "JFK", timeDepart: "8:00 AM", daysFlown: "SUMOTUWETHFRSA", cost: 250 },
    { flightNo: "A231", dep: "BDL", arr: "JFK", timeDepart: "12:00 AM", daysFlown: "SUMOTUWESA", cost: 450 },
    { flightNo: "B221", dep: "BDL", arr: "JFK", timeDepart: "3:00 AM", daysFlown: "SUMOWESA", cost: 550 },
    { flightNo: "EA221", dep: "CHK", arr: "JFK", timeDepart: "5:00 AM", daysFlown: "SUWESA", cost: 750 },
    { flightNo: "EH321", dep: "JFK", arr: "BDL", timeDepart: "8:00 AM", daysFlown: "SUSA", cost: 500 },
];

let dateWork = new Date(travelDate);
let day = dateWork.getDay();
let selectDay = (days[day].substring(0, 2)).toUpperCase();
console.log(selectDay);

possibleFlights = getAvailableFlights(listOfFlights, departureCity, arrivalCity, selectDay);
// JSON.stringify(possibleFlights);
// console.log(possibleFlights);

for (let i = 0; i < possibleFlights.length; i++) {
    console.log("Departure City:" + possibleFlights[i].dep + " Arrival City:" + possibleFlights[i].arr + " Flight No:" + possibleFlights[i].flightNo + " Date:" + possibleFlights[i].timeDepart + " Cost:" + possibleFlights[i].cost);
}

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