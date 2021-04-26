import React from "react"
import Layout from "../components/layout"
import styles from '../styles/home.styl'
const Home = () => {
  const data = [
    {
      title: "文章的标题",
      description: "文章的描述内容",
      date: "创建的日期",
      link: "链接的地址",
      img: "",
    }
  ]
  return (
      <Layout title="首页" description="首页">
        <div className={ styles["motto"] }>
          <p></p>
          <p></p>
        </div>
       <div className={ styles["home_content"] }>
         <div className={ styles["home_item"] }>
           <div className={ styles["title"] }></div>
           <div className={ styles["description"] }></div>
           <div className={ styles["options"] }></div>
         </div>
         <div className={ styles["home_item"] }>
           <div className={ styles["title"] }></div>
           <div className={ styles["description"] }></div>
           <div className={ styles["options"] }></div>
         </div>
         <div className={ styles["home_item"] }>
           <div className={ styles["title"] }></div>
           <div className={ styles["description"] }></div>
           <div className={ styles["options"] }></div>
         </div>
         <div className={ styles["home_item"] }>
           <div className={ styles["title"] }></div>
           <div className={ styles["description"] }></div>
           <div className={ styles["options"] }></div>
         </div>
       </div>
      </Layout>
  )
}

export default Home
