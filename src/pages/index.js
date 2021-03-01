import React from "react"
import { ExampleButton } from "../components/button"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      {/* inline style */}
      <h1>Hello world!</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
