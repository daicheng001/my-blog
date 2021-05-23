import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from '../styles/template.styl'
import { TagsOutlined, CalendarOutlined } from '@ant-design/icons';
export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  useEffect(() => {
   async function fetch() {
      try {
        const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
        await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
      } catch (err) {
          console.error(err);
      }
   }
   fetch()
  }, [])
  return (
    <Layout>
     <div className={ styles["container"] }>
      <div className={ styles["article"] }>
        <div className={ styles["article_info"]}>
          <div className={ styles["tags"]}>
            <div className={ styles["tags_left"]}>
              <a href="">Web开发</a>
              <a href="">JavaScript</a>
            </div>
            <div className={ styles["tags_right"]}>
              <a href=""><TagsOutlined />前端技术</a>
            </div>
          </div>
          <div className={ styles["dates"]}>
            <a href=""><CalendarOutlined />发布日期： 2021-05-23</a>
            <a href=""><CalendarOutlined />最近更新： 2021-05-23</a>
          </div>
        </div>
        <hr/>
        <div className={ styles["article_content"]}>
          <div>
            <h1 className={styles["article_title"]}>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
     </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(format: MARKDOWN)
      html
      frontmatter {
        title
      }
    }
  }
`