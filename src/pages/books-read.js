import React, { Component } from 'react'

import Layout from '../components/layout';
import BooksTable from '../components/Book-Table/book-table';

import BookCase from '../images/bookcase.svg';

import componentStyles from './books-read.module.css'; 

class BooksPage extends Component {
  render() {
    return (
      <Layout>
        <div className={`container ${componentStyles.container}`}>
          <BooksTable />
          <BookCase className="book-case" />
        </div>
      </Layout>
    )
  }
}

export default BooksPage
