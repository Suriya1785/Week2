/* Script to write average score using for loop
 * Author: HartCode programmer
 * Date: 07/30/2019
 */
"Use Script";

testScore = [45, 14, 85, 75, 96, 35, 80];
average = getAverage(testScore);
console.log("Average returned for the given test scores is: " + average);

function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = scores[i] + total;
    }
    let avg = total / (scores.length);
    return avg;
}