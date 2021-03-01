import React from "react"
import { ExampleButton } from "../component/button"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      {/* inline style */}
      <h1>Hello world!</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
