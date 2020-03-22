import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
                style={{
                  color: `#606060`,
                  textDecoration: `none`
                }}
              >
                {siteTitle}
              </Link>
          </li>
          <li><Link 
          to="/characters"
          style={{
            color: `#606060`,
            textDecoration: `none`
          }}>Characters</Link></li>
          <li><Link 
          to="/planets"
          style={{
            color: `#606060`,
            textDecoration: `none`
          }}>Planets</Link></li>
          <li><Link 
          to="/about"
          style={{
            color: `#606060`,
            textDecoration: `none`
          }}>About</Link></li>
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
