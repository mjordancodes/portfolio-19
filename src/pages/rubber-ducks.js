import React, { Component } from 'react';

import Layout from '../components/layout';
import SimpleText from '../components/Simple-Text/simple-text';

class RubberDucksPage extends Component {
  render() {
    return (
      <Layout>
        <h1>Rubber Duck Debugging</h1>
        <p>If you ended up here you probably met me recently and got my card. You might have noticed my seemingly random rubber duck obsession. It is not totally random. I promise.</p>
        <p>Early on when learning to code, I learnt about something called Rubber Duck Debugging and basically thought it was the coolest thing ever. Before code school, I worked for a little over a year as a junior dev at an agency and I lost track of the number of times I would get so frustrated with a piece of code, give in and go ask one of the senior devs for help. Usually, once the senior stopped what they were doing, I'd get half way through explaining what the problem was, and then BAM! I found the issue myself.</p>
        <p>Rubber Duck Debugging dramatically cut down on the frequency with which I was approaching senior devs, and made it more likely that when I did go and ask for help, that it was a real thing I could learn from. (Not another typo, missing semi-colon, or basic logical flaw). </p>
        <p>When I meet new or early developers I like to tell them about Rubber Duck Debugging. I usually have a bag of mini ducks that I carry with me that I will give them so that they can have a duck debugging partner of their very own. Besides giving them a tool to help them debug, I find that sharing my own story of the (scary large) number of times I have asked "stupid" questions to the senior devs helps build confidence. I also like the constant reminder that everyone started at the beginning. The answer might be super obvious to me today, but it wasn't always.</p>
        <SimpleText title="What is Rubber Duck Debugging?">
          <p>The idea is this: you are writing some code and you get stuck. Maybe you have an error message you can look up, or maybe not. Maybe the code is just not doing what you expected and you can't figure out why. Enter Rubber Duck!</p>
          <h3>Steps</h3>
          <ol>
            <li>Aquire a rubber duck. 
              <br />I am always happy to help with this step. I have a bag that I carry with me in my backpack.
            </li>
            <li>Name the duck and become friends. 
              <br />This step is all about building trust.
            </li>
            <li>Explain the code at a high level. Tell the duck what the code should be doing and what it is actually doing.
              <br />Don't worry about detail at this step. This is all about setting the stage for your duck. 
            </li>
            <li>Start talking your way over the code. Go line by line and explain to your duck what each line of code is doing.
              <br />Read the code itself, don't look at your comments. Get into all the nity-grity details. Ducks love details. 
            </li>
            <li>Hopefully, by the time you reach the end of your program (or section of problematic code) you will have found the problem. You will find yourself explaining a line of code to the duck and realize that the code isn't actually written to do what you intended.
              <br />
            </li>
          </ol>
        </SimpleText>
        <SimpleText title="More Resources">
          <ul>
            <li>
              <a href="https://www.thoughtfulcode.com/rubber-duck-debugging-psychology/" target="_blank" rel="noopener noreferrer">
                Rubber Duck Debugging: The Psychology of How it Works
              </a>
            </li>
            <li>
              <a href="https://rubberduckdebugging.com/" target="_blank" rel="noopener noreferrer">
                Debugging Software with a Rubber Duck
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" target="_blank" rel="noopener noreferrer">
                Wikipedia: Rubber Duck Debugging
              </a>
            </li>
            <li>
              <a href="https://blog.codinghorror.com/rubber-duck-problem-solving/" target="_blank" rel="noopener noreferrer">
                Coding Horror: Rubber Duck Problem Solving
              </a>
            </li>
          </ul>
        </SimpleText>
      </Layout>
    );
  }
}


export default RubberDucksPage
