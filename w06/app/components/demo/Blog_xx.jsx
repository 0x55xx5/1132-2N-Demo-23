'use client';

import React from 'react'
import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'
import Wrapper from '@/styles/wrappers/Blog_xx';

const Blog_xx = ({ blogs}) => {
  return (
    <Wrapper>
    <section className='blogs'>
      <div className='section-title'>
        <h2>DB blogs -- Yu , 912410023</h2>
      </div>
      <div className='blogs-center'>
        {
          /*
            id int not null primary key,
  title varchar(255),
  descrip text,
  category varchar(255),
  img text,
  remote_img text
          */
          blogs?.map((blog) => {
            const { id, title,descrip, img, category,remote_img } = blog
            return (
              <article className='blog'>
              <img
                src={img}
                alt={title}
                className='img blog-img'
              />
              <div className='blog-content'>
                <span>
                  {category}
                  {category === 'lifestyle' ? (
                    <FaMugSaucer />
                  ) : category === 'travel' ? (
                    <FaGlobe />
                  ) : (
                    ''
                  )}
                </span>
                <h3>{title}</h3>
                <p>{descrip}</p>
                <a href='#'>read more</a>
              </div>
            </article>
            )
          })
        }
       
    
      </div>
    </section>
  </Wrapper>
  )
}

export default Blog_xx;
