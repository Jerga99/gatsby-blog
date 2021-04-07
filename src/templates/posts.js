

import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default function Posts({pageContext: {posts}}) {
  return (
    <Layout>
      <h1>I am posts page</h1>
      <ul>
        { posts.map(post =>
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
          )
        }
      </ul>
    </Layout>
  )
}
