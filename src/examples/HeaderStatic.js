import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentNameStatic = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            description
            person {
              age
              name
            }
          }
        }
      }
    `}
    // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    render={data => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentNameStatic
