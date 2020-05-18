// student score, total possible score
// 15 / 20 -> You got a C (75%)

let studentScore = function(numQuestions, numCorrect) {
    let letterGrade = '';
    let percentage = (numCorrect / numQuestions) * 100;

    if (percentage >= 90) {
        letterGrade = 'A';
    } else if (percentage >= 80) {
        letterGrade = 'B';
    } else if (percentage >= 70) {
        letterGrade = 'C';
    } else if (percentage >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }
    return `You got a ${letterGrade} (%${percentage})`;
};

let result = studentScore(20,14);
console.log(result);