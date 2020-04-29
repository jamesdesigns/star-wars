import React from 'react'
import Layout from "../components/layout"


const About = () => {
    return (
        <Layout>
            <h1 
            style={{
                color: 'white'
            }}>About</h1>
            <p
            style={{
                color: '#c0c0c0',
                fontWeight: '200',
                lineHeight: '1.5em'
            }}>Search for your favorite Star Wars character and explore more information on the planets they reside on. As I build out this site further, I will be working on gathering more information on each character and the films that you can find them on. Stay tuned!</p>
        </Layout>
    )
}

export default About