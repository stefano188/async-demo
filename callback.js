
console.log('Before');
getUser(1, findUser);
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({id: id, gitHubUsername: 'mosh'});
    }, 1200);
}

function getRepositorie(username, callback) {
    setTimeout(() => {
        console.log('Reading repositories from user', username);
        callback(['repo1','repo2']);
    }, 1200);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        callback(['one','two']);
    }, 1000);
}

function displayCommits(commits) {
    console.log('logging commits', commits);
}

function findRepositories(repos) {
    console.log('repositories..', repos);
    const repo = repos[0];
    getCommits(repo, displayCommits);
}

function findUser(user) {
    console.log('user', user);
    getRepositorie(user.gitHubUsername, findRepositories);
}
