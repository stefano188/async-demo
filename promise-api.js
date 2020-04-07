
const resolved = Promise.resolve(1);
resolved.then(result => console.log('Promise resolved'));

const rejected = Promise.reject(new Error('Promise rejected'));
rejected.catch(error => console.log(error));

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 2...');
        resolve(2);
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async operation 3...');
        reject(new Error('promise rejected'));
    }, 2000);
});

const p4 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('async operation 4...');
        resolve(4);
    }, 2000);
});

// wait for all promises to be resolved
Promise.all([p1, p2])
    .then((result) => console.log('All promises resolved', result))

// if at least one promise is rejected, then All promises are rejected
Promise.all([p3, p4])
    .then((result) => console.log('All promises resolved', result))
    .catch((error) => console.log('At least one promise failure', error.message));

// When the first promise is resolved, the result is given
Promise.race([p4, p1])
    .then((result) => console.log('First promise resolved', result))
    .catch((error) => console.log('At least one promise failure', error.message));
