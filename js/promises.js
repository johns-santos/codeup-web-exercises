// Promises - the function below will console log something after
// a specified amount of time.
const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

wait(5000).then(() => console.log('You\'ll see this after 5 seconds'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
console.log('Hello');

const token = gitHubToken;
        // Github Fetch request
const github = fetch('https://api.github.com/users/', {headers: {Authorization: `token ${token}`}});


        // Initiate fetch request for user data
        github
            // .then(res => res.json()).then(json
            .then(response => response.json())
            // .then(users => users.map(user => user.login))
            .then(data => {
                console.log(data);
                // Display output requires loop
                let output = '';
                data.forEach(function (user) {
                    output += `<li>${user.login}</li>`;
                });
                //     console.log(user.login);
                // });
                document.getElementById('output').innerHTML = output;
            })
            .catch(err => console.log(err));




const lastCommit = (username)=> {
    // return a promise that resolves to username last commit time
    let url = `https://api.github.com/users/${username}`;
    fetch(url, {headers: {Authorization: `token ${token}`}})
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(data => data.find(event => event.type === "PushEvent")
            .then(event => event.created_at)
            .then(date => console.log(date)))
};
console.log(lastCommit('daniel.fryar'));
