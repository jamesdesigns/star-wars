import StarWars from '../audio/StarWars.mp3'
import React, { Component } from 'react'

// export class StarWarsTheme extends Component {
//     onClick =()=>{
//         var ChirpChirp = new Audio (StarWars);
//         ChirpChirp.play();
//     }

export class StarWarsTheme extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  pauseAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.pause()
  }


    render() {
        return (
            <div>
                <button onClick={this.playAudio} className="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                &#9658; PLAY
                </button>
                <button onClick={this.pauseAudio} className="btn btn-1">
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                &#9612;&#9612; PAUSE
                </button>
                {/* <audio className="audio-element">
                <track default kind="captions"
                    srclang="en"
                    src="https://artistjameshooper.com/StarWars.mp3"/>
                  <source src="https://artistjameshooper.com/StarWars.mp3"></source>
                </audio> */}
                <audio className="audio-element">
                <track default kind="captions"
                    srclang="en"
                    src={StarWars}/>
                  <source src={StarWars}></source>
                </audio>
            </div>
        )
    }
}

export default StarWarsTheme