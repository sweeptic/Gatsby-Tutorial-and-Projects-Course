import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./layout.css"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <hr />
      <main>{children}</main>
      <hr />
      <Footer />
    </>
  )
}

export default layout
