module.exports = {
  siteMetadata: {
    title: "Filip Tech News",
    body: {
      content: "Just some SEO content"
    }
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-transformer-remark"
  ],
};
