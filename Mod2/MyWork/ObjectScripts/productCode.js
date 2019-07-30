/* Script to write function to take string as parameter and format them as supplierCode:productNumber-size
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
let supplier1;
let partCode1 = "XYZ:1234-L";
supplier1 = parsePartCode(partCode1);
console.log(supplier1.supplierCode + ":" + supplier1.productNumber + "-" + supplier1.restOfName);

/* function is to accept a string and parse them based on : and -, return it in object
 * @param partCode is a string
 */

function parsePartCode(partCode) {
    let supplier = {
        supplierCode: "",
        productNumber: "",
        size: ""
    };
    let posColon = partCode.indexOf(":");
    let posDash = partCode.indexOf("-");
    let supplierCodeWork = partCode.substr(0, posColon);
    let productNumberWork = partCode.substr(posColon + 1, posDash - posColon - 1);
    let restOfNameWork = partCode.substr(posDash + 1);
    supplier.supplierCode = supplierCodeWork;
    supplier.productNumber = productNumberWork;
    supplier.restOfName = restOfNameWork;
    return supplier;
}