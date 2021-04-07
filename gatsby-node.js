


exports.createPages = ({actions: {createPage}}) => {
  createPage({
    path: "/posts",
    component: require.resolve("./src/templates/posts.js"),
    context: { testingData: "We are just testing!"}
  })
}
