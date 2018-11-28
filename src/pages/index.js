import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import BackgroundImage from '../images/home-background.svg'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <BackgroundImage />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
