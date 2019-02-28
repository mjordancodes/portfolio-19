import React, { Component } from 'react';
import { graphql } from "gatsby";

import Layout from '../components/layout';

import PuppyMember from '../components/puppy-member';

import componentStyles from './puppies-and-portfolios.module.css';

class PuppiesAndPortfoliosPage extends Component {
  render() {
    return (
      <Layout>
        <h1>Pupipes and Portfolios Hangout Club Thing</h1>
        <div className={componentStyles.info}>
          <h3>First Meeting</h3>
            <p>February 10, 2019</p>
          <h3>Next Meeting</h3>
            <p>March 3, 2019</p>
          <h3>About</h3>
            <p>
              This group was created to encourage and help people with creating awesome portfolios. We meet  to learn from each other and talk about designs and content. You can also get help with the code, or advice on what stack you should use to build the portfolio. We can review projects and help you decide which ones to showcase, or look at designs and give feedback. <em>I want to help you have a super cool portfolio to help you break into the tech field / advance your career!</em>
            </p>
            <p>
              You can join us on slack! --> <a href="http://bit.ly/pupsandports" target="_blank" rel="noopener noreferrer">http://bit.ly/pupsandports</a>
            </p>
        </div>
        <div className={componentStyles.members}>
          <h2>Members</h2>
          <p>If you have come to one or more of the events and want to show of your portfolio here, follow the steps <a href="https://github.com/mjordancodes/portfolio-19/blob/master/src/pages/puppy-members/README.md" target="_blank" rel="noopener noreferrer">here</a>.</p>
          <ul>
            {this.props.data.allMarkdownRemark.edges.map(member => (
              <PuppyMember 
                name={member.node.frontmatter.name}
                role={member.node.frontmatter.role}
                portfolio={member.node.frontmatter.portfolio}
                portfolioURL={member.node.frontmatter.portfolioURL}
                github={member.node.frontmatter.github}
                githubURL={member.node.frontmatter.githubURL}
                twitter={member.node.frontmatter.twitter}
                twitterURL={member.node.frontmatter.twitterURL}
              />

            ))}
          </ul>
          
        </div>
      </Layout>
    );
  }
}

export const memberListQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          layout: {
            eq: "member"
          }
        }
      },
    ) 
      {
      edges {
        node {
          frontmatter {
            name
            role
            portfolioURL
            portfolio
            githubURL
            github
            twitterURL
            twitter
          }
        }
      }
    }
  }
`


export default PuppiesAndPortfoliosPage
