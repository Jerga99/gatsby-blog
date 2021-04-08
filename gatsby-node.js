
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
    type PostContent {
      title: String
      text: String
    }

    type PostJson {
      id: ID
      title: String
      body: String
      wordCount: Int
      isActive: Boolean
      rating: Float
      tags: [String!]!
      content: PostContent
    }

    input TitleFilter {
      eq: String
      in: String
    }
  `

  createTypes(typeDefs)
}

exports.createResolvers = ({createResolvers}) => {
  const resolvers = {
    Query: {
      allPost: {
        type: ["PostJson"],
        args: {
          filter: `input PostFilterInput { title: TitleFilter }`,
          limit: "Int"
        },
        resolve(source, { filter }, context, info) {
          const { title } = filter || {}
          const { eq } = title || {}

          const posts = [{
            id: "1",
            title: "Hello World",
            body: "My custom text",
            wordCount: 200,
            isActive: true,
            rating: 4.23,
            tags: ["Programming", "Developement", "React JS"],
            content: {
              text: "My content text",
              title: "My context title"
            }
          }, {
            id: "2",
            title: "Hello World 2",
            wordCount: 300,
            isActive: false,
            rating: 2.23,
            tags: ["Angular", "Developement", "React JS"],
            content: {
              text: "My content text",
              title: "My context title"
            }
          }]

          if (eq) {
            return posts.filter(post => post.title === eq)
          }

          return posts;
        }
      }
    }
  }

  createResolvers(resolvers)
}
