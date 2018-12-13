import React, { Component } from 'react'
import { TimelineMax, Power0 } from 'gsap/all'; 
import { graphql } from 'gatsby';

import componentStyles from './landing-desk.module.css';

import BooksItem from '../../images/Landing-Desk/book-stack.svg';

class Books extends Component {
  render() {
    return (
      <BooksItem className={componentStyles.books} />  
    )
  }

  componentDidMount() {
    // Set Book titles/authors
    const svgBooks = [
      document.getElementById('book-top'), 
      document.getElementById('book-middle'), 
      document.getElementById('book-bottom') ]

    const recentlyRead = [
      {title: 'SVG Animations',
        author: 'Sarah Drasner'},
      {title: 'Knife of Dreams',
        author: 'Robert Jordan'},
      {title: 'Crossroads of Twilight',
        author: 'Robert Jordan'},
    ]

    for(let i = 0; i < svgBooks.length; i++) {
      let title = svgBooks[i].querySelector('[id*="title"]');
      title.textContent = recentlyRead[i].title;

      let author = svgBooks[i].querySelector('[id*="author"]');
      author.textContent = recentlyRead[i].author;

      svgBooks[i].addEventListener('click', function() {
        window.location.href = '/books-read'
      })
    }

    document.getElementById('camera').addEventListener('click', function() {
      window.location.href = 'http://threewoodenpigeons.com';
    })

  }
}

export default Books
