
const resolved = Promise.resolve(1);
resolved.then(result => console.log('Promise resolved'));

const rejected = Promise.reject(new Error('Promise rejected'));
rejected.catch(error => console.log(error));
