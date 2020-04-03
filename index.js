
console.log('Before');
getUser(1, (user) => {
    console.log('user', user);
    getRepositorie(user.gitHubUsername, (repos) => {
        console.log('repositories..', repos);
        // CALLBACK HELL or Christams Tree
    });
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({id: id, gitHubUsername: 'mosh'});
    }, 2000);
}

function getRepositorie(username, callback) {
    setTimeout(() => {
        console.log('Reading repositories from user', username);
        callback(['repo1','repo2']);
    }, 2000);
}
