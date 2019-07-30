/* Script to use JSON parse and stringify usage 
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
productObj = { productID: "1234", productName: "sfsfs", unitPrice: "15.00", quantity: "100" };
productStr = JSON.stringify(productObj);
filterField = ["productID", "quantity"];
productStrFilter = JSON.stringify(productObj, filterField);
console.log("JSON Object of JavaScript Object is: " + productStr);
console.log("JSON Object of JavaScript Object with filter is: " + productStrFilter);

productStr1 = JSON.parse(productStr);
console.log("Java Script object of received JSON string is: " + productStr1.productID + productStr1.productName +
    productStr1.unitPrice);