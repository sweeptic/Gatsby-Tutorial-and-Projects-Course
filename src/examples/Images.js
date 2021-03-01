import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import img from "../images/images04.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "images04.jpeg" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
    fluid: file(relativePath: { eq: "images05.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

const Images = () => {
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
      </article>
    </section>
  )
}

export default Images
