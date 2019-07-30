/* Script to exercise simple string functions
 * Author: HartCode programmer
 * Date: 07/29/2019
 */
"Use Strict";
// let name = "Brenda Kaye";
// let fname, lname;

// name = ["Brenda Kaye", "Ian Auston", "Siddalee Grace", "Cher", "Dana Lynn Wyatt"];
let name = ["Brenda Kaye", "Cher", "Dana Lynn Wyatt"];

// let pos = name.indexOf(" ");
for (let i = 0; i < name.length; i++) {
    parseAndDisplayName(name[i]);
}


// //Using Slice function:
// fname = name.slice(0, pos);
// lname = name.slice(pos + 1, name.length);
// console.log(" using Slice fname : " + fname + " Lname: " + lname);

// // Using substring

// // fname = name.substring(0, pos);
// // // lname = name.substring(pos + 1, name.length);
// // lname = name.substring(pos + 1);
// // console.log("Using Substring fname : " + fname + " Lname: " + lname);

// // Using substr:
// fname = name.substr(0, pos);
// lname = name.substr(pos + 1);
// console.log("Using substr fname : " + fname + " Lname: " + lname);

/* function is to parse and display the name and limit them up to three spaces as delimiter in the name
 * @param name : is a string
 */
function parseAndDisplayName(name) {
    let fname, lname, pos1, pos2;
    pos1 = name.indexOf(" ");
    pos2 = name.lastIndexOf(" ");

    if (pos1 == -1) {
        console.log("Name : " + name);
        console.log("Only Name : " + name);
    } else if (pos1 == pos2) {
        fname = name.substr(0, pos1);
        lname = name.substr(pos1 + 1);
        console.log("Name :" + fname + " " + lname);
        console.log("First name : " + fname);
        console.log("Last name : " + lname);
    } else {
        fname = name.substr(0, pos1);
        mname = name.substr(pos1 + 1, pos2 - pos1);
        lname = name.substr(pos2 + 1);
        console.log("Name :" + fname + " " + mname + " " + lname);
        console.log("First name : " + fname);
        console.log("Middle name : " + mname);
        console.log("Last name : " + lname);
    }
}