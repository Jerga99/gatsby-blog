
import React from "react";
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Blog({data}) {
  const { html, frontmatter: {title} } = data.markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
