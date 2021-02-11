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
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>{title || siteMetadata.title}</title>
      </Helmet>
    </div>
  )
}

export default Layout
