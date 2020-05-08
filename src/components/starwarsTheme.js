import StarWars from '../audio/Star Wars.mp3'
import React, { Component } from 'react'


export class StarWarsTheme extends Component {
    // state = {
    //     userName: '',
    //     chirp: ''
    // }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.addChirp(this.state.userName, this.state.chirp);
    //     this.setState({ chirp: '', userName: '' });
    // }

    // onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onClick =()=>{
        var ChirpChirp = new Audio (StarWars);
        ChirpChirp.play();
    }

    render() {
        return (
//             <form onSubmit={this.onSubmit} >
//                 <input
//                     className="col-2 p-3 mb-3 mt-3 bg-danger text-dark"
//                     type="text"
//                     name="userName"
//                     placeholder="Username"
//                     value={this.state.userName}
//                     onChange={this.onChange}
//                 ></input>

//                 <input
//                     className="col-9 p-3 mb-3 mt-3 bg-danger text-dark"
//                     type="text"
//                     name="chirp"
//                     placeholder="Chirp"
//                     value={this.state.chirp}
//                     onChange={this.onChange}
//                 ></input>

// </form>      
                // <button onClick={this.onClick} className="playBtn">&#9658; PLAY</button>

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