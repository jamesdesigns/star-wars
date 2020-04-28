import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const Planets = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
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
    `)


    // const handleInputChange = event => {
    //     console.log(event.target.value)
        // const query = event.target.value
        // const { data } = props
    
        // const posts = data.allMarkdownRemark.edges || []
    
        // const filteredData = posts.filter(post => {
        //   const { date, title } = post.node.frontmatter
        //   return (
        //     date.toLowerCase().includes(query.toLowerCase()) ||
        //     title.toLowerCase().includes(query.toLowerCase()) )
        // })
    
        // setState({
        //   query,
        //   filteredData,
        // })
    //   }


    return (
        <Layout>
            <h1 
            style={{
                color: 'white'
            }}>Planets</h1>
        
            <div className="searchBox">
                <input
                className="searchInput form-control marquee"
                type="text"
                aria-label="Search"
                placeholder="Search Planets..."
                // onChange={handleInputChange}
                />
            </div>

            <p
            style={{
                color: '#c0c0c0'
            }}>Welcome to Star Wars and the planets that inhabit this vast universe.</p>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link style={{textDecoration: 'none'}} to={`/planets/${edge.node.fields.slug}`}>
                                    <h2 style={{
                                        color: '#c0c0c0',
                                       
                                        }}>{edge.node.frontmatter.title}</h2>
                                    <p style={{
                                        color:'gray',
                                        marginTop: '-15px',
                                        marginBottom: '20px',
                                        fontSize: '16px'
                                        }}>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
        </Layout>
    )
}

export default Planets