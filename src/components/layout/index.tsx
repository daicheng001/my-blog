import React from "react"
import { Helmet } from "react-helmet"
import { graphql, withPrefix, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { siteMetadata } from "../../../gatsby-config"

const Layout = ({ title, description, children }) => {
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
  return (
    <div>
      <Helmet>
        <title>{title || siteMetadata.title}</title>
        <meta name='description' content={ description } />
        <meta name="keywords" content=""/>
      </Helmet>
      <body style={{ margin: `1rem auto`, maxWidth: 900,}}>
        {children}
      </body>
    </div>
  )
}

export default Layout
