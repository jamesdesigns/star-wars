/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query {
    allPeople {
      people {
        id
        name
        gender
      }
    }
  }
  `)

  data.swapi.allPeople.forEach(({ id, name, gender }) => {
    actions.createPage({
      path: name,
      path: gender,
      component: path.resolve(`./src/components/characters.js`),
      context: {
        speciesId: id,
      },
    })
  })
}