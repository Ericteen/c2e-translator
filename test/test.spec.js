const fetch = require('node-fetch')
const { URLSearchParams } = require('url')

const params = new URLSearchParams();
params.append("postId", 1);
const result = fetch("http://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: params
})
  .then(res => res.json())
  .then(json => console.log(json));

console.log(result);
