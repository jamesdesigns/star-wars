import React, { Component } from 'react'
import Pause from '../components/Pause'
import Play from '../components/Play'
import StarWars from '../audio/Star Wars.mp3'

class Player extends Component {

constructor(props) {
  super(props)
  this.state = {
    playing: false
  }
}

handlePlayerClick = () => {
var ChirpChirp = new Audio (StarWars);

  if (!this.state.playing) {
    this.setState({playing: true})
    ChirpChirp.play();
  } else {
    this.setState({playing: false})
    ChirpChirp.currentTime = 0;
  }
}

  render() {
    return (
      <div className="player" >
        {this.state.playing ? <Pause onPlayerClick={this.handlePlayerClick} /> : <Play onPlayerClick={this.handlePlayerClick} />}
      </div>
    )
  }
}

export default Player