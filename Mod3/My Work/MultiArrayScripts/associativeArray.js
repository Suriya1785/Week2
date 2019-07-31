/* Script for associate arrays
 * Author: HartCode programmer
 * Date: 07/31/2019
 */
let person = { name: "Pursalane", age: 9, gender: "Female" };

console.log(person["name"] + " " + person["age"] + " " + person["gender"]);

for (let value in person) {
    console.log(value + " = " + person[value]);
}