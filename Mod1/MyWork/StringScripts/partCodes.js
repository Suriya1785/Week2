/* Script to exercise parsing functions
 * Author: HartCode programmer
 * Date: 07/29/2019
 */
"Use Strict";
partCode = ["ACME:123-L", "DI:12345-M", "ACE:1-12"];
for (let i = 0; i < partCode.length; i++) {
    let supplierCode = getSupplier(partCode[i]);
    console.log("supplierCode: " + supplierCode);
    let productNumber = getProductNumber(partCode[i]);
    console.log("productNumber: " + productNumber);
    let restOfName = getSize(partCode[i]);
    console.log("restOfName: " + restOfName);
}

/* function is to get supplier code by parsing on ":"
 * @param code = partCode is a string
 */
function getSupplier(code) {
    let supplierCode, pos;
    pos = code.indexOf(":");
    supplierCode = code.substr(0, pos);
    return supplierCode;
}

/* function is to get product number by parsing on ":" and "-"
 * @param code = partCode is a string
 */
function getProductNumber(code) {
    let productNumber, posColon, posDash;
    posColon = code.indexOf(":");
    posDash = code.indexOf("-");
    productNumber = code.substr(posColon + 1, posDash - posColon - 1);
    return productNumber;
}

/* function is to get product number by parsing on "-"  
 * @param code = partCode is a string
 */
function getSize(code) {
    let size, pos;
    posColon = code.indexOf(":");
    posDash = code.indexOf("-");
    restOfName = code.substr(posDash + 1);
    return restOfName;
}