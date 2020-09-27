import React from "react"
import { Link } from "gatsby"

import "./index.css"

const BlogPostNavigator = ({ nextPost, previousPost }) => (
  <nav className="blog-post-nav">
    <ul className="post-navigator">
      <li>
        {previousPost && (
          <Link to={previousPost?.fields?.slug} rel="prev">
            ← {previousPost?.frontmatter?.title}
          </Link>
        )}
      </li>
      <li>
        {nextPost && (
          <Link to={nextPost?.fields?.slug} rel="next">
            {nextPost?.frontmatter?.title} →
          </Link>
        )}
      </li>
    </ul>
  </nav>
)

export default BlogPostNavigator
