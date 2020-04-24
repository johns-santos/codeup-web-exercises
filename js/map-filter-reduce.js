const users5 = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLang = users5.filter(function (users) {
    return users.languages.length >= 3;
});

//TODO: Use .map to create an array of strings where each element is a user's email address
const emailList = users.map(function (users) {
    return users.email;
});
// DO The same as above with an ARROW function
let addressList = users.map(user => user.email);
console.log(addressList);


//TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
// Might be easier to understand to us "runningTotal" for first argument involving  SUM
const totalyearsOfExperience = users5.reduce((years, user) => {
    // console.log(years + user.yearsOfExperience);
    return years + user.yearsOfExperience;
}, 0);
console.log(totalyearsOfExperience);
// Not divide total years of experience by the number of users in array
let avg = (totalyearsOfExperience / users5.length);
console.log(avg);


// TODO: Use .reduce to get the longest email from the list of users.
let greeting = users5.reduce((runningGreeting, user) => {
    return runningGreeting += user.name + ', ';
}, "Your Instructors are: ");
greeting = greeting.substring(0, greeting.length - 2) + ".";
console.log(greeting);


// TODO: Bonus - Use .reduce to get the unique list of languages from the list of users.
let knownLanguages = users.reduce((knownLanguages, user) => {
    // filter the user.languages for the ones not included in languages list
    // for (let lang in languages) {
    //     console.log(lang);
    //     if (!languages.includes(lang))  languages.push(lang);\
    // }
    user.languages.forEach((language) => {
        if (knownLanguages.includes(language)) {
        } else {
            knownLanguages.push(language);
        }
    });
// languages.push(user.languages.filter((lang) => {
//     return !languages.includes(lang)
// }))

    return knownLanguages;
}, []);
