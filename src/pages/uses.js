import React, { Component } from 'react';

import Layout from '../components/layout';
import Header from '../components/Header/header';

class UsesPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <div className="container">

          <h2>Terminal and Editor: Developer's Playground</h2>
          <p>
            I use 
            <a href="https://www.iterm2.com/" target="_blank" rel="noopener noreferrer"> iTerm2 </a> 
            as my main terminal, but also poke around in the built in terminal in 
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"> Visual Studio Code </a>, 
            my editor of choice. 
            In iTerm, I use the 
            <a href="https://github.com/mhkeller/spacegray-eighties-iterm" target="_blank" rel="noopener noreferrer"> Spacegray Eighties Dull </a>
            theme. I am also running 
            <a href="http://www.zsh.org/" target="_blank" rel="noopener noreferrer"> ZSH </a> 
            as my default shell, with 
            <a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer"> Oh My ZSH </a> 
            and 
            <a href="http://antigen.sharats.me/" target="_blank" rel="noopener noreferrer"> Antigen </a> 
            for theme and plugin management. I've written a few of my own themes which I frequently switch out. 
          </p>
          <p>
            I generally run the insiders build of
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"> Visual Studio Code</a>, 
            where I am using the 
            <a href="https://marketplace.visualstudio.com/items?itemName=ulthes.theme-firewatch"  target="_blank" rel="noopener noreferrer"> My Firewatch Theme</a>.
            I am also running several extensions that make my life easier:
          </p>
          <ul>
            <li>
              <a href="https://github.com/formulahendry/vscode-auto-rename-tag" target="_blank" rel="noopener noreferrer">
                Auto Rename Tag
              </a>
            </li>
            <li>
              <a href="https://github.com/clinyong/vscode-css-modules" target="_blank" rel="noopener noreferrer">
                CSS Modules
              </a>
            </li>
            <li>
              <a href="https://github.com/pranaygp/vscode-css-peek" target="_blank" rel="noopener noreferrer">
                CSS Peek
              </a>
            </li>
            <li>
              <a href="https://github.com/kisstkondoros/csstriggers" target="_blank" rel="noopener noreferrer">
                CSS Triggers
              </a>
            </li>
            <li>
              <a href="https://github.com/Microsoft/vscode-eslint" target="_blank" rel="noopener noreferrer">
                ESLint
              </a>
            </li>
            <li>
              <a href="https://github.com/ritwickdey/vscode-live-server" target="_blank" rel="noopener noreferrer">
                Live Server
              </a>
            </li>
            <li>
              <a href="https://github.com/vuejs/vetur" target="_blank" rel="noopener noreferrer">
                Vetur
              </a>
            </li>
            <li>
              <a href="https://github.com/MicrosoftDocs/live-share" target="_blank" rel="noopener noreferrer">
                VS Live Share
              </a>
            </li>
            <li>
              <a href="https://github.com/wakatime/vscode-wakatime" target="_blank" rel="noopener noreferrer">
                WakaTime
              </a>
            </li>
          </ul>

          <hr />
          <h2>Design</h2>
          <p>
            I do all of my illustration work, SVG design, and layout work in 
            <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer"> Adobe Illustrator</a>.
            I also spend a lot of time in
            <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer"> Adobe Photoshop </a>
            as a photographer.
          </p>
          <p>
            I used Sketch for a while and liked it, but always end up back in Adobe programs because of limitations I run into with Sketch.
          </p>


        </div>
      </Layout> 
    );
  }
}


export default UsesPage
