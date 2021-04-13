
import React from "react"
import Layout from "../components/Layout"
import BlogListing from "../components/BlogListing"
import { graphql, Link } from "gatsby"

export default function BlogsPaginated({pageContext, data}) {
  const { currentPage, numOfPages } = pageContext
  const { nodes } = data.allMarkdownRemark

  const isFirst = currentPage === 1
  const isLast = currentPage === numOfPages

  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <BlogListing blogs={nodes} />
      {/* { !isFirst &&
        <Link
          className="button is-small"
          to={`/blogs/${prevPage}`}
          rel="prev">
          Previous
        </Link>
      }
      {' '}
      { !isLast &&
        <Link
          className="button is-small"
          to={`/blogs/${nextPage}`}
          rel="next">
          Next
        </Link>
      } */}
      <Link
        className="button is-small"
        disabled={isFirst}
        to={`/blogs/${prevPage}`}
        rel="prev">
        Previous
      </Link>

      {' '}
      <Link
        className="button is-small"
        disabled={isLast}
        to={`/blogs/${nextPage}`}
        rel="next">
        Next
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date}
      limit: $limit,
      skip: $skip) {
      nodes {
        id
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
