
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
  const itemsPerPage = 2
  const numOfPages = Math.ceil(nodes.length / 2)

  Array.from({length: numOfPages}).forEach((_, i) => {
    const page = i + 1

    createPage({
      path: page === 1 ? `/blogs` : `/blogs/${page}`,
      component: require.resolve("./src/templates/blogsPaginated"),
      context: {
        limit: itemsPerPage,
        currentPage: page,
        numOfPages
      }
    })
  })

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



