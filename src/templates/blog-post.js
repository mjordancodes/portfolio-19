import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import componentStyles from './blog-post.module.css';

export default ({ data }) => {  
  const post = data.markdownRemark  
  return (
    <Layout>
      <div className="container h-entry">  
        <header className={componentStyles.header}>
          <img src={post.frontmatter.thumbnail} alt="featured" className="u-featured" />  
          <div className={componentStyles.text}>
            <h2 className="p-name">{post.frontmatter.title}</h2>   
            <p>
              Published by <span className="h-card p-author">mJordan</span> on <span className="dt-published">{post.frontmatter.date}</span>
            </p> 
          </div>   
        </header>      
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="e-content" />      
      </div>    
    </Layout>
  )
}

export const query = graphql`  
  query($slug: String!) {    
    markdownRemark(fields: { slug: { eq: $slug } }) {      
      html      
      frontmatter {        
        title   
        date(formatString: "MMMM DD, YYYY")
        thumbnail   
      }    
    }  
  }
`