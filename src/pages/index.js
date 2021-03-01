import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <div>
      <div>
        <Link to="/blog/">blog page</Link>
      </div>
      <div>
        <a href="https://www.gatsby.org">org</a>
      </div>
      Hello world!
    </div>
  )
}
