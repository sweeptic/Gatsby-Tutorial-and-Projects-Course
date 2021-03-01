import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
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
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.info.title}</h1>
      <h1>name: {data.site.info.person.name}</h1> */}
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
    </div>
  )
}

export default Header

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           author
//           data
//           description
//           person {
//             age
//             name
//           }
//         }
//       }
//     }
//   `)
//   // return <pre>{JSON.stringify(data, null, 4)}</pre>
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <h2>{data.site.siteMetadata.person.age}</h2>
//     </div>
//   )
// }

// export default ComponentName
