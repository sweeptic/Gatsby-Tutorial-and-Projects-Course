import React from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our products page!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          doloremque ut, voluptate magni provident facere numquam accusantium!
          Nihil saepe reprehenderit optio necessitatibus aut provident vel quod
          amet. Veritatis cupiditate quasi temporibus quaerat facilis voluptate
          officiis neque facere, ullam officia quam!
        </p>
      </div>
    </Layout>
  )
}

export default products
