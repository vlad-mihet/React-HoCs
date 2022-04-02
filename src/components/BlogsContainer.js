import React from 'react'

const BlogsContainer = ({ blogs }) => {
  return (
    blogs?.map(({ id, title, content }) => (
      <div className='blog' key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    ))
  )
};

export default BlogsContainer;
