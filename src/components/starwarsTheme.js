import StarWars from '../audio/Star Wars.mp3'
import React, { Component } from 'react'


export class StarWarsTheme extends Component {
    onClick =()=>{
        var ChirpChirp = new Audio (StarWars);
        ChirpChirp.play();
    }

    // offClick =()=>{
    //   var ChirpChirp = new Audio (StarWars);
    //   ChirpChirp.pause();
    // }

    render() {
        return (
            <div>
                <button onClick={this.onClick} href="#" className="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                &#9658; PLAY
              </button>
              {/* <button onClick={this.offClick} href="#" className="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                &#x23f8; PAUSE
              </button> */}
            </div>
        )
    }
}

export default StarWarsTheme