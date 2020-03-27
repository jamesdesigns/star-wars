import React from "react"
import Layout from "../components/layout"

class Characters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            fetchedData: []
        };
    }

        componentDidMount() {
            fetch('https://swapi.co/api/people')
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({
                    fetchedData: json.results,
                    loading: false
                })
            })
        };

        render() {
            const { fetchedData } = this.state;

            return (
                <Layout>
                    <h1 
                    style={{
                        color: 'white'
                    }}>Characters</h1>
                    <p
                    style={{
                        color: '#c0c0c0'
                    }}>Favorite Characters</p>
                    <div 
                    style={{
                        color: 'white'
                    }}>
                {fetchedData.map(character => {
                    return <p key={character.name}>{character.name} | <span style={{ color: 'gray' }}>{character.gender}</span></p>;
                })}

                </div>
                </Layout>
            )
        }
    }


export default Characters 