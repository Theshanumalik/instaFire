import React from "react";
import SinglePost from "./SinglePost";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <SinglePost data={post} key={post.imageUrl} />
      ))}
    </div>
  );
};

export default Posts;
