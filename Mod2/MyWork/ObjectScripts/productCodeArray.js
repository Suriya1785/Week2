/* Script to write function to take string as parameter and format them as supplierCode:productNumber-size
 * using array and push, array and object arrays
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
// let supplier1Array = new Array();
let supplier1Array = [];
let partCode1 = ["XYZ:1234-L", "ABC:2345-R", "RCY:1345-C"];

for (let i = 0, j = 0; i < partCode1.length; i++) {
    console.log("j" + j);
    let supplier2 = parsePartCode(partCode1[i]);
    supplier1Array[j] = supplier2;
    j++;
    // Push adds the items to the end of array. JavaScript automatically handles it, No need to use push
    // supplier1Array.push(supplier2);
}

for (let j = 0; j < supplier1Array.length; j++) {
    console.log(supplier1Array[j].supplierCode + ":" + supplier1Array[j].productNumber + "-" + supplier1Array[j].restOfName);
}

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