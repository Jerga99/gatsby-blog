
const axios = require("axios")


exports.createPages = async ({actions: {createPage}}) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = res.data

  posts.forEach(post => {
    createPage({
      path: `/posts/${post.id}`,
      component: require.resolve("./src/templates/post.js"),
      context: { post }
    })
  })

  createPage({
    path: "/posts",
    component: require.resolve("./src/templates/posts.js"),
    context: { posts }
  })
}

exports.createSchemaCustomization = ({actions}) => {
  const { createTypes } = actions
  const typeDefs = `
    type PostJson {
      title: String
      body: String
    }
  `

  createTypes(typeDefs)
}

exports.createResolvers = ({createResolvers}) => {
  const resolvers = {
    Query: {
      allPost: {
        type: ["PostJson"],
        resolve() {
          return [{
            title: "Hello World",
            body: "My custom text"
          }, {
            title: "Hello World 2",
            body: "My custom text 2"
          }]
        }
      }
    }
  }

  createResolvers(resolvers)
}
