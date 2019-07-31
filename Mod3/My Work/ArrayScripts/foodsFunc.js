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

let receipt = getReceipt(lunch);
console.log("subTotal   : " + receipt.subTotal);
console.log("Tip Amount : " + receipt.tipAmount);
console.log("Tax Amount : " + receipt.taxAmount);
console.log("Total Due  : " + receipt.totalDue);

/* function to accept lunch bill and generate a receipt object
 * @param: lunch is an object
 */
function getReceipt(lunchReceiptList) {
    let subTotalNum = 0;
    let receiptObj = {
        subTotal: "",
        taxAmount: "",
        totalWithoutTax: "",
        tipAmount: "",
        totalDue: ""
    };
    for (let i = 0; i < lunchReceiptList.length; i++) {
        subTotalNum = lunchReceiptList[i].price + subTotalNum;
    }
    let taxAmountNum = subTotalNum * .08;
    let totalWithoutTaxNum = subTotalNum + taxAmountNum;
    let tipAmountNum = totalWithoutTaxNum * 0.18;
    let totalDueNum = totalWithoutTaxNum + tipAmountNum;
    receiptObj.taxAmount = taxAmountNum.toFixed(2);
    receiptObj.subTotal = subTotalNum.toFixed(2);
    receiptObj.tipAmount = tipAmountNum.toFixed(2);
    receiptObj.totalWithoutTax = totalWithoutTaxNum.toFixed(2);
    receiptObj.totalDue = totalDueNum.toFixed(2);
    return receiptObj;
}