import React, { Component } from 'react'

import Layout from '../components/layout';
import Header from '../components/Header/header';
import BooksTable from '../components/Book-Table/book-table';

import BookCase from '../images/bookcase.svg';

import componentStyles from './books-read.module.css'; 

class BooksPage extends Component {
  render() {
    return (
      <Layout>
          <Header />
          <div className={`container ${componentStyles.container}`}>
            <BooksTable />
            <BookCase className="book-case" />
          </div>
      </Layout>
    )
  }
}

export default BooksPage
