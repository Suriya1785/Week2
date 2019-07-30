/* Script to exercise to grab two string variables and calculate the date difference
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
let shortTermInsStartDateField = "July 30, 2019";
let shortTermInsStarts = new Date(shortTermInsStartDateField);
let shortTermInsEndsDateField = " ";
// No of milli Seconds per day
const milliSecPerDay = 1000 * 60 * 60 * 24;
shortTermInsStarts = shortTermInsStarts.getTime();
let shortTermInsExpirationMs = shortTermInsStarts + (90 * milliSecPerDay);
let shortTermInsEnds = new Date(shortTermInsExpirationMs);
let shortTermInsExpirationDate = shortTermInsEnds.toDateString();

console.log("Expiration date for the given policy start date (" + shortTermInsStartDateField + ") is :" + shortTermInsExpirationDate);