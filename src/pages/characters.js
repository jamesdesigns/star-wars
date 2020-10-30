import React from "react"
import Layout from "../components/layout"
// import CharacterList from "../components/characterList" 
import darthVader from "../images/darth-vader.jpg"


// window.addEventListener("load", () => console.log("ready"));

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
            let randomNumber = Math.floor((Math.random() * 9) + 1);

            let url = `https://swapi.py4e.com/api/people/?page=`;

            fetch(url + randomNumber)
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
                    <img style={{
                    position: 'fixed',
                    top: '0',
                    width: '250',
                    height: '300',
                    right: '0'
                }} src={darthVader} alt="Darth Vader" />
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
                    >(This list contains 87 characters from the swapi API. Each page shows the name, gender, <br />and the planet these characters are from.)</p>

                    {/* <CharacterList></CharacterList> */}

                    <div 
                    style={{
                        color: 'white',
                        fontWeight: '200',
                        lineHeight: '1.5em',
                        zIndex: '999999'
                    }}>
                     {fetchedData.map(character => {
                        return <p style={{ zIndex: '1000'}} key={character.name}>{character.name} | {character.gender} | <span>Planet: <a style={{ color: 'gray', textDecoration: 'none' }} href='{character.homeworld}'>{character.homeworld}</a></span></p>;
                    })} 
                    

                    <div className="container text-center">
                        <p>
                            {/* <a href="https://swapi.py4e.com/api/people/?page=2" id="prev" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '10px', marginRight: '15px'}} className="btn btn-warning btn-sml" role="button">« Previous</a>
                            <a href="https://swapi.py4e.com/api/people/?page=3" id="next" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '10px'}} className="btn btn-warning btn-sml" role="button">Continue »</a> */}
                            <button type="button" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '7.5px', marginRight: '15px'}} className="" role="button" onClick={() => window.location.reload(false)}>Next Page »</button>
                        </p>
                    </div>
                    </div>
                </Layout>
            )
        }
    }

export default Characters 

