# URLs & REST

## HTTP requests

components of a request

1. path (ur)
2. method
   + GET, POST, PUT, DELETE
   + other (PATCH, OPTIONS, etc)
3. body
4. headers

### quiz

1. What does HTTP stand for?
Hypertext Transfer Protocol

2. How would you describe what a protocol is to a complete newbie?
An agreed-upon, standard way of doing something

3. Which part of this URL describes the protocol?:
"https://"

4. If you had to guess, which request method (GET, POST, PUT, DELETE) would you
think we made in the previous challenge when we asked for data from the
JSON Placeholder API?
GET!

## path (URL)

+ address where your desired resource "lives"

+ baseURL vs endpoint

  + baseURL: "https://apis.scrimba.com/jsonplaceholder"

  + endpoint: "/posts"

  + full URL: "https://apis.scrimba.com/jsonplaceholder/posts"

### quiz 2

1. What's the difference between a Base URL and an Endpoint?

   + Base URL is the part of the URL that won't change, no matter which resource we want to get from the API

   + Endpoint specifies exactly which resource we want to get from the API

   + Given the following URLs from an example API:

     + "https://blahblahblah.com/api/v2/users"

     + "https://blahblahblah.com/api/v2/products"

     + "https://blahblahblah.com/api/v2/products/123"

2. Which part is the Base URL?

   "https://blahblahblah.com/api/v2"

3. What are the available endpoints?

   /users, /products, /products/some-id-of-a-product-here

## methods

+ GET - getting data
+ POST - adding new data, lke blog post or facebook post
+ PUT - updating existing data
+ DELETE - removing data
+ others - PATCH, OPTIONS, etc.
