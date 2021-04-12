
import React from "react"
import Blog from "./Blog"

export default function BlogListing({blogs}) {

  return (
    <>
      <div className="columns is-multiline">
        { blogs.map(({id, frontmatter}) =>
          <div key={id} className="column is-9">
            <Blog
              title={frontmatter.title}
              subtitle={frontmatter.subtitle}
              slug={frontmatter.slug}
              date={frontmatter.date}
            />
          </div>
          )
        }
      </div>
    </>
  )
}
