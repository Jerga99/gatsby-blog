
import React from "react"
import { graphql } from "gatsby"

export default function BlogsPaginated({pageContext, data}) {
  const { limit, currentPage, numOfPages } = pageContext
  const { nodes } = data.allMarkdownRemark
  return (
    <>
      <div>Items per page: {limit}</div>
      <div>Current page: {currentPage}</div>
      <div>Total number of pages: {numOfPages}</div>
      {JSON.stringify(nodes)}
    </>
  )
}

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date}
      limit: $limit,
      skip: $skip) {
      nodes {
        frontmatter {
          subtitle
          title
          slug
          date(formatString: "DD MMMM, YYYY")
          author
        }
      }
    }
  }
`
