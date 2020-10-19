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
            // const num = 5;
            let randomNumber = Math.floor((Math.random() * 81) + 1);
            
            // fetch('https://swapi.py4e.com/api/people/?page=1')
            fetch(`https://swapi.py4e.com/api/people/?page=` + randomNumber)
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
                    >(This list is an example of what is to come. A much larger list will have search capability<br /> and links to the characters description.)</p>

                    {/* <CharacterList></CharacterList> */}

                    <div 
                    style={{
                        color: 'white',
                        fontWeight: '200',
                        lineHeight: '1.5em',
                        zIndex: '9998'
                    }}>
                     {fetchedData.map(character => {
                        return <p key={character.name}>{character.name} | <span> <a style={{ color: 'gray', textDecoration: 'none' }} href='{character.homeworld}'>{character.homeworld}</a></span></p>;
                    })} 
                    </div>

                    <div className="container text-center">
                        <p>
                        {/* <a href="https://swapi.py4e.com/api/people/?page={previous}" id="prev" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '10px', marginRight: '15px'}} className="btn btn-warning btn-sml" role="button">« Previous</a>
                        <a href="https://swapi.py4e.com/api/people/?page={next}" id="next" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '10px'}} className="btn btn-warning btn-sml" role="button">Continue »</a> */}
                        <a href="https://swapi.py4e.com/api/people/?page=2" id="prev" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '10px', marginRight: '15px'}} className="btn btn-warning btn-sml" role="button">« Previous</a>
                        <a href="https://swapi.py4e.com/api/people/?page=3" id="next" style={{ backgroundColor: 'black', border: '1px solid white', borderRadius: '10px', color: 'white', padding: '10px'}} className="btn btn-warning btn-sml" role="button">Continue »</a>
                        </p>
                    </div>
                </Layout>

            )
        }
    }

export default Characters 


