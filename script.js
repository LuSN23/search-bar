//API JSONPlaceholder /users
//API that you can use to have fake data 
//Making a request with the fetch API (the fetch request is a promise)
fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => res.json()) //A response that will be converted to JSON
.then(data => {}) //Other conversion to get our data