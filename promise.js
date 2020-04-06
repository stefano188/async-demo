
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1); // pending => resolved / fullfilled
        //reject(new Error('error message')); // pending => rejected
    }, 2000);
});

promise
    .then(result => console.log('Result', result))
    .catch(error => console.log(error.message));
