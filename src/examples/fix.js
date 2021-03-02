import { graphql, useStaticQuery } from "gatsby"

export const useSiteData = () => {
  const data = useStaticQuery(graphql`
    {
      fixed: file(relativePath: { eq: "images02.jpeg" }) {
        childImageSharp {
          fixed(width: 200, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: { eq: "images03.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      example: file(relativePath: { eq: "images04.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            src
          }
        }
      }
    }
  `)

  return data
}
