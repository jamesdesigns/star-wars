import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogIndex = props => {
  const { data } = props
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allMarkdownRemark.edges || []

    const filteredData = posts.filter(post => {
      const { date, title } = post.node.frontmatter
      return (
        date.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts



  return (
    <Layout>
      <h1 
      className="animate-header"
      style={{ textAlign: `left`, marginTop: '-30px' }}
      >Planets</h1>
        <p
    style={{
        color: '#ffffff',
        fontWeight: '200',
        lineHeight: '1.5em',
    }}
    >Explore a few planets that reside in the Star Wars galaxy. The following articles describe each planet. You can search by the planets name or by the month the article was written.</p>
      <p
        style={{
            color: '#A8A8A8',
            fontWeight: '200',
            fontSize: '14px',
            lineHeight: '1.5em',
            marginTop: '-25px'
        }}
        >(This list will be expanding extensively and include more images.)</p>

      <div className="searchBox">
        <input
          className="searchInput form-control marquee"
          type="text"
          aria-label="Search"
          placeholder="Search a planet..."
          onChange={handleInputChange}
        />
      </div>

      {posts.map(({ node }) => {
        const { excerpt } = node

        const { slug } = node.fields
        const { title, date } = node.frontmatter
        
        return (
          <article key={slug}>
            <header>

                <Link style={{color: '#c0c0c0'}} to={`/planets/${slug}`}>
                              <h2 
                              style={{
                                color: '#c0c0c0',
                              }}>{title}</h2>
                </Link>
                           
              <p style={{color: '#808080'}}>{date}</p>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              />
            </section>
            <hr />
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`