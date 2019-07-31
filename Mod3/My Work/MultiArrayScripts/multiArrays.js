/* Script to exercise multi dimensional arrays
 * Author: HartCode programmer
 * Date: 07/31/2019
 */
"Use Strict";
let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Randy", "Mollye", "Ranse"],
    ["Eloise", "Robert"]
];

let numTeams = teamMembers.length;
for (let i = 0; i < numTeams; i++) {
    console.log("Team :" + i);
    let numMembers = teamMembers[i].length;
    for (let j = 0; j < numMembers; j++) {
        console.log(teamMembers[i][j]);
    }
}