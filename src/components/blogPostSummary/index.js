import React from "react"
import { Link } from "gatsby"

import "./index.css"

const BlogPostSummary = ({ title, date, timeEstimate, id }) => (
  <li key={id}>
    <Link className="post-summary-link" to={id}>
      {title}
    </Link>
    {"    "}
    <small className="post-summary-subtitle">
      {date} | {timeEstimate}
    </small>
  </li>
)

// const BlogPostSummary = ({ title, date, timeEstimate, id, rawSummary }) => (
//   <div key={id}>
//     <h3>
//       <Link className="post-summary-link" to={id}>
//         {title}
//       </Link>
//     </h3>
//     <small className="post-summary-subtitle">
//       {date} | {timeEstimate}
//     </small>
//     <p dangerouslySetInnerHTML={{ __html: rawSummary }} />
//     <br />
//   </div>
// )

export default BlogPostSummary
