import React from "react"

const BlogPost = ({ title, date, timeEstimate, rawPost }) => (
  <article className="blog-post" itemScope itemType="http://schema.org/Article">
    <header>
      <h1 itemProp="headline">{title}</h1>
      <p>
        {date} | {timeEstimate}
      </p>
    </header>
    <section
      dangerouslySetInnerHTML={{ __html: rawPost }}
      itemProp="articleBody"
    />
    <hr />
  </article>
)

export default BlogPost
