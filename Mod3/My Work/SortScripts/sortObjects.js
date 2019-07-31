/* Script to write lunch bill for list of items by running through 2D array of objects
 * Author: HartCode programmer
 * Date: 07/31/2019
 */
"Use Script";
objs = [
    { name: "Dana", age: 60 },
    { name: "Natalie", age: 35 },
    { name: "Brittany", age: 33 },
    { name: "Zachary", age: 29 }
];

objs.sort(compareNameAscending);
console.log("Name in ascending order");
for (let i = 0; i < objs.length; i++) {
    console.log("{name:" + objs[i].name + ", " + "age:" + objs[i].age + "}");
}
objs.sort(compareNameDescending);

console.log("Name in descending order");
for (let i = 0; i < objs.length; i++) {
    console.log("{name:" + objs[i].name + ", " + "age:" + objs[i].age + "}");
}
objs.sort(compareAgeDescending);
console.log("Age in descending order");
let temp = JSON.stringify(objs);
console.log("JSON object :" + temp);

// objs.sort(compareAgeAscending);
//Anonymous function to sort age in ascending order
objs.sort(function(sortAge1, sortAge2) {
    return (sortAge1.age - sortAge2.age);
});
console.log("Age in ascending order");
let temp1 = JSON.stringify(objs);
console.log("JSON object :" + temp1);


/* Function to align the name item in ascending order
 * @param sortName1 (String) = this is the 1st occurrences of sort order
 * @param sortName2 (String)  = this is the 2nd occurrences of sort order
 */
function compareNameAscending(sortName1, sortName2) {

    if (sortName1.name <= sortName2.name) {
        return -1;
    } else {
        return 1;
    }
}

/* Function to align the name item in descending order
 * @param sortName1 (String) = this is the 1st occurrences of sort order
 * @param sortName2 (String)  = this is the 2nd occurrences of sort order
 */
function compareNameDescending(sortName1, sortName2) {

    if (sortName1.name >= sortName2.name) {
        return -1;
    } else {
        return 1;
    }
}

/* Function to align the age item in descending order
 * @param sortAge1 (Number) = this is the 1st occurrences of sort order
 * @param sortAge2 (Number)  = this is the 2nd occurrences of sort order
 */
function compareAgeDescending(sortAge1, sortAge2) {

    return (sortAge2.age - sortAge1.age);
}

/* Function to align the age item in ascending order
 * @param sortAge1 (Number) = this is the 1st occurrences of sort order
 * @param sortAge2 (Number)  = this is the 2nd occurrences of sort order
 */
function compareAgeAscending(sortAge1, sortAge2) {
    return (sortAge1.age - sortAge2.age);
}