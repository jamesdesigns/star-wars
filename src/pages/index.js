import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"


const IndexPage = (props) => (
  <BackgroundImage
  className="masthead"
  fluid={props.data.indexImage.childImageSharp.fluid}
  >
    <Layout>
        <SEO title="Home" />
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem`, marginTop: '175px', margin: '0 auto' }}>
        <h1
        style={{
          color: '#33ccff',
          fontSize: '25px',
          textAlign: 'left'
        }}
        className="animate"
        >A long time ago in a galaxy far, far away....</h1>
        <Image />
      </div>
      <div id="titles">
          <div id="titlecontent">
            <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire</p>
            <p>During the battle, rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
            <p>Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....</p>
            <p>And this my friend is where it all began...</p>
            <p>Take a look around this website and come back for more updates along the way. I will be gathering more information regarding all the characters and planets they live on. </p>
            
            {/* <p class="center">View the source, Luke!</p>
            <p>:</p>
            <p class="center"><a href="http://www.sitepoint.com/css3-starwars-scrolling-text/">sitepoint.com/<br />css3-starwars-scrolling-text/</a></p>
            <p>and give me a shout on Twitter <a href="https://twitter.com/craigbuckler">@craigbuckler</a> &ndash; I'd love to see how you use and abuse it!</p>
            <p>Finally, Han shot first and the original, unadulterated movies remain the best. Stop fiddling with them, George!</p> */}
          </div>
      </div>
    </Layout>
  </BackgroundImage>
)

export default IndexPage

export const pageQuery = graphql`
    query {
      indexImage: file(relativePath: { eq: "stars-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }    
`
