
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({title, description}) {

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

  const defaultTitle = title ? `${title} | ${site.siteMetadata?.title}` :  site.siteMetadata?.title
  const defaultDescription = description || site.siteMetadata?.description

  return (
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title={defaultTitle}
      meta={[
        {
          name: "description",
          content: defaultDescription
        }
      ]}
    />
  )
}
