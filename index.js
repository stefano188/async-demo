
console.log('Before');

getUser(1)
    .then(user => getRepositorie(user.gitHubUsername))
    .then(repos => getCommits(repos))
    .then(commits => console.log('commits', commits))
    .catch(error => console.log(error.message));

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user from database...');
            resolve({id: id, gitHubUsername: 'mosh'});
        }, 2000);
    });
}

function getRepositorie(username) {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            console.log('Reading repositories from user', username);
            resolve(['repo1','repo2']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['one','two']);
        }, 2000);
    });
}
