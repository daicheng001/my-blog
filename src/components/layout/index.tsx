import React, { useEffect, useRef, useState } from "react"
import { Helmet } from "react-helmet"
import { graphql, withPrefix, useStaticQuery } from "gatsby"
import { siteMetadata } from "../../../gatsby-config"
import styles from '../../styles/index.styl'
import classnames from 'classnames'
import { Row, Col } from 'antd'
import classNames from "classnames"

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
      console.dir(navbarRef.current)
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
        <div className={ `${styles["nvabar"]}` }>
          <div ref={navbarRef} className={ styles["nav_header"] }>
            <div className={ styles["title"] }></div>
            <ul className={ styles["nav"] }>
              <li className={ styles["index"] }><a href="/">home</a></li>
              <li className={ styles["about"] }><a href="/about">about</a></li>
              <li className={ styles["github"] }><a href="/github">github</a></li>
              <li className={ styles["concat"] }><a href="/concat">concat</a></li>
            </ul>
          </div>
          <Row className={ styles["nav_content"]} justify="start">
            <Col span={ 12 }>
              <h4>HELLO PEOPLE, MY NAME IS</h4>
              <h1>Cheng Dai</h1>
              <h4>WEB DEVELOPER</h4>
            </Col>
          </Row>
        </div>
        <div style={{ margin: `1rem auto`, maxWidth: 900,}}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
