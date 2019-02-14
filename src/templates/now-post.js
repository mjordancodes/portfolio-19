import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Header from '../components/Header/header';

import componentStyles from './blog-post.module.css';

export default ({ data }) => {  
  const now = data.markdownRemark  
  return (
    <Layout>
        <div className="container">  
            <h2>{now.frontmatter.date}</h2>
            <div>
                <h3>Learning</h3>
                <p>I am currently enjoying learning more about:</p>
                <ol>
                <li>{now.frontmatter.tech1}</li>
                <li>{now.frontmatter.tech2}</li>
                <li>{now.frontmatter.tech3}</li>
                </ol>
            </div>
            <div>
                <h3>Building</h3>
                <p>My current passion project is: <span>{now.frontmatter.personalprojecttitle}</span></p>
                <p>{now.frontmatter.personalprojectabout}</p>
            </div>
            <div>
                <h3>Working</h3>
                <p>I am a <span>{now.frontmatter.jobtitle}</span> at <span>{now.frontmatter.jobcompany}</span></p>
            </div>
            <hr />
            <div className={componentStyles.main} dangerouslySetInnerHTML={{ __html: now.html}} />
        </div>    
    </Layout>
  )
}

export const query = graphql`  
  query($slug: String!) {    
    markdownRemark(fields: { slug: { eq: $slug } }) {      
      html      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tech1
        tech2
        tech3
        personalprojecttitle
        personalprojectabout 
        jobcompany
        jobtitle
      }  
    }  
  }
`