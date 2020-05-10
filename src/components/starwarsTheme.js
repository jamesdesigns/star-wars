import StarWars from '../audio/Star Wars.mp3'
import React, { Component } from 'react'


export class StarWarsTheme extends Component {
    onClick =(e)=>{
        var ChirpChirp = new Audio (StarWars);
        ChirpChirp.play();
    }

    render() {
        return (
                <button onClick={this.onClick} href="https://twitter.com/Dave_Conner" className="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                &#9658; PLAY
              </button>
        )
    }
}

export default StarWarsTheme