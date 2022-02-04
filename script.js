//Storing the html element with data-user-template inside the const
const userCardTemplate = document.querySelector("[data-user-template]");

//API JSONPlaceholder /users
//API that you can use to have fake data 
//Making a request with the fetch API (the fetch request is a promise)
fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => res.json()) //A response that will be converted to JSON
.then(data => {
     //Make a deep clone of all nodes inside(their contents) and stores inside the const card  
    const card = userCardTemplate.content.cloneNode(true).children[0];//Getting the first child that is the card with all the content inside
    /*console.log(card); //This will return something called #document-fragment, 
    and in order to use the content we just need to get the first child*/
}) //Other conversion to get our data

