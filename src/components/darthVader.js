import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

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

const VaderImage = ({className}) => {
  <StaticQuery
  query={graphql`
    query {
      desktop: file(relativePath:  { eq: "darth-vader.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
  
  render={data => {
    // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid
    return (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
        backgroundColor={`#040e18`}
      >
      </BackgroundImage>
    )
  }}
/>
}

const StyledBackgroundSection = styled(VaderImage)`
width: 100%;
background-position: bottom center;
background-repeat: repeat-y;
background-size: cover;
`

export default StyledBackgroundSection