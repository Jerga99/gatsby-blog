
const axios = require("axios")


exports.createPages = async ({actions: {createPage}}) => {
  // fetch data
  // you can use create pages API to pull unstructurized data into Gatsby pages
  // benefits: it's more familiar and comfortable, if you are new to GraphQL
  // no intermediate steps, just "fetch" and "go"
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = res.data

  createPage({
    path: "/posts",
    component: require.resolve("./src/templates/posts.js"),
    context: { posts }
  })
}
