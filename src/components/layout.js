import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/Header/header';

import '../styles/globals.css'

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Internet home of mJoran Brady: Web Developer / Designer' },
          ]}
        >
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <html lang="en" />
        </Helmet>

        <div id="page">
          <Header />
          <main id="container">
            {children}
          </main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
