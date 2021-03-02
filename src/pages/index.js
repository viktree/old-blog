import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { BlogPostSummary, Layout, SEO } from "../components"

const BlogPost = ({ node }) => {
  const id = node?.fields?.slug
  const title = node?.frontmatter?.title ?? id
  const date = node?.frontmatter?.date
  const readingTime = node?.fields?.readingTime?.text ?? id

  return (
    <BlogPostSummary
      id={id}
      title={title}
      date={date}
      timeEstimate={readingTime}
      rawSummery={node.excerpt}
    />
  )
}

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)
  const posts = data?.allMarkdownRemark?.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Blog Posts</h1>
      <ul>{posts.map(BlogPost)}</ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default IndexPage
