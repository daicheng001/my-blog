import React from "react"
import Layout from "../components/layout"
const styles = require("../styles/home.styl")

const Home = () => {
  return (
      <Layout title="首页" description="首页">
        <div className={ styles["nvabar"] }>
          <div className={ styles["title"] }></div>
          <ul className={ styles["nav"] }>
            <li className={ styles["index"] }><a href="/">首页</a></li>
            <li className={ styles["about"] }><a href="/about">关于</a></li>
            <li className={ styles["github"] }><a href="/github">github</a></li>
            <li className={ styles["concat"] }><a href="/concat">联系</a></li>
          </ul>
        </div>
      </Layout>
  )
}

export default Home
