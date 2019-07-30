/* Script to exercise more date conversion datetoString functions / using different date forms
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
let date = new Date();
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = date.getMonth();
let year = date.getFullYear();
let day = date.getDay();
let dateNum = date.getDate();
console.log(dateNum + "-" + monthArray[month] + '-' + year + '(' + weekArray[day] + ')');