import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import './style.css'
import './custom-styles.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>GeekTube - Awesome Movies, Series and Documentaries For Geeks</title>
          <link rel="canonical" href="https://geektube.netlify.com"/>
          <meta name="description" content="Curated list of awesome movies, series and documentaries for geeks, handpicked and reviwed by open source community" />
          <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#"/>
          <meta property="og:type"   content="website" /> 
          <meta property="og:url"    content="https://geektube.netlify.com" /> 
          <meta property="og:title"  content="GeekTube - Awesome Movies, Series and Documentaries For Geeks" /> 
          <meta property="og:image"  content="https://s-static.ak.fbcdn.net/images/devsite/attachment_blank.png" /> 
          <meta property="og:site_name" content="GeekTube" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
