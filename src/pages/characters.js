import React from "react"
import Layout from "../components/layout"
import CharacterList from "../components/characterList"


class Characters extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            fetchedData: []
        };
    }

        // componentDidMount() {
        //     fetch('https://swapi.co/api/people/')
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(json => {
        //         this.setState({
        //             fetchedData: json.results,
        //             loading: false,
        //         })
        //     })
        // };

        render() {
            const { fetchedData } = this.state;

            return (
                <Layout>
                    <h1 
                    className="animate-header"
                    style={{
                        color: 'white'
                    }}>Characters</h1>
                    <p
                    style={{
                        color: '#c0c0c0',
                        fontWeight: '200',
                        lineHeight: '1.5em'
                    }}>List of characters and the planets they come from:</p>
                    <CharacterList></CharacterList>

                    <div 
                    style={{
                        color: 'white',
                        fontWeight: '200',
                        lineHeight: '1.5em'
                    }}>
                     {fetchedData.map(character => {
                        return <p key={character.name}>{character.name} | <span style={{ color: 'gray' }}>Planet: {character.homeworld}</span></p>;
                    })} 
                    </div>
                    
                </Layout>
            )
        }
    }


export default Characters 

