import React, { Component } from 'react';
import { graphql } from "gatsby";

import Layout from '../components/layout';
import ResourceCard from '../components/Cards/Resource-Card/resource-card'

import componentStyles from './resources.module.css'

class ResourcePage extends Component {
  render() {
    return (
      <Layout>
        <h1>Resources</h1>
        <ul className={componentStyles.grid}>
          {this.props.data.allMarkdownRemark.edges.map(resource => (
            <ResourceCard
              title={resource.node.frontmatter.title}
              link={resource.node.frontmatter.link}
              icon={resource.node.frontmatter.icon}
              tags={resource.node.frontmatter.tags}
              type={resource.node.frontmatter.type}
              price={resource.node.frontmatter.price}
            >
              <div dangerouslySetInnerHTML={{ __html: resource.node.html }} />  
            </ResourceCard>
          ))}
        </ul>
      </Layout>
    );
  }
}

export const resourceListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter : {
          layout:{
            eq:"resource"
          }
        }
      }, 
      sort: {
        fields: [frontmatter___date], order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            icon
            tags
            type
            price
          }
          html
        }
      }
    }
  }
`

export default ResourcePage
