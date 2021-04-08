
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
      id: ID
      title: String
      body: String
      wordCount: Int
      isActive: Boolean
      rating: Float
      tags: [String!]!
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
            id: "1",
            title: "Hello World",
            body: "My custom text",
            wordCount: 200,
            isActive: true,
            rating: 4.23,
            tags: ["Programming", "Developement", "React JS"]
          }, {
            id: "2",
            title: "Hello World 2",
            wordCount: 300,
            isActive: false,
            rating: 2.23,
            tags: ["Angular", "Developement", "React JS"]
          }]
        }
      }
    }
  }

  createResolvers(resolvers)
}
