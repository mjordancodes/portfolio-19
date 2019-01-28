---
date: 2019-01-19T14:27:12.001Z
title: 'Building a Website in about 3 hours at 2am (or: Why I Love Gatsby)'
thumbnail: /assets/screen-shot-2019-01-19-at-6.27.36-am.png
layout: blog
---
There is nothing new in this title. I have been building websites in about 3 hours at 2am since I started learning how to code. My favorite thing to do is get an idea at 2am and decide to build a new site and stay up all night doing it and then regretting the lack of sleep the next day. 

What is new, is that I might actually go back and look at this code and not cry hysterically. Normally when I do this, I go back to the basics and totally hand code the site using all static HTML and CSS and no fancy build tools or anything. Which is fine, but if I ever want to work on the project again, I always hate myself. Change my mind about the links? Want to add a new page? Nope! Have to go change it in like six different places (more if I am really lucky). 

[Gatsby](https://www.gatsbyjs.org/) has given me a tool that allows me to do my whole middle of the night, crazy building of a project, but it allows me to do so in a way that doesn't make me hate looking at it the next day.

## First Impressions

When I started with Gatsby a couple months ago I found that was that it was so easy! I was able to quickly create whatever weird idea poped into my head with the tools I was already familiar with. It felt like React with training wheels. All the things that I got caught up on when trying to build React projects are just handled for me. I stopped fighting with the setup. Just run \`gatsby new super-cool-project\` and off I went.

Eventually I ran into something that I couldn't solve in the default setup for Gatsby. I was a little upset, thinking I was going to have to abandon my new favorite tool and go back to something like React or even a totally static site to get all the bits I wanted working together. A few quick searches later and I discovered how to take the training wheels off. Even then, it wasn't a giant step. I was able to move beyond the default just far enough to accomplish what I had in mind without totally falling over. 

As I have continued to build projects with Gatsby I keep pushing myself to find another little thing that I can learn each time. Pushing past the default has greatly improved my relationship with React as well. I am able to learn about all the cool things you can do in React in a way that introduces me to a real world situation first for when I would need it. 

## The Tool has Tools!

Gatsby is super cool by itself, but then you discover the whole [JAMStack](https://jamstack.org/) ecosystem that is just overflowing with other tools to pair with Gatsby to make life even easier. Gatsby already has a bunch of tools built in (the [plugin library](https://www.gatsbyjs.org/plugins/) is awesome!), but maybe I want to deploy my site. And if I am deploying it, wouldn't the whole automatic publishing thing be super cool? I hate pushing a site to github to save the code, and then having to open up another process to get my code online so that I can show my cool new site to people who might want to see what I built. [Netlify](https://www.netlify.com/) to the rescue! I have never had such an easy time getting a site online, and I had never figured out how to set up automatic deployments before. Netlify makes everything super easy, and has a [handy step-by-step guide](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) for you. 

So now I have built a cool thing, and Netlify has it online for me so I can share it with the world. Maybe the super cool thing is a site I built for someone else, and that someone else isn't even a little technical. So I want to have some sort of CMS for them so that they can update content quickly (and hopefully without calling me every time they want to add a new picture). Turns out, there are a multitude of [Headless CMS](https://headlesscms.org/) options available for you to pick from. There are several different options to look at when picking one. For personal projects, I have been enjoying the git-based [Netlify CMS](https://www.netlifycms.org/) option. By using a git-based CMS, I can work from the visual GUI when I want to quickly add some new content, but I can also add new posts from within my coding environment by opening a new markdown file. The setup was fairly easy, and adding new content types is a breeze. I've also tried [Contentful](https://www.contentful.com/), which was also pretty great. Since Contentful is an API-based solution it provides with a clear seperation of content and structure which can be important. I found this to be a better solution for projects I was building for someone else. 

Turns out you can also use the CMS' you already know (and hate) like WordPress. There are a lot of posts out there about how to migrate a WordPress site to Gatsby, which is handy when you are enlisted to rebuild a site that is currently on WordPress. The non-technical team that requested this new site design/build is already familiar with WordPress, so I am able to build a new site for them in Gatsby, and then connect it to WordPress so that they can continue using the environment they are familiar with and I don't have to try and remember how to develop in WordPress PHP world. Seems like a win-win to me!

## Wrap-up

There is probably a lot more I can (and eventually will) say about Gatsby, but for now it is time to get back to writing some code. Look out for most posts on Gatsby and probably some technical hows I learnt how to do while building projects in this space.
