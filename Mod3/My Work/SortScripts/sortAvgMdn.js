/* Script to write average score, median using function, sort and loop 
 * Author: HartCode programmer
 * Date: 07/31/2019
 */
"Use Script";

testScore = [80, 100, 92, 83, 87, 86];

// Get Average
average = getAverage(testScore);
console.log("Average returned for the given test scores is: " + average);

// Sort the test Scores
testScore.sort(function(num1, num2) {
    if (num1 <= num2) {
        return -1;
    } else {
        return 1;
    }
});

// Print the sortedScore
for (let i = 0; i < testScore.length; i++) {
    console.log("Sorted Test Score :" + testScore[i]);
}

// calculate Median by passing sorted testScore
myMedian = getMedian(testScore);
console.log("Median for the given test score is: " + myMedian);

/* This function is to calculate the average for the passed array
 * @param scores (array) - List of test Scores
 */
function getAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total = scores[i] + total;
    }
    let avg = total / (scores.length);
    return avg;
}

/* This function is to calculate the average for the passed array
 * @param scores (sorted array) - List of test Scores
 */
function getMedian(scores) {
    let median, odd, even, medianPos1, medianPos2;
    console.log("length of the array:" + scores.length);
    if ((scores.length % 2) == 0) {
        even = true;
    } else {
        odd = true;
    }
    medianPos1 = Math.trunc(scores.length / 2);
    if (even) {
        medianPos2 = medianPos1 - 1;
        median = (scores[medianPos1] + scores[medianPos2]) / 2;
    } else {
        console.log("Median position 1: " + medianPos1);
        median = scores[medianPos1];
    }
    return median;
}