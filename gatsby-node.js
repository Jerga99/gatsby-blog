
exports.createPages = async ({graphql, actions: {createPage}}) => {
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
      path: `/blogs/${node.frontmatter.slug}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })
}



