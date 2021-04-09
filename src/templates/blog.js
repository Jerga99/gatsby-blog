
import React from "react";
import Layout from "../components/Layout"
import { graphql } from "gatsby"

export default function Blog({data}) {

  return (
    <Layout>
      <h1>I am blog detail page</h1>
      <p>{data.markdownRemark.html}</p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
    }
  }
`
