import React, { Component } from 'react';

import Layout from '../components/layout';

import componentStyles from './uses.module.css';

import UsesSVG from '../images/uses.svg';

class UsesPage extends Component {
  render() {
    return (
      <Layout>
        <header className={componentStyles.usesHeader}>
          <UsesSVG />
        </header>
        <div className={`container ${componentStyles.container}`}>
          <p>Decided to create a uses page inspired by <a href="https://wesbos.com/uses/" target="_blank" rel="noopener noreferrer">Wes Bos</a>. I will try and keep this updated. Last update: 02/13/19</p>
          <p>Want to know about something not listed here? Shoot me a <a href="https://twitter.com/mjordancodes" target="_blank" rel="noopener noreferrer">DM on Twitter</a>!</p>
          <p>Click a link to jump to a specific bit of my set up, or read on to see it all. The page got a little longer than originally intended. Might break it up into blog posts later on and add more things.</p>
          <ul>
            <li>
              <a href="#terminal">Terminal</a>
              <ul>
                <li><a href="#iterm">iTerm</a></li>
                <li><a href="#oh-my-zsh">Oh-My-ZSH</a></li>
                <li><a href="#homebrew">Homebrew</a></li>
                <li><a href="#terminal-bonus">Bonus</a></li>
              </ul>
            </li>
            <li>
              <a href="#editor">Editor</a>
              <ul>
                <li><a href="#vs-code">VS Code</a></li>
              </ul>
            </li>
            <li>
              <a href="#design">Design</a>
              <ul>
                <li><a href="#sketch">Sketch</a></li>
                <li><a href="#adobe">Adobe Creative Cloud</a></li>
              </ul>
            </li>
            <li>
              <a href="#other">Other Applications</a>
            </li>
            <li>
              <a href="#hardware">Hardware</a>
              <ul>
                <li><a href="#computers">Computers</a></li>
                <li><a href="#tablets">Tablets</a></li>
              </ul>
            </li>
          </ul>

          <hr />

          <h1 id="terminal">Terminal</h1>
          <p>
            The terminal was the scariest part of my journey to becoming a developer. The terminal can be intimidating at first, and for someone who came to coding from an arts background, the lack of a visual environment was really hard to wrap my head around. I spent a lot of time learning fun and usless things to make it a little less scary.
          </p>
          <h2 id="iterm">iTerm2</h2>
          <img src="/assets/iterm2.png" alt="iterm logo" />
          <p>
            I use <a href="https://www.iterm2.com/" target="_blank" rel="noopener noreferrer">iTerm2</a>. It has many features that I find super handy like spliting panes in multiple directions, and the hotkey window that lets me quickly open iterm from any screen like a visor. One of my favorite things is the ability to focus on mouse over (I don't need to actually click, just have my mouse in the right area!). I opened up the <a href="https://www.iterm2.com/features.html" target="_blank" rel="noopener noreferrer">features</a> page to write this and found a bunch of things I want to start using. 
          </p> 
          <h2 id="oh-my-zsh">Oh-My-ZSH</h2>
          <img src="/assets/oh-my-zsh.png" alt="Oh-My-ZSH logo" />
          <p>
            I use ZSH for my shell over the default Bash. I also use <a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer">Oh-My-ZSH</a> which is a framework for managing your Zsh configuration. It makes it super easy to change themes, customize my setup, and add plugins to extend what the shell can do. 
          </p>
          <p>
            I use several plugins that make my terminal life easier. I love all the alias' included with the <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git" target="_blank" rel="noopener noreferrer">git plugin</a>. I also love the <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#wd" target="_blank" rel="noopener noreferrer">wd</a> and <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#z" target="_blank" rel="noopener noreferrer">z</a> plugins for jumping around directories. WD (Warp Directory) allows you to register and l jump to custom directories in zsh, without using cd. Z is very similar, but it doesn't require you to pre-register the directories. Z keeps track of directories you frequent and allows you to jump around by using parts of the name. There are a lot more plugins that are worth checking out based on what your workflow looks like.
          </p>
          <p>
            Although Oh-My-ZSH has TONS of awesome themes that other people have built, I eventually got into creating and customizing my own themes. I've made a few themes that I occasionally switch between. You can find the code for the various <a href="https://github.com/mjordancodes/ZSH-Themes">zsh themes on my github</a>.
          </p>

          <div className={componentStyles.grid}>
            <div>
              <h3>Random Plus</h3>
              <img src="/assets/zsh-theme-randomPlus.png" alt="screenshot of my theme called random plus." />
              <p>This theme provides most the information in a single line, starting with gitbranch, then node version, my username, the machine name, and finally my current location. This was the first theme I customized. Uses lots of color.</p>
            </div>
            <div>
              <h3>Random</h3>
              <img src="/assets/zsh-theme-random.png" alt="screenshot of my theme called random." />
              <p>Deleted all the extra information I included in Random Plus and just kept the part with the randomly used emoji.</p>
            </div>
            <div>
              <h3>Magicalness</h3>
              <img src="/assets/zsh-theme-magicalness.png" alt="screenshot of my theme called magicalness." />
              <p>After going from a super long prompt to a prompt with basically nothing, I decided to ad some information back in. This theme shows the current version of node (8.9.1 in the screenshot). The current location (Dots-and-Things) is either from the home folder (~) or the root of a git folder. If you are in a git folder, a [] will show the branch name with different symbols based on if the branch is clean/dirty on the far right. On each new load of the shell, a different emoji will load.</p>
            </div>
            <div>
              <h3>Ducky</h3>
              <img src="/assets/zsh-theme-ducky.png" alt="screenshot of my theme called ducky." />
              <p>I created this theme when I started using a chromebook running Ubuntu. My emojis stopped working so I decided ASCII art was the way to go. This theme shows the current version of node (8.9.1 in the screenshot). The current location (Dots-and-Things) is either from the home folder (~) or the root of a git folder. If you are in a git folder, the end [] will show the branch name with different symbols based on if the branch is clean/dirty.</p>
            </div>
            <div>
              <h3>Taller</h3>
              <img src="/assets/zsh-theme-taller.png" alt="screenshot of my theme called taller." />
              <p>This theme shows the current location (either from the home folder or the root of the git directory). The second line is the git branch, status, and how long since the last commit. The third line is the node version.</p>
            </div>
          </div>
          
          <h2 id="homebrew">Homebrew</h2>
          <p><a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew</a> is basically how I install everything on my computer. It makes it easy to install things and not really have to worry about setting up symlinks or whatever. </p>
          <p>Homebrew pairs great with <a href="http://caskroom.io/" target="_blank" rel="noopener noreferrer">Homebrew Cask</a>. Cask allows you to install applications (like firefox) from the command line. Makes it really nice to update applications as well.</p>
          <p>Some fun things to install with homebrew:</p>
          <ul>
            <li><a href="https://robobunny.com/projects/asciiquarium/html/" target="_blank" rel="noopener noreferrer">asciiquarium</a></li>
            <li><a href="http://r-wos.org/hacks/gti" target="_blank" rel="noopener noreferrer">gti</a></li>
            <li><a href="https://github.com/mtoyoda/sl" target="_blank" rel="noopener noreferrer">sl</a></li>
            <li><a href="https://github.com/tnalpgge/rank-amateur-cowsay" target="_blank" rel="noopener noreferrer">cowsay</a> / <a href="https://medium.com/@jasonrigden/cowsay-is-the-most-important-unix-like-command-ever-35abdbc22b7f" target="_blank" rel="noopener noreferrer">(article about cowsawy)</a></li>
          </ul>

          <h2 id="terminal-bonus">Bonus</h2>
          <p><a href="https://github.com/busyloop/lolcat" target="_blank" rel="noopener noreferrer">Lolcat</a> is also a lot of fun for rainbow magic on the command line!</p>

          <hr />

          <h1 id="editor">Editor</h1>
          <p>Outside of the terminal, the IDE / text editor is my home. I spend so much time here, it has to be a place I like to be.</p>
          
          <h2 id="vs-code">Visual Studio Code</h2>
          <p>I use <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> as my main home for code writing. I've enjoyed using the Insiders build, but it hasn't been working recently so I've switched back to the normal version. I'll probably uninstall and try resetting it up eventually.</p>
          <p>I tend to switch around between a few different themes including <a href="https://marketplace.visualstudio.com/items?itemName=nopjmp.fairyfloss"  target="_blank" rel="noopener noreferrer">Fairy Floss</a>, <a href="https://marketplace.visualstudio.com/items?itemName=SintrumIT.theme-oceanic-next-italic"  target="_blank" rel="noopener noreferrer">Oceanic Next Italic</a>, and <a href="https://marketplace.visualstudio.com/items?itemName=ulthes.theme-firewatch"  target="_blank" rel="noopener noreferrer"> My Firewatch Theme</a>. I use <a href="https://github.com/tonsky/FiraCode">FiraCode</a> for my main font because the programming ligatures are amazing.</p>
          <p>I run several extensions that make life better:</p>
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

          <h1 id="design">Design</h1>
          <p>Paper and lots of fun colored markers / pens / or even a basic boring pencil. This still one of my favorite ways to work on design.</p>
          
          <h2 id="sketch">Sketch</h2>
          <p>I've used <a href="https://www.sketchapp.com/" target="_blank" rel="noopener noreferrer">Sketch</a> from time to time. It isn't a bad application for what it does, but I tend to try and make it do more and then get frustrated. It is nice for creating layouts.</p>

          <h2 id="adobe">Adobe Creative Cloud</h2>
          <p>I've been working in design since well before I ever started programming. I started learning <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">Photoshop</a> when I was in eigth grade. I enjoyed making weird photo edits for my MySpace profile picture. I started learning <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">Illustrator</a> later on, but really love it. I especially love it since I got into SVG animation.</p>

          <hr />

          <h1 id="other">Other Programs</h1>
          <ul>
            <li>I use <a href="https://flexibits.com/fantastical" target="_blank" rel="noopener noreferrer">Fantastical</a> for syncing my multiple Google calendars</li>
            <li>I use <a href="https://www.spectacleapp.com/" target="_blank" rel="noopener noreferrer">Spectacle</a> for window management. It really makes life better.</li>
            <li>I use <a href="https://meetfranz.com/" target="_blank" rel="noopener noreferrer">Franz</a> for trying to keep as many of my chat applications in the same window as possible. It might not be perfect, but it does help me remember to open all the different channels of communication I rely on.</li>
          </ul>

          <hr />
          <h1 id="hardware">Hardware</h1>

          <h2 id="computers">Computers</h2>
          <p>My main computer is a MacBook Pro 13-inch, 2016 model with an Core i5 processor and 16gb memory. It runs pretty well with all the graphics I do, but I will definitely get a better processor next time.</p>
          <p>I also have a Microsoft Surface that I picked up in 2018. This computer is the first Windows computer I have used with the Windows Linux Subsystem thing. It has definitely been a little weird to get used to, but I like it. I wanted this to be my travel / conference computer, but the form factor makes it hard to use at conferences (not good without a table to put it on).</p>
          
          <h2 id="tablets">Tablets</h2>
          <p>I have an iPad with an Apple Pencil that I really love. It has been great for notes, drawing, and reading.</p>
        </div>
      </Layout> 
    );
  }
}


export default UsesPage
