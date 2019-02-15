import React, { Component } from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';

import PuppyMember from '../components/puppy-member';

import componentStyles from './puppies-and-portfolios.module.css';

class PuppiesAndPortfoliosPage extends Component {
  render() {
    return (
      <Layout>
        <h1>Pupipes and Portfolios Hangout Club Thing</h1>
        <div className={componentStyles.info}>
          <h3>First meeting</h3>
            <p>February 10, 2019</p>
          <h3>The Why</h3>
            <p>
              This group was created to encourage and help people with creating awesome portfolios. We meet every other weekend at various locations around Portland to learn from each other and talk about designs and content. You can also get help with the code, or advice on what stack you should use to build the portfolio. We can review projects and help you decide which ones to showcase, or look at designs and give feedback. <em>I want to help you have a super cool portfolio to help you break into the tech field / advance your career!</em>
            </p>
        </div>
        <div className={componentStyles.members}>
          <p>If you have come to one or more of the events and want to show of your portfolio here, follow the steps in this <a href="https://github.com/mjordancodes/Puppies-and-Portfolio-members" target="_blank" rel="noopener noreferrer">repo</a>.</p>
          <h2>Members</h2>
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
