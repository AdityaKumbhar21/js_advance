// Promises in javascript:

// Promise is an object representing the eventual completion or rejection of asynchronous operation.


const url = "https://api.github.com/users/AdityaKumbhar21";

const user = fetch(url);    // fetch() is a function provided by browser to fetch data from external sources which returns a promis object

user.then((data) => {   // then assures us that the callback fucntion will be invoked once the fetch returns some value
    return data.json()
})
.then((res) =>{
    console.log(res)
})
.catch((err) => {   // catching the error if any in fecthing the external data
    console.log(err)
})

