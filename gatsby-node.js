const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {  
    const slug = createFilePath({ node, getNode, basePath: `pages` });  createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {  
  const { createPage } = actions
  return new Promise((resolve, reject) => {    
    graphql(`      
    {        
      allMarkdownRemark {          
        edges {            
          node {              
            fields {                
              slug              
            }  
            frontmatter {
              layout
            }          
          }          
        }        
      }      
    }    
    `)
    .then(result => {      
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.layout == "blog") {
          createPage({          
            path: node.fields.slug,          
            component: path.resolve(`./src/templates/blog-post.js`),          
            context: {                       
              slug: node.fields.slug,          
            },        
          })    
        } else if (node.frontmatter.layout == "talk") {
          createPage({          
            path: node.fields.slug,          
            component: path.resolve(`./src/templates/talk-post.js`),          
            context: {                       
              slug: node.fields.slug,          
            },        
          })    
        }       
      })      
      resolve()    
    })  
  })
}