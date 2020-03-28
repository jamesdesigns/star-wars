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
    const slug = path.basename(node.fileAbsolutePath)

    createNodeField({
        node,
        name: 'slug',
        value: slug
    })
  }
}

// const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
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
      coontext: {
        slug: edge.node.fields.slug
      }
    })
  })

  // const { data } = await graphql(`
  // query {
  //   allPeople {
  //     people {
  //       id
  //       name
  //       gender
  //       species
  //     }
  //   }
  // }
  // `)

  // data.swapi.allPeople.forEach(({ id, name, gender, species }) => {
  //   actions.createPage({
  //     path: name,
  //     path: gender,
  //     path: species,
  //     component: path.resolve(`./src/components/characters.js`),
  //     context: {
  //       speciesId: id,
  //     },
  //   })
  // })
}