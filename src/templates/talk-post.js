import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import componentStyles from './talk-post.module.css';

export default ({ data }) => {  
  const post = data.markdownRemark  
  return (
    <Layout>
      <div className="container">  
        <header>
          <div>
            <h1>{post.frontmatter.title}</h1>   
            <p>
              {post.frontmatter.date}
            </p> 
          </div>   
        </header>      
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>Open slides in <a href={post.frontmatter.slides}>full screen</a>.</p> 
        <iframe src={post.frontmatter.slides} className={componentStyles.iframe} title={`Slides for ${post.frontmatter.title}`} />   
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
        slides
      }    
    }  
  }
`