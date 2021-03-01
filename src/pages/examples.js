import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

const examples = ({ data }) => {
  // console.log(props)
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <div>
        <p>hello from examples</p>
        <Header />
        <HeaderStatic />
        <h5>author: {author}</h5>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
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
`

export default examples
