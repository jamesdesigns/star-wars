import React from 'react'

const Play = ({onPlayerClick}) => {
  return (
    <button  onClick={onPlayerClick} href="#" className="btn btn-1">
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%"/>
    </svg>
    &#9658; PLAY
  </button>
  )
}

export default Play