
import React from "react"
import Layout from "../components/Layout"
import { graphql} from "gatsby"

export default function Markdown({data}) {

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
        }
        excerpt
      }
    }
  }
`
