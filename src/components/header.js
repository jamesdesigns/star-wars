import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <nav>
        <ul>
          <li>
              <Link
                to="/"
                className="link"
                >
                {siteTitle}
              </Link>
          </li>
          <li><Link 
          to="/characters"
          className="link"
          >Characters</Link></li>
          <li><Link 
          to="/planets"
          className="link"
         >Planets</Link></li>
          <li><Link 
          to="/about"
          className="link"
          >About</Link></li>
          </ul>
        </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
