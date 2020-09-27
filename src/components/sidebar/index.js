/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FaGithub, FaRegFilePdf } from "react-icons/fa"

import Toronto from "./toronto"
import avatarNormal from "../../assets/avatar.png"
import avatarWink from "../../assets/avatar-hover.jpg"

import "./index.css"

const PageLink = ({ path, text }) => (
  <span>
    <Link to={path}>{text}</Link>
    <br />
  </span>
)

const Sidebar = () => {
  const data = useStaticQuery(query)
  const metadata = data?.site?.siteMetadata
  const description = metadata?.welcomeMessage
  const license = metadata?.license

  return (
    <div className="sidebar-outer">
      <span className="sidebar-toronto">
        <Toronto />
      </span>
      <div className="sidebar">
        <div className="sidebar-container">
          <span>
            <input
              type="image"
              className="sidebar-avatar"
              src={avatarNormal}
              onMouseOver={e => (e.currentTarget.src = avatarWink)}
              onFocus={() => {}}
              onMouseOut={e => (e.currentTarget.src = avatarNormal)}
              onBlur={() => {}}
              alt="Logo"
            />
            <a href="https://github.com/viktree">
              <FaGithub className="sidebar-icon" size="30px" />
            </a>
            <a href="https://viktree-resume.s3.amazonaws.com/resume-2020.pdf">
              <FaRegFilePdf className="sidebar-icon" size="30px" />
            </a>
          </span>
          <div className="sidebar-speech-bubble">{description}</div>
          <div className="sidebar-links">
            <PageLink path="/" text="Articles" />
            <PageLink path="/about" text="About me" />
            <PageLink path="/contact" text="Contact Me" />
          </div>
          <span className="sidebar-license">{license}</span>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

const query = graphql`
  query SidebarQuery {
    site {
      siteMetadata {
        welcomeMessage
        license
      }
    }
  }
`

export default Sidebar
