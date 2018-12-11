import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Header from '../components/Header/header';

import componentStyles from './blog-post.module.css';

export default ({ data }) => {  
  const post = data.markdownRemark  
  return (
    <Layout>
      <Header />
      <div className="container">  
        <header className={componentStyles.header}>
          <img src={post.frontmatter.thumbnail} alt="featured" />  
          <div className={componentStyles.text}>
            <h1>{post.frontmatter.title}</h1>   
            <p>
              {post.frontmatter.date}
            </p> 
          </div>   
        </header>      
        <div dangerouslySetInnerHTML={{ __html: post.html }} />      
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