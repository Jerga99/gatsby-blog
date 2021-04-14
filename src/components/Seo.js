
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo() {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: site.siteMetadata.description
        }
      ]}
    />
  )
}
