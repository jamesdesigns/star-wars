/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
        node,
        name: 'slug',
        value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const planetTemplate = path.resolve('./src/templates/planets.js')
  const res = await graphql(`
  query {
      allMarkdownRemark {
          edges {
              node {
                  fields {
                      slug
                  }
              }
          }
      }
  } 
`)

  res.data.allMarkdownRemark.edges.forEach((edge) => {
    createPage({
      component: planetTemplate,
      path: `/planets/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug
      }
    })
  })

}