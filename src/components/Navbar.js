import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
