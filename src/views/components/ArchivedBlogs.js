import React, { useEffect, useState } from 'react'
import { getArchivedBlogs } from '../../api';
import BlogsContainer from '../../components/BlogsContainer';

const ArchivedBlogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    setBlogs(getArchivedBlogs());
  }, []);

  return (
    <BlogsContainer blogs={blogs} />
  );
};

export default ArchivedBlogs;
