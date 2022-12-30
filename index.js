/**
Challenge:

Fetch a list of todos from the JSON Placeholder API:

BaseURL: https://apis.scrimba.com/jsonplaceholder/
Endpoint: /todos

This time however, explicitly set the request method to "GET"
console.log the results
*/

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
  method: "GET"
})
  .then(response => response.json())
  .then(data => console.log(data))
