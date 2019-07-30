/* Script to exercise more date conversion datetoString functions / using different date forms
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
myBirthDay = new Date("03/16/1985");
myMomBirthDay = new Date("012 25 1955");
myDadBirthDay = new Date("1950, 12, 08");
console.log(myBirthDay.toLocaleString());
console.log(myMomBirthDay.toLocaleString());
console.log(myDadBirthDay.toLocaleString());