
import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

export default function IndexPage({data}) {

  const { totalCount, nodes } = data.allMarkdownRemark
  return (
    <Layout>
      <h4>{totalCount} Posts</h4>
      {nodes.map(({id, frontmatter, excerpt}) =>
        <div key={id}>
          <h3>
            {frontmatter.title}
            <span> - {frontmatter.date}</span>
          </h3>
          <p>{excerpt}</p>
          <Link to={`/blogs/${frontmatter.slug}`}>Read More</Link>
        </div>
        )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          slug
        }
        excerpt
      }
    }
  }
`
