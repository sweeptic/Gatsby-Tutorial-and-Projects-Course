import React from "react"
import Layout from "../components/layout"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

const examples = () => {
  return (
    <Layout>
      <div>
        <h1>this is our examples page!</h1>
        <p>hello from examples</p>
        <Header />
        <HeaderStatic />
      </div>
    </Layout>
  )
}

export default examples
