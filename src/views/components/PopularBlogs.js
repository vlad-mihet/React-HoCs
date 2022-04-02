import React, { useEffect, useState } from 'react'
import { getPopularBlogs } from '../../api';
import BlogsContainer from '../../components/BlogsContainer';

const PopularBlogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    setBlogs(getPopularBlogs());
  }, []);

  return (
    <BlogsContainer blogs={blogs} />
  );
};

export default PopularBlogs;
