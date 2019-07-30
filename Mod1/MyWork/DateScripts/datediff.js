/* Script to exercise to grab two string variables and calculate the date difference
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
let bootcampStartsField = "July 22, 2019";
let bootcampStarts = new Date("July 22, 2019");
let bootcampEndsField = "September 6, 2019";
let bootcampEnds = new Date("September 6, 2019");
const milliSecPerDay = 1000 * 60 * 60 * 24;
let bootcampStartsMs = bootcampStarts.getTime();
let bootcampEndMs = bootcampEnds.getTime();
// start day is not included during the difference, hence subtracted 1
let dateDiffMs = bootcampEndMs - bootcampStartsMs - milliSecPerDay;
let dateDiffDays = Math.ceil(dateDiffMs / milliSecPerDay);
console.log("Difference between two given Dates -  " + bootcampStartsField + " and " + bootcampEndsField + " is: " + dateDiffDays);