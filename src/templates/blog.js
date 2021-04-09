
import React from "react";
import Layout from "../components/Layout"

export default function Blog({pageContext: {slug}}) {

  return (
    <Layout>
      <h1>I am blog detail page</h1>
      <p>{slug}</p>
    </Layout>
  )
}
