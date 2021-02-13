/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Sidebar from "../sidebar"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div className="flex-grid">
      <Sidebar />
      <div className="content-outer">
        <div className="content">{children}</div>
      </div>
      <div />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
