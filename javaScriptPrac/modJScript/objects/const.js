// Const can not be reassigned.

const person = {
    age : 27
};

//Update const person variable
person.age = 28;

console.log(person);
console.log(person.age);


// If a variable is referenced once it can declared as CONST
// if the variable is referenced more than once it should be declared by LET
const gradeCalc = function (score, totalScore) {
    const percent = (score / totalScore) * 100
    let letterGrade = '';

    if(percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)!`;
};

const result = gradeCalc(9, 20);
console.log(result);