import React from 'react'
import Layout from "../components/layout"


const About = () => {
    return (
        <Layout>
            <h1 
            className="animate-header"
            style={{
                color: 'white',
                marginTop: '-30px'
            }}>Explore the Galaxy</h1>
            <p
            style={{
                color: '#c0c0c0',
                fontWeight: '200',
                lineHeight: '1.5em'
            }}>Search your favorite Star Wars characters and explore all the planets that each character resides on. I will be working on connecting to this newv Swapi API url and add more information about every character that exists and the films that you can find them on. Stay tuned!</p>
        </Layout>
    )
}

export default About