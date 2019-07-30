/* Script to write simple function to display property of an object 
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Strict";
contact1 = {
    name: "Pursalane Faye",
    address: "121 Main Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
}

contact2 = {
    name: "Dummy1 DLast",
    address: "004 aist Street",
    city: "Zellia",
    state: "Connecticut",
    zip: "06142"
}
printContact(contact1);
printContact(contact2);

/* Function to accept and object and display them
 * @param = object contact
 */

function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zip);
}