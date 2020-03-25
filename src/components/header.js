import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import './header.module.scss'
import headerStyles from './header.module.scss'

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
                className={headerStyles.link}
                >
                {siteTitle}
              </Link>
          </li>
          <li><Link 
          to="/characters"
          className={headerStyles.link}
          >Characters</Link></li>
          <li><Link 
          to="/planets"
          className={headerStyles.link}
         >Planets</Link></li>
          <li><Link 
          to="/about"
          className={headerStyles.link}
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
