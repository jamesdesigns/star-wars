import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header
    className={headerStyles.header}
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
        <ul className={headerStyles.navList}>
          <li><Link
          to="/"
          className={headerStyles.navItem}
          >
          {siteTitle}
          </Link>
          </li>
          <li><Link 
          to="/characters"
          className={headerStyles.navItem}
          >Characters</Link></li>
          <li><Link 
          to="/planets"
          className={headerStyles.navItem}
         >Planets</Link></li>
          <li><Link 
          to="/about"
          className={headerStyles.navItem}
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
