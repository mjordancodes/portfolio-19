import React, { Component } from 'react';

import Layout from '../components/layout';
import ResourceCard from '../components/Cards/Resource-Card/resource-card';

import componentStyles from './resources.module.css';

class ResourcesPage extends Component {
  render() {
    return (
      <Layout>
        <h1>Resources</h1>
        <div className={componentStyles.pageCols}>
          <ul>
            {this.props.data.allMarkdownRemark.edges.map(resource => (
              <ResourceCard 
                title={resource.node.frontmatter.title}
                link={resource.node.frontmatter.link}
                tags={resource.node.frontmatter.tags}
                priceModel={resource.node.frontmatter.price}
                types={resource.node.frontmatter.type}
              >
                <div dangerouslySetInnerHTML={{__html: resource.node.html}} />
              </ResourceCard>
            ))}
          </ul>
          <aside>
            <p>Filter Resources by:</p>
            <p>Category / Topic</p>
              <ul>
                <li></li>
              </ul>
            <p>Type</p>
              <ul>
                <li></li>
              </ul>
            <p>Price</p>
              <ul>
                <li></li>
              </ul>
          </aside>
        </div>
      </Layout>
    );
  }
}

export const resourcesQuery = graphql`
  query {
  allMarkdownRemark(
      filter: {
        frontmatter : {
          layout:{
            eq:"resource"
          }
        }
      }, 
    ) {
      edges {
        node {
          frontmatter {
            title
            link
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



export default ResourcesPage
