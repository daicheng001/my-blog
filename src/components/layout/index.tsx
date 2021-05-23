import React, { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { graphql, withPrefix, useStaticQuery } from "gatsby"
import { siteMetadata } from "../../../gatsby-config"
import styles from '../../styles/index.styl'
import { HomeOutlined, UserOutlined, BookOutlined, SendOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd'

const Layout = ({ title, description, children }) => {
  const navbarRef = useRef(null)
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const handleScroll = () => {
    if (window.scrollY > 0) {
      navbarRef.current.classList.add(`${styles["navbarFix"]}`)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  })
  return (
    <>
      <Helmet>
        <title>{title || siteMetadata.title}</title>
        <meta name='description' content={ description } />
        <meta name="keywords" content=""/>
      </Helmet>
      <div>
        <div ref={navbarRef} className={ styles["nav_header"] }>
         <div className={ styles["nav_header_item"]}>
          <div className={ styles["title"] }></div>
          <ul className={ styles["nav"] }>
            <li className={ styles["index"] }><a href="/"><HomeOutlined />首页</a></li>
            <li className={ styles["about"] }><a href="/about"><UserOutlined />关于</a></li>
            <li className={ styles["github"] }><a href="/github"><BookOutlined />我的书单</a></li>
            <li className={ styles["concat"] }><a href="/concat"><SendOutlined />网站导航</a></li>
          </ul>
         </div>
        </div>
        <div className={ `${styles["nvabar"]}` } style={{ display: title === '首页' ? 'block' : 'none'}}>
          <Row className={ styles["nav_content"]} justify="start">
            <Col span={ 12 }>
              <h4>HELLO PEOPLE, MY NAME IS</h4>
              <h1>Cheng Dai</h1>
              <h4>WEB DEVELOPER</h4>
            </Col>
          </Row>
        </div>
        <div className={ styles["otherNavbar"]} style={{ display: title === '首页' ? 'none' : 'block'}}></div>
      </div>
      <div style={{ margin: `1rem auto`, maxWidth: 1125,}}>
        {children}
      </div>
    </>
  )
}

export default Layout
