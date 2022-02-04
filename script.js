//Storing the html element with data-user-template inside the const
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
//API JSONPlaceholder /users
//API that you can use to have fake data 
//Making a request with the fetch API (the fetch request is a promise)
fetch("https://jsonplaceholder.typicode.com/users") 
.then(res => res.json()) //A response that will be converted to JSON
.then(data => {
  //Putting everything inside a loop of an array method forEach
  data.forEach(user => {
  //Make a deep clone of all nodes inside(their contents) and stores inside the const card  
  const card = userCardTemplate.content.cloneNode(true).children[0];//Getting the first child that is the card with all the content inside
  /*console.log(card); //This will return something called #document-fragment, 
  and in order to use the content we just need to get the first child*/
  //Getting the header(name) and body(email) to show in the HTML elements through the attributes
  const header = card.querySelector("[data-header]");
  const body = card.querySelector("[data-body]");
  header.textContent = user.name; //Taking only the property that we want to show in the html's card
  body.textContent = user.email; //When is setted the textContent replace any child nodes with the string specified
  userCardContainer.append(card); //Show every card with the properties name and email(append attach objects in the last child of the element)
  //console.log(user); //We are going to be using just the name and email properties
  })
}) //Other conversion to get our data

