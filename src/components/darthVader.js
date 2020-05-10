import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const HomePage = ({ data }) => {
  return (
    <Layout>     
      <Img
        className="headshot"
        fixed={data.file.childImageSharp.fixed}
        alt="text"
      />
    </Layout>
  )
}


  export const query = graphql`
  query {
    file(relativePath: { eq: "darth-vader.jpg" }) {
      childImageSharp {
        fixed(width: 225, height: 425) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default HomePage