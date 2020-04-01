import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/layout"

const Planets = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
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


    return (
        <Layout>
            <h1 
            style={{
                color: 'white'
            }}>Planets</h1>
            <p
            style={{
                color: '#c0c0c0'
            }}>Posts will show up here later on.</p>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={`/planets/${edge.node.fields.slug}`}>
                                    <h2 style={{color: '#c0c0c0'}}>{edge.node.frontmatter.title}</h2>
                                    <p style={{color:'gray'}}>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
        </Layout>
    )
}

export default Planets