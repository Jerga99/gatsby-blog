

import React from "react"
import Layout from "../components/Layout"

export default function Posts({pageContext: {posts}}) {
  return (
    <Layout>
      <h1>I am posts page</h1>
      <p>{JSON.stringify(posts)}</p>
    </Layout>
  )
}
