
async function displayCommits() {
    const user = await getUser(1);
    const repos = await getRepositorie(user.gitHubUsername);
    const commits = await getCommits(repos);
    console.log('user commits', commits);
}
displayCommits();

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
