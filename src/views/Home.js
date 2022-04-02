import React from 'react'
import ArchivedBlogs from './components/ArchivedBlogs';
import PopularBlogs from './components/PopularBlogs';
import RecentBlogs from './components/RecentBlogs';

const Home = () => {
  return (
    <div className='home'>
      <section>
        <h2>Recent Blogs</h2>
        <RecentBlogs />
      </section>
      <section>
        <h2>Popular Blogs</h2>
        <PopularBlogs />
      </section>
      <section>
        <h2>Archived Blogs</h2>
        <ArchivedBlogs />
      </section>
    </div>
  );
};

export default Home;
