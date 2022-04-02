import React, { useEffect, useState } from 'react'
import { getRecentBlogs } from '../../api';
import BlogsContainer from '../../components/BlogsContainer';

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    setBlogs(getRecentBlogs());
  }, []);

  return (
    <BlogsContainer blogs={blogs} />
  );
};

export default RecentBlogs;
