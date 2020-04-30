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
                        color: 'white',
                        marginTop: '-30px'
                    }}>Characters</h1>
                    <p
                    style={{
                        color: '#ffffff',
                        fontWeight: '200',
                        lineHeight: '1.5em'
                    }}>List of characters and the planets they come from:</p>
                    <p
                    style={{
                        color: '#A8A8A8',
                        fontWeight: '200',
                        fontSize: '14px',
                        lineHeight: '1.5em',
                        marginTop: '-25px'
                    }}
                    >(This list is an example of what is to come. A much larger list will have search capability<br /> and links to the characters description.)</p>
                    

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

