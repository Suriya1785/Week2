/* Script to write lunch bill receipt by running through an array of objects
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Script";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacomole", price: 5.25 },
    { item: "Sweet tea", price: 2.79 }
];

let subTotal = 0;
for (let i = 0; i < lunch.length; i++) {
    subTotal = lunch[i].price + subTotal;
}

console.log("SubTotal : " + subTotal.toFixed(2));
let tax = subTotal * .08;
console.log("Tax amount : " + tax.toFixed(2));
let total = subTotal + tax;
console.log("Total without tax: " + total.toFixed(2));
let tip = total * 0.18;
console.log("Tip amount: " + tip.toFixed(2));
let totalDue = total + tip;
console.log("Total Due with 18% tip is: " + totalDue.toFixed(2));