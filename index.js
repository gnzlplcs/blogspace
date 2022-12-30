/**
 Challenge:

 With the 5 blog post objects, display the `title` and `body`
properties of the first 5 posts on the browser page.

 Hints:
 * Create a `div` in the HTML file to store these items
 * Loop over the items creating a string of HTML elements you
   can then put into the div with `innerHTML`
 */

const postsDiv = document.getElementById("posts");

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    const arrFive = data.slice(0, 5);
    console.log(arrFive[0].title);
    // arrFive.map(item => {
    //   const post = document.createElement("section");
    //   const postTitle = document.createElement("h2");
    //   const postBody = document.createElement("p");
    //   postTitle.textContent = item.title;
    //   postBody.textContent = item.body;
    //   post.appendChild(postTitle);
    //   post.appendChild(postBody);
    //   postsDiv.appendChild(post);
    // });

    // scrimba's option
    let html = ''
    for (let post of arrFive) {
      html += `
        <section>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr>
        </section>
      `
    }
    document.getElementById("posts").innerHTML = html;
  });
