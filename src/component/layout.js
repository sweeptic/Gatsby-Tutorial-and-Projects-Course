import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
