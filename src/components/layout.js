/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.container}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={layoutStyles.content}>
        <main>{children}</main>

      </div>
      <footer 
        style={{
          textAlign: 'center',
          color: '#606060'
        }}>
          <small>© {new Date().getFullYear()} Created by James Hooper</small>
          {` `}
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
