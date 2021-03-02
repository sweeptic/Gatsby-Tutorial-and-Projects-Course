import React from "react"
import img from "../images/images03.jpg"
import Image from "gatsby-image"
import { useSiteData } from "./fix"

const Images = () => {
  const data = useSiteData()
  // console.log(data)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid2.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
