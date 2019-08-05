/* Script to exercise regular expression for a canadian postal code 
 * Author: HartCode programmer
 * Date: 08/05/2019
 */
"Use Script";
let codes = ["K1A 0B1", "ABC 123", "B3K 5X5", "76126", "K7H 1A6", "B0J 1N0"];
canadianZipCodePattern = /^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z]\s\d[A-Z]\d$/;

console.log(result);


for (let i = 0; i < codes.length; i++) {
    if (canadianZipCodePattern.test(codes[i]) == true) {
        console.log("matched");
    } else {
        console.log("unmatched");
    }
}