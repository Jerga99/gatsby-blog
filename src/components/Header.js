
import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <h1>I am Header</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blogs">Blogs</Link>
    </div>
  )
}
