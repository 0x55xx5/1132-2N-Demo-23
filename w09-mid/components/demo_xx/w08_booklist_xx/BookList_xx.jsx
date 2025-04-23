'use client';

import Book_xx from './Book_xx';
import books_data from './booklist_data';

import Wrapper from '@/styles/wrappers/BookList_xx';

const BookList_xx = () => {
  console.log('books_data', JSON.stringify(books_data));
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data?.map((book) => {
          const { id, img, title, author } = book;
          return <Book_xx key={id} img={img} title={title} author={author} />;
        })}
      </section>
    </Wrapper>
  );
};

export default BookList_xx;
