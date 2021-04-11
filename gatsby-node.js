
const axios = require("axios")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({graphql, actions: {createPage}}) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = res.data

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  const { nodes } = result.data.allMarkdownRemark

  nodes.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

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

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const posts = res.data

  posts.forEach(post => {
    const node = {
      title: post.title,
      body: post.body,
      // The node ID must be globally unique
      id: createNodeId(`Post-${post.id}`),
      // id: `Post-${post.id}`,
      // ID to the parent Node
      parent: null,
      // ID to the children Nodes
      children: [],
      // internal fields are not usualy interesting for consumers
      // but are very important for Gatsby Core
      internal: {
        // globbaly unique node type
        type: "Post",
        // "Hash" or short digital summary of this node
        contentDigest: createContentDigest(post),
        // content exposing raw content of this node
        content: JSON.stringify(post)
      }
    }

    actions.createNode(node)
  })
}

// exports.onCreateNode = ({node, getNode, actions}) => {

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = createFilePath({node, getNode, basePath: "blogs"})

//     actions.createNodeField({
//       node,
//       name: "slug",
//       value: slug
//     })
//   }
// }

