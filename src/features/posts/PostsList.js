import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

import React from "react";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className=' max-w-6xl mx-auto'>
      <h2>Posts</h2>
      <div className='border border-black rounded'>{renderedPosts}</div>
    </section>
  );
};

export default PostsList;
