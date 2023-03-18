import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { useEffect } from "react";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article className='mx-20 my-6 p-4 bg-white rounded'>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
