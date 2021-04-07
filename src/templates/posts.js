

import React from "react"
import Layout from "../components/Layout"

export default function Posts({pageContext: {testingData}}) {
  return (
    <Layout>
      <h1>I am posts page</h1>
      <p>{testingData}</p>
    </Layout>
  )
}
