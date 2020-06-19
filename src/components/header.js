import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// import './header.module.scss'
import headerStyles from './header.module.scss'
// import StarWarsTheme from '../components/starwarsTheme'
import Player from '../components/Player'

const Header = ({ siteTitle }) => (
  <header
    className={headerStyles.header}
    style={{
      background: `transparent`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1160,
      }}
    >
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link
          to="/"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          >
          {siteTitle}
          </Link>
          </li>
          <li><Link 
          to="/characters"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          >Characters</Link></li>
 
          <li><Link 
          to="/writing"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
         >Planets</Link></li>
          <li><Link 
          to="/about"
          className={headerStyles.navItem}
          activeClassName={headerStyles.activeNavItem}
          >About</Link></li>
          <li>
          {/* <StarWarsTheme></StarWarsTheme> */}
          <Player></Player>
          </li>
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
