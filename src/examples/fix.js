import { graphql, useStaticQuery } from "gatsby"

export const useSiteData = () => {
  const data = useStaticQuery(graphql`
    {
      fixed: file(relativePath: { eq: "images04.jpeg" }) {
        childImageSharp {
          fixed(width: 200, grayscale: true) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: { eq: "images05.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      example: file(relativePath: { eq: "images05.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return data
}
